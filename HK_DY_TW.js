// var 搜索关键词 = "AJ"
// var 运行时长 = 5 //单位分钟
// var 客户关键词数组 = ["aj", "AJ"]
// var 点赞概率 = 100
// var 评论概率 = 100
// var 关注概率 = 100
// var 私信概率 = 100
// var 头像点赞概率 = 100
// var 单一行为 = true
// var 留言数组 = ["1", "2"]
// var 私信数组 = ["张楠？", "李楠？"]
// var 图文直接评论 = true
// var 直接留言数组 = ["666", "sas"]


var HK_DY_TW = {}
////////////////滑块找经验

HK_DY_TW.Main = function search_Pic_Main(搜索关键词, 客户关键词数组, 运行时长, 图文直接评论, 直接留言数组, 首评回复, 首评数组, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 留言数组, 私信数组) {

    var returned= text("推荐").visibleToUser(true).untilFind()
    log("已进入抖音，开始执行任务")
    sleep(random(1000, 2000))

    
    var findExp = true
    while (findExp) {
        log("正在试图寻找经验模块,需要加载内容请稍等")
        swipeToolbar();
        var findExp = experience()

    }
    log("找到经验，点击")

    var returned = text("经验").className("android.widget.TextView").findOne(1500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到推荐");
    }


    /////////////点击搜索栏并编辑搜索
    var returned = desc(",搜索栏,连按两下来编辑").className("android.widget.TextView").findOne(1500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到符合条件的控件");
    }

    sleep(random(1000, 2000))
    /////////////
    setText(搜索关键词)
    sleep(random(1000, 2000))
    var returned = text("搜索").desc("搜索").visibleToUser(true).className("android.widget.TextView").findOne(1500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到搜索按键");
    }

    sleep(random(1000, 2000))



    /////////////////////找图文
    var returned = text("图文").className("android.widget.TextView").visibleToUser(true).clickable(false).findOne(1500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到图文按键");
    }
    //////////////////////////////进入页面开始循环

    Pic_Main(图文直接评论, 直接留言数组, 首评回复, 首评数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 运行时长)

}




function Pic_Main(图文直接评论, 直接留言数组, 首评回复, 首评数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 运行时长) {
    var Pic_array = []
    var Pic_Id
    var target_array = []/////还没点击的目标数组
    var loopVar1 = true
    let startTime = new Date().getTime();
    let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
    ////计时操作
try{
    while (loopVar1) {
        sleep(random(1000, 2000))
        ////循环1 找图文之后swipe到下面，直到while循环结束

        var returned = className("android.view.ViewGroup").visibleToUser(true).clickable(false).indexInParent(3).find();
        var tw_list = returned.filter(item => item && item.children() && item.children()[0] && item.children()[0].className() == "android.widget.TextView")

        if (tw_list.length > 0) {

            for (var i1 = 0, len1 = tw_list.length; i1 < len1; i1++) {
                console.log("当前找到" + len1 + "个相关图文,将对行第" + (i1 + 1) + "个图文进行获客");
                var returned = tw_list[i1];
                ////防止重复进入
                Pic_Id = returned.children().filter(item => item && item.className() == "android.widget.TextView")[0].text().substring(0, 8)
                if (!Pic_array.includes(Pic_Id)) {
                    Pic_array.push(Pic_Id)
                    log("找到了新的图文,ID为" + Pic_Id)
                    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));


                    sleep(random(1000, 2000))
                    //////////进入了图文详细页面开始获客
                    swipeAction()



                    if (首评回复) {
                        var returned = className("androidx.recyclerview.widget.RecyclerView").findOne(1000);

                        var commentList = returned.children().filter(item => item && item.visibleToUser() == true && item.desc() !== null);
                        var first_comment = commentList[0]
                        if (first_comment) {
                            comment_action(first_comment, 首评数组)
                            log("首评已回复")
                        }
                        else { log("首评不存在") }
                    }
                    sleep(random(1000, 2000))
                    if (图文直接评论) {
                        var returned = className("android.widget.EditText").findOne(500);
                        if (returned) {
                            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                            sleep(500);
                        }
                        var randomIndex = Math.floor(Math.random() * 直接留言数组.length); // 生成一个随机索引
                        var randomText = 直接留言数组[randomIndex]
                        sleep(random(1000, 2000))
                        setText(randomText)
                        sleep(random(1000, 2000))

                        var returned = text("发送").visibleToUser(true).className("android.widget.TextView").findOne(500);

                        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                        sleep(500);

                        log("图文直接评论成功")
                    } else { log("未开启图文直接评论功能") }

                    ////获客大循环
                    var keyVariable = true
                    while (keyVariable&&loopVar1) {

                        customer_searching(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, target_array)
                        swipeAction()
                        var keyVariable = find_bottom()
                        var currentTime = new Date().getTime();
                        var loopVar1 = bigloop(currentTime, startTime, timerDuration)
                        log(currentTime-startTime-timerDuration)
                        log(loopVar1)
                        var folder = text("已折叠部分评论").className("android.widget.TextView").visibleToUser(true).findOne(1000);
                        if (folder) {
                            log("有折叠评论,正在打开")
                            folder.parent().children()[1].click()
                        } else {
                            log("没有折叠评论");
                        }


                    }

                    ////当一组商户任务结束后退出到商户所有页面去
                    back()
                    sleep(random(1000, 2000))
                }
                else {
                    log("该图文已经被访问过，跳过")
                    sleep(1000)
                }
                if(loopVar1==false){break;}
            };
        } else {
            toastLog("此页面无图文控件");
        }



        ////下滑找人

        swipeAction()
        var currentTime = new Date().getTime();
        var loopVar1 = bigloop(currentTime, startTime, timerDuration)

    }
    log("时间到，结束任务")
}
catch(e){
    log(e+"程序进行时出错,跳出任务")
}
    log("共找到" + Pic_array.length + "个相关图文")
    log("共对" + target_array.length + "个目标客户进行曝光")
    home()


}



function customer_searching(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, target_array) {

    ///根据评论筛选
    var returned = className("androidx.recyclerview.widget.RecyclerView").findOne(1000);

    var commentList = returned.children().filter(item => item && item.visibleToUser() == true && item.desc() !== null);
    for (var i2 = 0, len2 = commentList.length; i2 < len2; i2++) {

        var comment = commentList[i2]
        if (comment) {
            if (客户关键词数组.some(item => comment.desc().includes(item))) {
                var target = comment
                ////判断重复
                var target_id = target.desc().substring(0, 8)
                if (!target_array.includes(target_id)) {
                    target_array.push(target_id)
                    log(target.desc())
                    action_Set(target, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 留言数组, 私信数组)
                    sleep(1000 + random(500, 1500))
                }

                ////操作完更新一下数组//防止评论导致
                var returned = className("androidx.recyclerview.widget.RecyclerView").findOne(1000);
                var commentList_check = returned.children().filter(item => item && item.visibleToUser() == true && item.desc() !== null);
                ////用一个check来和之前的对比,如果不一样就更新并且i-1
                if (commentList_check[0].desc() !== commentList[0].desc()) {
                    log("组件发生变化,重置")
                    var commentList = commentList_check
                    var i2 = i2 - 1

                } else {
                    log("组件未发生变化")

                }
                sleep(random(500, 1500))

            } else {
                log("当前评论不包含客户关键词")
                sleep(500)/////////////这里可以搞速度设置

            }
        }
        else { log("当前comment为空,跳过") }

    }
}


function action_Set(target, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 留言数组, 私信数组) {               ////如果单一模式打开只会进行曝光行为的一种
    if (单一行为) {
        probArray = [点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率];
        let sum = probArray.reduce((a, b) => a + b, 0);

        let 评论概率_new = 评论概率 / sum
        let 点赞概率_new = 点赞概率 / sum
        let 关注概率_new = 关注概率 / sum
        let 私信概率_new = 私信概率 / sum
        let 头像点赞概率_new = 头像点赞概率 / sum
        let obj = { "点赞": 点赞概率_new, "评论": 评论概率_new, "关注": 关注概率_new, "私信": 私信概率_new, "头像点赞": 头像点赞概率_new }
        let obj_entr = Object.entries(obj)
        probArray_new = [点赞概率_new, 评论概率_new, 关注概率_new, 私信概率_new, 头像点赞概率_new];
        probArray_new_sorted = probArray_new.sort(function (a, b) { return a - b });

        var finalAction = simulateEvent(probArray_new_sorted, obj_entr)
        switch (finalAction) {
            case "点赞":
                likes_action(target)
                break;
            case "评论":
                comment_action(target, 留言数组)
                break;
            case "关注":
                follow_action(target)
                break;
            case "私信":
                DM_action(target, 私信数组)
                break;
            case "头像点赞":
                profile_likes_action(target)
                break;
            default:
                break;
        }

    }

    else {

        ///////////////////////////////////////////////////曝光行为////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////点赞///////////////////////////////////////////
        //29.40的喜欢组件是个linearLayout 筛选LinearLayout
        if (randomProbability(点赞概率)) {
            likes_action(target)
            log("已进行点赞")
        }
        else { log("未进行点赞") }
        /////////////////////////////////关注////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(关注概率)) {
            follow_action(target)
            log("已进行关注")

        }
        else { log("未进行关注") }
        /////////////////////////////////头像点赞////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(头像点赞概率)) {
            profile_likes_action(target)

        } else {
            log("未进行头像")
        }
        /////////////////////////////////关注并私信////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(私信概率)) {
            DM_action(target, 私信数组)
            log("已进行私信")
        }
        else { log("未进行私信行为") }
        /////////////////////////////////评论////////////////////////////////////////
        if (randomProbability(评论概率)) {
            comment_action(target, 留言数组)
            log("已进行评论")
        }
        else { log("未进行评论") }


    }
}









///////行为函数最后都返回商户的评论区
function likes_action(target) {
    ////建立在喜欢在ViewGroup 下的第四个组件
    ////2024.7.26,30.7版本是第二个子控件的第6个的第一个
    try{var like_button = target.children()[1].children().filter(item => item && item.className()
        == "android.widget.LinearLayout" && item.visibleToUser() == true)[1].children()[0]



    if (like_button) {
        click(like_button.bounds().centerX() + random(-5, 5), like_button.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到点赞按键");
    }}
    catch(e){log(e+"未找到点赞按钮")}

}

function comment_action(target, 留言数组) {    
    if (target) {
        try{
        sleep(random(1000, 2000))
        click((device.width*0.67), target.bounds().centerY() + random(-5, 5));
        sleep(1500);}
        catch(e){log(e+"未能评论")}
        var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
        var randomText = 留言数组[randomIndex



        ]
        setText(randomText)
        sleep(500 + random(1000, 2000))

        var returned = text("发送").className("android.widget.TextView").visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("未找到发送键");

        }



    } else {
        toastLog("未找到评论");
    }






}

function follow_action(target) {////成立前提是target下子控件的第一个子控件是头像
    try { var image = target.children()[1].children().filter(item => item.desc() && item.desc().includes("的头像"))[0] }
    catch (e) { log(e + "未找到头像,未能成功关注") }
    if (image) {
        click(image.bounds().centerX() + random(-5, 5), image.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到头像点击进入主页");
    }
    ///////进入主页老三样
    var returned = desc("更多").visibleToUser(true).className("android.widget.ImageView").findOne(2000)
    if (returned) {
        log("已进入个人页")
        sleep(random(1000, 2000))
        var returned = text("关注").className("android.widget.TextView").visibleToUser(true).clickable(true).findOne(2500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
            back();
            sleep(1000 + random(500, 1500))
            ///关注点击后可能有问你是谁的问题，此时多退出一次
          if(desc("清除").className("android.widget.Button").visibleToUser(true).exists()){
            log("检测到回答问题框架")
            sleep(500)
            back()
            sleep(1000 + random(500, 1500))
          }



        } else {
            log("未能成功关注或者是已关注的人");
            back();
            sleep(1000 + random(500, 1500))
        }
    } else if (text("编辑资料").visibleToUser(true).exists()) {
        log("进入自己的页面准备退出")
        back()
        sleep(random(500, 1500))
    }
    else if (desc("踩,未选中").visibleToUser(true)) {
        log("没能进入个人页")
    } else { log("未知错误") }



}

function profile_likes_action(target) {
    var image = target.children()[1].children().filter(item => item.desc() && item.desc().includes("的头像"))[0]
    if (image) {
        click(image.bounds().centerX() + random(-5, 5), image.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到头像点击进入主页");
    }
    ///////进入主页老三样 
    textContains("抖音号").className("android.widget.TextView").untilFind()
    sleep(random(1000, 2000))

    var returned = desc("用户头像").className("android.widget.ImageView").clickable(true).visibleToUser(true).findOne();
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500 + random(1000, 2000));
        var returned = text("点赞").className("android.widget.TextView").clickable(false).visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
            back()
            sleep(1000 + random(800, 1500))
            back()
        } else {
            log("未找到头像点赞");
            sleep(500);
            back()
            sleep(1000 + random(800, 1500))
            back()
        }

    } else {
        log("没能找到用户主页头像");
    }

}
/////遇到隐私账号会出bug
function DM_action(target, 私信数组) {
    try{var image = target.children()[1].children().filter(item => item.desc() && item.desc().includes("的头像"))[0]
    }
    catch (e) { log(e + "未找到头像,未能成功发送私信") }
        if (image) {
        click(image.bounds().centerX() + random(-5, 5), image.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到头像点击进入主页");
    }
    ///////进入主页老三样
    sleep(random(1000, 2000))
    var returned = desc("更多").visibleToUser(true).className("android.widget.ImageView").findOne(2000)
    if (returned) {
        var returned = desc("更多").className("android.widget.ImageView").findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(random(1000, 2000))

            var returned = text("发私信").className("android.widget.TextView").visibleToUser().findOne(500);
            if (returned) {
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(random(1000, 2000))
                sleep(1000 + random(500, 1500))
                var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
                var randomText = 私信数组[randomIndex]
                setText(randomText)
                sleep(1000 + random(500, 1500))
                var returned = desc("发送").className("android.widget.ImageView").visibleToUser(true).clickable(true).longClickable(true).findOne(1000);
                if (returned) {
                    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                    sleep(500);
                    log("私信发送成功")
                    sleep(1000 + random(500, 1500))
                    back()
                    sleep(1000 + random(500, 1500))
                    back()
                    sleep(1000 + random(500, 1500))

                } else {
                    toastLog("未找到私信发送");
                }





            }


        } else {
            log("未找到更多来私信");
            back()
        }

    }
    else if (text("编辑资料").visibleToUser(true).exists()) {
        log("进入自己的页面准备退出")
        back()
        sleep(random(500, 1500))
    } else if (desc("踩,未选中").visibleToUser(true)) { log("没能进入个人页") }
    else { log("未知错误") }


}



//////////单一行为模式模拟
function simulateEvent(probArray_new_sorted, obj_entr) {

    // 生成一个[0, 1)范围内的随机数
    let randomNum = Math.random();

    // 根据概率分配区间判断哪个事件发生
    if (randomNum < probArray_new_sorted[0]) {
        midA = obj_entr.filter(item => item[1] == probArray_new_sorted[0])
        var randomIndex = Math.floor(Math.random() * midA.length); // 生成一个随机索引
        var conductA = midA[randomIndex][0]
        return (conductA)




    } else if (randomNum < probArray_new_sorted[0] + probArray_new_sorted[1]) {
        midB = obj_entr.filter(item => item[1] == probArray_new_sorted[1])
        var randomIndex = Math.floor(Math.random() * midB.length); // 生成一个随机索引
        var conductB = midB[randomIndex][0]
        return (conductB)

    } else if (randomNum < probArray_new_sorted[0] + probArray_new_sorted[1] + probArray_new_sorted[2]) {
        midC = obj_entr.filter(item => item[1] == probArray_new_sorted[2])
        var randomIndex = Math.floor(Math.random() * midC.length); // 生成一个随机索引
        var conductC = midC[randomIndex][0]
        return (conductC)

    } else if (randomNum < probArray_new_sorted[0] + probArray_new_sorted[1] + probArray_new_sorted[2] + probArray_new_sorted[3]) {
        midD = obj_entr.filter(item => item[1] == probArray_new_sorted[3])
        var randomIndex = Math.floor(Math.random() * midD.length); // 生成一个随机索引
        var conductD = midD[randomIndex][0]
        return (conductD)

    } else {
        midE = obj_entr.filter(item => item[1] == probArray_new_sorted[4])
        var randomIndex = Math.floor(Math.random() * midE.length); // 生成一个随机索引
        var conductE = midE[randomIndex][0]
        return (conductE)


    }
}





//概率函数
function randomProbability(probability) {
    return Math.random() * 100 < probability;
}


function find_bottom() {
    if (text("暂时没有更多了").className("android.widget.TextView").visibleToUser(true).exists()) {
        return false
    } else { return true }
}




function swipeAction() {
    var X1 = device.width / 2; // 起始点X坐标，屏幕宽度的一半
    var Y1 = (device.height / 1.5) + random(-10, 10); // 起始点Y坐标，屏幕高度的一半
    var X2 = X1; // 结束点X坐标，向左滑动300像素
    var Y2 = random(5, 20); // 结束点Y坐标保持不变
    var duration1 = random(0.5, 0.8) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(3000);

}




function bigloop(currentTime, startTime, timerDuration) {
    if ((currentTime - startTime) >= timerDuration) { return false }
    else { return true }
}



function swipeToolbar() {
    ////确保进入抖音主页是推荐
    var returned = text("推荐").className("android.widget.TextView").findOne(2500);
    var Y1 = returned.bounds().centerY() + random(-5, 5)
    var Y2 = Y1
    var X1 = device.width / 5
    var X2 = device.width * 0.8
    var duration1 = random(0.3, 0.5) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(3000);


}

function experience() {
    if (text("经验").visibleToUser(true).className("android.widget.TextView").exists()
    ) { return false }
    else { return true }
}






module.exports = HK_DY_TW
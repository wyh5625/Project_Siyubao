
var HK_DY_module_JL = {}
var target
// var 运行时长 = 3
// var 排序依据 = "最新发布"
// var 发布时间 = "一天内";
// var 视频时长 = "1分钟以下";
// var 搜索范围 = "不限";
// var 内容形式 = "图文";
var clip_array = []
var target_array = []
// var keyWord_array = [" "]
// var 关键词内容 = "创业123"
// var 点赞概率 = 100
// var 评论概率 = 100
// var 关注概率 = 100
// var 私信概率 = 100
// var 头像点赞概率 = 100
// var 单一行为 = true //是否只执行一次
// var 留言数组 = ["1", "1"]
// var 私信数组 = ["李楠？", "张楠？"]
// var 视频直接留言 = false //是否开启视频直接留言功能
// var 视频直接留言数组 = ["码住"]
// var 首评回复 = false //是否开启首评回复功能
// var 首评数组 = ["确实"]
var clip_array = []
var target_array = []

    // (内容形式, 排序依据, 发布时间, 视频时长, 作品关键词, 运行时长, 搜索范围, 视频直接留言, 视频直接留言数组, 首评回复,
    //     keyWord_array, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 评论数组, 私信数组)
    ;


HK_DY_module_JL.Main = function DY_mod1_Main(运行时长,
    作品关键词, 排序依据, 内容形式, 发布时间, 视频时长, 搜索范围, keyWord_array,
    首评回复, 首评数组, 视频直接留言, 视频直接留言数组, 单一行为,
    点赞概率, 头像点赞概率, 评论概率, 评论数组, 关注概率, 私信概率, 私信数组) {

    var returned = text("推荐").visibleToUser(true).untilFind()
    log("已进入抖音，开始执行任务")
    sleep(1000 + random(500, 1000))
    ///打开搜索/////30.7版本
    var returned = desc("搜索").className("android.widget.Button").visibleToUser(true).clickable(true).untilFind()[0];


    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
    sleep(1000 + random(500, 1000))



    ///关键字搜索
    setText(作品关键词);
    sleep(1000 + random(500, 1000))

    var returned = text("搜索").desc("搜索").className("android.widget.TextView").findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("输入文字后搜索无法点击,undefined");
    }
    sleep(700 + random(500, 1000))
    ///filter

    ////
    Dy_filter(内容形式, 排序依据, 发布时间, 视频时长, 搜索范围)
    sleep(700 + random(500, 1000))


    /////////////////////////////////搜索和筛选后结束找视频/////////////////////////////////////

    var loopVar1 = true ///////时间为基础的大循环
    let startTime = new Date().getTime();
    let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒

    while (loopVar1) {


        try {
            var returned = desc("视频封面").className("android.view.View").visibleToUser(true).findOne(1000);
            var clip_text = returned.parent().parent().parent().children().filter(item => item && item.className() == "android.widget.TextView")[0]
        } catch (e) {
            log("发生错误应该是未找到视频封面控件")
            log(e)
        }


        ////【判断是否存在，要不然直接跳过
        if (returned && clip_text) {
            log("找到视频封面控件")
            var clip_Id = clip_text.text().substring(0, 8)
            //////避免重复进入/////
            if (!clip_array.includes(clip_Id)) {
                log("进入新视频")

                /////点击该视频
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(random(1500, 2000));
                if (desc("插入图片").className("android.widget.ImageView").clickable(true).visibleToUser(true).exists()) {
                    clip_array.push(clip_Id)
                    log("成功进入视频，开始执行曝光任务")
                    sleep(random(1500, 2000))
                    /////执行获客任务，此时页面在视频页面要点击进入评论区
                    /////点击进入评论区截流
                    var returned = descContains("评论").className("android.widget.LinearLayout").clickable(true).visibleToUser(true).indexInParent(0).findOne(500);

                    if (returned) {
                        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                        sleep(500);
                    } else {
                        toastLog("未找到评论控件");
                    }
                    sleep(random(1500, 2000))
                    customer_searching(视频直接留言, 视频直接留言数组, 首评回复, 首评数组,
                        keyWord_array, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 评论数组, 私信数组, target_array, startTime, timerDuration)


                    sleep(random(1500, 2000))
                    /////任务结束,结束任务后从评论区返回视频页面
                    back()
                    sleep(random(1500, 2000))
                    /////返回视频搜索结果
                    back()
                    sleep(random(1500, 2000))

                    log("单次任务结束，返回视频列表")

                }
                else if (text("综合").className("android.widget.Button").visibleToUser(true).exists()) { log("未能成功进入新视频，当前还在搜索结果页") }

                else {

                    log("未能识别进入视频,可能是广告页跳入直接私信，退出两次回到视频搜索结果")
                    // sleep(1000)
                    // back()
                    // sleep(1000)
                    // back()
                    // sleep(1000)
                }

            }

            else { log("已经在数组中,跳过") }
        }
        else { log("当前无可点击视频，将下滑到下一个视频") }

        /////到此应该在视频搜索结果内，往下翻和循环/
        swipeAction()
        var currentTime = new Date().getTime();
        var loopVar1 = bigloop(currentTime, startTime, timerDuration)

    }

    toastLog("任务结束,本次共触达" + target_array.length + "个用户")
    home()
}






function swipeAction() {
    var X1 = device.width / 2; // 起始点X坐标，屏幕宽度的一半
    var Y1 = (device.height * 0.8) + random(-10, 10); // 起始点Y坐标，屏幕高度的一半
    var X2 = X1; // 结束点X坐标，向左滑动300像素
    var Y2 = random(50, 100); // 结束点Y坐标保持不变
    var duration1 = random(0.4, 0.6) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(2000);

}



function bigloop(currentTime, startTime, timerDuration) {
    if ((currentTime - startTime) >= timerDuration) { return false }
    else { return true }
}






function customer_searching(视频直接留言, 视频直接留言数组, 首评回复, 首评数组,
    keyWord_array, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 评论数组, 私信数组, target_array, startTime, timerDuration) {



    sleep(1000 + random(500, 1000))
    ////////判断有无评论/////////////////
    if (text("暂无评论").className("android.widget.TextView").exists()) { back() }
    else {
        ///////////////////////视频直接留言功能

        if (首评回复) {


            var returned = className("androidx.recyclerview.widget.RecyclerView").findOne(1000);
            var commentList = returned.children().filter(item => item && item.visibleToUser() == true && item.desc() !== null);
            var first_comment = commentList[0]

            if (first_comment) {
                click(first_comment.bounds().centerX() + random(-5, 5), first_comment.bounds().centerY() + random(-5, 5));
                sleep(500 + random(500, 1000));
                var randomIndex = Math.floor(Math.random() * 首评数组.length); // 生成一个随机索引
                var randomText = 首评数组[randomIndex]
                setText(randomText)
                sleep(1500 + random(500, 1000))

                var returned = textContains("发送").className("android.widget.TextView").clickable(false).visibleToUser(true).findOne(1500);

                if (returned) {
                    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                    sleep(500);
                } else {
                    log("未能点击发送,并发送行动返回留言区");
                    back()

                }
                log("首评回复完成")
            } else {
                log("未点击评论框");
            }




        }
        else { log("首评回复功能关闭") }


        sleep(random(1000, 2000))
        if (视频直接留言) {
            var randomIndex = Math.floor(Math.random() * 视频直接留言数组.length); // 生成一个随机索引
            var randomText = 视频直接留言数组[randomIndex]
            sleep(1000)
            var returned = classNameContains("android.widget.EditText").checked(false).selected(false).enabled(true).untilFind();
            returned.click()

            setText(randomText)

            sleep(2000)


            var returned = text("发送").classNameContains("android.widget.TextView").clickable(false).visibleToUser(true).enabled(true).untilFind()[0];
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));

            sleep(2000)
            log("视频直接留言已评论")
        }
        else { log("视频直接留言功能关闭") }


        sleep(random(1000, 2000))

        //////////////这里while循环

        var loopVar2 = true
        var loopVar1 = true
        while (loopVar2 && loopVar1) {
            ////////////////评论区截流曝光
            var returned = className("androidx.recyclerview.widget.RecyclerView").findOne(1000);
            var commentList = returned.children().filter(item => item && item.visibleToUser() == true && item.desc() !== null);
            for (var i2 = 0, len2 = commentList.length; i2 < len2; i2++) {

                var comment = commentList[i2]

                if (comment) {
                    if (keyWord_array.some(item => comment.desc().includes(item))) {
                        target = comment
                        ////判断重复
                        var target_id = target.desc().substring(0, 8)
                        if (!target_array.includes(target_id)) {
                            target_array.push(target_id)
                            // log(target)
                            action_Set(target, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 评论数组, 私信数组)
                            sleep(1000 + random(500, 1500))
                        }

                        ////操作完更新一下数组//防止评论导致
                        var returned = className("androidx.recyclerview.widget.RecyclerView").findOne(1000);
                        var commentList_check = returned.children().filter(item => item && item.visibleToUser() == true && item.desc() !== null);
                        ////用一个check来和之前的对比,如果不一样就更新并且i-1
                        if (commentList_check[0].desc() !== commentList[0].desc()) {
                            // log("组件发生变化,重置")
                            var commentList = commentList_check
                            var i2 = i2 - 1

                        } 
                        // else {
                        //     // log("组件未发生变化")

                        // }
                        sleep(random(500, 1500))

                    } else {
                        log("当前评论不包含客户关键词")
                        sleep(500)/////////////这里可以搞速度设置

                    }
                }
                else { log("当前comment为空,跳过") }

            }

            sleep(random(1000, 2000))
            swipeAction()
            sleep(random(500, 1000))
            ///划完后commentList不变化则跳出循环

            var loopVar2 = find_bottom(commentList)
            var currentTime = new Date().getTime();
            var loopVar1 = bigloop(currentTime, startTime, timerDuration)
            // log(currentTime - startTime - timerDuration)
        }


    }

}








function find_bottom(commentList) {
    var returned = className("androidx.recyclerview.widget.RecyclerView").findOne(1000);
    var commentList_after = returned.children().filter(item => item && item.visibleToUser() == true && item.desc() !== null);
    // log(commentList_after)
    // log(commentList)
    if (commentList_after[0].desc() === commentList[0].desc()
    ) {
        return false
    } else { return true }
}



function action_Set(target, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 评论数组, 私信数组) {               ////如果单一模式打开只会进行曝光行为的一种
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
                log("执行点赞行为")
                likes_action(target)
                break;
            case "评论":
                log("执行评论行为")
                comment_action(target, 评论数组)
                break;
            case "关注":
                log("执行关注行为")
                follow_action(target)
                break;
            case "私信":
                log("执行私信行为")
                DM_action(target, 私信数组)
                break;
            case "头像点赞":
                log("执行头像点赞行为")
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
            log("已执行点赞行为")
        }
        else { log("未进行点赞") }


        /////////////////////////////////关注////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(关注概率)) {
            follow_action(target)
            log("已执行关注行为")

        }
        else { log("未进行关注") }
        /////////////////////////////////头像点赞////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(头像点赞概率)) {
            profile_likes_action(target)
        } else {

        }
        /////////////////////////////////私信////////////////////////////////////////
        if (randomProbability(私信概率)) {
            DM_action(target, 私信数组)
            log("已执行私信行为")
        }
        else { log("未进行私信行为") }

        /////////////////////////////////评论////////////////////////////////////////
        if (randomProbability(评论概率)) {
            comment_action(target, 评论数组)
            log("已执行评论行为")
        }
        else { log("未进行评论") }
    }
}









///////行为函数最后都返回商户的评论区

function likes_action(target) {
    ////建立在喜欢在ViewGroup 下的第四个组件
    ////2024.7.26,30.7版本是第二个子控件的第6个的第一个
    try {
        var like_button = target.children()[1].children().filter(item => item && item.className()
            == "android.widget.LinearLayout" && item.visibleToUser() == true)[1].children()[0]
    }

    catch (error) { log(error) }



    if (like_button) {
        click(like_button.bounds().centerX() + random(-5, 5), like_button.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到点赞按键");
    }

}


function comment_action(target, 评论数组) {

    if (target) {
        sleep(random(1000, 2000))
        click(target.bounds().centerX() + random(-5, 5), target.bounds().centerY() + random(-5, 5));
        sleep(1500);
        var randomIndex = Math.floor(Math.random() * 评论数组.length); // 生成一个随机索引
        var randomText = 评论数组[randomIndex]
        setText(randomText)
        sleep(500 + random(500, 2000))

        var returned = text("发送").className("android.widget.TextView").visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500 + random(500, 2000))
        } else {
            toastLog("未找到发送键");

            sleep(1000 + random(500, 1500))


        }



    } else {
        toastLog("未找到评论");
    }

}


function follow_action(target) {////成立前提是target下子控件的第一个子控件是头像
    try {
        var image = target.children()[1].children().filter(item => item.desc() && item.desc().includes("的头像"))[0]
    }
    catch (error) { log(error + "关注任务未发现用户头像") }
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
        // log("已经入个人页")
        var returned = text("关注").className("android.widget.TextView").visibleToUser(true).clickable(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
            back();
            sleep(1000 + random(500, 1500))
            ///关注点击后可能有问你是谁的问题，此时多退出一次
            if (desc("清除").className("android.widget.Button").visibleToUser(true).exists()) {
                log("检测到回答问题框")
                sleep(2500)
                back()
                sleep(1000 + random(500, 1500))
                back()
                sleep(500)
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
    else if (textContains("条评论").className("android.widget.TextView").visibleToUser(true)) {
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

    sleep(random(1000, 2000))
    var returned = desc("更多").visibleToUser(true).className("android.widget.ImageView").findOne(2000)
    if (returned) {
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
    } else { log("没能进入个人页") }

}
/////遇到隐私账号会出bug

function DM_action(target, 私信数组) {
    try { var image = target.children()[1].children().filter(item => item.desc() && item.desc().includes("的头像"))[0] }
    catch (error) { log(error + "私信任务未发现用户头像") }
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
    } else if (textContains("条评论").className("android.widget.TextView").visibleToUser(true)) { log("没能进入个人页") }
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





function Dy_filter(内容形式, 排序依据, 发布时间, 视频时长, 搜索范围) {
    desc("筛选，按钮").className("android.view.ViewGroup").visibleToUser(true).untilFind();
    var returned = desc("筛选，按钮").className("android.view.ViewGroup").visibleToUser(true).findOne(1000);

    if (returned) {
        click(returned.bounds().centerX() + random(-1, 1), returned.bounds().centerY() + random(-3, 3));
        sleep(500);
    } else {
        toastLog("未找到筛选图标");
    }


    sleep(500 + random(200, 500))
    auto.setWindowFilter(function () {
        return true;
    });

    sleep(500 + random(300, 500))


    ////////////////筛选
    ///排序依据
    var returned = text(排序依据).className("android.widget.TextView").visibleToUser(true).clickable(false).findOne(500);

    if (returned) {
        log(排序依据)
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到符合条件的控件");
    }
    sleep(random(300, 800))

    ///发布时间
    log(发布时间)
    if (发布时间 == "不限") {
        var returned = text("不限").className("android.widget.TextView").visibleToUser(true).clickable(false).find()[0];

        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("未找到发布时间的不限,returned为空值");
        }
    }
    else {
        var returned = text(发布时间).className("android.widget.TextView").visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("发布时间设置失败");
        }
    }
    sleep(random(300, 800))
    ///视频时长
    log(视频时长)
    if (视频时长 == "不限") {
        var returned = text("不限").className("android.widget.TextView").visibleToUser(true).clickable(false).find()[1];

        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("未找到视频时长的不限,returned为空值");
        }
    }
    else {
        var returned = text(视频时长).className("android.widget.TextView").visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("视频时长设置失败");
        }
    }


    ///搜索范围
    log(搜索范围)
    if (搜索范围 == "不限") {
        var returned = text("不限").className("android.widget.TextView").visibleToUser(true).clickable(false).find()[2];

        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("未找到搜索范围的不限,returned为空值");
        }
    }
    else {
        var returned = text(搜索范围).className("android.widget.TextView").visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("搜索范围设置失败");
        }
    }


    ///内容形式
    log(内容形式)
    if (内容形式 == "不限") {
        var returnedList = text("不限").className("android.widget.TextView").visibleToUser(true).clickable(false).find();
        returned = returnedList[3]
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("未找到内容形式的不限,returned为空值");
        }
    }
    else {
        var returned = text(内容形式).className("android.widget.TextView").visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("内容形式设置失败");
        }
    }


    ////点击搜索
    var returned = text("搜索").desc("搜索").className("android.widget.TextView").findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("筛选后搜索无法点击");
    }

}



module.exports = HK_DY_module_JL
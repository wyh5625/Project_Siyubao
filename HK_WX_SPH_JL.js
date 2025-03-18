///////视频号获客
//////wx附件的人获客
////////////////24.7.21此功能未打包和测试
// var 搜索关键词 = "推荐的AJ"
// var 运行时长 = 4
// var 直接评论 = false
// var 直接留言数组 = ["码住"]
// var 客户关键词数组 = [""]
// var 点赞概率 = 100
// var 评论概率 = 0
// var 关注概率 = 0
// var 私信概率 = 0
// var 单一行为 = false
// var 留言数组 = ["1", "1111"]
// var 私信数组 = ["张楠?", "李楠？"]
var uid_array = []
var content_array = []

var HK_WX_SPH = {}
/////////////////////////////打开sph和搜索////////////////////////////////////////
///////步骤1：打开微信进入视频号
HK_WX_SPH.Main = function WX_SPH_Main(搜索关键词,运行时长,首评回复,首评数组,直接评论, 直接留言数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 单一行为, 留言数组, 私信数组) {
    start_search(搜索关键词)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    sleep(1000+random(500,1000))
    ///////////步骤2:大循环时间函数,循环子内容:找到视频然后循环
    let startTime = new Date().getTime();
    let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
    var loopVar1 = true
    while (loopVar1) {
        /////通过视频时长存在":"和indexInParent筛选视频
        var returnedList1 = textContains(":").className("android.view.View").clickable(true).visibleToUser(true).indexInParent(0).find();

        if (!returnedList1.empty()) {

            for (var i1 = 0, len1 = returnedList1.length; i1 < len1; i1++) {
                console.log("当前找到" + len1 + "个相关视频,将对行第" + (i1 + 1) + "个进行获客");
                var target_content = returnedList1[i1]
                var target_content_text = returnedList1[i1].text().substring(5, 14)
                if (content_array.includes(target_content_text)) { log("重复内容跳过") }
                else {
                    content_array.push(target_content_text)

                    target_content.click()
                    log("已点击进入视频，如果未成功进入视频,此处会等待至视频出现")
                    desc("浮窗").className("android.widget.FrameLayout").untilFind();
                    sleep(500+random(1000, 2000));
                    ////步骤3:点击进入单个视频开始获客
                    ////打开评论区
                    var returned = className("android.widget.LinearLayout").clickable(true).longClickable(true).visibleToUser(true).findOne(1000);
                    var target = returned.parent().children()[3]
                    target.click()
                    /////功能1.评论区直接留言
                    sleep(1000+random(1000, 2000))
                    if(首评回复){
                       try{ var returnedx = className("android.widget.TextView").indexInParent(0).visibleToUser(true).clickable(false).find();
                        var commentList = returnedx.filter(item => item && item.text !== null && item.parent().className() === "android.widget.RelativeLayout")
                        var first_comment = commentList[0]}
                        catch(e){log(e+"未找到首评控件")}
                        if(first_comment){
                            comment_action(first_comment, 首评数组)
                            log("已对视频的首评进行回复")

                        }
                        else{log("首评不存在")}


                    }
                    else{log("未开启首评回复功能")}


                    sleep(1000+random(1000, 2000))
                    if (直接评论) {
                        var randomIndex = Math.floor(Math.random() * 直接留言数组.length); // 生成一个随机索引
                        var randomText = 直接留言数组[randomIndex]
                        sleep(500)
            
                        setText(randomText)
                        sleep(500+random(1000, 2000))

                        var returned = text("回复").className("android.widget.TextView").findOne(500);
                        if (returned) {
                            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                            sleep(500);
                            log("已对视频进行直接评论")
                        } else {
                            toastLog("未找到回复");
                        }

                      
                    }
                    else { log("未开启直接评论功能") }
                    sleep(500+random(1000, 2000))

                   



                    ////功能2.对目标用户进行行动，获客大循环
                    var loopVar2 = true////见底的变量
                    while (loopVar2) {

                        customer_searching(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 单一行为, 留言数组, 私信数组)
                        sleep(500+random(1000, 2000))
                        var returned = className("android.widget.TextView").indexInParent(0).visibleToUser(true).clickable(false).find();
                        var targetListx = returned.filter(item => item && item.parent().className() === "android.widget.RelativeLayout")
                        var topvar1 = targetListx[0]
                        swipeAction()
                        ////判断是否最上方变量是否重复，重复则returnfalse
                        var loopVar2 = find_bottom(topvar1)
                        ////内部小计时，如果到就退出
                        var currentTime = new Date().getTime();
                        var loopVar1 = bigloop(currentTime, startTime, timerDuration)
                        if (loopVar1 == false) {
                            break;
                        }
                    }
                    ////步骤4:单个视频的循环结束，此时在评论区页面需要退出两次
                    back()
                    sleep(500+random(1000, 2000))
                    back()
                    sleep(500+random(1000, 2000))

                }


                if (loopVar1 == false) {
                    break;
                }

            };
        }
        else {
            toastLog("未找到可用的视频");
        }

        swipeAction()

        var currentTime = new Date().getTime();
        var loopVar1 = bigloop(currentTime, startTime, timerDuration)

    }

    log("视频号获客结束,共触达"+uid_array.length+"个客户")
    home()
}




function start_search(搜索关键词) {

    text("通讯录").className("android.widget.TextView").visibleToUser(true).untilFind();
  
    log("已进入微信，将执行任务");
    sleep(3500)
    ////点击进入视频号
    var returned = text("发现").className("android.widget.TextView").visibleToUser(true).findOne(500);
    if (returned) {
      click(returned.bounds().centerX()+random(-5, 5), returned.bounds().centerY()+random(-5, 5));
      sleep(500);
      toastLog("已点击发现按钮");
    } else {
      toastLog("未找到发现按钮");
    }
    

    sleep(2000)

    var returned = text("视频号").className("android.widget.TextView").findOne(2500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到视频号");
    }
    sleep(2000)
    ////青少年框
    if (text("为呵护未成年人健康成长，微信推出青少年模式。该模式下部分功能将受限制使用，请监护人主动设置。").className("android.widget.TextView").exists()) {
        var returned = text("我知道了").className("android.widget.Button").findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("没能成功跳出青少年模式")
        }
    }
    else { toastLog("未进入青少年模式") }


    log("正在判断是否已进入视频号,如果未进入视频号,此处会阻塞")
    text("推荐").className("android.widget.TextView").untilFind();
    toastLog("已进入视频号");
    sleep(500)


    ////点击搜索框搜索目标
    var returned = desc("搜索").className("android.widget.ImageView").visibleToUser(true).findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到搜索框");
    }

    sleep(500+random(1500, 2000))

    setText(搜索关键词)

    sleep(500+random(1000, 2000))


    var returned = text("搜索").className("android.widget.TextView").visibleToUser(true).findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到搜索");
    }




    text("筛选").className("android.widget.TextView").untilFind();
    log("已进入搜索结果页面");
}





function find_bottom(topvar1) {
    var returned = className("android.widget.TextView").indexInParent(0).visibleToUser(true).clickable(false).find();
    var targetList = returned.filter(item => item && item.parent().className() === "android.widget.RelativeLayout")
    var topvar2 = targetList[0]
    if (text("暂无评论").className("android.widget.TextView").visibleToUser(true).exists()) {
        return false
    } else if (topvar2.text() === topvar1.text()) { 
        log("检测到评论区底部,将准备进入下一个视频内容")
        return false }
    else { return true }
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





function customer_searching(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 单一行为, 留言数组, 私信数组) {




    var returnedx = className("android.widget.TextView").indexInParent(0).visibleToUser(true).clickable(false).find();
    var commentList = returnedx.filter(item => item && item.text !== null && item.parent().className() === "android.widget.RelativeLayout")

    for (var i2 = 0, len2 = commentList.length; i2 < len2; i2++) {
        var comment = commentList[i2]

        if (comment) {
            if (客户关键词数组.some(item => comment.text().includes(item))) {
                var target = comment
                ////判断重复id
                var midv = target.parent().parent().children().filter(item => item && item.className() === "android.widget.LinearLayout" && item.children())
                var uid = midv.filter(item => item.children().some(control => control.desc() !== null))[0].children().filter(item => item && item.clickable() == true)[0].desc()
                
                if (!uid_array.includes(uid)) {
                    log("找到目标客户"+uid)
                    uid_array.push(uid)
                    if (单一行为 == true) {
                        probArray = [点赞概率, 评论概率, 关注概率, 私信概率];
                        let sum = probArray.reduce((a, b) => a + b, 0);

                        let 评论概率_new = 评论概率 / sum
                        let 点赞概率_new = 点赞概率 / sum
                        let 关注概率_new = 关注概率 / sum
                        let 私信概率_new = 私信概率 / sum

                        let obj = { "点赞": 点赞概率_new, "评论": 评论概率_new, "关注": 关注概率_new, "私信": 私信概率_new }
                        let obj_entr = Object.entries(obj)
                        probArray_new = [点赞概率_new, 评论概率_new, 关注概率_new, 私信概率_new];
                        probArray_new_sorted = probArray_new.sort(function (a, b) { return a - b });

                        var finalAction = simulateEvent(probArray_new_sorted, obj_entr)
                        switch (finalAction) {
                            case "点赞":
                                log("进行点赞行为")
                                likes_action(target)
                                break;
                            case "评论":
                                log("进行评论行为")
                                comment_action(target, 留言数组)
                                break;
                            case "关注":
                                log("进行关注行为")
                                follow_action(target)
                                break;
                            case "私信":
                                log("进行私信行为")
                                DM_action(target, 私信数组)
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
                            log("进行点赞行为")
                            likes_action(target)
                            sleep(500+random(1000, 2000))
                        }
                        else { log("未进行点赞") }


                        /////////////////////////////////关注////////////////////////////////////////
                        //////找到目标头像
                        if (randomProbability(关注概率)) {
                            log("进行关注行为")
                            follow_action(target)
                            sleep(500+random(1000, 2000))

                        }
                        else { log("未进行关注") }



                        /////////////////////////////////私信////////////////////////////////////////
                        //////找到目标头像
                        if (randomProbability(私信概率)) {
                            log("进行私信行为")
                            DM_action(target, 私信数组)
                            sleep(500+random(1000, 2000))
                        }
                        else { log("未进行私信行为") }


                        /////////////////////////////////评论////////////////////////////////////////
                        if (randomProbability(评论概率)) {
                            log("进行评论行为")
                            comment_action(target, 留言数组)
                            sleep(500+random(1000, 2000))
                        }
                        else { log("未进行评论") }
                    }

                    ////操作完更新一下防止位置出错
                    try {
                        var returnedx = className("android.widget.TextView").indexInParent(0).visibleToUser(true).clickable(false).find();
                        var commentList = returnedx.filter(item => item && item.text !== null && item.parent().className() === "android.widget.RelativeLayout")

                    }
                    catch (e) {
                        log("bug:101" + e)
                        log(returnedx)
                    }


                } else { log("重复id") }






            }



            else { log("非目标评论") }



        } else[log("comment不存在")]


    }
}
// 20:06:58.581 

function likes_action(target) {   //点赞行为
    ///text_view中的父集的父集(viewgroup)，这个viewgroup下的可点的linearLayout是点赞功能
    var viewgroup_sub = target.parent().parent().children()
    var like_button = viewgroup_sub.filter(item => item && item.clickable() === true && item.className() === "android.widget.LinearLayout")[0]

    if (like_button) {
        click(like_button.bounds().centerX() + random(-2, 2), like_button.bounds().centerY() + random(-2, 2));
        sleep(500);
    } else {
        log("未找到符合条件的控件");
    }

}




function comment_action(target, 留言数组) {   //评论行为
    if (target) {
        click(target.bounds().centerX() + random(-5, 5), target.bounds().centerY() + random(-5, 5));
        sleep(1500);
        var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
        var randomText = 留言数组[randomIndex]
        setText(randomText)
        sleep(500+random(1000, 2000))

        var returned = text("回复").className("android.widget.TextView").findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
            log("已回复")
        } else {
            log("未找到回复");
        }
    } else { log("未找到target") }
}



function follow_action(target) {   //关注行为   
    var image = target.parent().parent().children().filter(item => item && item.className() === "android.widget.ImageView")[0]
    ///拿click要不然会点到上面还原角标关闭评论
    image.click()
    sleep(500+random(1000, 2000))
    ////判断是否进入个人主页
    if (
        text("私信").className("android.widget.TextView").visibleToUser(true).clickable(false).exists()) {

        var follow1 = text("申请关注").className("android.widget.TextView").findOne(500);
        var follow2 = text("关注").className("android.widget.TextView").findOne(500);
        if (follow1) {
            click(follow1.bounds().centerX() + random(-5, 5), follow1.bounds().centerY() + random(-5, 5));
            sleep(500+random(1000, 2000));
            back()
        } else
            if (follow2) {
                click(follow2.bounds().centerX() + random(-5, 5), follow2.bounds().centerY() + random(-5, 5));
                sleep(500+random(1000, 2000));
                back()
            }
            else {
                log("已关注用户或无关注键")
                sleep(500+random(1000, 2000));
                back()
            }

    } else {
        log("该用户无视频号");
        sleep(500+random(1000, 2000));
        back()
    }





}



function DM_action(target, 私信数组) {
    var image = target.parent().parent().children().filter(item => item && item.className() === "android.widget.ImageView")[0]
    ///拿click要不然会点到上面还原角标关闭评论
    image.click()
    sleep(500+random(1000, 2000))
    ////判断是否进入个人主页


    if (
        text("私信").className("android.widget.TextView").visibleToUser(true).clickable(false).exists()) {
        var returned = text("私信").className("android.widget.TextView").findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500+random(1000, 2000));
            var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
            var randomText = 私信数组[randomIndex]

            setText(randomText)


            sleep(500+random(1000, 2000));
            var returned = text("发送").className("android.widget.Button").findOne(500);

            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500+random(1000, 2000));
            back()
            sleep(500+random(1000, 2000));
            back()
            ///回到评论区页面



        } else {
            log("未找到私信");
            sleep(500+random(1000, 2000));
            back()
        }




    } else {
        log("该用户无视频号");
        sleep(500+random(1000, 2000));
        back()
    }



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

    } else { log("单一性bug") }
}



function randomProbability(probability) {
    return Math.random() * 100 < probability;
}




module.exports =HK_WX_SPH

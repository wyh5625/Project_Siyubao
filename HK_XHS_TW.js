////图文获客功能第一板块和视频一样

////找最新的图文提问----直接留言功能
/////这里没加入同一个文章的评论区触达等之后再弄
var 搜索关键词 = "南昌兼职"
var 排序依据 = "最新" //排序依据
var 运行时长 = 3
var note_Nodeid_array = [] //记录已经进入过的笔记id
var 二次筛选 = true; //是否进行笔记内容和标题二次筛选
var keywords = ["南昌"] ////对标题和内容筛选的关键词，满足一个则会进行操作
var 高频触达 = true
var 单一行为 = false
var 点赞概率 = 0
var 关注概率 = 0
var 私信概率 = 100
var 头像点赞概率 = 0
var 私信数组 = ["在吗", "还有吗"]
var 分享评论 = false
var 直接私信 = true

var 小红书号数组 = []
var 直接留言数组 = ["dd", "dddd"]

var HK_XHS_TW = {}



HK_XHS_TW.Main = function Pic_searching(搜索关键词, 排序依据,发布时间,搜索范围,运行时长, 二次筛选, keywords,直接留言数组, 高频触达, 单一行为, 点赞概率, 关注概率, 私信概率, 头像点赞概率, 私信数组) {
    ///////////////////////////////////////////////常规启动步骤///////////////////////////////////////////////////////
    text("购物").className("android.widget.TextView").untilFind();
    log("已进入小红书，将执行任务");

    sleep(random(1500, 2500))

    Xhs_search_filter(搜索关键词, 排序依据,发布时间,搜索范围)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////此时进入搜索结果界面，开始遍历/////////////////////////////////////////

    var loopVar1 = true;
    let startTime = new Date().getTime();
    let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
    while (loopVar1) {

        var returnedList1 = className("android.widget.FrameLayout").clickable(true).longClickable(true).find();
        sleep(random(1000, 2000))
        if (!returnedList1.empty()) {
            for (var i1 = 0, len = returnedList1.length; i1 < len; i1++) {
                log("当前找到" + len + "个笔记,现在进行第" + (i1 + 1) + "个")
                var returned = returnedList1[i1];
                /////判断笔记是否重复进入过
                var note_id = returned.children()[0].children().filter(item => item && item.className() == "android.widget.TextView")[0].text().substring(0, 7)

                if (!note_Nodeid_array.includes(note_id)) {
                    note_Nodeid_array.push(note_id)
                    returned.click()
                    sleep(random(2000, 3000));
                    ////////////////////进入二次筛选
                    if (二次筛选) {
                        //////找到内容和标题的控件
                        var title_content_ui = className("android.widget.TextView").clickable(false).visibleToUser(true).focusable(true).find();
                        ///有两个则标题和控件都有,
                        if (title_content_ui.length == 2) {
                            var title = title_content_ui[0].text()
                            var content = title_content_ui[1].text()
                        }
                        else if (title_content_ui.length == 1) {
                            var title = title_content_ui[0].text()
                            var content = ""
                        }
                        else {
                            toastLog("未找到标题和内容控件")
                            var title = ""
                            var content = ""
                        }

                        var title_content = title + content
                        log("二次筛选后当前标题内容为：" + title_content)

                        if (keywords.some(word => title_content.includes(word))) {
                            log("内容或标题包含关键词，进入操作")
                            comment_action(直接留言数组)
                            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            /////对于作者如果高频触达，则进行多重操作
                            if (高频触达) {
                                //////触达动作 
                                //1. 作品点赞
                                //2.作者关注
                                //3.作者头像点赞
                                //4.作者私信

                                ////为左滑补充变量
                                var share_button = desc("分享").className("android.widget.Button").clickable(true).findOne(500);


                                ////单一高频触达
                                if (单一行为) {
                                    probArray = [点赞概率, 关注概率, 私信概率, 头像点赞概率];
                                    let sum = probArray.reduce((a, b) => a + b, 0);

                                    let 点赞概率_new = 点赞概率 / sum
                                    let 关注概率_new = 关注概率 / sum
                                    let 私信概率_new = 私信概率 / sum
                                    let 头像点赞概率_new = 头像点赞概率 / sum
                                    let obj = { "点赞": 点赞概率_new, "关注": 关注概率_new, "私信": 私信概率_new, "头像点赞": 头像点赞概率_new }
                                    let obj_entr = Object.entries(obj)
                                    probArray_new = [点赞概率_new, 关注概率_new, 私信概率_new, 头像点赞概率_new];
                                    probArray_new_sorted = probArray_new.sort(function (a, b) { return a - b });

                                    var finalAction = simulateEvent(probArray_new_sorted, obj_entr)



                                    var finalAction = simulateEvent(probArray_new_sorted, obj_entr)
                                    switch (finalAction) {
                                        case "点赞":
                                            likes_action_auther()
                                            sleep(random(1500, 2500));
                                            break;

                                        case "关注":
                                            follow_action_auther()
                                            sleep(random(1500, 2500));
                                            break;
                                        case "私信":
                                            DM_action_auther(share_button, 私信数组)
                                            sleep(random(1500, 2500));
                                            break;
                                        case "头像点赞":
                                            profile_likes_action_auther(share_button)
                                            sleep(random(1500, 2500));
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
                                        likes_action_auther()
                                        log("已进行点赞行为")
                                    }
                                    else { log("未进行点赞") }
                                    sleep(random(1500, 2500));

                                    /////////////////////////////////关注////////////////////////////////////////
                                    //////找到目标头像
                                    if (randomProbability(关注概率)) {
                                        follow_action_auther()
                                        log("已进行关注行为")

                                    }
                                    else { log("未进行关注") }
                                    sleep(random(1500, 2500));
                                    /////////////////////////////////头像点赞////////////////////////////////////////
                                    //////找到目标头像
                                    if (randomProbability(头像点赞概率)) {
                                        profile_likes_action_auther(share_button)
                                        log("已进行头像点赞行为")
                                    } else { log("未进行头像点赞行为") }


                                    sleep(random(1500, 2500));
                                    /////////////////////////////////关注并私信////////////////////////////////////////
                                    //////找到目标头像
                                    if (randomProbability(私信概率)) {
                                        DM_action_auther(share_button, 私信数组)
                                        log("已进行私信行为")
                                    }
                                    else { log("未进行私信行为") }
                                    sleep(random(1500, 2500));
                                }

                            }
                        }
                        else {
                            log("内容或标题不包含关键词，跳过")


                        }





                    }
                    else {
                        ////未开二次筛选直接进入留言
                        comment_action(直接留言数组)
                        sleep(random(1500, 2500));
                        if (高频触达) {
                            //////触达动作 
                            //1. 作品点赞
                            //2.作者关注
                            //3.作者头像点赞
                            //4.作者私信

                            ////为左滑补充变量
                            var share_button = desc("分享").className("android.widget.Button").clickable(true).findOne(500);


                            ////单一高频触达
                            if (单一行为) {
                                probArray = [点赞概率, 关注概率, 私信概率, 头像点赞概率];
                                let sum = probArray.reduce((a, b) => a + b, 0);

                                let 点赞概率_new = 点赞概率 / sum
                                let 关注概率_new = 关注概率 / sum
                                let 私信概率_new = 私信概率 / sum
                                let 头像点赞概率_new = 头像点赞概率 / sum
                                let obj = { "点赞": 点赞概率_new, "关注": 关注概率_new, "私信": 私信概率_new, "头像点赞": 头像点赞概率_new }
                                let obj_entr = Object.entries(obj)
                                probArray_new = [点赞概率_new, 关注概率_new, 私信概率_new, 头像点赞概率_new];
                                probArray_new_sorted = probArray_new.sort(function (a, b) { return a - b });

                                var finalAction = simulateEvent(probArray_new_sorted, obj_entr)



                                var finalAction = simulateEvent(probArray_new_sorted, obj_entr)
                                switch (finalAction) {
                                    case "点赞":
                                        likes_action_auther()
                                        sleep(random(1500, 2500));
                                        break;

                                    case "关注":
                                        follow_action_auther()
                                        sleep(random(1500, 2500));
                                        break;
                                    case "私信":
                                        DM_action_auther(share_button, 私信数组)
                                        sleep(random(1500, 2500));
                                        break;
                                    case "头像点赞":
                                        profile_likes_action_auther(share_button)
                                        sleep(random(1500, 2500));
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
                                    likes_action_auther()
                                    log("已进行点赞行为")
                                }
                                else { log("未进行点赞") }
                                sleep(random(1500, 2500));

                                /////////////////////////////////关注////////////////////////////////////////
                                //////找到目标头像
                                if (randomProbability(关注概率)) {
                                    follow_action_auther()
                                    log("已进行关注行为")

                                }
                                else { log("未进行关注") }
                                sleep(random(1500, 2500));
                                /////////////////////////////////头像点赞////////////////////////////////////////
                                //////找到目标头像
                                if (randomProbability(头像点赞概率)) {
                                    profile_likes_action_auther(share_button)
                                    log("已进行头像点赞行为")
                                } else { log("未进行头像点赞行为") }


                                sleep(random(1500, 2500));
                                /////////////////////////////////关注并私信////////////////////////////////////////
                                //////找到目标头像
                                if (randomProbability(私信概率)) {
                                    DM_action_auther(share_button, 私信数组)
                                    log("已进行私信行为")
                                }
                                else { log("未进行私信行为") }
                                sleep(random(1500, 2500));
                            }

                        }
                    }
                    sleep(random(1500, 2500));
                    back()
                    sleep(random(1500, 2000));
                }
                else {
                    log("重复进入笔记，跳过")
                    sleep(random(1500, 2500));
                }

            }

            swipeAction()
        }
        else {
            log("无笔记跳出循环")
            break;
        }


        var currentTime = new Date().getTime();
        var loopVar1 = bigloop(currentTime, startTime, timerDuration)





    }

    log("任务结束，本次共触达" + note_Nodeid_array.length + "篇个用户")

}



function Xhs_search_filter(搜索关键词, 排序依据,发布时间,搜索范围) {

    var returned = desc("搜索").className("android.widget.Button").clickable(true).findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到搜索");
    }

    sleep(random(1500, 2500))
    setText(搜索关键词)
    sleep(random(1500, 2500))

    var returned = text("搜索").className("android.widget.Button").findOne(500);
    returned.click()

    sleep(random(1500, 2500))

    //////////////////////////////////////////////////筛选内容////////////////////////////////////////////////////////////
    var returned = text("筛选").className("android.widget.TextView").findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    }
    sleep(random(1500, 2500))

    ///////////图文内容触达
    var returned = text("图文").className("android.widget.TextView").findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    }
    ///////////
    var returned = text(排序依据).className("android.widget.TextView").findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    }
    var returned = text(发布时间).className("android.widget.TextView").findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    }
    var returned = text(搜索范围).className("android.widget.TextView").findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    }





    ////下滑到搜索内容界面
    swipeAction()
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}



function bigloop(currentTime, startTime, timerDuration) {
    if ((currentTime - startTime) >= timerDuration) { return false }
    else { return true }
}

function comment_action(直接留言数组) {
    /////动作行为
    ////////////////////////////////////////////////////////// 进入笔记详情页//////////////////////////////////////////////////////////////////
    var detector = false;
    var upperLimit = 0
    ///滑下找到评论区
    while (!detector) {
        swipeAction();/////////一般一次就足以滑到评论区,以防万一长图文问题

        detector = textContains("回复").className("android.widget.TextView").visibleToUser(true).longClickable(true).exists()
        sleep(500)
        upperLimit = upperLimit + 1

        if (upperLimit > 3) {
            log("达到下滑上限")
            break;
        }
    }
    ////////////////////////////////////////////////////直接进行留言//////////////////////////////////////////////////////////////

    var randomIndex = Math.floor(Math.random() * 直接留言数组.length); // 生成一个随机索引
    var randomText = 直接留言数组[randomIndex]
    sleep(random(1500, 2500));
    var returned = className("android.widget.TextView").desc("评论框").visibleToUser(true).clickable(true).findOne(1000);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("未找到评论框");
    }

    setText(randomText)
    sleep(1000 + random(500, 1000))
    var returned = text("发送").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(2500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
        log("已评论")
    } else {
        toastLog("未找到发送键");
    }

    sleep(1000)

}




function likes_action_auther() {
    var returned = descContains("点赞").className("android.widget.Button").clickable(true).visibleToUser(true).find().filter(item => item && item.parent() && item.parent().className() == "android.view.ViewGroup")[0];

    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        toastLog("没找到点赞");
    }

}

function follow_action_auther() {

    var returned = text("关注").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(1000);

    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-2, 2));
        sleep(500);
        log("关注成功")
    } else {
        log("已关注的用户")
    }


}

function profile_likes_action_auther(share_button) {
    try {
        swipeAction_RTL(share_button)
        if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
            ///获得当前xhs号判断是否点过赞
            var returned = textContains("小红书号").className("android.widget.TextView").findOne(500);
            var xhs_text = returned.text()

            // 使用正则表达式匹配文本中的数字
            var regex = /\d+/; // \d 表示数字，+ 表示一个或多个
            var XHS_Id = xhs_text.match(regex)[0];

            ////为避免重复点赞需要通过小红书号判断是否已经点赞过
            ///如果小红书号数组中不包括在当前XHS_id则进行点赞
            if (!小红书号数组.includes(XHS_Id)) {

                var returned = className("android.view.View").descContains("头像").clickable(true).visibleToUser(true).findOne(1000);
                returned.click()
                sleep(random(1500, 2500))
                var returned = text("点赞").className("android.widget.TextView").findOne(500);
                if (returned) {
                    returned.clickCenter();
                    sleep(500);
                } else {
                    log("未找到点赞");
                }

                小红书号数组.push(XHS_Id)
                back()
                sleep(random(1500, 2500))
                back()
                sleep(random(1500, 2500))

            }
            else {
                log("头像已经点过赞,将退出")
                back()
                sleep(random(1500, 2500))
            }
        }
    }
    catch (e) {
        log(e + "头像点赞失败")
    }
}

function DM_action_auther(share_button, 私信数组) {
   
        swipeAction_RTL(share_button)
        sleep(random(1500, 2500))
        if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
            var 分享评论 = true
            var 直接私信 = true
       
    
            if (desc("发消息").className("android.widget.ImageView").clickable(true).exists()) {
                log("未关注用户点击聊天框")
                var returned = desc("发消息").className("android.widget.ImageView").clickable(true).findOne(500);
                returned.click()
                sleep(random(1500, 2500))
                ///分享评论---不知道次数
                if (分享评论) {
                    var send1 = text("发送").className("android.widget.TextView").find().filter(item => item && item.parent().className() == "android.view.ViewGroup")[0]
                    if (send1) {
                        send1.click()
                    }
                    else { log("分享评论不存在") }
                } else { log("未打开分享评论") }
                sleep(random(1500, 2500))
    
                if (直接私信) {
                    var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
                    var randomText = 私信数组[randomIndex]
                    setText(randomText)
                    sleep(random(1500, 2500))
                    var send2 = text("发送").className("android.widget.TextView").find().filter(item => item && item.parent().className() == "android.widget.RelativeLayout")[0]
                    send2.click()
                } else { log("未打开直接私信") }
                sleep(random(1500, 2500))
                back()
    
    
            }
            else if (text("编辑资料").className("android.widget.Button").exists()) {
                log("误触点到自己了")
            }
    
            else {
                log("已关注用户")
                ///傻逼小红书有发消息和发私信都可能有
                var returned = textContains("发").className("android.widget.Button").visibleToUser(true).findOne(500);
                returned.click()
    
                sleep(random(1500, 2500))
                ///分享评论---不知道次数
                if (分享评论) {
                    var send1 = text("发送").className("android.widget.TextView").find().filter(item => item && item.parent().className() == "android.view.ViewGroup")[0]
                    if (send1) {
                        send1.click()
                    }
                    else { log("分享评论不存在") }
                } else { log("未打开分享评论") }
    
                sleep(random(1500, 2500))
                if (直接私信) {
                    var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
                    var randomText = 私信数组[randomIndex]
                    setText(randomText)
                    sleep(random(1500, 2500))
                    var send2 = text("发送").className("android.widget.TextView").find().filter(item => item && item.parent().className() == "android.widget.RelativeLayout")[0]
                    send2.click()
                } else { log("未打开直接私信") }
                sleep(random(1500, 2500))
                back()
            }
    
    
            sleep(random(1500, 2500))
            back()
            sleep(random(1500, 2500))
    
    
        }
  

}

function swipeAction_RTL(share_button) {

    var X1 = device.width * 0.8; // 起始点X坐标，屏幕宽度的一半
    var Y1 = share_button.bounds().centerY()

    var X2 = device.width * 0.2; // 结束点X坐标，向左滑动300像素
    var Y2 = Y1 + random(-5, +5); // 结束点Y坐标保持不变
    var duration1 = random(0.4, 0.6) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(1000, 2000)

}




function swipeAction() {
    var X1 = device.width / 2; // 起始点X坐标，屏幕宽度的一半
    var Y1 = (device.height / 1.5) + random(-5, 5); // 起始点Y坐标，屏幕高度的一半
    var X2 = X1; // 结束点X坐标，向左滑动300像素
    var Y2 = random(5, 5); // 结束点Y坐标保持不变
    var duration1 = random(0.5, 0.8) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(1000, 2000)

}



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
    }


}





function randomProbability(probability) {
    return Math.random() * 100 < probability;
}


module.exports = HK_XHS_TW
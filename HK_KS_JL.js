/////快手
var 搜索关键词 = "aj11球鞋"
var 排序 = "默认排序" ///最新发布，点赞最多
var 发布时间 = "不限"
var 作品时长 = "不限"
var 搜索范围 = "不限"
var 运行时长 = 3
var 直接留言 = false
var 直接留言数组 = ["1"]
var 客户关键词数组 = [""]
var 点赞概率 = 100
var 评论概率 = 0
var 关注概率 = 0
var 私信概率 = 0
var 头像点赞概率 = 0
var 单一行为 = false
var 留言数组 = ["1111"]

var 手动选择城市 = false
var 私信数组 = ["xasdfgzf"]
var note_Nodeid_array = []///判断视频重复
var uid_array = []///判断用户是否重复



var HK_KS = {}


// KS_module_Main(搜索关键词, 排序, 发布时间, 作品时长, 搜索范围, 手动选择城市, 
//     运行时长, 直接留言, 直接留言数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组)

HK_KS.Main = function KS_module_Main(搜索关键词, 排序, 发布时间, 作品时长, 搜索范围, 手动选择城市,
    运行时长, 直接留言, 直接留言数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 首评回复
    , 首评数组) {
    ///////////////////启动和搜索///////////////////
    find_search(搜索关键词, 排序, 发布时间, 作品时长, 搜索范围, 手动选择城市)
    /////////////////////////////////////时间大循环////////////////////////////////////////
    var loopVar1 = true;
    let startTime = new Date().getTime();
    const timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
    ///////////打开全部窗口///////////
    auto.setWindowFilter(function () {
        return true;
    });
    sleep(random(1500, 2500))

    while (loopVar1) {

        log("寻找相关内容中")
        var upperLimit = 0
        while (!descContains("的作品").className("android.widget.RelativeLayout").clickable(true).longClickable(true).visibleToUser(true).exists()) {
            upperLimit = upperLimit + 1
            swipeAction()
            if (upperLimit > 4) {
                log("超过上划上限,还未找到内容,请重新调整保证搜索结果存在视频")
                break;
            }
        }
        // ///////////////获取视频列表////////////////////
        var returnedList1 = descContains("的作品").className("android.widget.RelativeLayout").clickable(true).longClickable(true).visibleToUser(true).find();
        if (!returnedList1.empty()) {
            for (var i1 = 0, len1 = returnedList1.length; i1 < len1; i1++) {
                console.log("当前找到" + len1 + "个视频,现在进入第" + (i1 + 1) + "个");
                var returned = returnedList1[i1];
                /////判断是否看过该作品,根据作品desc，XXX的作品来判断，存在误杀跳过没看过的,但也会减少在同一个作者下多次截流导致被举报
                var descText = returned.desc()
                if (!note_Nodeid_array.includes(descText)) {
                    note_Nodeid_array.push(descText)
                    returned.click()
                    sleep(random(1500, 2500))
                    ///进入视频判断
                    text("分享").className("android.widget.TextView").clickable(false).visibleToUser(true).untilFind()


                    ////////////////////////////////打开评论区///////////////////////////////
                    sleep(random(1500, 2500))
                    var returned = idContains("comment").className("android.view.View").visibleToUser(true).findOne(500);


                    if (returned) {
                        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                        sleep(500);
                    } else {
                        log("bug,无评论组件");
                    }
                    //////////////////////////////////////////////////评论区检测//////
                    sleep(random(2500, 3000))
                    textContains("条评论").className("android.widget.TextView").findOne(2000)
                    if (!textContains("条评论").className("android.widget.TextView").exists()) {

                        sleep(random(1500, 2500))
                        back();
                        sleep(random(1500, 2500))
                        back();
                        sleep(random(1500, 2500))
                        ///区分广告页和空评论区的页面
                        if (descContains("的作品").className("android.widget.RelativeLayout").clickable(true).longClickable(true).visibleToUser(true).exists()) { log("检测为广告视频,已退出广告页") }
                        else if (text("分享").className("android.widget.TextView").clickable(false).visibleToUser(true).exists()) {
                            back();
                            sleep(random(1500, 2500))
                            log("评论区为空,已退出视频页")
                        }
                        else { log("bug,未知页面x") }
                    }
                    else {
                        log("评论区不为空，开始自动化截流")
                        sleep(random(1500, 2500))
                        if (首评回复) {
                            var midv = className("android.widget.TextView").visibleToUser(true).find().filter(item => item && item.desc() !== null)
                            var comment_List = midv.filter(item => item && item.text() && item.desc() && item.desc() == item.text() && item.id() && item.id().includes("comment"))
                            var first_comment = comment_List[0]
                            if (first_comment) {
                                comment_action(first_comment, 首评数组)


                            }
                            else { log("首评不存在") }


                        }
                        else { log("未开启首评回复功能") }

                        ////直接留言///////
                        if (直接留言) {
                            ///找好友的Y坐标，x坐标为屏幕宽度的20%
                            var returned = className("android.widget.ImageButton").desc("好友").clickable(true).visibleToUser(true).findOne(500);
                            click(device.width * 0.2, returned.bounds().centerY() + random(-5, 5));
                            sleep(1500);
                            var randomIndex = Math.floor(Math.random() * 直接留言数组.length); // 生成一个随机索引
                            var randomText = 直接留言数组[randomIndex]
                            setText(randomText)
                            sleep(1500);
                            var returned = text("发送").findOne(500);
                            returned.click()
                            sleep(1500)

                        }
                        else { log("未开启直接留言功能") }
                        ///////////////////







                        var loopVar2 = true;
                        while (loopVar2) {
                            sleep(random(1500, 2500));
                            customer_searching(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组)
                            sleep(500);
                            swipeAction()

                            ////判断见底

                            var loopVar2 = find_bottom()
                            sleep(500);
                            var currentTime = new Date().getTime();
                            var loopVar1 = bigloop(currentTime, startTime, timerDuration)
                            if (loopVar1 == false) {
                                break;
                            }


                        }
                        ////步骤4:单个视频的循环结束，
                        back()
                        sleep(random(1500, 2500))
                        back()
                        sleep(random(1500, 2500))

                    }







                }

                var currentTime = new Date().getTime();
                var loopVar1 = bigloop(currentTime, startTime, timerDuration)
                if (loopVar1 == false) {
                    break;
                }

            }

        }
        else {
            toastLog("没有视频列表，任务中止")
            break;
        }





        sleep(random(1500, 2500))
        swipeAction()
        sleep(random(1500, 2500))


        var currentTime = new Date().getTime();
        var loopVar1 = bigloop(currentTime, startTime, timerDuration)


    }

    log("任务结束,本次一共触达" + uid_array.length + "个用户")

}


function find_search(搜索关键词, 排序, 发布时间, 作品时长, 搜索范围, 手动选择城市) {
    text("精选").className("android.widget.CheckedTextView").untilFind();
    log("已进入快手，将执行任务");
    sleep(1000)

    var returned = desc("查找").className("android.widget.ImageView").clickable(true).untilFind()[0]
    returned.click()

    sleep(random(1500, 2500))
    setText(搜索关键词)
    sleep(random(1500, 2500))

    var returned = text("搜索").className("android.widget.TextView").clickable(true).findOne(500);
    returned.click()
    sleep(random(1500, 2500))

    var returned = className("androidx.viewpager.widget.ViewPager").untilFind();
    log("已进入搜索结果")


    ////////快手的筛选没有desc，没有text，只能用idContains来定位筛选按钮/////////
    var returned = idContains("tab_filter").className("android.widget.ImageView").clickable(true).findOne(500);
    returned.click()


    text("全部筛选").className("android.widget.TextView").visibleToUser(true).untilFind()

    ////排序:默认排序，最新发布，点赞最多
    var returned = text(排序).className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
    returned.click()
    sleep(random(1500, 2500))

    ////发布时间:不限,近1日，近7日，近1个月
    var returned = text(发布时间).className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
    returned.click()
    sleep(random(1500, 2500))

    ////作品时长:不限,1分钟内，1-5分钟，超5分钟
    var returned = text(作品时长).className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
    returned.click()
    sleep(random(1500, 2500))


    ////搜索范围:不限,已看过,未看过，已关注/////不限删掉，要不然广告太多了
    var returned = text(搜索范围).className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
    returned.click()
    sleep(random(1500, 2500))



    if (手动选择城市) {
        toastLog("请手动选择城市，点击确认后程序将会再次运行")
        desc("查找").className("android.widget.ImageView").visibleToUser(true).untilFind()
        toastLog("已完成检索，开始自动化操作")
    }

    else {

        var returned = text("确定").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
        returned.click()
        desc("查找").className("android.widget.ImageView").visibleToUser(true).untilFind()
        log("已进入搜索结果")
    }

}




function customer_searching(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组) {

    var midv = className("android.widget.TextView").visibleToUser(true).find().filter(item => item && item.desc() !== null)
    var comment_List = midv.filter(item => item && item.text() && item.desc() && item.desc() == item.text() && item.id() && item.id().includes("comment"))
    for (var i2 = 0, len2 = comment_List.length; i2 < len2; i2++) {
        var comment = comment_List[i2]
        if (comment) {
            if (客户关键词数组.some(item => comment.text().includes(item))) {
                var target = comment
                var uid = target.parent().parent().parent().children().filter(item => item && item.className() == "android.widget.LinearLayout")[0].children()[0].text()

                ///判断重复
                if (uid_array.includes(uid)) {
                    log("该用户重复，跳过")
                }

                else {
                    log("客户id:" + uid + "| 客户评论内容为:" + target.text())
                    uid_array.push(uid)
                    if (单一行为 == true) {
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
                                sleep(random(1500, 2500));
                                break;
                            case "评论":
                                log("执行评论行为")
                                comment_action(target, 留言数组)
                                sleep(random(1500, 2500));
                                break;
                            case "关注":
                                log("执行关注行为")
                                follow_action(target)
                                sleep(random(1500, 2500));
                                break;
                            case "私信":
                                log("执行私信行为")
                                DM_action(target, 私信数组)
                                sleep(random(1500, 2500));
                                break;
                            case "头像点赞":
                                log("执行头像点赞行为")
                                profile_likes_action(target)
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
                            log("执行点赞行为")
                            likes_action(target)
                        }
                        else { log("未进行点赞") }


                        /////////////////////////////////关注////////////////////////////////////////
                        //////找到目标头像
                        if (randomProbability(关注概率)) {
                            log("执行关注行为")
                            follow_action(target)

                        }
                        else { log("未进行关注") }

                        /////////////////////////////////头像点赞////////////////////////////////////////
                        //////找到目标头像
                        if (randomProbability(头像点赞概率)) {
                            log("执行头像点赞行为")
                            profile_likes_action(target)
                        } else { log("未进行头像点赞行为") }

                        /////////////////////////////////私信////////////////////////////////////////
                        //////找到目标头像
                        if (randomProbability(私信概率)) {
                            log("执行私信行为")
                            DM_action(target, 私信数组)
                        }
                        else { log("未进行私信行为") }


                        /////////////////////////////////评论////////////////////////////////////////
                        if (randomProbability(评论概率)) {
                            log("执行评论行为")
                            comment_action(target, 留言数组)
                        }
                        else { log("未进行评论") }



                    }

                    /////更新列表防止错误位置
                    try {
                        var midv = className("android.widget.TextView").visibleToUser(true).find().filter(item => item && item.desc() !== null)
                        var comment_List = midv.filter(item => item && item.text() && item.desc() && item.desc() == item.text() && item.id() && item.id().includes("comment"))
                    }
                    catch (e) {
                        log(e)
                        log("更新列表失败")
                    }
                }

            }

        }
        else { log("comment不存在,跳过") }





    }



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

    } else {
        midE = obj_entr.filter(item => item[1] == probArray_new_sorted[4])
        var randomIndex = Math.floor(Math.random() * midE.length); // 生成一个随机索引
        var conductE = midE[randomIndex][0]
        return (conductE)


    }
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





function bigloop(currentTime, startTime, timerDuration) {
    if ((currentTime - startTime) >= timerDuration) { return false }
    else { return true }
}



function randomProbability(probability) {
    return Math.random() * 100 < probability;
}






function comment_action(target, 留言数组) {
    target.clickCenter()
    sleep(random(1500, 2500))

    var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
    var randomText = 留言数组[randomIndex]
    setText(randomText)

    sleep(random(1500, 2500))
    var returned = text("发送").findOne(500);
    if (returned) {
        returned.click()
    }
    else if (textStartsWith("快手号").className("android.widget.TextView").exists()) {
        log("误触到链接主页")
        back()
    }
    else { log("未找到发送按钮") }
    sleep(1500)

}


function likes_action(target) {
    try {
        var likes_parent = target.parent().parent().parent().children().filter(item => item && item.className() == "android.view.ViewGroup" && item.id() && item.id().includes("like"))[0]
        var likes_button = likes_parent.children().filter(item => item && item.id() && item.id().includes("_like"))[0]

        // var previous_number = parseInt(likes_button.children().filter(item => item && item.className() == "android.widget.TextView")[0].text())
        // if (isNaN(previous_number)) { previous_number = 0 }

        likes_button.clickCenter()
        // sleep(random(1500, 2500))
        // var current_number = parseInt(likes_button.children().filter(item => item && item.className() == "android.widget.TextView")[0].text())
        // if (isNaN(current_number)) { current_number = 0 }

        // if (current_number > previous_number) {
        //     log("正常无取消点赞")
        // }
        // else if (current_number == previous_number) {
        //     log("点赞数相等/未点赞bug")
        // }
        // else {
        //     likes_button.clickCenter()
        // }

        sleep(random(1500, 2500))

    }
    catch (e) {
        log(e + "点赞失败")
    }
}



function follow_action(target) {
    try {
        var profile_image = target.parent().parent().parent().children().filter(item => item && item.className() == "android.widget.ImageView" && item.clickable() == true)[0]
        profile_image.click()
        sleep(random(1500, 2500))
        var mark = textStartsWith("快手号").className("android.widget.TextView").findOne(3000)
        // log("已进入个人页")
        if (mark) {
            var returned = text("i 关注").className("android.widget.ToggleButton").clickable(true).visibleToUser(true).findOne(500);

            if (returned) {
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(500);
                // log("已关注")
            } else {
                log("已关注过的用户")
            }

            sleep(random(1500, 2500))
            back()
            sleep(random(1500, 2000))

        }
        else if (textContains("注销")) {
            log("用户已注销")
            back()
            sleep(random(1500, 2500))
        }
        else { log("未能成功进入用户主页") }
    }
    catch (e) {
        log(e + "关注失败")
    }
}


function profile_likes_action(target) {
    try {
        var profile_image = target.parent().parent().parent().children().filter(item => item && item.className() == "android.widget.ImageView" && item.clickable() == true)[0]
        profile_image.click()
        sleep(random(1500, 2500))
        var mark = textStartsWith("快手号").className("android.widget.TextView").findOne(3000)
        ///////成功进入个人页///////////
        if (mark) {
            var returned = desc("头像").className("android.widget.ImageView").findOne(1500);

            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(1500);

            var returned = text("点赞").className("android.widget.TextView").findOne(500);
            if (returned) {
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(1000);
            }
            else { log("未找到点赞按钮，可能点到自己首页了") }
            back()
            sleep(random(1500, 2500))
            back()
            sleep(random(1500, 2500))
        }
        else if (textContains("注销")) {
            log("用户已注销")
            back()
            sleep(random(1500, 2500))
        }
        else { log("未能成功进入用户主页") }
    }
    catch (e) {
        log(e + "头像点赞失败")

    }
}


function DM_action(target, 私信数组) {

    var profile_image = target.parent().parent().parent().children().filter(item => item && item.className() == "android.widget.ImageView" && item.clickable() == true)[0]
    profile_image.click()
    sleep(random(1500, 2500))
    var mark = textStartsWith("快手号").className("android.widget.TextView").findOne(3000)
    if (mark) {
        /////////////进入个人页点击私信按钮///////////
        var returned = text("发私信").desc("发私信").className("android.widget.Button").findOne(500);
        if (returned) {
            ///非关注人私信
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(random(1500, 2500))
            var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
            var randomText = 私信数组[randomIndex]
            setText(randomText)
            sleep(random(1500, 2500))

            var returned = idContains("send").className("android.widget.ImageView").clickable(true).visibleToUser(true).findOne(500);
            try { click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5)); }
            catch (e) { log("未找到发送按钮,可能该用户关闭了陌生人私信") }
            sleep(random(1500, 2500))
            back()
            sleep(random(1500, 2500))
            back()
            sleep(random(1500, 2500))
        } else if (
            ///关注的人私信
            idContains("send_message").className("android.widget.ImageView").clickable(true).visibleToUser(true).exists()) {
            var returned = idContains("send_message").className("android.widget.ImageView").clickable(true).visibleToUser(true).findOne(500);
            returned.click()
            sleep(random(1500, 2500))
            var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
            var randomText = 私信数组[randomIndex]
            setText(randomText)
            sleep(random(1500, 2500))

            var returned = idContains("send").className("android.widget.ImageView").clickable(true).visibleToUser(true).findOne(500);
            try { click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5)); }
            catch (e) { log("未找到发送按钮,可能该用户关闭了陌生人私信") }
            sleep(random(1500, 2500))
            back()
            sleep(random(1500, 2500))
            back()
            sleep(random(1500, 2500))


        }
        else {
            log("误触到自己主页")
            back()
            sleep(random(1000, 1500))
        }



    }
    else if (textContains("注销")) {
        log("此为注销用户")
        back()
        sleep(random(1000, 1500))
    }
}







function find_bottom() {

    if (idContains("no_more_content").className("android.view.View").visibleToUser(true).exists()) { return false }
    else { return true }





}








module.exports = HK_KS
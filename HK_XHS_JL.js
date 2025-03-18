
// var 笔记类型 = "视频"
// var 排序依据 = "最新"
// var 搜索关键词 = "创业"
// var 运行时长 = 2 //单位分钟

var note_Nodeid_array = []
var 小红书号数组 = []
var target_array = []

// var 直接留言 = false
// var 单一行为 = true
// var 分享评论 = false
// var 直接私信 = false



// var 直接留言数组 = ["真是"]
// var 客户关键词数组 = [" ", " "]
// var 留言数组 = ["1","1111"]
// var 私信数组 = ["asdsfzas"]

// var 点赞概率 = 100
// var 评论概率 = 100
// var 关注概率 = 100
// var 私信概率 = 100
// var 头像点赞概率 = 100
///////////////////////////////////////////////常规启动步骤///////////////////////////////////////////////////////

//////检测小红书是否打开成功
var HK_XHS_JL = {}

HK_XHS_JL.Main = function XHS_module1_Main(搜索关键词, 笔记类型, 排序依据,发布时间,搜索范围, 运行时长,
    直接留言, 直接留言数组, 首评回复, 首评数组,
    客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信
) {
    text("购物").className("android.widget.TextView").untilFind();
    log("已进入小红书，将执行任务");

    sleep(random(1500, 2500))

    Xhs_search_filter(搜索关键词, 笔记类型, 排序依据,发布时间,搜索范围)


    var loopVar1 = true;
    var startTime = new Date().getTime();
    var timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
    while (loopVar1) {

        var returnedList1 = className("android.widget.FrameLayout").clickable(true).longClickable(true).find();

        if (!returnedList1.empty()) {

            for (var i1 = 0, len1 = returnedList1.length; i1 < len1; i1++) {
                console.log("当前页面找到" + len1 + "个相关内容,将对行第" + (i1 + 1) + "个进行获客");
                var returned = returnedList1[i1];
                /////判断笔记是否重复进入过////作品名字前7个
                var note_id = returned.children()[0].children().filter(item => item && item.className() == "android.widget.TextView")[0].text().substring(0, 7)

                if (!note_Nodeid_array.includes(note_id)) {
                    note_Nodeid_array.push(note_id)
                    returned.click()
                    sleep(random(1500, 2500));


                    //////////////////////////此时已进入笔记判断是图文还是笔记，是图文则打开图文模式，是视频则打开视频模式///////////////////////////////////////////
                    if (className("com.xingin.redview.seekbar.VideoSeekBar").exists()) {
                        log("已进入视频页")
                        // 打开视频获客模式
                        video_mode(直接留言, 直接留言数组, 首评回复, 首评数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信, startTime, timerDuration)
                        sleep(random(1500, 2000));


                    }
                    else {
                        log("已进入图文页")
                        // 打开图文获客模式
                        pic_mode(直接留言, 直接留言数组, 首评回复, 首评数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信, startTime, timerDuration)
                        sleep(random(1500, 2500));
                    }


                    //////////////获客结束，返回跳入下一个页面//////////////
                    back()
                    sleep(random(3000, 5000));
                }
                else {
                    log("重复进入笔记，跳过")

                    sleep(random(1500, 2500));
                }
                var currentTime = new Date().getTime();
                if (currentTime - startTime > timerDuration) {
                    log("时间到，任务结束")
                    break;
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
    log("任务结束，一共触达" + target_array.length + "个目标客户");
    home()



}







/////////////////////////////////////////////函数/////////////////////////////////
function Xhs_search_filter(搜索关键词, 笔记类型, 排序依据,发布时间,搜索范围) {

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
    var returned = text(笔记类型).className("android.widget.TextView").findOne(500);
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



////图文函数和视频函数 执行任务结束都在笔记详情页
function video_mode(直接留言, 直接留言数组, 首评回复, 首评数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, startTime, timerDuration) {
    ////从视频页开始点开评论区
    var returned = descContains("评论").className("android.widget.Button").visibleToUser(true).focusable(true).clickable(true).findOne(1000);
    returned.click();
    sleep(random(1500, 2500));
    ///1.判断是否进入评论区
    if (textContains("条评论").exists()) {
        ////开始找客户
        if (首评回复) {
            var commentList = className("android.widget.TextView").visibleToUser(true).clickable(false).longClickable(true).focusable(true).find()
            var first_comment = commentList[0]
            if (first_comment) {
                comment_action(first_comment, 首评数组)
                sleep(random(1500, 2500))
            } else { log("首评不存在") }
        }
        else { log("首评回复功能已关闭") }
        sleep(random(1500, 2500));
        ////直接留言功能
        if (直接留言) {


            var randomIndex = Math.floor(Math.random() * 直接留言数组.length); // 生成一个随机索引
            var randomText = 直接留言数组[randomIndex]



            var returned = className("android.widget.EditText").visibleToUser(true).clickable(true).findOne(1000);
            if (returned) {
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(500);
            } else {
                toastLog("未找到评论框");
            }

            setText(randomText)
            sleep(1000 + random(500, 1000))
            var returned = text("发送").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
            if (returned) {
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(500);
                log("已评论")
            } else {
                toastLog("未找到发送键");
            }

            sleep(1000)

        } else { log("直接留言功能已关闭") }

        sleep(random(1500, 2500));


        //////找关键词客户评论区循环
        var loopVar2 = true;
        while (loopVar2) {
            sleep(random(1500, 2500));
            customer_searching(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信)
            sleep(random(1500, 2500));
            swipeAction()
            sleep(random(1500, 2500));
            ////判断见底



            var loopVar2 = find_bottom()
            var currentTime = new Date().getTime();
            if (currentTime - startTime > timerDuration) {
                log("时间到，任务结束")
                break;
            }



        }
        ////步骤4:单个视频的循环结束，此时在评论区页面需要退回到视频页
        back()
        sleep(random(1500, 2500))


    }


    else {
        log("未检测评论区,此视频无评论")
        if (直接留言) {
            var randomIndex = Math.floor(Math.random() * 直接留言数组.length); // 生成一个随机索引
            var randomText = 直接留言数组[randomIndex]
            setText(randomText)
            sleep(random(1500, 2500));
            var returned = text("发送").className("android.widget.TextView").findOne(500);
            if (returned) {
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(500);
            }


            sleep(random(1500, 2500));

        } else {
            log("未检测评论区,此视频无评论")
            log("直接留言功能已关闭")
            back()
            sleep(random(1500, 2500));
        }
        sleep(random(1500, 2500));



    }




}





function customer_searching(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组
    , 分享评论, 直接私信
) {



    ///根据评论筛选
    ////小红书的这个textView比较奇怪，当有图片时不会显示text中的IP和发布时间，而纯文字会包括IP时间和回复二字，如果有群聊跳转链接不知道会是个什么情况
    var commentList = className("android.widget.TextView").visibleToUser(true).clickable(false).longClickable(true).focusable(true).find()
    for (var i2 = 0, len2 = commentList.length; i2 < len2; i2++) {

        var comment = commentList[i2]

        if (comment) {
            if (客户关键词数组.some(item => comment.text().includes(item))) {
                var target = comment
                ////判断重复
                var target_id = target.text().substring(0, 8)
                if (!target_array.includes(target_id)) {
                    target_array.push(target_id)
                    log("目标：" + target.text())
                    action_Set(target, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 留言数组, 私信数组, 分享评论, 直接私信)
                    sleep(1000 + random(500, 1500))

                }

                ////操作完更新一下数组//防止评论导致位置错误
                var midList = longClickable(true).visibleToUser(true).
                    className("android.widget.TextView").find()

                var commentList = midList.filter(item =>
                    item &&
                    item.text() !== null &&
                    item.parent() &&
                    item.parent().children().some(child => child.className().includes("LinearLayout"))
                );


                sleep(random(500, 1500))

            } else {
                log("当前评论不包含客户关键词")
                sleep(500)/////////////这里可以搞速度设置

            }
        }
        else { log("当前comment为空,跳过") }

    }





}



function pic_mode(直接留言, 直接留言数组, 首评回复, 首评数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信, startTime, timerDuration) {

    var detector = false;
    var upperLimit = 0
    ///滑下找到评论区
    while (!detector) {
        swipeAction();/////////一般一次就足以滑到评论区,以防万一长图文问题

        detector = textContains("回复").className("android.widget.TextView").visibleToUser(true).longClickable(true).exists()
        sleep(500)
        upperLimit = upperLimit + 1

        if (upperLimit > 3) {
            log("达到达到下滑上限")
            break;
        }
    }

    if (首评回复) {
        var midList = longClickable(true).visibleToUser(true).
            className("android.widget.TextView").find()

        var commentList = midList.filter(item =>
            item &&
            item.text() !== null &&
            item.parent() &&
            item.parent().children().some(child => child.className().includes("LinearLayout")))
        var first_comment = commentList[0]

        if (first_comment) {
            comment_action_pic(first_comment, 首评数组)

            sleep(random(1500, 2500))

        }
        else { log("首评不存在") }

    } else { log("首评回复功能已关闭") }
    sleep(random(1500, 2500))
    ////////////////////直接留言功能
    if (直接留言) {


        var randomIndex = Math.floor(Math.random() * 直接留言数组.length); // 生成一个随机索引
        var randomText = 直接留言数组[randomIndex]



        var returned = className("android.widget.TextView").desc("评论框").visibleToUser(true).clickable(true).findOne(1000);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
        } else {
            toastLog("未找到评论框");
        }

        setText(randomText)
        sleep(1000 + random(500, 1000))
        var returned = text("发送").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
            log("已评论")
        } else {
            toastLog("未找到发送键");
        }

        sleep(1000)

    } else { log("直接留言功能已关闭") }
    sleep(random(1500, 2500))




    /////////判断是否有评论
    if (text("快来抢首评，点击评论").className("android.widget.TextView").exists()) {
        log("无评论页,退出")
        back()
        sleep(random(1500, 2500));
    }
    else {
        log("有评论页，开始获客触达任务")

        var loopVar2 = true;
        while (loopVar2) {
            sleep(random(1500, 2500));
            customer_searching_pic(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信)
            sleep(random(1500, 2500));
            swipeAction()
            sleep(random(1500, 2500));
            ////判断见底

            var currentTime = new Date().getTime();
            if (currentTime - startTime > timerDuration) {
                log("时间到，任务结束")
                break;
            }
            var loopVar2 = find_bottom()

        }
    }









}



function customer_searching_pic(客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信) {

    var midList = longClickable(true).visibleToUser(true).
        className("android.widget.TextView").find()

    var commentList = midList.filter(item =>
        item &&
        item.text() !== null &&
        item.parent() &&
        item.parent().children().some(child => child.className().includes("LinearLayout"))
    );

    for (var i2 = 0, len2 = commentList.length; i2 < len2; i2++) {

        var comment = commentList[i2]

        if (comment) {
            if (客户关键词数组.some(item => comment.text().includes(item))) {
                var target = comment
                ////判断重复
                var target_id = target.text().substring(0, 8)
                if (!target_array.includes(target_id)) {
                    target_array.push(target_id)
                    log("目标：" + target.text())
                    action_Set_pic(target, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 留言数组, 私信数组, 分享评论, 直接私信)
                    sleep(1000 + random(500, 1500))


                }

                ////操作完更新一下数组//防止评论导致位置错误
                var midList = longClickable(true).visibleToUser(true).
                    className("android.widget.TextView").find()

                var commentList = midList.filter(item =>
                    item &&
                    item.text() !== null &&
                    item.parent() &&
                    item.parent().children().some(child => child.className().includes("LinearLayout"))
                );


                sleep(random(500, 1500))

            } else {
                log("当前评论不包含客户关键词")
                sleep(500)/////////////这里可以搞速度设置

            }
        }
        else { log("当前comment为空,跳过") }

    }


}




function action_Set(target, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 留言数组, 私信数组, 分享评论, 直接私信) {
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



        var finalAction = simulateEvent(probArray_new_sorted, obj_entr)
        switch (finalAction) {
            case "点赞":
                likes_action(target)
                sleep(random(1500, 2500));
                break;
            case "评论":
                comment_action(target, 留言数组)
                sleep(random(1500, 2500));
                break;
            case "关注":
                follow_action(target)
                sleep(random(1500, 2500));
                break;
            case "私信":
                DM_action(target, 分享评论, 直接私信, 私信数组)
                sleep(random(1500, 2500));
                break;
            case "头像点赞":
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
            likes_action(target)
        }
        else { log("未进行点赞") }
        sleep(random(1500, 2500));
        /////////////////////////////////评论////////////////////////////////////////
        if (randomProbability(评论概率)) {
            comment_action(target, 留言数组)
        }
        else { log("未进行评论") }
        sleep(random(1500, 2500));
        /////////////////////////////////关注////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(关注概率)) {
            follow_action(target)

        }
        else { log("未进行关注") }
        sleep(random(1500, 2500));
        /////////////////////////////////头像点赞////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(头像点赞概率)) {
            profile_likes_action(target)
        } else { log("未进行头像点赞行为") }

        sleep(random(1500, 2500));
        /////////////////////////////////关注并私信////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(私信概率)) {
            DM_action(target, 分享评论, 直接私信, 私信数组)
        }
        else { log("未进行私信行为") }
        sleep(random(1500, 2500));
    }
}




function action_Set_pic(target, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 留言数组, 私信数组, 分享评论, 直接私信) {
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



        var finalAction = simulateEvent(probArray_new_sorted, obj_entr)
        switch (finalAction) {
            case "点赞":
                likes_action_pic(target)
                sleep(random(1500, 2500));
                break;
            case "评论":
                comment_action_pic(target, 留言数组)
                sleep(random(1500, 2500));
                break;
            case "关注":
                follow_action_pic(target)
                sleep(random(1500, 2500));
                break;
            case "私信":
                DM_action_pic(target, 分享评论, 直接私信, 私信数组)
                sleep(random(1500, 2500));
                break;
            case "头像点赞":
                profile_likes_action_pic(target)
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
            likes_action_pic(target)
        }
        else { log("未进行点赞") }
        sleep(random(1500, 2500));
        /////////////////////////////////评论////////////////////////////////////////
        if (randomProbability(评论概率)) {
            comment_action_pic(target, 留言数组)
        }
        else { log("未进行评论") }
        sleep(random(1500, 2500));
        /////////////////////////////////关注////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(关注概率)) {
            follow_action_pic(target)

        }
        else { log("未进行关注") }
        sleep(random(1500, 2500));
        /////////////////////////////////头像点赞////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(头像点赞概率)) {
            profile_likes_action_pic(target)
        } else { log("未进行头像点赞行为") }

        sleep(random(1500, 2500));
        /////////////////////////////////关注并私信////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(私信概率)) {
            DM_action_pic(target, 分享评论, 直接私信, 私信数组)
        }
        else { log("未进行私信行为") }
        sleep(random(1500, 2500));
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

function find_bottom() {
    if (text("- 到底了 -").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) { return false }
    else { return true }
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










////////////////////////视频行为函数///////////////////////////////////

function likes_action(target) {
    ///点赞是target的父件的并列的层级下的下一个控件也是线性布局且可点击
    var likes_button = target.parent().parent().children().filter(item => item && item.className() == "android.widget.LinearLayout" && item.clickable() == true)[0]

    ////用点赞数判断重复点赞
    var previous_number = parseInt(likes_button.children().filter(item => item && item.className() == "android.widget.TextView")[0].text())
    if (isNaN(previous_number)) { previous_number = 0 }

    likes_button.click()
    sleep(random(1500, 2500))
    var current_number = parseInt(likes_button.children().filter(item => item && item.className() == "android.widget.TextView")[0].text())
    if (isNaN(current_number)) { current_number = 0 }

    if (current_number > previous_number) {
        log("正常无取消点赞")
    }
    else if (current_number == previous_number) {
        log("点赞数相等/未点赞bug")
    }
    else {
        likes_button.click()
    }

    sleep(random(1500, 2500))
}


function comment_action(target, 留言数组) {
    target.clickCenter()
    sleep(random(1500, 2500))
    ///检测是否出现长按款,如果点到自己或者其他情况会有长按框的存在
    if (text("复制").className("android.widget.TextView").visibleToUser(true).exists()) {
        log("点击进入了长按框,可能是由于点击到了自己的评论")
        back()
        sleep(1000)
    }
    else {
        var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
        var randomText = 留言数组[randomIndex]
        setText(randomText)


        sleep(random(1500, 2500))
        var returned = text("发送").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
            log("已评论")
        } else {
            toastLog("未找到发送键");
        }
        sleep(random(1500, 2500))
    }
}


function follow_action(target) {
    ///找用户名：target的父控件的线性不可点击的子控件
    var idName = target.parent().children().filter(item => item && item.className() == "android.widget.LinearLayout" && item.clickable() == false)[0].children()[0]
    idName.click()
    //判断是否进入
    sleep(random(1500, 2500))
    if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
        var returned = text("关注").className("android.widget.Button").clickable(true).findOne(500);
        if (returned) {
            returned.click()
            log("已点击关注")
        }
        else { log("已关注用户") }

        back()
        sleep(random(1500, 2500))
    }

}


function DM_action(target, 分享评论, 直接私信, 私信数组) {
    ///找用户名：target的父控件的线性不可点击的子控件
    var idName = target.parent().children().filter(item => item && item.className() == "android.widget.LinearLayout" && item.clickable() == false)[0].children()[0]
    idName.click()
    //判断是否进入
    sleep(random(1500, 2500))
    if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {


        var returned = text("关注").className("android.widget.Button").clickable(true).findOne(500);


        if (returned) {
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
            var returned = text("发消息").className("android.widget.Button").findOne(500);
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


function profile_likes_action(target) {
    ///找用户名：target的父控件的线性不可点击的子控件
    var idName = target.parent().children().filter(item => item && item.className() == "android.widget.LinearLayout" && item.clickable() == false)[0].children()[0]
    idName.click()

    ///判断是否进入
    sleep(random(1500, 2500))
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
                log("无头像点赞");
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
////////////////////////////////////////////////////////////////////


////////////////////////图文行为函数//////////////////////////////////////////////
function likes_action_pic(target) {

    var likes_button = target.parent().parent().children().filter(item => item && item.className() == "android.widget.Button")[0]
    var previous_number = parseInt(likes_button.children().filter(item => item && item.className() == "android.widget.TextView")[0].text())
    if (isNaN(previous_number)) { previous_number = 0 }

    likes_button.click()

    sleep(random(1500, 2500))
    var current_number = parseInt(likes_button.children().filter(item => item && item.className() == "android.widget.TextView")[0].text())
    if (isNaN(current_number)) { current_number = 0 }


    if (current_number > previous_number) {
        log("正常无取消点赞")
    }
    else if (current_number == previous_number) {
        log("点赞数相等/未点赞bug")
    }
    else {
        likes_button.click()
    }

    sleep(random(1500, 2500))
}
function comment_action_pic(target, 留言数组) {
    ////评论
    target.clickCenter()
    sleep(random(1500, 2500))
    ///检测是否出现长按款,如果点到自己或者其他情况会有长按框的存在
    if (text("复制").className("android.widget.TextView").visibleToUser(true).exists()) {
        log("点击进入了长按框,可能是由于点击到了自己的评论")
        back()
        sleep(1000)
    }
    else {
        var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
        var randomText = 留言数组[randomIndex]
        setText(randomText)

        sleep(random(1500, 2500))
        var returned = text("发送").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(500);
            log("已评论")
        } else {
            toastLog("未找到发送键");
        }
    }

    sleep(random(1500, 2500))



}


function DM_action_pic(target, 分享评论, 直接私信, 私信数组) {
    var profile_pic = target.parent().parent().children().filter(item => item && item.className() == "android.widget.FrameLayout")[0]
    profile_pic.click()
    /////////////////此时已进入主页/////////////////////////
    sleep(random(1500, 2500))
    if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
      
   

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



function profile_likes_action_pic(target) {

    var profile_pic = target.parent().parent().children().filter(item => item && item.className() == "android.widget.FrameLayout")[0]

    profile_pic.click()

    ///判断是否进入
    sleep(random(1500, 2500))
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
                log("无头像点赞");
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


function follow_action_pic(target) {

    var profile_pic = target.parent().parent().children().filter(item => item && item.className() == "android.widget.FrameLayout")[0]

    profile_pic.click()
    //判断是否进入
    sleep(random(1500, 2500))
    if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
        var returned = text("关注").className("android.widget.Button").clickable(true).findOne(500);
        if (returned) {
            returned.click()
            log("已点击关注")
        }
        else { log("已关注用户") }

        back()
        sleep(random(1500, 2500))
    }

}
////////////////////////////////////////////////////////////////////////////////////////////
module.exports = HK_XHS_JL



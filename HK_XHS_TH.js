// ////同行粉丝触达
// ///找同行方式1.搜索行业关键词点卡笔记
// ///找同行方式2.直接找同行用户里找
// var 搜索关键词 = "创业"
// var 运行时长 = 2
// var 查找方式 = "笔记查找/用户查找"
// var 同行用户查找 = false
// var 内容形式 = "图文"
// var 排序依据 = "最热"
var 小红书号数组1 = [] ///同行识别
var 小红书号数组2 = [] ///目标头像点赞识别
var 小红书号数组3 = [] ///目标背景点赞识别
var target_name_array = [] ///目标名称识别
// var 单一行为 = true //是否单一行为模式
// var 背景点赞概率 = 100 //背景点赞概率
// var 关注概率 = 0 //关注概率
// var 私信概率 = 0 //私信概率
// var 头像点赞概率 = 0 //头像点赞概率
// var 私信数组 = ["李楠？", "张楠?"] //私信内容数组

var HK_XHS_TH = {};

HK_XHS_TH.Main = function main(搜索关键词, 笔记类型, 排序依据, 发布时间, 搜索范围, 运行时长, 查找方式, 单一行为, 背景点赞概率, 关注概率, 私信概率, 头像点赞概率, 私信数组) {
    /////////////////////////////////////////////常规启动步骤///////////////////////////////////////////////////////
    text("购物").className("android.widget.TextView").untilFind();
    log("已进入小红书，将执行任务");
    sleep(random(1500, 2500))
    Xhs_search_filter(搜索关键词, 笔记类型, 排序依据, 发布时间, 搜索范围)



    //////////////////////////////////////////////按内容找同行粉丝/////////////////////////////////////////////////////////////
    ///1.外部计时
    var loopVar1 = true;
    var startTime = new Date().getTime();
    var timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒



    while (loopVar1) {
        log("开始同行粉丝触达")
        sleep(random(1500, 2500))
        if (查找方式 == "用户查找") {
            user_leads(单一行为, 背景点赞概率, 关注概率, 私信概率,头像点赞概率,私信数组,startTime, timerDuration)
        }
        else {

            content_leads(单一行为, 背景点赞概率, 关注概率, 私信概率,头像点赞概率,私信数组,startTime, timerDuration)
        }
        sleep(random(1500, 2500))
        swipeAction()




        var currentTime = new Date().getTime();
        var loopVar1 = bigloop(currentTime, startTime, timerDuration)



    }
    home()
    log("任务结束,本次共找到" + 小红书号数组1.length + "个同行，触达" + target_name_array + "个同行的粉丝")

}


// let startTime = new Date().getTime();
// let timerDuration = 运行时长 * 60 * 1000



// user_leads()




function Xhs_search_filter(搜索关键词, 笔记类型, 排序依据, 发布时间, 搜索范围) {

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


    ///////////
    var returned = text(排序依据).className("android.widget.TextView").findOne(500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    }
    ///////////图文内容触达
    var returned = text(笔记类型).className("android.widget.TextView").findOne(500);
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





///根据用户名称进行粉丝触达
function user_leads(单一行为, 背景点赞概率, 关注概率, 私信概率,头像点赞概率,私信数组,startTime, timerDuration) {
    var returned = text("用户").className("android.widget.TextView").indexInParent(0).findOne(800);

    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
    } else {
        log("未找到用户选项");
    }
    sleep(random(1500, 2500))

    var returnedList1 = className("androidx.recyclerview.widget.RecyclerView").visibleToUser(true).findOne(1500).children().filter(item => item && item.className() == "android.widget.RelativeLayout");
    if (!returnedList1.length == 0) {

        for (var i1 = 0, len1 = returnedList1.length; i1 < len1; i1++) {
            console.log(i1);
            var returned = returnedList1[i1];
            returned.click()
            sleep(random(1000, 1500));




            //////////////////////////////////////////////进入详情页后找人/////////////////////////////////////////////////////////////////////////
            log("进入同行个人详情页")
            ///划入个人主页
            sleep(500 + random(1000, 2000))
            ///////////////////判断是否在之前任务中有访问过
            if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
                ///获得当前xhs号判断是否进入过该同行
                var returned = textContains("小红书号").className("android.widget.TextView").findOne(1500);
                var xhs_text = returned.text()
                var regex = /\d+/; // \d 表示数字，+ 表示一个或多个
                var XHS_Id = xhs_text.match(regex)[0];
                if (!小红书号数组1.includes(XHS_Id)) {
                    小红书号数组1.push(XHS_Id)
                    log("未访问的同行，粉丝触达开始操作")
                    var returned = text("粉丝").className("android.widget.TextView").findOne(1500);
                    returned.clickCenter()
                    sleep(random(1500, 2500))


                    ////判断该用户是否隐藏粉丝
                    if (desc("推荐").className("android.view.ViewGroup").clickable(false).exists()) {

                        /////////////////////////////////////////////小循环，直到触底或者时间到////////////////////////////////////////////////////
                        var loopVar2 = true
                        while (loopVar2) {
                            ///老版本遗留
                            // ////关闭感兴趣的人按钮
                            // var returned = text("关闭").className("android.widget.Button").clickable(true).visibleToUser(true).findOne(1500)
                            // if (returned) {
                            //     returned.click()
                            //     log("关闭感兴趣的人按钮成功")
                            // } else {
                            //     log("没有找到关闭感兴趣的人按钮")
                            // }
                            // //////关闭看看有没有展开全部按钮
                            // var returned = text("查看全部").className("android.widget.TextView").clickable(false).visibleToUser(true).findOne(1500)
                            // if (returned) {
                            //     returned.parent().click()
                            //     log("展开全部按钮成功")
                            // }

                            // else {
                            //     log("没有找到展开全部按钮")
                            // }
                            ///////////寻找粉丝列表
                            var scroll_list = idContains("xhs").className("androidx.recyclerview.widget.RecyclerView").visibleToUser(true).find()
                            try {///要是没有粉丝children()会报错
                                var target_list = scroll_list.filter(item => item && item.children() && item.children()[0].className() == "android.widget.LinearLayout")[0].
                                    children().filter(item => item && item.className() == "android.widget.LinearLayout")
                                var target1 = target_list[0];
                                var target_name = target1.children()[0].children()[1].children()[0].text()
                            }
                            catch (e) {
                                log(e)
                                log("该用户没有粉丝，退出循环")
                                break;
                            }
                            /////执行到这步就说明有粉丝可以执行了,target_list必然存在
                            log("任务开始")

                            for (var i2 = 0, len2 = target_list.length; i2 < len2; i2++) {
                                var target = target_list[i2];
                                if (target) {
                                    var target_name = target.children()[0].children()[1].children()[0].text()
                                    log("当前用户ID为:" + target_name)
                                    if (!target_name_array.includes(target_name)) {


                                        action_set(单一行为, 背景点赞概率, 关注概率, 私信概率, 头像点赞概率, 私信数组, target)
                                        target_name_array.push(target_name)
                                    }
                                    else { log("重复用户，跳过") }
                                }
                                else {
                                    log("该用户没有粉丝")
                                    break;
                                }

                            }







                            sleep(1000)
                            log("任务结束")
                            ///loopvar1判断是否跳出循环
                            var currentTime = new Date().getTime();
                            var loopVar1 = bigloop(currentTime, startTime, timerDuration)
                            if (loopVar1 == false) {
                                log("时间到，退出任务")
                                break;
                            }


                            //////记录第一个粉丝的名字便于停止循环
                            var first_user_name = target_list[0].children()[0].children()[1].children().filter(item => item && item.className() == "android.widget.TextView")[0].text()
                            swipeAction()
                            sleep(1000)
                            var loopVar2 = find_bottom(first_user_name)


                        }
                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        log("同行粉丝触达结束")
                        back()
                        sleep(random(1500, 2500))
                        back()
                        sleep(random(1500, 2500))
                    }
                    else {
                        log("该用户隐藏粉丝，跳过该同行粉丝触达")

                        back()
                        sleep(random(1500, 2500))
                    }


                }
                else {
                    log("已访问过该同行，跳过该同行粉丝触达")
                    back()
                    sleep(random(1500, 2500));
                    back()
                    sleep(random(1500, 2500));
                }
            }

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
            var currentTime = new Date().getTime();
            var loopVar1 = bigloop(currentTime, startTime, timerDuration)
            if (loopVar1 == false) {
                log("时间到，退出任务")
                break;
            }
        }

        sleep(random(1500, 2500));


    } else {
        log("未搜索到相关同行用户")

    }



}

///根据内容进行粉丝触达
function content_leads(单一行为, 背景点赞概率, 关注概率, 私信概率,头像点赞概率,私信数组,startTime, timerDuration) {

    var returnedList1 = className("android.widget.FrameLayout").clickable(true).longClickable(true).find();

    if (!returnedList1.empty()) {

        for (var i1 = 0, len1 = returnedList1.length; i1 < len1; i1++) {
            console.log(i1);
            var returned = returnedList1[i1];
            returned.click()
            sleep(random(1000, 1500));

            //////////////////////////////////////////////进入详情页后找人/////////////////////////////////////////////////////////////////////////
            log("进入内容详情页")
            ///划入个人主页
            var share_button = desc("分享").className("android.widget.Button").clickable(true).findOne(2500);
            swipeAction_RTL(share_button)
            sleep(500 + random(1000, 2000))
            ///////////////////判断是否在之前任务中有访问过
            if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
                ///获得当前xhs号判断是否进入过该同行
                var returned = textContains("小红书号").className("android.widget.TextView").findOne(1500);
                var xhs_text = returned.text()
                var regex = /\d+/; // \d 表示数字，+ 表示一个或多个
                var XHS_Id = xhs_text.match(regex)[0];
                if (!小红书号数组1.includes(XHS_Id)) {
                    小红书号数组1.push(XHS_Id)
                    log("未访问的同行，粉丝触达开始操作")
                    var returned = text("粉丝").className("android.widget.TextView").findOne(1500);
                    returned.clickCenter()
                    sleep(random(1500, 2500))


                    ////判断该用户是否隐藏粉丝
                    if (desc("推荐").className("android.view.ViewGroup").clickable(false).exists()) {

                        /////////////////////////////////////////////小循环，直到触底////////////////////////////////////////////////////
                        var loopVar2 = true
                        while (loopVar2) {
                            ////老版本遗留
                            // ////关闭感兴趣的人按钮
                            // var returned = text("关闭").className("android.widget.Button").clickable(true).visibleToUser(true).findOne(1500)
                            // if (returned) {
                            //     returned.click()
                            //     log("关闭感兴趣的人按钮成功")
                            // } else {
                            //     log("没有找到关闭感兴趣的人按钮")
                            // }
                            // //////关闭看看有没有展开全部按钮
                            // var returned = text("查看全部").className("android.widget.TextView").clickable(false).visibleToUser(true).findOne(1500)
                            // if (returned) {
                            //     returned.parent().click()
                            //     log("展开全部按钮成功")
                            // }

                            // else {
                            //     log("没有找到展开全部按钮")
                            // }




                            log("已进入粉丝列表，任务开始")
                            ///////////寻找粉丝列表
                            var scroll_list = idContains("xhs").className("androidx.recyclerview.widget.RecyclerView").visibleToUser(true).find()
                            try {///要是没有粉丝children()会报错
                                var target_list = scroll_list.filter(item => item && item.children() && item.children()[0].className() == "android.widget.LinearLayout")[0].
                                    children().filter(item => item && item.className() == "android.widget.LinearLayout")
                                var target1 = target_list[0];
                                var target_name = target1.children()[0].children()[1].children()[0].text()

                            }
                            catch (e) {
                                log(e)
                                log("该用户没有粉丝，退出循环")
                                break;
                            }
                            /////执行到这步就说明有粉丝可以执行了,target_list必然存在


                            for (var i2 = 0, len2 = target_list.length; i2 < len2; i2++) {

                                var target = target_list[i2];
                                ////如果单一模式打开只会进行曝光行为的一种

                                var target_name = target.children()[0].children()[1].children()[0].text()

                                log("当前用户ID为:" + target_name)
                                if (!target_name_array.includes(target_name)) {
                                    action_set(单一行为, 背景点赞概率, 关注概率, 私信概率, 头像点赞概率, 私信数组, target)
                                    target_name_array.push(target_name)

                                }
                                else { log("重复用户，跳过") }
                            }
                            sleep(1000)
                            var currentTime = new Date().getTime();
                            var loopVar1 = bigloop(currentTime, startTime, timerDuration)
                            if (loopVar1 == false) {
                                log("时间到，退出任务")
                                break;
                            }


                            //////记录第一个粉丝的名字便于停止循环
                            var first_user_name = target_list[0].children()[0].children()[1].children().filter(item => item && item.className() == "android.widget.TextView")[0].text()
                            swipeAction()
                            sleep(1000)
                            var loopVar2 = find_bottom(first_user_name)
                        }
                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        log("同行粉丝触达结束")
                        back()
                        sleep(random(1500, 2500))
                        back()
                        sleep(random(1500, 2500))
                        back()
                        sleep(random(1500, 2500))
                    }
                    else {
                        log("该用户隐藏粉丝，跳过该同行粉丝触达")
                        back()
                        sleep(random(1500, 2500))
                        back()
                        sleep(random(1500, 2500))
                    }


                }
                else {
                    log("已访问过该同行，跳过该同行粉丝触达")
                    back()
                    sleep(random(1500, 2500));
                    back()
                    sleep(random(1500, 2500));
                }
            }

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
            var currentTime = new Date().getTime();
            var loopVar1 = bigloop(currentTime, startTime, timerDuration)

            if (currentTime - startTime >= timerDuration) {
                log("时间到，退出任务")
                break;
            }


        }

        sleep(random(1500, 2500));




    } else {
        log("未搜索到笔记内容")

    }


}










/////////////////////////////////////////////////////函数////////////////////////////////////////////////////////////

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


function swipeAction_RTL(share_button) {

    var X1 = device.width * 0.8; // 起始点X坐标，屏幕宽度的一半
    var Y1 = share_button.bounds().centerY()

    var X2 = device.width * 0.2; // 结束点X坐标，向左滑动300像素
    var Y2 = Y1 + random(-5, +5); // 结束点Y坐标保持不变
    var duration1 = random(0.5, 0.8) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(1000, 2000)

}


function randomProbability(probability) {
    return Math.random() * 100 < probability;
}




function find_bottom(first_user_name) {

    var scroll_list = idContains("xhs").className("androidx.recyclerview.widget.RecyclerView").visibleToUser(true).find()

    var current_target_list = scroll_list.filter(item => item && item.children() && item.children()[0].className() == "android.widget.LinearLayout")[0].
        children().filter(item => item && item.className() == "android.widget.LinearLayout")

    var current_first_user_name = current_target_list[0].children()[0].children()[1].children().filter(item => item && item.className() == "android.widget.TextView")[0].text()


    log(current_first_user_name)
    log(first_user_name)
    if (current_first_user_name !== first_user_name) { return true }
    else { return false }




}




function action_set(单一行为, 背景点赞概率, 关注概率, 私信概率, 头像点赞概率, 私信数组, target) {

    if (单一行为 == true) {
        probArray = [背景点赞概率, 关注概率, 私信概率, 头像点赞概率];
        let sum = probArray.reduce((a, b) => a + b, 0);


        let 背景点赞概率_new = 背景点赞概率 / sum
        let 关注概率_new = 关注概率 / sum
        let 私信概率_new = 私信概率 / sum
        let 头像点赞概率_new = 头像点赞概率 / sum
        let obj = { "背景点赞": 背景点赞概率_new, "关注": 关注概率_new, "私信": 私信概率_new, "头像点赞": 头像点赞概率_new }
        let obj_entr = Object.entries(obj)
        probArray_new = [背景点赞概率_new, 关注概率_new, 私信概率_new, 头像点赞概率_new];
        probArray_new_sorted = probArray_new.sort(function (a, b) { return a - b });

        var finalAction = simulateEvent(probArray_new_sorted, obj_entr)
        switch (finalAction) {
            case "背景点赞":
                log("执行背景点赞行为")
                backgroud_likes_action(target)

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
        sleep(random(1500, 2500))



    }

    else {

        ///////////////////////////////////////////////////曝光行为////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////点赞///////////////////////////////////////////
        //29.40的喜欢组件是个linearLayout 筛选LinearLayout
        if (randomProbability(背景点赞概率)) {
            log("执行背景点赞行为")
            backgroud_likes_action(target)
        }
        else { log("未进行背景点赞") }

        sleep(random(1500, 2500))
        /////////////////////////////////关注////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(关注概率)) {
            log("执行关注行为")
            follow_action(target)

        }
        else { log("未进行关注") }


        sleep(random(1500, 2500))
        /////////////////////////////////私信////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(私信概率)) {
            log("执行私信行为")
            DM_action(target, 私信数组)
        }
        else { log("未进行私信行为") }
        sleep(random(1500, 2500))

        /////////////////////////////////头像点赞////////////////////////////////////////
        //////找到目标头像
        if (randomProbability(头像点赞概率)) {
            log("执行头像点赞行为")
            profile_likes_action(target)
        } else { log("未进行头像点赞行为") }

        sleep(random(1500, 2500))

    }

}









/////行为函数
function follow_action(target) {
    try {
        var follow_button = target.children()[0].children()[2].children()[0].children()[0]
        if (follow_button.children()[0].text() == "关注") {
            follow_button.click()
            sleep(random(1500, 2500))
        }
        else if (follow_button.children()[0].text() == "已关注") {
            log("已关注用户")
            sleep(random(1500, 2500))
        }
        else {
            log("未找到关注按钮")
            sleep(random(1500, 2500))
        }
    }
    catch (e) {
        log(e + "关注失败")
    }
}

function profile_likes_action(target) {

    /////进入主页
    click(target.bounds().centerX() + random(-5, 5), target.bounds().centerY() + random(-5, 5));
    sleep(random(1500, 2500));


    if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
        ///获得当前xhs号判断是否点过赞
        var returned = textContains("小红书号").className("android.widget.TextView").findOne(500);
        var xhs_text = returned.text()

        // 使用正则表达式匹配文本中的数字
        var regex = /\d+/; // \d 表示数字，+ 表示一个或多个
        var XHS_Id = xhs_text.match(regex)[0];

        ////为避免重复点赞需要通过小红书号判断是否已经点赞过
        ///如果小红书号数组中不包括在当前XHS_id则进行点赞
        if (!小红书号数组2.includes(XHS_Id)) {

            var returned = className("android.view.View").descContains("头像").clickable(true).visibleToUser(true).findOne(1000);
            returned.click()
            sleep(random(1500, 2500))
            var returned = text("点赞").className("android.widget.TextView").findOne(500);
            if (returned) {
                returned.clickCenter();
                sleep(500);
            } else {
                log("点赞");
            }

            小红书号数组2.push(XHS_Id)
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




    } else {
        log("未找到小红书号,可能由于目标账号封禁,出现异常")
        back()
        sleep(random(1500, 2500))
    }




}


function backgroud_likes_action(target) {
    /////进入主页
    click(target.bounds().centerX() + random(-5, 5), target.bounds().centerY() + random(-5, 5));
    sleep(random(1500, 2500));


    if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
        var returned = textContains("小红书号").className("android.widget.TextView").findOne(500);
        var xhs_text = returned.text()

        // 使用正则表达式匹配文本中的数字
        var regex = /\d+/; // \d 表示数字，+ 表示一个或多个
        var XHS_Id = xhs_text.match(regex)[0];

        ////为避免重复点赞需要通过小红书号判断是否已经点赞过
        ///如果小红书号数组中不包括在当前XHS_id则进行点赞
        if (!小红书号数组3.includes(XHS_Id)) {
            小红书号数组3.push(XHS_Id)
            log("进入背景点赞")
            var returned = desc("返回").className("android.widget.ImageView").clickable(true).visibleToUser(true).findOne(1500);
            click(device.width * 0.5 + random(-5, 5), returned.bounds().centerY() + random(-5, 5));

            sleep(random(1000, 1500))
            var returned = text("点赞").className("android.widget.TextView").findOne(1500);
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(random(1500, 2500))


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

    } else {
        log("未找到小红书号,可能由于目标账号封禁,出现异常2 ")
        back()
        sleep(random(1500, 2500))
    }





}



function DM_action(target, 私信数组) {
    ///找用户名：target的父控件的线性不可点击的子控件
    click(target.bounds().centerX() + random(-5, 5), target.bounds().centerY() + random(-5, 5));
    sleep(random(1500, 2500));
    //判断是否进入
    sleep(random(1500, 2500))
    if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {


        var returned = text("关注").className("android.widget.Button").clickable(true).findOne(1000);
        var returned2 = text("回关").className("android.widget.Button").clickable(true).findOne(500);
        ////////////////////判断是否已关注
        if (returned || returned2) {
            log("未关注用户点击聊天框")
            var returned = desc("发消息").className("android.widget.ImageView").clickable(true).findOne(500);
            returned.click()


            sleep(random(1500, 2500))


            var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
            var randomText = 私信数组[randomIndex]
            setText(randomText)
            sleep(random(1500, 2500))
            var send2 = text("发送").className("android.widget.TextView").find().filter(item => item && item.parent().className() == "android.widget.RelativeLayout")[0]
            send2.click()

            sleep(random(1500, 2500))

        }

        else {
            log("已关注用户")
            var returned = textContains("发").className("android.widget.Button").visibleToUser(true).findOne(500);
            returned.click()

            sleep(random(1500, 2500))

            var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
            var randomText = 私信数组[randomIndex]
            setText(randomText)
            sleep(random(1500, 2500))
            var send2 = text("发送").className("android.widget.TextView").find().filter(item => item && item.parent().className() == "android.widget.RelativeLayout")[0]
            send2.click()

            sleep(random(1500, 2500))

        }

        back()
        sleep(random(1500, 2500))
        back()
        sleep(random(1500, 2500))


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




module.exports = HK_XHS_TH

var YH_XHS = {}
// app.launchApp("小红书");

var 运行时长 = 2 ///分钟
var 单个视频最小时长 = 2
var 单个视频最大时长 = 20
var 留言数组 = ["老铁马住", "666", "mark"]
var 作品评论概率 = 100
var 作者关注概率 = 100
var 作品点赞概率 = 100
var 访问作者主页概率 = 100

// XHS_mode(运行时长, 单个视频最小时长, 单个视频最大时长,
//     留言数组, 作品评论概率, 作者关注概率,
//     作品点赞概率, 访问作者主页概率)


YH_XHS.XHS_Main = function XHS_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
    留言数组, 作品评论概率, 作者关注概率,
    作品点赞概率, 访问作者主页概率) {
    sleep(1000)

    let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
    //// 获取当前时间
    let startTime = new Date().getTime();

    log("已进入小红书，将执行任务");
    // var returned = text("发现").className("android.widget.TextView").untilFind();
    
    
    // returned[0].parent().click()
    // log("点击发现");

    // sleep(1000)
    // this.swipeAction_Reverse()
    // var returned = desc("短剧").className("android.view.ViewGroup").visibleToUser(true).clickable(false).untilFind();
    // returned[0].parent().click()

    // 点击热门
    log("点击热门");
    var returned = text("热门").className("android.widget.TextView").findOne();
    returned.parent().click();
    sleep(1000);
    
    // 搜索香港视频
    // log("搜索香港视频");
    // var returned = desc("搜索").className("android.widget.Button").clickable(true).findOne();
    // returned.click();
    // sleep(1000);
    // var returned = textContains("搜索,").className("android.widget.EditText").findOne();
    // returned.setText("香港视频");
    // sleep(1000);
    // var returned = text("搜索").className("android.widget.Button").clickable(true).findOne();
    // returned.click();

    
    log("刷新");
    // 刷新
    // sleep(1000)
    this.swipeAction_Reverse()
    sleep(1000);
    
    // 点击有播放图标的帖子
    // var returned = className("android.widget.ImageView").packageName("com.xingin.xhs").depth(13).untilFind();
    // // Print the length of the returned array
    // log("Length of returned array: " + returned.length);
    // var rn = Math.floor(random(0, returned.length))
    // returned[rn].parent().parent().click();

    // sleep(1500 + random(300, 500))
    // var returned = descContains("视频").find();
    
    

    // // Loop through each element in the returned array
    // for (var i = 0; i < returned.length; i++) {
    //     // Assuming each element has a property called 'text' you want to log
    //     log("Property of returned[" + i + "]: " + returned[i].parent().text());
    //     if (returned[i].clickable()){
    //         log("Click: " + i)
    //         returned[i].click();
    //         break;
    //     }

        
    // }
    // /随机打开视频
    // var rn = Math.floor(random(0, 3))
    // returned[rn].parent().click()


    var id = setInterval(() => {
        log("执行小红书养号任务-正在观看视频");
        this.task_XHS_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率);
        // 检查是否达到总运行时间
        var currentTime = new Date().getTime();

        if ((currentTime - startTime) >= timerDuration) {
            console.log("达到总运行时长，跳出程序");
            home();
            clearInterval(id);

        }

    }, Math.round((Math.random() * (单个视频最大时长 - 单个视频最小时长 + 1) + 单个视频最小时长)) * 1000);
}


/////行为
YH_XHS.task_XHS_YH_actions = function task_XHS_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率) {

    ///点赞
    if (this.randomProbability(作品点赞概率)) {

        let centerX = device.width / 2;
        let centerY = device.height / 2;
        // 设置点击延迟，例如500毫秒（半秒）
        let clickDelay = 130;//+-
        // 执行第一次点击
        click(centerX + random(-5, +5), centerY + random(-5, +5));
        sleep(clickDelay + random(-3, 3)); // 等待指定的延迟时间
        // 执行第二次点击
        click(centerX + random(-2, +2), centerY + random(-2, +2));
        log("已点赞")
    }
    else { log("未点赞") }


sleep(2000+random(500,1000))

    ///评论
    if (this.randomProbability(作品评论概率)) {

        var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
        var randomText = 留言数组[randomIndex]


        var returned = descContains("评论").className("android.widget.Button").visibleToUser(true).focusable(true).clickable(true).findOne(1000);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(1500);
        } else {
            toastLog("未找到评论");
        }

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
        back()
    } else { log("未评论") }

sleep(2000+random(500,1000))
    /////关注
    if (this.randomProbability(作者关注概率)) {
        var startX = device.width / 1.5; // 起始点X坐标，屏幕宽度的一半
        var startY = device.height / 2; // 起始点Y坐标，屏幕高度的一半
        var endX = random(5, 30); // 结束点X坐标，向左滑动300像素
        var endY = startY + random(2, 15); // 结束点Y坐标保持不变
        var duration = 1000 + random(-500, 5); // 滑动持续时间，单位为毫秒
        
        // 执行滑动操作
        swipe(startX, startY, endX, endY, duration);

        sleep(duration + random(1000, 1500))
        if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
            log("已进入个人页")
            var returned = text("关注").className("android.widget.Button").clickable(true).visibleToUser(true).findOne(500);
            if (returned) {
                returned.click();
                sleep(duration);
                log("已点击关注")
                if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) { back() 
                    log("已退出回视频") }
                
            } else {
                log("无关注键,或者已关注的作者");
                sleep(random(500, 1000))
                back()
            }
        }
        else{log("没找到小红书号")}
    }
    else { log("未进行关注动作") }

sleep(2000+random(500,1000))
    ////访问

    

    if (this.randomProbability(访问作者主页概率)) {
        var startX = device.width / 1.5; // 起始点X坐标，屏幕宽度的一半
        var startY = device.height / 2; // 起始点Y坐标，屏幕高度的一半
        var endX = random(5, 30); // 结束点X坐标，向左滑动300像素
        var endY = startY + random(2, 15); // 结束点Y坐标保持不变
        var duration = 300 + random(200, 300); // 滑动持续时间，单位为毫秒

        // 执行滑动操作
        swipe(startX, startY, endX, endY, duration);

        sleep(duration + random(1000, 1500))
        back()
        log("已访问")
        if (textContains("小红书号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) { back() }

    }
    else { log("未访问作者") }



    sleep(500+random(500, 1000))
    this.swipeAction()
}


///////////////共用函数
YH_XHS.swipeAction = function swipeAction() {
    var X1 = device.width / 2; // 起始点X坐标，屏幕宽度的一半
    var Y1 = (device.height / 1.5) + random(-10, 10); // 起始点Y坐标，屏幕高度的一半
    var X2 = X1 + random(-5, +5); // 结束点X坐标，向左滑动300像素
    var Y2 = random(5, 20); // 结束点Y坐标保持不变
    var duration1 = random(0.5, 0.7) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(3000);

}


//概率函数
YH_XHS.randomProbability =  function randomProbability(probability) {
    return Math.random() * 100 < probability;
}


YH_XHS.swipeAction_Reverse = function swipeAction_Reverse() {
    var X1 = device.width / 2 + random(-2, 2); // 起始点X坐标，屏幕宽度的一半
    var Y1 = (device.height / 2) + random(-10, 10); // 起始点Y坐标，屏幕高度的一半
    var X2 = X1 + random(-5, +5); // 结束点X坐标，向左滑动300像素
    var Y2 = device.height - random(50, 100); // 结束点Y坐标保持不变
    var duration1 = random(0.5, 0.8) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(3000);
}


module.exports = YH_XHS
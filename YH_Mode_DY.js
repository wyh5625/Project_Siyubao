
var YH_DY = {};

YH_DY.DY_Main = function DY_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
    留言数组, 作品评论概率, 作者关注概率,
    作品点赞概率, 访问作者主页概率) {



    text("推荐").className("android.widget.TextView").visibleToUser(true).untilFind()
    log("已进入抖音，开始执行养号任务")

    // 设置定时器，例如 10 秒后结束
    let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒

    // 获取当前时间
    let startTime = new Date().getTime();

    var id = setInterval(() => {
        log("执行抖音养号任务-正在观看视频");

        var returned = text("以后再说").className("android.widget.Button").clickable(true).visibleToUser(true).findOne(500);
        if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(1000);
            toastLog("检测到更新，已点击取消")
        }

        this.task_DY_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率);
        // 检查是否达到总运行时间
        var currentTime = new Date().getTime();

        if ((currentTime - startTime) >= timerDuration) {
            console.log("达到总运行时长，跳出程序");
            home();
            clearInterval(id);

        }
    }, Math.round((Math.random() * (单个视频最大时长 - 单个视频最小时长 + 1) + 单个视频最小时长)) * 1000);
}


////////////////////////////////////////////////////函数集合//////////////////////////////////////////////////

YH_DY.task_DY_YH_actions = function task_DY_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率) {
    //////////////点赞
    if (this.randomProbability(作品点赞概率)) {
        try{
        var returned = descContains("点赞，喜欢").visibleToUser(true).findOne(1000);
        returned.clickCenter();
        log("已点赞")}
        catch(e){log(e+"未找到点赞按钮")}
    }
    else { log("未点赞") };
    sleep(random(1000, 3000))

    /////////////评论
    if (this.randomProbability(作品评论概率)) {
        try{
        var returned = descContains("评论").classNameContains("android.widget.LinearLayout").clickable(true).visibleToUser(true).findOne(1000);
        returned.click()

        var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
        var randomText = 留言数组[randomIndex]
        sleep(1000)
        var returned = classNameContains("android.widget.EditText").checked(false).selected(false).enabled(true).untilFind();
        returned.click()

        setText(randomText)

        sleep(2000) 
        var returned = text("发送").classNameContains("android.widget.TextView").checked(false).selected(false).enabled(true).findOne(3000);  
        returned.parent().click()
        sleep(2000)
        back()
        log("已评论")
        }
        catch(e){log(e+"评论行为出错")}
    }

    else { log("未评论") };

    sleep(2500)
    /////////////////关注
    if (this.randomProbability(作者关注概率)) {
        var returned = desc("关注").className("android.widget.Button").clickable(true).visibleToUser(true).findOne(1000); 
        try{
        var target = returned.children()[0]
        target.clickCenter()
        log("已关注")}
        catch(e){log(e+"未找到关注按钮,可能是已经关注的人")}
    }
    else { log("未关注") };
    sleep(2500)
    ////////////////访问
    if (this.randomProbability(访问作者主页概率)) {
        // 滑动参数设置
        var startX = device.width / 1.5; // 起始点X坐标，屏幕宽度的一半
        var startY = device.height / 2; // 起始点Y坐标，屏幕高度的一半
        var endX = 0; // 结束点X坐标，向左滑动300像素
        var endY = startY; // 结束点Y坐标保持不变
        var duration = 800; // 滑动持续时间，单位为毫秒

        // 执行滑动操作
        swipe(startX, startY, endX, endY, duration);
        sleep(3000);
        back()
        log("已访问")
    }
    else { log("未访问") };
    sleep(2500)

    var X1 = device.width / 2; // 起始点X坐标，屏幕宽度的一半
    var Y1 = device.height / 2; // 起始点Y坐标，屏幕高度的一半
    var X2 = X1; // 结束点X坐标，向左滑动300像素
    var Y2 = 0; // 结束点Y坐标保持不变
    var duration1 = 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(3000);



};


YH_DY.randomProbability = function randomProbability(probability) {
    return Math.random() * 100 < probability;
}

module.exports = YH_DY;
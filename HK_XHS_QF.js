
var HK_XHS_QF = {}
// app.launchApp("小红书");

var 运行时长 = 2 ///分钟
var 单个视频最小时长 = 2
var 单个视频最大时长 = 20
var 留言数组 = ["老铁马住", "666", "mark"]
var 作品评论概率 = 100
var 作者关注概率 = 100
var 作品点赞概率 = 100
var 访问作者主页概率 = 100


HK_XHS_QF.Main = function XHS_QF_Main(发送文字, 发送图片, 文字内容, 群检测, 发送间隔, 群发送概率, 群列表_QF) {
    
    if (!群检测 && 群列表_QF.length === 0){
        toastLog("群列表为空！请打开群扫描");
        return 群列表_QF;
    }

    let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
    //// 获取当前时间
    let startTime = new Date().getTime();

    log("已进入小红书，将执行任务４");
    // var returned = text("发现").className("android.widget.TextView").untilFind();
    

    // 点击热门
    log("点击消息");
    var returned = text("消息").className("android.widget.TextView").findOne();
    returned.parent().click();
    sleep(1000);
    
    
    log("刷新");
    // 刷新
    this.swipeAction_Reverse()
    sleep(1000);


    var msg_list = [];

    var group_list = [];
    var sent_group_list = [];

    // 遍历列表寻找未检查的消息，检查是否是群，然后对群消息进行发送图片。
    let stop = false;
    while(!stop){
        var returned = className("androidx.recyclerview.widget.RecyclerView").find();
        toastLog("num of recyclerview: " + returned.length);
        returned.forEach(function(item, index, array) {
            toastLog("recyclerview" + index + ": " + item.children().length);
        });

        // 假设只有一个 recyclerview
        var recyclerview = returned[0];
        // for (let i = 0; i < returned.length; i++) {
        //     if (returned[i].length > 7) {
        //         recyclerview = returned[i];
        //         break;
        //     }
        // }

        let all_included = true;
        children = recyclerview.children();
        toastLog("length of msg list: " + children.length);
        children.forEach(function(item, index, array) {
            
            // 在这里执行针对当前元素的操作
            // 获得名字
            if (item.className() == "android.widget.RelativeLayout"){

                var msg_card = item.findOne(className("android.widget.LinearLayout"));
                if(msg_card){
                    var msg_name = msg_card.child(0).text();

                    // 检查 msg_name 是否检查过
                    if (!msg_list.includes(msg_name)){
                        toastLog("Name of the msg: " + msg_name);
                        all_included = false;
                        msg_list.push(msg_name);

                        // msg_name 还没检查，进行群发判断

                        // 1. 两种情况：发送 和 不发送
                        // 2. 如果不发送：非群检测下 名字不在群列表，检测下 点击进去是私聊
                        // 3. 如果发送: 非群检测下 名字在群列表，检测下 点击进去是群聊

                        var toSend = false;
                        
                        
                        if(群检测){
                            // 点击 item
                            if(item.click()){
                                toastLog("Clicked success!");
                            } else{
                                toastLog("Clicked failed!");
                            }

                            sleep(2000);

                            // 查找搜索键
                            var title_bars = className("android.view.ViewGroup").depth(8).find();
                            if (title_bars){
                                var title_bar = title_bars[0];

                                toastLog("num of title_bar: " + title_bars.length);
                            
                                // 检查 title_bar 的长度, 6 是私聊 7 是群聊
                                var lengofbar = title_bar.children().length;
                                toastLog("length of bar: " + lengofbar);

                                if (lengofbar == 7){
                                    // 群聊
                                    toastLog(msg_name + " is group! ");
                                    group_list.push(msg_name);
                                    toSend = true;
                                }else{
                                    // 私聊
                                    toastLog(msg_name + " is dm! ");
                                    toSend = false;

                                    // 点击返回
                                    var title_bar = className("android.view.ViewGroup").depth(8).find()[0];
                                    // 返回
                                    var back_img = title_bar.child(1);
                                    back_img.click();

                                    sleep(1000);
                                }
                            }else{
                                toastLog("Can't find title bar!");
                            }

                            // 已经点击进去了

                        }else{
                            // 非群检测，如果遇到名字在群里表里，直接发送。不需要更新群列表
                            if(群列表_QF.includes(msg_name)){
                                if(item.click()){
                                    toastLog("Clicked success!");
                                } else{
                                    toastLog("Clicked failed!");
                                }

                                group_list.push(msg_name);
                                sleep(1000);

                                toSend = true;
                            }else{
                                toSend = false;
                            }
                        }

                        

                        // 因为2种toSend情况都有发送图片的代码, 所以在下面统一操作
                        // 如果!toSend, 上面的代码已经是保证返回出去的状态
                        if (toSend){

                            if (发送文字){

                                var returned = className("android.widget.EditText").clickable(true).visibleToUser(true).findOne(1000);
                                if (returned) {
                                    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                                    sleep(500);
                                } else {
                                    toastLog("未找到评论框");
                                }

                                setText(文字内容)
                                sleep(1000)
                                
                                var returned = text("发送").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
                                if (returned) {
                                    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                                    sleep(500);
                                    log("已发消息");
                                } else {
                                    toastLog("未找到发送键");
                                }

                                sleep(1000)


                            }

                            if (发送图片){
                                // 发送图片
                                var add_buttons = className("android.widget.ImageView").depth(10).find();
                                toastLog("Num of add buttons: " + add_buttons.length);

                                var add_button = add_buttons[0];
                                add_button.click();

                                sleep(1000);

                                var image_buttons = className("android.widget.LinearLayout").depth(16).find();
                                toastLog("Num of image buttons: " + image_buttons.length);

                                var image_button = image_buttons[0];
                                image_button.click();
                                sleep(3000);

                                var firstPicture = className("android.widget.FrameLayout").depth(13).drawingOrder(1).findOne();
                                toastLog("Num of image buttons: " + image_buttons.length);
                                
                                // 选择图片
                                // firstPicture.child(0).child(0).children().length;
                                if(firstPicture.child(0).child(0).child(4).click()){
                                    toastLog("picture selected success!");
                                }else{
                                    toastLog("picture selected failed!");
                                }
                                sleep(2000);

                                // 发送
                                var send_button = textContains("发送").className("android.widget.TextView").clickable(true).findOne();
                                send_button.click();

                                sleep(1000);

                            }

                            // 点击返回
                            var title_bar = className("android.view.ViewGroup").depth(8).find()[0];
                            // 返回
                            var back_img = title_bar.child(1);
                            back_img.click();

                            sleep(1000);
                            

                        }
                        
                    }
                }
            }

        });

        // sleep(1500);
        if (all_included){
            stop = true;
            toastLog("遍历所有消息，群发结束!");
        }
        // swipe down
        sleep(500+random(500, 1000))
        this.swipeAction()

    }
        

    return group_list;

    // var id = setInterval(() => {
    //     log("执行小红书养号任务-正在观看视频");
    //     // 群发图片
    //     this.task_XHS_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率);
    //     // 检查是否达到总运行时间
    //     var currentTime = new Date().getTime();

    //     if ((currentTime - startTime) >= timerDuration) {
    //         console.log("达到总运行时长，跳出程序");
    //         home();
    //         clearInterval(id);

    //     }

    // }, Math.round((Math.random() * (单个视频最大时长 - 单个视频最小时长 + 1) + 单个视频最小时长)) * 1000);
}


/////行为
HK_XHS_QF.task_XHS_YH_actions = function task_XHS_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率) {

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
HK_XHS_QF.swipeAction = function swipeAction() {
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
HK_XHS_QF.randomProbability =  function randomProbability(probability) {
    return Math.random() * 100 < probability;
}


HK_XHS_QF.swipeAction_Reverse = function swipeAction_Reverse() {
    var X1 = device.width / 2 + random(-2, 2); // 起始点X坐标，屏幕宽度的一半
    var Y1 = (device.height / 2) + random(-10, 10); // 起始点Y坐标，屏幕高度的一半
    var X2 = X1 + random(-5, +5); // 结束点X坐标，向左滑动300像素
    var Y2 = device.height - random(50, 100); // 结束点Y坐标保持不变
    var duration1 = random(0.5, 0.8) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(3000);
}


module.exports = HK_XHS_QF
// app.launchApp("快手");
var YH_KS = {}

var 运行时长 = 2 ///分钟
var 单个视频最小时长 = 2 
var 单个视频最大时长 = 20 
var 留言数组 = ["老铁马住","666","........."]
var 作品评论概率=100
var 作者关注概率=100
var 作品点赞概率=100
var 访问作者主页概率=100


// KS_mode(运行时长, 单个视频最小时长,单个视频最大时长,
//     留言数组, 作品评论概率, 作者关注概率,
//     作品点赞概率, 访问作者主页概率)


YH_KS.KS_Main = function KS_Main(运行时长, 单个视频最小时长,单个视频最大时长,
    留言数组, 作品评论概率, 作者关注概率,
    作品点赞概率, 访问作者主页概率) {
        sleep(5000)

        let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
        //// 获取当前时间
        let startTime = new Date().getTime();


text("精选").className("android.widget.CheckedTextView").untilFind();
log("已进入快手，将执行任务");
sleep(1000)
var id =   setInterval(() => {
    log("执行快手养号任务-正在观看视频");
    this.task_KS_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率);
    // 检查是否达到总运行时间
    var currentTime = new Date().getTime();

    if ((currentTime - startTime) >= timerDuration) {
        console.log("达到总运行时长，跳出程序");
        home();
        clearInterval(id);

    }

}, Math.round((Math.random() * ( 单个视频最大时长- 单个视频最小时长 + 1) + 单个视频最小时长))*1000);
    }






/////////所有动作内容
YH_KS.task_KS_YH_actions  = function task_KS_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率) {
  
    ///刷入直播间
     var returned = textContains("进入直播间").clickable(true).visibleToUser(true).exists();
     var SP_mark = textContains("@").className("android.widget.TextView").visibleToUser(true).exists();
     if (returned) {
       log("检测直播间准备划走");
       this.swipeAction()}
    else if(!SP_mark)
    {log("检测到非视频内容,准备划走");
      this.swipeAction()}
        else{
 //////////////点赞
 if (this.randomProbability(作品点赞概率)) {

    let centerX = device.width / 2;
    let centerY = device.height / 2;
    // 设置点击延迟，例如500毫秒（半秒）
    let clickDelay = 130;//+-
    // 执行第一次点击
    click(centerX, centerY);
    sleep(clickDelay+random(-3, 3)); // 等待指定的延迟时间
    // 执行第二次点击
    click(centerX +random(-10, 10), centerY+random(-10, 10));
           log("已点赞")}
else {log("未点赞")}

sleep(2000)

/////评论
if (this.randomProbability(作品评论概率)) {
var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
var randomText = 留言数组[randomIndex]

//打开评论
var returned = className("android.widget.FrameLayout").clickable(true).visibleToUser(true).longClickable(true).find();
comment = returned[1]

comment.click()
sleep(1000)


if(textContains("条评论").className("android.widget.TextView").clickable(true).visibleToUser(true).exists())
{log("成功打开评论区")
var comment
var comment1 = text("发条有爱评论~").className("android.widget.TextView").findOne(500);
var comment2 = text("此时你最想@的是...").className("android.widget.TextView").findOne(500);
var comment3 = text("@好友一起看看吧").className("android.widget.TextView").findOne(500);
comment = comment1 || comment2 || comment3;

if (comment) {
  click(comment.bounds().centerX()+random(-5, 5), comment.bounds().centerY()+random(-5, 5));
  sleep(2100);
  setText(randomText)

  var returned = text("发送").findOne(500);
  if (returned) {
    click(returned.bounds().centerX()+random(-5, 5), returned.bounds().centerY()+random(-5, 5));
    sleep(1500);
    log("评论成功")
    back()
  } else {
    log("未找到发送按钮");
    back()
  }
} 

else{log("没找到评论框")
    back()
}

}
else {log("未能打开评论区")}
} else {log("未评论")}

sleep(2000)
////关注
if (this.randomProbability(作者关注概率)) {
var startX = device.width / 1.5; // 起始点X坐标，屏幕宽度的一半
var startY = device.height / 2; // 起始点Y坐标，屏幕高度的一半
var endX = random(5,10); // 结束点X坐标，向左滑动300像素
var endY = startY+random(2,5); // 结束点Y坐标保持不变
var duration = 1000+random(-10,5); // 滑动持续时间，单位为毫秒

// 执行滑动操作
swipe(startX, startY, endX, endY, duration);
sleep(2000)
swipe(startX, startY, endX, endY, duration);
sleep(3000)
if (textContains("关注").clickable().visibleToUser(true).exists()) {
var returned = textContains("关注").className("android.widget.ToggleButton").clickable().visibleToUser(true).findOne(500);
if (returned) {
  click(returned.bounds().centerX()+random(-5, 5), returned.bounds().centerY()+random(-5, 5));
  sleep(500);
  log("关注成功")
  back()
} else  {
  log("关注失败,或者是已关注的人");
  back()
}}
else {log("未划入主页请检查设备情况")}
}
else{log("未进行关注动作")}


sleep(2000)
////访问主页
if (this.randomProbability(访问作者主页概率)) {
var startX = device.width / 1.5; // 起始点X坐标，屏幕宽度的一半
var startY = device.height / 2; // 起始点Y坐标，屏幕高度的一半
var endX = 0; // 结束点X坐标，向左滑动300像素
var endY = startY; // 结束点Y坐标保持不变
var duration = 1000; // 滑动持续时间，单位为毫秒
swipe(startX, startY, endX, endY, duration);
sleep(2000)
swipe(startX, startY, endX, endY, duration);
sleep(3000)
back() }
else {log("未访问作者")}

sleep(2000)
this.swipeAction()
}
}



///////////////共用函数
YH_KS.swipeAction =  function swipeAction() {
    var X1 = device.width / 2; // 起始点X坐标，屏幕宽度的一半
    var Y1 = (device.height / 1.5) +random(-10,10); // 起始点Y坐标，屏幕高度的一半
    var X2 = X1; // 结束点X坐标，向左滑动300像素
    var Y2 = random(5,20) ; // 结束点Y坐标保持不变
    var duration1 = random(0.5,0.8) * 1000; // 滑动持续时间，单位为毫秒

    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(3000);

}

//随机观看视频时间
YH_KS.getRandomNumberBetweenXAndY = function getRandomNumberBetweenXAndY(X, Y) {
    return (Math.floor(Math.random() * (Y - X + 1)) + X) * 1000;
}
//概率函数
YH_KS.randomProbability = function randomProbability(probability) {
    return Math.random() * 100 < probability;
}

module.exports = YH_KS;
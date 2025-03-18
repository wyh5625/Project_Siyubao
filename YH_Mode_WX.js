
/////养号微信对象
var YH_WX = {};


// app.launchApp("微信");
// WX_mode(10,100,100,["老铁马住","666","KYzhyz"],5,5,5,10)
// WX_mode_main
var 运行时长 = 2 ///分钟
var 单个视频最小时长 = 2
var 单个视频最大时长 = 20
var 留言数组 = ["老铁马住", "666", "KYzhyz"]
var 作品评论概率 = 100
var 作者关注概率 = 100
var 作品点赞概率 = 100
var 访问作者主页概率 = 100

// WX_Main(运行时长,单个视频最小时长, 单个视频最大时长, 留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率)


YH_WX.WX_Main = function WX_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
  留言数组, 作品评论概率, 作者关注概率,
  作品点赞概率, 访问作者主页概率) {


  sleep(5000)
  text("通讯录").className("android.widget.TextView").untilFind();
  toastLog("已进入微信，将执行任务");


  let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
  //// 获取当前时间
  let startTime = new Date().getTime();

  ////点击进入视频号
  var returned = text("发现").className("android.widget.TextView").visibleToUser(true).findOne(1500);
  if (returned) {
    returned.clickCenter()
    sleep(500);
  } else {
    toastLog("未找到符合条件的控件1");
  }
  sleep(2000) 
  var returned = text("视频号").className("android.widget.TextView").visibleToUser(true).findOne(500);
  if (returned) {
    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
    sleep(500);
  } else {
    toastLog("未找到符合条件的控件2");
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



  text("推荐").className("android.widget.TextView").untilFind();
  toastLog("已进入视频号");




  var id = setInterval(() => {
    log("执行微信视频号养号任务-正在观看视频");
    this.task_WX_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率);
    // 检查是否达到总运行时间
    var currentTime = new Date().getTime();

    if ((currentTime - startTime) >= timerDuration) {
      console.log("达到总运行时长，跳出程序");
      home();
      clearInterval(id);

    }

  }, Math.round((Math.random() * (单个视频最大时长 - 单个视频最小时长 + 1) + 单个视频最小时长)) * 1000);




}


/////////所有动作内容
YH_WX.task_WX_YH_actions = function task_WX_YH_actions(留言数组, 作品评论概率, 作者关注概率, 作品点赞概率, 访问作者主页概率) {

  ///刷入直播间
  var returned = text("轻触进入直播间").className("android.widget.TextView").exists();
  if (returned) {
    toastLog("检测直播间准备划走");
    this.swipeAction()


  } else {
    //////////////点赞
    if (this.randomProbability(作品点赞概率)) {
      //// 计算屏幕中间的坐标
      let centerX = device.width / 2;
      let centerY = device.height / 2;
      // 设置点击延迟，例如500毫秒（半秒）
      let clickDelay = 145;//+-
      // 执行第一次点击
      click(centerX, centerY);
      sleep(clickDelay + random(-3, 0)); // 等待指定的延迟时间
      // 执行第二次点击
      click(centerX + random(-10, 10), centerY + random(-10, 10));
      log("已点赞")
    }
    else {
      log("未点赞")

    };
    sleep(3000)

    /////////////评论
    if (this.randomProbability(作品评论概率)) {

      var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
      var randomText = 留言数组[randomIndex]

      //////1.找longclickable的平行对象，即找parent，再找children来弄 基本无bug
      var returned = className("android.widget.LinearLayout").clickable(true).longClickable(true).visibleToUser(true).findOne();
      var target = returned.parent().children()[3]
      target.click()

      sleep(1000)
      setText(randomText)
      sleep(1000)

      var returned = text("回复").className("android.widget.TextView").findOne(500);
      if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
        toastLog("已回复")
      } else {
        toastLog("未找到回复");
      }

      back()
      log("已评论")

    }
    else { log("未评论") }



    sleep(3000)
    /////////////////关注
    if (this.randomProbability(作者关注概率)) {
      if (text("已关注").className("android.widget.TextView").visibleToUser(true).exists()) {
        log("已关注的作者")
      }
      else {
        var returnedList = text("关注").className("android.widget.TextView").indexInParent(1).untilFind();
        sleep(random(2, 4) * 1000)
        returnedList[0].parent().click()
        log("关注了作者")
      }
    }
    else { log("未进行关注动作") };
    sleep(3000)
    ////////////////访问
    if (this.randomProbability(访问作者主页概率)) {
      // 滑动参数设置
      var returnedList = className("android.widget.ImageView").focusable(true).clickable(true).visibleToUser(true).indexInParent(1).findOne();
      if (returnedList) {
        click(returnedList.bounds().centerX() + random(-5, 5), returnedList.bounds().centerY() + random(-5, 5));
        sleep(500);
      }
      else { toastLog("未找到主页按件") }
      sleep(random(2, 4) * 1000)
      back()
      log("已访问")
    }
    else { log("未访问") };
    sleep(3000)


    this.swipeAction()
    log("刷走")



  }


};



////////////////共用函数
YH_WX.swipeAction = function swipeAction() {
  var X1 = device.width / 2; // 起始点X坐标，屏幕宽度的一半
  var Y1 = (device.height / 1.5) + random(-10, 10); // 起始点Y坐标，屏幕高度的一半
  var X2 = X1; // 结束点X坐标，向左滑动300像素
  var Y2 = random(5, 20); // 结束点Y坐标保持不变
  var duration1 = random(0.5, 0.8) * 1000; // 滑动持续时间，单位为毫秒

  // 执行滑动操作
  swipe(X1, Y1, X2, Y2, duration1);
  sleep(3000);

}

//随机观看视频时间
YH_WX.getRandomNumberBetweenXAndY = function getRandomNumberBetweenXAndY(X, Y) {
  return (Math.floor(Math.random() * (Y - X + 1)) + X) * 1000;
}
//概率函数
YH_WX.randomProbability = function randomProbability(probability) {
  return Math.random() * 100 < probability;
}
module.exports = YH_WX;
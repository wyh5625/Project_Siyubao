var 筛序 = true
var 筛序内容 = "只看女生" /// 只看男生，查看全部




//////wx附近的人获客////2024.7.21未打包函数
var HK_WX_FJS = {}

HK_WX_FJS.Main = function WX_Sport_FJ(附近的人筛选, 功能选择) {
  
  if (功能选择 == "附近的人") { HK_WX_附近的人(附近的人筛选) }
  else { WXsport() }
}







function HK_WX_附近的人(筛选条件) {
  text("通讯录").className("android.widget.TextView").untilFind();
  toastLog("已进入微信，将执行任务");

  var returned = text("发现").className("android.widget.TextView").visibleToUser(true).findOne(1500);
  if (returned.parent()) {
    returned.parent().clickCenter()
    sleep(500);
  } else {
    toastLog("未找到符合条件的控件1");
  }



  sleep(random(1000, 2000))
  ////进入附近的人
  var returned = text("附近").className("android.widget.TextView").findOne(500);
  if (returned) {
    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
    sleep(500);
  } else {
    toastLog("未找到附近按钮");
  }


  sleep(random(1000, 2000))
  ////青少年组件
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


  sleep(random(1000, 2000))
  /////点击进入附近
  var returned = text("附近的人").className("android.widget.TextView").findOne(500);
  if (returned) {
    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
    sleep(500);
  } else {
    log("未找到附近");
  }


  sleep(random(1000, 2000))
  /////提醒用户提前填充个人信息
  /////检测提示
  var returned = text("查看附近的人功能将获取你的位置信息，你的位置信息会被保留一段时间。通过列表右上角的清除功能可随时手动清除位置信息。").className("android.widget.TextView").findOne(500);
  if (returned) {
    var yes = text("确定").className("android.widget.Button").findOne(500);
    click(yes.bounds().centerX() + random(-5, 5), yes.bounds().centerY() + random(-5, 5));
    sleep(500);

  } else {
    log("无提示正常操作")
  }


  sleep(random(5000, 7000))
  /////////////进入附近的人列表
  textContains("米以内").untilFind();
  log("已进入附近的人列表")

  var returned = desc("更多").className("android.widget.ImageView").findOne(500);
  if (returned) {
    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
    sleep(500);
  }


  sleep(random(1000, 2000))

  ////////筛选条件
  var returned = text(筛选条件).className("android.widget.TextView").findOne(500);

  click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-2, 2));
  sleep(500);



  sleep(random(5000, 7000))
  ///////////循环操作
  var loopVar1 = true;
  while (loopVar1) {
    var returned = className("android.widget.ListView").findOne(500);
    var target_list = returned.children().filter(item => item && item.clickable() == true && item.visibleToUser() == true)

    if (!target_list.empty()) {
      for (var i = 0, len = returnedList.length; i < len; i++) {
        console.log(i);
        var returned = returnedList[i];
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(random(1500, 2500));


        var returned = text("打招呼").className("android.widget.TextView").findOne(500);
        if (returned) {
          click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
          sleep(500);
        }

        setText("afgcbdsadasd")
        sleep(1000, 2000)
        var returned = text("发送").className("android.widget.Button").findOne(500);
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        ///打完招呼会回到个人简介页面下，此时退出一次回到附近列表
        sleep(3000, 5000)

        back()
      };

    }

    var returned = className("android.widget.ListView").findOne(500);
    var target_list = returned.children().filter(item => item && item.clickable() == true && item.visibleToUser() == true)
    var topvar1 = target_list[0]

    swipeAction()

    var loopVar1 = find_bottom(topvar1)


  }
}

function WXsport() {
  text("通讯录").className("android.widget.TextView").untilFind();
  toastLog("已进入微信，将执行任务");
  var returned = desc("搜索").clickable(true).visibleToUser(true).findOne(500);


  click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
  sleep(random(1000, 2000));

  setText("微信运动")

  sleep(random(3000, 4000));

  var wxsport = text("微信运动").className("android.widget.TextView").visibleToUser(true).findOne(1500);
  ///父集是relatvie的那个是直接功能


  if (wxsport) {
    click(wxsport.bounds().centerX() + random(-5, 5), wxsport.bounds().centerY() + random(-5, 5));

  } else { log("微信运动未找到") }

  sleep(random(1000, 2000));


  var returned = text("步数排行榜").className("android.widget.TextView").findOne(2500);
  if (returned) {
    click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
    sleep(500);
  } else { log("步数排行榜未找到") }

  sleep(random(2000, 4000));

  /////////////////此时已进入微信步数排行页面
  loopVar = true
  while (loopVar) {

    ////下面是大父件,父件下面的第三个是点赞件
    var returnedList = idContains("tencent").className("android.widget.RelativeLayout").visibleToUser(true).clickable(false).find();


    ///for循环，同时确保在排行榜页面一次循环
    for (var i = 0, len = returnedList.length; i < len; i++) {
      var like = returnedList[i].children()[2].children()[0]
      like.click()
      sleep(1000, 2000)
      if (!text("排行榜").className("android.widget.TextView").exists()) {
        back()
        sleep(1000, 2000)
      }
    }

    var topvars = idContains("tencent").className("android.widget.RelativeLayout").visibleToUser(true).clickable(false).find()[0]
    swipeAction()
    var loopVar = find_bottom_sport(topvars)

  }

}







function find_bottom(topvar1) {
  var returned = className("android.widget.ListView").findOne(500);
  var target_list = returned.children().filter(item => item && item.clickable() == true && item.visibleToUser() == true)
  var topvar2 = target_list[0]
  if (topvar2.sourceNodeId() == topvar1.sourceNodeId()) { return false }
  else { return true }
}


function find_bottom_sport(topvars) {
  var target_list = idContains("tencent").className("android.widget.RelativeLayout").visibleToUser(true).clickable(false).find();
  var topvar2 = target_list[0]
  if (topvar2.sourceNodeId() == topvars.sourceNodeId()) { return false }
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


module.exports = HK_WX_FJS
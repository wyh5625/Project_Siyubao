/////团购
// var 团购搜索词 = "美容"
// var 地区 = "抚州"
// var 私信数组 = ["你好你是吴天宇朋友吗", "你好你是吴强朋友吗"]
// var 单一行为 = true
// var 关注概率 = 0
// var 私信概率 = 0
// var 头像点赞概率 = 0
// var 运行时长 = 3 //单位为分钟
var 店铺评价数 = [0]
var dy_ID_array = []

// DY_HK_localshopping(团购搜索词, 地区, 单一行为, 关注概率, 私信概率, 头像点赞概率, 私信数组, 运行时长)
var HK_DY_TG = {}

HK_DY_TG.Main = function DY_HK_localshopping(团购搜索词, 地区, 单一行为, 关注概率, 私信概率, 有用点赞概率, 回复概率, 私信数组, 回复数组, 运行时长) {

    var returned = text("推荐").visibleToUser(true).untilFind()
    log("已进入抖音，开始执行任务")
    sleep(random(1000, 2000))
    ///////////////////////////////////////进入团购搜索结果////////////////////////////////////////////////
    var returned = desc("团购，按钮").className("android.widget.TextView").findOne(2500);
    if (returned) {
      click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
      sleep(500);
      log("已找到团购模块，点击进入")
    } else {
      log("未找到团购按钮");
    }
    log("若未进入团购，可手动点击进入")
    ////等待进入搜索框
    text("搜索").className("android.widget.TextView").untilFind()
    log("已进入团购")
  
    //////////地点筛选
    var returned = className("android.widget.LinearLayout").
      clickable(true).visibleToUser(true).indexInParent(0).find().filter(item => item && item.parent() && item.parent().className() == "android.widget.FrameLayout")[0];
    returned.click()
  
  
    text("切换城市").untilFind()
  
    setText(地区)
  
    sleep(random(1000, 2000))
    var returned = text(地区).className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(500);
    if (returned) {
      click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
      sleep(500);
    } else {
      toastLog("未找到符合条件的地区");
    }
    ///////////////
    log("地区设置完成")
  
    // textContains("当地美食").visibleToUser(true).clickable(true).untilFind()
    sleep(random(1500, 3000))
  
  
    var returned = className("android.widget.FrameLayout").clickable(true).visibleToUser(true).findOne(500);
    if (returned) {
      click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
      sleep(500);
    } else {
      log("未找到搜索框");
  
    }
    sleep(random(1000, 2000))
    setText(团购搜索词)
    sleep(random(1000, 2000))
  
  
  
    var returned = text("搜索").desc("搜索").className("android.widget.TextView").clickable(false).visibleToUser(true).findOne(500);
    if (returned) {
      click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
      sleep(500);
      log("已找到搜索按钮,准备进入搜索结果")
    } else {
      log("未找到搜索");
    }
  
    var returned = textContains("条评价").descContains("条评价").visibleToUser(true).untilFind();
    log("已进入搜索结果")
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    sleep(random(1000, 2000))
    var loopVar1 = true
    let startTime = new Date().getTime();
    let timerDuration = 运行时长 * 60 * 1000; // 10秒，单位为毫秒
    ////////////////////////////////////////////////////第一循环,对每个团购店铺进行操作/////////////////////////////////////////////////
    while (loopVar1) {
      var returnedList1 = textContains("条评价").descContains("条评价").visibleToUser(true).clickable(false).className("com.lynx.tasm.behavior.ui.LynxFlattenUI").find();
  
      if (!returnedList1.empty()) {
        for (var i1 = 0, len1 = returnedList1.length; i1 < len1; i1++) {
  
          console.log("开始第" + (i1 + 1) + "个团购店铺");
          var returned = returnedList1[i1];
          ////通过评价数来判断店铺是否重复进入过
          var storeComment_num = returned.text().match(/\d+/)[0];
          if (店铺评价数.includes(storeComment_num)) { log("当前店铺已进入过"); }
          else {
            店铺评价数.push(storeComment_num)
            ///////进入商户界面
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-1, 1));
            sleep(random(1000, 2000))
            className("android.view.View").clickable(true).visibleToUser(false).untilFind();
            log("已进入商户界面")
  
  
            swipeToComment()////这个函数会滑动并点击进入用户评价界面
  
  
  
  
  
  
            //////////////////////////第二循环这里进入了用户评价界面，一个个点击进入每个用户界面，循环结束后两次退出，回到团购界面/////////////////////   
            var loopVar2 = true
            while (loopVar2) {
              log("正在确认是否在商户评价界面，如果不在，此流程会阻塞")
              text("我的评价").desc("我的评价").visibleToUser(true).untilFind()
              log("已经入用户评价界面,开始获客")
  
              var returnedList2 = textStartsWith("回复").descStartsWith("回复").className("com.lynx.tasm.behavior.ui.text.UIText").visibleToUser(true).find();
  
              if (!returnedList2.empty()) {
                for (var i2 = 0, len2 = returnedList2.length; i2 < len2; i2++) {
                  log("当前有" + (len2) + "个用户")
                  console.log("开始第" + (i2 + 1) + "个用户");
                  var returned = returnedList2[i2];
  
                  click(device.width / 2, returned.bounds().centerY() + random(-5, 5));
                  sleep(1500 + random(500, 1000));
  
                  /////点击进入评论详情界面,最后返回
                  customer_searching(单一行为, 关注概率, 私信概率, 有用点赞概率, 回复概率, 私信数组, 回复数组)
                  sleep(1000)
                  var currentTime = new Date().getTime();
                  if (currentTime - startTime > timerDuration) { break; }
                };
  
              } else {
                log("此页面不存在用户评价");
              }
              sleep(random(1000, 2000))
              swipeAction()
              sleep(random(1000, 2000))
              //////////////////////////////////////////////////////////
              var loopVar2 = small_loop()
              var currentTime = new Date().getTime();
              if (currentTime - startTime > timerDuration) { break; }
            }
            sleep(random(1000, 2000))
            back()
            sleep(1000 + random(500, 1000))
            back()
            sleep(1000 + random(500, 1000))
            var currentTime = new Date().getTime();
            if (currentTime - startTime > timerDuration) { break; }
  
          }
  
          ////用户评价界面小循环结束退出商户集市界面
  
        }
      }
      else {
        log("无可未进入店铺,跳出任务");
        break;
      }
  
      //////////////循环1第一次结束/
      var currentTime = new Date().getTime();
      var loopVar1 = bigloop(currentTime, startTime, timerDuration)
      swipeAction()
  
    };
  
  
  
  
    log("任务结束,本次曝光客户数:" + dy_ID_array.length + "个")
    home()
  }
  
  
  /////////////////////////////////////////////////////////函数集合///////////////////////////////////////////////////////
  function customer_searching(单一行为, 关注概率, 私信概率, 有用点赞概率, 回复概率, 私信数组, 回复数组) {
    sleep(random(1000, 2000))
    var returned = text("评价详情").desc("评价详情").visibleToUser(true).findOne(2000)
    ///////////等待进入详情页
    if (returned) {
      log("已进入评论详情")
      ///记录用户ID
      var returned = className("com.bytedance.ies.xelement.text.text.LynxTextUI").clickable(true).visibleToUser(true).findOne(500);
      var dy_ID = returned.text().substring(0, 9)
      if (dy_ID_array.includes(dy_ID)) {
        log("当前用户已进入过");
        back()
        sleep(random(1000, 2000));
      }
      else {
        dy_ID_array.push(dy_ID)
        ////头像点赞,关注,私信,动作结束后都会在详情页停留
        action_Set(单一行为, 关注概率, 私信概率, 有用点赞概率, 回复概率, 私信数组, 回复数组)
        log("当前用户触达结束返回评论区")
        sleep(500+random(1000, 2000));
        back()
      }
    }
    else if (text("提交").desc("提交").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").visibleToUser(true).exists()) {
      log("当前误触停留在写评价页面")
      back()
    }
    else if (text("我的评价").desc("我的评价").visibleToUser(true).exists()) { 
      log("未能成功进入该用户的页面详情") }
    else {
      log("未知错误")
    }
  }
  
  function action_Set(单一行为, 关注概率, 私信概率, 有用点赞概率, 回复概率, 私信数组, 回复数组) {
  
    if (单一行为) {
      probArray = [关注概率, 私信概率, 有用点赞概率, 回复概率];
      let sum = probArray.reduce((a, b) => a + b, 0);
      let 关注概率_new = 关注概率 / sum
      let 私信概率_new = 私信概率 / sum
      let 有用点赞概率_new = 有用点赞概率 / sum
      let 回复概率_new = 回复概率 / sum
      let obj = { "关注": 关注概率_new, "私信": 私信概率_new, "有用点赞": 有用点赞概率_new, "回复": 回复概率_new }
      let obj_entr = Object.entries(obj)
      probArray_new = [关注概率_new, 私信概率_new, 有用点赞概率_new, 回复概率_new];
      ////排序,排序后倒入simulateEvent函数以进行事件模拟并导出对应事件名称
      probArray_new_sorted = probArray_new.sort(function (a, b) { return a - b });
      var finalAction = simulateEvent(probArray_new_sorted, obj_entr)
      switch (finalAction) {
        case "关注":
          log("开始关注")
          follow_action()
          break;
        case "私信":
          log("开始私信")
          DM_action(私信数组)
          break;
        case "有用点赞":
          log("开始有用点赞")
          likes_action()
          break;
        case "回复":
          log("开始回复")
          reply_action(回复数组)
        default:
          break;
      }
      //////上述功能结束后在用户主界面，然后退出
  
  
    }
    else {
      ////非单一行为,按概率进行
          /////////////////////////////////关注并私信////////////////////////////////////////
      //////找到目标头像
      if (randomProbability(私信概率)) {
        DM_action(私信数组)
        log("已完成私信")
        sleep(random(1000, 2000))
      }
      else { log("未进行私信行为") }
      /////////////////////////////////关注////////////////////////////////////////
      //////找到目标头像
      if (randomProbability(关注概率)) {
        follow_action()
        log("已完成关注")
        sleep(random(1000, 2000))
      }
      else { log("未进行关注") }
      /////////////////////////////////点赞////////////////////////////////////////
      //////找到点赞
      if (randomProbability(有用点赞概率)) {
        likes_action()
        log("已完成有用点赞")
        sleep(random(1000, 2000))
      } else { log("未进行有用点赞行为") }
  
      /////////////////////////////////回复/
      if (randomProbability(回复概率)) {
        reply_action(回复数组)
        log("已完成回复")
        sleep(random(1000, 2000))
      }
  
      else { log("未进行回复行为") }
    }
  }
  
  
  function bigloop(currentTime, startTime, timerDuration) {
    if ((currentTime - startTime) >= timerDuration) { return false }
    else { return true }
  }
  
  function small_loop() {
    if (text("已折叠对你帮助不大的评价").desc("已折叠对你帮助不大的评价").visibleToUser(true).exists() || text("暂时没有更多了").desc("暂时没有更多了").visibleToUser(true).exists()) { return false }
    else { return true }
  }
  
  
  function swipeToComment() {
    /////////////////////////翻找和进入用户界面//////////////////////////////////
    var detecting = true
    while (detecting) {
  
      swipeAction()
      var detecting = customer_comment()
  
      log("正在滑动以寻找用户评价区域")
      ////如果出现false,点击界面
      if (!detecting) {
        log("已找到用户评价区域,准备点击")
        var returned = text("用户评价").desc("用户评价").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").visibleToUser(true).findOne(1500)
        click(device.width / 2, returned.bounds().centerY());
        sleep(random(1500, 2500))
        ////检验是否进入评论区
        var returned = text("我的评价").desc("我的评价").visibleToUser(true).findOne(1500)
        if (returned) {
          log("已成功进入评论区")
        }
        else if (text("搜索").desc("搜索").className("android.widget.TextView").visibleToUser(true).exists()) {
          log("当前误触停留在搜索页面")
          back()
          click(device.width / 2, device.height / 2)
        }
        else if (text("提交").desc("提交").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").visibleToUser(true).exists()) {
          log("当前误触停留在写评价页面")
          back()
          detecting = true
        }
        else if (className("android.view.View").clickable(true).visibleToUser(false).exists()) {
          log("当前还停留在原商户页面")
          detecting = true
        }
  
        else { log("未能进入评论区") }
      }
  
  
    }
  
  
    ////////////////////////////////////////////////////////////////////////////
  }
  
  function customer_comment() {
    var returned = text("用户评价").desc("用户评价").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").visibleToUser(true).findOne(1500);
    if (returned) {
      return false;
  
    } else {
      return true;
    }
  }
  
  function swipeAction() {
    var X1 = device.width / 2; // 起始点X坐标，屏幕宽度的一半
    var Y1 = (device.height / 1.5) + random(-5, 5); // 起始点Y坐标，屏幕高度的一半
    var X2 = X1 + random(-5, 5); // 结束点X坐标，向左滑动300像素
    var Y2 = random(100, 200);
    var duration1 = random(0.5, 0.6) * 1000; // 滑动持续时间，单位为毫秒
  
    // 执行滑动操作
    swipe(X1, Y1, X2, Y2, duration1);
    sleep(1500);
  
  }
  
  function randomProbability(probability) {
    return Math.random() * 100 < probability;
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
    } else {
      midD = obj_entr.filter(item => item[1] == probArray_new_sorted[2])
      var randomIndex = Math.floor(Math.random() * midD.length); // 生成一个随机索引
      var conductD = midD[randomIndex][0]
      return (conductD)
    }
  }
  
  function follow_action() {
    ////进主页流程
    ///////////点头像操作，可能有bug，找器械第二个一般是头像
    try{
    var returnedList3 = text("").desc("").className("com.lynx.tasm.behavior.ui.LynxFlattenUI").visibleToUser(true).clickable(true).find();
    var returned = returnedList3[1]
    if (returned) {
      click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
      sleep(1000 + random(1000, 2000));
      //////点击完头像应该进入历史评价页
      var returnedY = className("com.lynx.tasm.behavior.ui.LynxFlattenUI").clickable(true).visibleToUser(true).indexInParent(23).findOne(1500);
      sleep(500)
      var returnedX = text("被认为有用").desc("被认为有用").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").visibleToUser(true).findOne(1500)
      if (returnedX && returnedY) {
        click(returnedX.bounds().centerX() + random(-5, 5), returnedY.bounds().centerY() + random(-40, -20));
        sleep(3500);
        ////此时应该进入个人页面
        if (textContains("抖音号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
          ///////////////关注操作
          var returned = text("关注").className("android.widget.TextView").clickable(true).visibleToUser(true).findOne(2500);
          if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(1500);
            log("关注成功")
          } else {
            log("未找到关注");
          }
        ///关注点击后可能有问你是谁的问题，此时多退出一次
          if(desc("清除").className("android.widget.Button").visibleToUser(true).exists()){
            log("检测到回答问题框")
            sleep(500)
            back()
            sleep(1000 + random(500, 1500))
            back()
            sleep(1000 + random(500, 1500))
          }

          /////////////////
        }
        else {
          log("未成功进入个人页,该账户可能已注销")
        }
        //////退出个人页面返回详细评论
        back()
        sleep(1000 + random(500, 1500))
        back()
  
  
      } else {
        toastLog("此为匿名用户");
        log(returnedX + returnedY)
      }
  
    } else { log("未找到头像进入历史评价页") }
    }
    catch (e) { log(e + "未能成功进行关注") } 
  
  
  }
  
  function DM_action(私信数组) {
    try{
    var returnedList4 = text("").desc("").className("com.lynx.tasm.behavior.ui.LynxFlattenUI").visibleToUser(true).clickable(true).find();
    var returned = returnedList4[1]
    if (returned) {
      click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
      sleep(1000 + random(1000, 2000));
      //////点击完头像应该进入历史评价页
      var returnedY = className("com.lynx.tasm.behavior.ui.LynxFlattenUI").clickable(true).visibleToUser(true).indexInParent(23).findOne(1500);
      sleep(500)
      var returnedX = text("被认为有用").desc("被认为有用").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").visibleToUser(true).findOne(1500)
      if (returnedX && returnedY) {
        click(returnedX.bounds().centerX() + random(-5, 5), returnedY.bounds().centerY() + random(-40, -20));
        sleep(3500);
        ////此时应该进入个人页面
        if (textContains("抖音号").className("android.widget.TextView").clickable(true).visibleToUser(true).exists()) {
          ///////////////私信操作
          ///////进入主页老三样
          sleep(random(1000, 2000))
          var returned = desc("更多").className("android.widget.ImageView").findOne(500);
          if (returned) {
            click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
            sleep(random(1000, 2000))
            var returned = text("发私信").className("android.widget.TextView").visibleToUser().findOne(500);
            if (returned) {
              click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
              sleep(random(1000, 2000))
              sleep(1000 + random(500, 1500))
              var randomIndex = Math.floor(Math.random() * 私信数组.length); // 生成一个随机索引
              var randomText = 私信数组[randomIndex]
              setText(randomText)
              sleep(1000 + random(500, 1500))
              var returned = desc("发送").className("android.widget.ImageView").visibleToUser(true).clickable(true).longClickable(true).findOne(1000);
              if (returned) {
                click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
                sleep(500);
                log("私信发送成功")
                sleep(1000 + random(500, 1500))
                back()
                sleep(1000 + random(500, 1500))
                back()
                sleep(1000 + random(500, 1500))
  
              } else {
                toastLog("未找到私信发送");
              }
            }
          } else {
            log("未找到更多来私信");
            back()
          }
          /////////////////
        }
        else {
          log("未成功进入个人页,该账户可能已注销")
        }
        //////退出个人页面返回详细评论
        back()
        sleep(1000 + random(500, 1500))
  
  
  
      } else {
        toastLog("此为匿名用户");
        log(returnedX + returnedY)
      }
  
    } else { log("未找到头像进入历史评价页") }
    }
    catch (e) { log(e + "未能成功进行私信") }
  
  
  
  }
  
  function likes_action() {
    sleep(1000 + random(500, 1500))
    try {
      var returned = textStartsWith("有用").descStartsWith("有用").className("com.lynx.tasm.behavior.ui.text.UIText").visibleToUser(true).findOne(1500);
      if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(1500);
      } else {
        toastLog("无点赞按键");
      }
    }
    catch (e) { log(e + "未能成功点赞") }
  }
  
  
  function reply_action(回复数组) {////回复动作放到最后使用，防止滑动到最底部影响关注和私信的操作
    try{
    var returned = textStartsWith("回复").descStartsWith("回复").visibleToUser(true).clickable(true).className("com.lynx.tasm.behavior.ui.LynxFlattenUI").findOne(1500);
    if (returned) {
      click(device.width*0.4, returned.bounds().centerY() + random(-5, 5));
      sleep(500);
    } else {
      toastLog("未找到符合条件的控件");
    }
    sleep(1000)
    var randomIndex = Math.floor(Math.random() * 回复数组.length); // 生成一个随机索引
    var randomText = 回复数组[randomIndex]
    setClip(randomText);
    var reply = className("com.bytedance.ies.xelement.input.LynxTextAreaView").findOne(500)
    ///长按获取焦点
    press(reply.bounds().centerX() + random(-5, 5), reply.bounds().centerY() + random(-5, 5), 1300);
    sleep(1500);
    ///点击粘贴
    var copy = text("粘贴").findOne(1000)
    if (copy) {
      click(copy.bounds().centerX() + random(-5, 5), copy.bounds().centerY() + random(-5, 5));
      sleep(500);
      ///点击发送
      var returned = text("发送").desc("发送").className("com.lynx.tasm.behavior.ui.view.UIView").findOne(500);
      click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
      sleep(1500);
  
    } else {
      toastLog("未找到符合条件的控件");
      back()
    }
  
  }
  catch (e) { log(e + "未能成功进行回复") }
  }
  
  



module.exports = HK_DY_TG
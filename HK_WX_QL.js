


var 群聊组名 = ["聚源食品", "松港"]
var 目标人数数组 = [150, 1]
var name_array =[]
var 仅聊天 =true
var HK_WX_QL ={}



HK_WX_QL.Main = function wechat_add_member(群聊组名, 目标人数数组,  仅聊天) {
    text("通讯录").className("android.widget.TextView").untilFind();
    toastLog("已进入微信，将执行任务");

try{
for (var i1 = 0; i1 < 群聊组名.length; i1++) {

    var 目标群聊名 = 群聊组名[i1]

//////////进入群成员界面////////////  
    var returned = textContains(目标群聊名).className("android.view.View").visibleToUser(true).findOne(1500);
    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(500);
        toastLog("已点击目标群聊,如未成功进入请手动打开")
    } else {
        toastLog("未找群聊，可能是输入名称有误,请手动打开群聊");
    }

    desc("聊天信息").className("android.widget.ImageView").untilFind();
    var returned = desc("聊天信息").className("android.widget.ImageView").findOne(1500);
    click(returned.bounds().centerX(), returned.bounds().centerY());


    text("群聊名称").className("android.widget.TextView").untilFind();
    log("已进入群聊，开始执行加人操作");

/////////////////////////////////////////////////////////////////////
    var returned = text("查看更多群成员").className("android.widget.TextView").findOne(1500);
    if (returned) {
        ////有查看更多群成员按钮的情况
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(1500);
       

      ///////////开始加人操作//////////
        var target_cnt = 目标人数数组[i1]

        for (var i2 = 0; i2 < target_cnt; i2) {
            var target_List = className("android.widget.GridView").findOne(500).children().filter(item => item.clickable() == true && item);

                for (var i3 = 0; i3 < target_List.length; i3++) {
                    var target = target_List[i3]
                    var target_name = target.children().filter(item => item.className() == "android.widget.TextView")[0].text()
                    if (name_array.includes(target_name)){
                        log("重复用户")
                    }
                    else{
                    ///确认非重复时才加人
                    click(target.bounds().centerX() + random(-5, 5), target.bounds().centerY() + random(-5, 5));

                    sleep(1500);
                    add_member(仅聊天)
                    name_array.push(target_name)
                    i2 = i2 + 1
                    sleep(1000)
                    }

                    ///判断是否超过目标人数，若超过则退出循环
                    if (i2 >= target_cnt) {
                        break;
                    }
                }
                swipeAction()

            
            }
        ////此时群聊1加人操作完成，开始下一个群聊的加人操作
        back()
        sleep(random(1000, 2000))
        back()

        sleep(random(1000, 2000))
        back()
        sleep(random(1000, 2000))
  
    }

    else{toastLog("未找到查看更多群成员按钮,可能是成员数过少")
        back()
        sleep(1000)
        back()
        sleep(1000)
    }


}
}
catch(e){
    log(e)
    toastLog("程序出错，请检查参数设置")
    
}

home()
toastLog("任务执行完毕")

}


function add_member(仅聊天) {
    log("开始执行加人操作")
    text("设置备注和标签").className("android.widget.TextView").untilFind();
    sleep(1000)
    var returned=text("添加到通讯录").className("android.widget.TextView").visibleToUser(true).findOne(500)

    if (returned) {
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        text("申请添加朋友").className("android.widget.TextView").untilFind();
        sleep(500)
        if (仅聊天){
          var returned = text("仅聊天").className("android.widget.TextView").visibleToUser(true).findOne(500)
        click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        sleep(1000)
        }
       var returned =  text("发送").className("android.widget.Button").findOne(1500)
       click(returned.bounds().centerX() + random(-5, 5), returned.bounds().centerY() + random(-5, 5));
        ////如果有弹窗，点击确认
        var returned = text("确定").className("android.widget.Button").findOne(1500);
        if (returned) {
          log("该用户无法添加")
          click(returned.bounds().centerX()+random(-5, 5), returned.bounds().centerY()+random(-5, 5));
          sleep(1500);
          back()
        } 

       ////发完等
       text("设置备注和标签").className("android.widget.TextView").untilFind();
       sleep(500)
       back()
       sleep(1000)

    }

    else{
        log("未找到添加到通讯录按钮,应该是已经在通讯录中")
        ///退出，下一个
        back()
        sleep(1000)

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

module.exports = HK_WX_QL
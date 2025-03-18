"ui";
importClass(android.graphics.Color);
importClass(android.graphics.drawable.GradientDrawable);
importClass(android.graphics.drawable.GradientDrawable.Orientation);
activity.setTheme(com.google.android.material.R$style.Theme_Material3_Light_NoActionBar);





//////////////////////////////////////////////////////1.基本UI和ui交互//////////////////////////////////////////////////////
var UI_var = require('./UI_var1');
var mainPage = UI_var.mainPage
var secondPage = UI_var.secondPage
var settingPage = UI_var.settingPage
var helpPage = UI_var.helpPage
PJYSDK = require("./paojiaoyun.js")
var UI_var2 = require('./UI_var2');
var thirdPage = UI_var2.thirdPage



var floater = require("./floater.js")
var logFloatWindow = floater.LogFloatWindow.getInstance();
var enabled = false;
////日志
settingPage.console.setConsole(runtime.console);
settingPage.console.setInputEnabled(false);
settingPage.console.setColor("V", "#bdbdbd");
settingPage.console.setColor("D", "#795548");
settingPage.console.setColor("I", "#1de9b6");
settingPage.console.setColor("W", "#673ab7");
settingPage.console.setColor("E", "#b71c1c");

settingPage.clearLog.click(function () {
    settingPage.console.setConsole(runtime.console);
    console.clear();

    log("已清除日志")
});

////下载和跳转网页
helpPage.抖音下载.click(function () {
    log("抖音下载")
    app.openUrl("https://www.siyubao.com.cn/downloads/douying.apk");
});

helpPage.小红书下载.click(function () {
    log("小红书下载")
    app.openUrl("https://www.siyubao.com.cn/downloads/XHS.apk");
});

helpPage.微信下载.click(function () {
    log("微信下载")
    app.openUrl("https://www.siyubao.com.cn/downloads/WX.apk");
});
helpPage.快手下载.click(function () {
    log("快手下载")
    app.openUrl("https://www.siyubao.com.cn/downloads/KuaiShou.apk");
});
helpPage.帮助手册.click(function () { 
    log("帮助手册")
    app.openUrl("https://tcni1p9iozbe.feishu.cn/wiki/BaniwW7IBiB2SWkycTacCi4lnwd?from=from_copylink");
});



mainPage.卡密激活.click(function () {
    log("卡密激活")
    app.openUrl("https://siyubao.yi-faka.com")})

mainPage.官网.click(function () {
        log("打开官网")
        app.openUrl("https://siyubao.com.cn")})
    

mainPage.分享.click(function () {  
    toastLog("已将siyubao网址复制到粘贴板，欢迎分享给朋友！")
    setClip("https://siyubao.com.cn");
})


mainPage.群聊.click(function () { 
    app.openUrl("https://yi-faka.com/liebiao/2E7B55451F7BECFC")
})

mainPage.客服.click(function () { 
    toastLog("客服微信:SY-customer_service,已复制到粘贴板")
    setClip("SY-customer_service")
})


///toolbar设定
mainPage.toolbar.setupWithDrawer(mainPage.drawer)
mainPage.toolbar.getNavigationIcon().setColor(colors.parseColor("#000000"))
ui.statusBarColor('#000000')


/// 显示主页的路径
ui.setContentView(mainPage);

settingPage.home.on('click', function () {
    ui.setContentView(mainPage);
})

helpPage.home.on('click', function () {
    ui.setContentView(mainPage);
})
secondPage.home.on('click', function () {
    ui.setContentView(mainPage);
})
secondPage.返回区.on('click', function () {
    ui.setContentView(mainPage);
})

thirdPage.返回区.on('click', function () {
    ui.setContentView(mainPage);
})

thirdPage.home.on('click', function () {
    ui.setContentView(mainPage);
})



///切换进第二页的路径
mainPage.card1.on('click', function () {
    ui.setContentView(secondPage);
    mainPage.获客按钮.setChecked(false);
    mainPage.养号按钮.setChecked(true);

})
//切换进第三页的路径
mainPage.card2.on('click', function () {
    ui.setContentView(thirdPage);
    mainPage.获客按钮.setChecked(true);
    mainPage.养号按钮.setChecked(false);
})


//切入设定中的路径
mainPage.home_setting.on('click', function () {
    ui.setContentView(settingPage);
})

settingPage.home_setting.on('click', function () {
    ui.setContentView(settingPage);
})

helpPage.home_setting.on('click', function () {
    ui.setContentView(settingPage);
})

secondPage.home_setting.on('click', function () {
    ui.setContentView(settingPage);
})


thirdPage.home_setting.on('click', function () {
    ui.setContentView(settingPage);
})


///切入help菜单的路径
mainPage.home_help.on('click', function () {
    ui.setContentView(helpPage);
})

settingPage.home_help.on('click', function () {
    ui.setContentView(helpPage);
})

helpPage.home_help.on('click', function () {
    ui.setContentView(helpPage);
})

secondPage.home_help.on('click', function () {
    ui.setContentView(helpPage);
})

thirdPage.home_help.on('click', function () {
    ui.setContentView(helpPage);
})


///radioGroup的跨组件联动
///首页
mainPage.养号按钮.on("click", function () {
    if (mainPage.养号按钮.checked) {
        mainPage.获客按钮.setChecked(false);
        //处理rb1被选中的逻辑
    }
});

mainPage.获客按钮.on("click", function () {
    if (mainPage.获客按钮.checked) {
        mainPage.养号按钮.setChecked(false)
        // 处理rb2被选中的逻辑
    }
});
///第二页

secondPage.抖音养号.on("click", function () {
    if (secondPage.抖音养号.checked) {
        secondPage.微信养号.setChecked(false);
        secondPage.小红书养号.setChecked(false);
        secondPage.快手养号.setChecked(false)

    }
})


secondPage.微信养号.on("click", function () {
    if (secondPage.微信养号.checked) {
        secondPage.抖音养号.setChecked(false);
        secondPage.小红书养号.setChecked(false);
        secondPage.快手养号.setChecked(false)

    }
})

secondPage.小红书养号.on("click", function () {
    if (secondPage.小红书养号.checked) {
        secondPage.抖音养号.setChecked(false);
        secondPage.微信养号.setChecked(false);
        secondPage.快手养号.setChecked(false)

    }
})

secondPage.快手养号.on("click", function () {
    if (secondPage.快手养号.checked) {
        secondPage.抖音养号.setChecked(false);
        secondPage.微信养号.setChecked(false);
        secondPage.小红书养号.setChecked(false)

    }
})




//////第三页获客模式
///默认设置
thirdPage.抖音按钮.setChecked(true)
thirdPage.抖音按钮.attr('backgroundTint', '#F3F4F8');
thirdPage.抖音按钮.attr('textColor', '#000000');
thirdPage.抖音按钮1.setChecked(true)
thirdPage.抖音按钮1.attr('backgroundTint', '#F3F4F8');
thirdPage.抖音按钮1.attr('textColor', '#000000');


let Array1 = ['抖音按钮', '微信按钮', '小红书按钮', "快手按钮"]
clickButton(Array1, "微信按钮", 1)
clickButton(Array1, "快手按钮", 3)
clickButton(Array1, "抖音按钮", 0)
clickButton(Array1, "小红书按钮", 2)


////上方禁止滑动，同时下方联动滑动
// thirdPage.viewPager.setOnTouchListener(function () { return true; })



thirdPage.参数viewpager.setOnPageChangeListener({
    onPageSelected: function (position) {
        position1(position)
        position2(position)
        position3(position)
    }
})





let Array2 = ['抖音按钮1', '抖音按钮2', '抖音按钮3']
let Array3 = ['微信按钮1', '微信按钮2', '微信按钮3']
let Array4 = ['小红书按钮1', '小红书按钮2', '小红书按钮3']
let Array5 = ['快手按钮1']





clickButton2(Array2, "抖音按钮1", 0)
clickButton2(Array2, "抖音按钮2", 1)
clickButton2(Array2, "抖音按钮3", 2)


clickButton2(Array3, "微信按钮1", 3)
clickButton2(Array3, "微信按钮2", 4)
clickButton2(Array3, "微信按钮3", 5)


clickButton2(Array4, "小红书按钮1", 6)
clickButton2(Array4, "小红书按钮2", 7)
clickButton2(Array4, "小红书按钮3", 8)


clickButton2(Array5, "快手按钮1", 9)
// clickButton2(Array5, "快手按钮2", 11)
// clickButton2(Array5, "快手按钮3", 12)


////单一行为模式提示词

thirdPage.单一行为_dy_text.on("click", function () { toast("开启单一行为后对一个目标客户只会进行评论点赞/私信/评论/关注中的一种行为,以防止超过平台限制并增加每日曝光人数上限") })

/////获客UI的函数
function clickButton(arr, id, n) {
    thirdPage[id].on('click', function () {
        for (let index = 0; index < arr.length; index++) {
            let element = arr[index];
            if (thirdPage[id] == thirdPage[element]) {
                thirdPage[element].attr('backgroundTint', '#F3F4F8');
                thirdPage[element].attr('textColor', '#000000');
                thirdPage.viewPager.setCurrentItem(n, true)
                thirdPage[element].setChecked(true)
            } else {
                thirdPage[element].attr('backgroundTint', '#FFFFFF');
                thirdPage[element].attr('textColor', '#A5AAA3');
                thirdPage[element].setChecked(false)
            }
        }
    });
}

function clickButton2(arr, id, n) {
    thirdPage[id].on('click', function () {
        for (let index = 0; index < arr.length; index++) {
            let element = arr[index];
            if (thirdPage[id] == thirdPage[element]) {
                thirdPage[element].attr('backgroundTint', '#F3F4F8');
                thirdPage[element].attr('textColor', '#000000');
                thirdPage.参数viewpager.setCurrentItem(n, true)
                thirdPage[element].setChecked(true)
            } else {
                thirdPage[element].attr('backgroundTint', '#FFFFFF');
                thirdPage[element].attr('textColor', '#A5AAA3');
                thirdPage[element].setChecked(false)

            }
        }
    });
}

////为了让viewpager滑动时，按钮的状态同步变化
function position1(n) {
    let Array_main = ['抖音按钮', '微信按钮', '小红书按钮', "快手按钮"]
    for (let ix = 0; ix < Array_main.length; ix++) {
        switch (ix) {
            case 0:
                if (n <= 2) {
                    thirdPage[Array_main[ix]].setChecked(true)
                    thirdPage[Array_main[ix]].attr('backgroundTint', '#F3F4F8');
                    thirdPage[Array_main[ix]].attr('textColor', '#000000');
                }
                else {
                    thirdPage[Array_main[ix]].setChecked(false)
                    thirdPage[Array_main[ix]].attr('backgroundTint', '#FFFFFF');
                    thirdPage[Array_main[ix]].attr('textColor', '#A5AAA3');
                }
                break;
            case 1:
                if (n > 2 && n <= 5) {
                    thirdPage[Array_main[ix]].setChecked(true)
                    thirdPage[Array_main[ix]].attr('backgroundTint', '#F3F4F8');
                    thirdPage[Array_main[ix]].attr('textColor', '#000000');
                }
                else {
                    thirdPage[Array_main[ix]].setChecked(false)
                    thirdPage[Array_main[ix]].attr('backgroundTint', '#FFFFFF');
                    thirdPage[Array_main[ix]].attr('textColor', '#A5AAA3');
                }
                break;

            case 2:
                if (n > 5 && n <= 8) {
                    thirdPage[Array_main[ix]].setChecked(true)
                    thirdPage[Array_main[ix]].attr('backgroundTint', '#F3F4F8');
                    thirdPage[Array_main[ix]].attr('textColor', '#000000');
                }
                else {
                    thirdPage[Array_main[ix]].setChecked(false)
                    thirdPage[Array_main[ix]].attr('backgroundTint', '#FFFFFF');
                    thirdPage[Array_main[ix]].attr('textColor', '#A5AAA3');
                }
                break;

            case 3:
                if (n > 8) {
                    thirdPage[Array_main[ix]].setChecked(true)
                    thirdPage[Array_main[ix]].attr('backgroundTint', '#F3F4F8');
                    thirdPage[Array_main[ix]].attr('textColor', '#000000');
                }
                else {
                    thirdPage[Array_main[ix]].setChecked(false)
                    thirdPage[Array_main[ix]].attr('backgroundTint', '#FFFFFF');
                    thirdPage[Array_main[ix]].attr('textColor', '#A5AAA3');
                }
                break;

        }




    }
}

function position2(n) {
    let Array_second = ['抖音按钮1', '抖音按钮2', '抖音按钮3', "微信按钮1", "微信按钮2", "微信按钮3", "小红书按钮1", "小红书按钮2", "小红书按钮3", "快手按钮1"]
    for (let ixx = 0; ixx < Array_second.length; ixx++) {
        ///如果ixx和n相等，则将其设为选中状态
        if (ixx == n) {
            thirdPage[Array_second[ixx]].setChecked(true)
            thirdPage[Array_second[ixx]].attr('backgroundTint', '#F3F4F8');
            thirdPage[Array_second[ixx]].attr('textColor', '#000000');
        } else {
            thirdPage[Array_second[ixx]].attr('backgroundTint', '#FFFFFF');
            thirdPage[Array_second[ixx]].attr('textColor', '#A5AAA3');
            thirdPage[Array_second[ixx]].setChecked(false)
        }

    }
}

function position3(n) {
    if (n <= 2) {
        thirdPage.viewPager.setCurrentItem(0, true)

    }
    else if (n > 2 && n <= 5) {
        thirdPage.viewPager.setCurrentItem(1, true)
    }

    else if (n > 5 && n <= 8) {
        thirdPage.viewPager.setCurrentItem(2, true)
    }
    else {
        thirdPage.viewPager.setCurrentItem(3, true)
    }


}








////////////无障碍
mainPage.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    mainPage.autoService.checked = auto.service != null;
});









/////////////////////////////////////////////////////////////seekbars//////////////////////////////////////////////////
function setupSeekBarChangeListener(seekbar, textView) {
    seekbar.setOnSeekBarChangeListener({
        onProgressChanged: (seekbar, progress, fromUser) => {
            textView.setText(progress.toString() + "%");
        }
    })
}


// 养号模块
setupSeekBarChangeListener(secondPage.作品评论概率, secondPage.作品评论概率值);
setupSeekBarChangeListener(secondPage.作者关注概率, secondPage.作者关注概率值);
setupSeekBarChangeListener(secondPage.作品点赞概率, secondPage.作品点赞概率值);
setupSeekBarChangeListener(secondPage.访问作者主页概率, secondPage.访问作者主页概率值);

// 获客模块
setupSeekBarChangeListener(thirdPage.点赞概率, thirdPage.点赞概率值);
setupSeekBarChangeListener(thirdPage.评论概率, thirdPage.评论概率值);
setupSeekBarChangeListener(thirdPage.头像点赞概率, thirdPage.头像点赞概率值);
setupSeekBarChangeListener(thirdPage.私信概率, thirdPage.私信概率值);
setupSeekBarChangeListener(thirdPage.关注概率, thirdPage.关注概率值);

setupSeekBarChangeListener(thirdPage.点赞概率_TW, thirdPage.点赞概率值_TW);
setupSeekBarChangeListener(thirdPage.评论概率_TW, thirdPage.评论概率值_TW);
setupSeekBarChangeListener(thirdPage.头像点赞概率_TW, thirdPage.头像点赞概率值_TW);
setupSeekBarChangeListener(thirdPage.私信概率_TW, thirdPage.私信概率值_TW);
setupSeekBarChangeListener(thirdPage.关注概率_TW, thirdPage.关注概率值_TW);

setupSeekBarChangeListener(thirdPage.有用点赞概率_TG, thirdPage.有用点赞概率值_TG);
setupSeekBarChangeListener(thirdPage.关注概率_TG, thirdPage.关注概率值_TG);
setupSeekBarChangeListener(thirdPage.私信概率_TG, thirdPage.私信概率值_TG);
setupSeekBarChangeListener(thirdPage.回复概率_TG, thirdPage.回复概率值_TG);

setupSeekBarChangeListener(thirdPage.点赞概率_SPH, thirdPage.点赞概率值_SPH);
setupSeekBarChangeListener(thirdPage.关注概率_SPH, thirdPage.关注概率值_SPH);
setupSeekBarChangeListener(thirdPage.评论概率_SPH, thirdPage.评论概率值_SPH);
setupSeekBarChangeListener(thirdPage.私信概率_SPH, thirdPage.私信概率值_SPH);

setupSeekBarChangeListener(thirdPage.点赞概率_XHS, thirdPage.点赞概率值_XHS);
setupSeekBarChangeListener(thirdPage.评论概率_XHS, thirdPage.评论概率值_XHS);
setupSeekBarChangeListener(thirdPage.头像点赞概率_XHS, thirdPage.头像点赞概率值_XHS);
setupSeekBarChangeListener(thirdPage.私信概率_XHS, thirdPage.私信概率值_XHS);
setupSeekBarChangeListener(thirdPage.关注概率_XHS, thirdPage.关注概率值_XHS);

setupSeekBarChangeListener(thirdPage.点赞概率_XHS_TW, thirdPage.点赞概率值_XHS_TW);
setupSeekBarChangeListener(thirdPage.头像点赞概率_XHS_TW, thirdPage.头像点赞概率值_XHS_TW);
setupSeekBarChangeListener(thirdPage.私信概率_XHS_TW, thirdPage.私信概率值_XHS_TW);
setupSeekBarChangeListener(thirdPage.关注概率_XHS_TW, thirdPage.关注概率值_XHS_TW);

setupSeekBarChangeListener(thirdPage.头像点赞概率_TH, thirdPage.头像点赞概率值_TH);
setupSeekBarChangeListener(thirdPage.背景点赞概率_TH, thirdPage.背景点赞概率值_TH);
setupSeekBarChangeListener(thirdPage.私信概率_TH, thirdPage.私信概率值_TH);
setupSeekBarChangeListener(thirdPage.关注概率_TH, thirdPage.关注概率值_TH);

setupSeekBarChangeListener(thirdPage.点赞概率_KS, thirdPage.点赞概率值_KS);
setupSeekBarChangeListener(thirdPage.评论概率_KS, thirdPage.评论概率值_KS);
setupSeekBarChangeListener(thirdPage.头像点赞概率_KS, thirdPage.头像点赞概率值_KS);
setupSeekBarChangeListener(thirdPage.私信概率_KS, thirdPage.私信概率值_KS);
setupSeekBarChangeListener(thirdPage.关注概率_KS, thirdPage.关注概率值_KS);
//////////////////////////////////////////////////////////////seekbar结束////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////2.功能交互/////////////////////////////////////////////////////////////
/////////得到对应的UI组件
var DY_YH_button = secondPage.抖音养号
var WX_YH_button = secondPage.微信养号
var XHS_YH_button = secondPage.小红书养号
var KS_YH_button = secondPage.快手养号

// var YH_executeButton = secondPage.开始养号





var DY_HK_button = thirdPage.抖音按钮
var WX_HK_button = thirdPage.微信按钮
var XHS_HK_button = thirdPage.小红书按钮
var KS_HK_button = thirdPage.快手按钮
var DY_HK_button1 = thirdPage.抖音按钮1
var DY_HK_button2 = thirdPage.抖音按钮2
var DY_HK_button3 = thirdPage.抖音按钮3
var WX_HK_button1 = thirdPage.微信按钮1
var WX_HK_button2 = thirdPage.微信按钮2
var WX_HK_button3 = thirdPage.微信按钮3
var XHS_HK_button1 = thirdPage.小红书按钮1
var XHS_HK_button2 = thirdPage.小红书按钮2
var XHS_HK_button3 = thirdPage.小红书按钮3
var KS_HK_button1 = thirdPage.快手按钮1


// var HK_executeButton = thirdPage.开始获客
var stopButton = thirdPage.停止

var main_executeButton = mainPage.主页面开始
var main_stop = mainPage.主页面停止
var timer = mainPage.timerbox
var timePicker = mainPage.timepicker

timePicker.setIs24HourView(true)
// setOnTimeChangedListener({
//     onTimeChanged: function (v, h, m) {
//         //h 获取的值 为24小时格式
//         var time = h + ":" + m;
//         toastLog("滑动时间当前选择\n" + time);
//     }
// });

//////////////////////////////养号模块
/////////得到对应的养号函数
var YH_XHS = require("./YH_Mode_XHS")
var YH_WX = require("./YH_Mode_WX")
var YH_KS = require("./YH_Mode_KS")
var YH_DY = require("./YH_Mode_DY");


var HK_DY_TW = require('./HK_DY_TW');
var HK_DY_TG = require('./HK_DY_TG');
var HK_DY_JL = require("./HK_DY_JL")


var HK_XHS_JL = require("./HK_XHS_JL")
var HK_XHS_TH = require("./HK_XHS_TH")
var HK_XHS_TW = require("./HK_XHS_TW")

var HK_WX_SPH = require("./HK_WX_SPH_JL");
var HK_WX_FJS = require("./HK_WX_FJS")
var HK_WX_QL = require("./HK_WX_QL")

var HK_KS = require("./HK_KS_JL")




////////////////////储存////////////////////////

var local_storage = storages.create("Siyubao.xyz.localStorage")

var params_YH = local_storage.get("params_YH")
if (params_YH != null) {
    ///设置参数
    ////拿出保存的参数
    secondPage.抖音养号.setChecked(params_YH.YH_抖音)
    secondPage.微信养号.setChecked(params_YH.YH_微信)
    secondPage.快手养号.setChecked(params_YH.YH_快手)
    secondPage.小红书养号.setChecked(params_YH.YH_小红书)

    secondPage.运行时长.setText(params_YH.YH_运行时长.toString())
    secondPage.最小观看时间.setText(params_YH.YH_单个视频最小时长.toString())
    secondPage.最大观看时间.setText(params_YH.YH_单个视频最大时长.toString())
    secondPage.评论留言.setText(params_YH.YH_留言数组.toString())
    secondPage.作品评论概率.setProgress(params_YH.YH_作品评论概率)
    secondPage.作者关注概率.setProgress(params_YH.YH_作者关注概率)
    secondPage.作品点赞概率.setProgress(params_YH.YH_作品点赞概率)
    secondPage.访问作者主页概率.setProgress(params_YH.YH_访问作者主页概率)

    // secondPage.作品评论概率值.setText(params_YH.YH_作品评论概率.toString() + "%")
    // secondPage.作者关注概率值.setText(params_YH.YH_作者关注概率.toString() + "%")
    // secondPage.作品点赞概率值.setText(params_YH.YH_作品点赞概率.toString() + "%")
    // secondPage.访问作者主页概率值.setText(params_YH.YH_访问作者主页概率.toString() + "%")

}

///保存参数
secondPage.保存.click(function () {
    // //保存时获得参数，后导入本地储存中
    var param_obj_YH = {
        YH_抖音: secondPage.抖音养号.checked
        , YH_微信: secondPage.微信养号.checked
        , YH_快手: secondPage.快手养号.checked
        , YH_小红书: secondPage.小红书养号.checked
        , YH_运行时长: parseInt(secondPage.运行时长.text())
        , YH_单个视频最小时长: parseInt(secondPage.最小观看时间.text())
        , YH_单个视频最大时长: parseInt(secondPage.最大观看时间.text())
        , YH_留言数组: secondPage.评论留言.text()
        , YH_作品评论概率: parseInt(secondPage.作品评论概率值.text())
        , YH_作者关注概率: parseInt(secondPage.作者关注概率值.text())
        , YH_作品点赞概率: parseInt(secondPage.作品点赞概率值.text())
        , YH_访问作者主页概率: parseInt(secondPage.访问作者主页概率值.text())
    }


    local_storage.put("params_YH", param_obj_YH)

    toastLog("参数保存成功")


})

////////////////获客的参数保存/////////////////////////////
var params_HK = local_storage.get("params_HK")
try {
    if (params_HK != null) {
        ///设置参数
        ////拿出保存的参数
        thirdPage.参数viewpager.setCurrentItem(params_HK.当前页数)
        thirdPage.作品关键词.setText(params_HK.抖音截流_作品关键词)
        thirdPage.排序依据.setSelection(parseInt(params_HK.抖音截流_排序依据))
        thirdPage.发布时间.setSelection(parseInt(params_HK.抖音截流_发布时间))
        thirdPage.视频时长.setSelection(parseInt(params_HK.抖音截流_视频时长))
        thirdPage.搜索范围.setSelection(parseInt(params_HK.抖音截流_搜索范围))
        thirdPage.内容形式.setSelection(parseInt(params_HK.抖音截流_内容形式))
        thirdPage.评论关键词.setText(params_HK.抖音截流_评论关键词)
        thirdPage.运行时长.setText(params_HK.抖音截流_运行时长.toString())
        thirdPage.首评评论.setChecked(params_HK.抖音截流_首评评论)
        thirdPage.首评留言.setText(params_HK.抖音截流_首评留言)
        thirdPage.视频直接留言.setChecked(params_HK.抖音截流_视频直接留言)
        thirdPage.视频直接留言话术.setText(params_HK.抖音截流_视频直接留言话术)
        thirdPage.单一行为.setChecked(params_HK.抖音截流_单一行为)
        thirdPage.点赞概率.setProgress(params_HK.抖音截流_点赞概率)
        thirdPage.头像点赞概率.setProgress(params_HK.抖音截流_头像点赞概率)
        thirdPage.评论概率.setProgress(params_HK.抖音截流_评论概率)
        thirdPage.关注概率.setProgress(params_HK.抖音截流_关注概率)
        thirdPage.私信概率.setProgress(params_HK.抖音截流_私信概率)
        thirdPage.私信话术.setText(params_HK.抖音截流_私信话术)
        thirdPage.目标客户评论话术.setText(params_HK.抖音截流_目标客户评论话术)

        thirdPage.作品关键词_TW.setText(params_HK.抖音图文_作品关键词)
        thirdPage.评论关键词_TW.setText(params_HK.抖音图文_评论关键词)
        thirdPage.运行时长_TW.setText(params_HK.抖音图文_运行时长.toString())
        thirdPage.首评评论_TW.setChecked(params_HK.抖音图文_首评评论)
        thirdPage.首评留言_TW.setText(params_HK.抖音图文_首评留言)
        thirdPage.视频直接留言_TW.setChecked(params_HK.抖音图文_视频直接留言)
        thirdPage.视频直接留言话术_TW.setText(params_HK.抖音图文_视频直接留言话术)
        thirdPage.单一行为_TW.setChecked(params_HK.抖音图文_单一行为)
        thirdPage.点赞概率_TW.setProgress(params_HK.抖音图文_点赞概率)
        thirdPage.头像点赞概率_TW.setProgress(params_HK.抖音图文_头像点赞概率)
        thirdPage.评论概率_TW.setProgress(params_HK.抖音图文_评论概率)
        thirdPage.关注概率_TW.setProgress(params_HK.抖音图文_关注概率)
        thirdPage.私信概率_TW.setProgress(params_HK.抖音图文_私信概率)
        thirdPage.私信话术_TW.setText(params_HK.抖音图文_私信话术)
        thirdPage.目标客户评论话术_TW.setText(params_HK.抖音图文_目标客户评论话术)

        thirdPage.团购搜索词.setText(params_HK.抖音团购_团购搜索词)
        thirdPage.地区.setText(params_HK.抖音团购_地区)
        thirdPage.运行时长_TG.setText(params_HK.抖音团购_运行时长.toString())
        thirdPage.单一行为_TG.setChecked(params_HK.抖音团购_单一行为)
        thirdPage.有用点赞概率_TG.setProgress(params_HK.抖音团购_有用点赞概率)
        thirdPage.回复概率_TG.setProgress(params_HK.抖音团购_回复概率)
        thirdPage.回复话术_TG.setText(params_HK.抖音团购_回复话术)
        thirdPage.关注概率_TG.setProgress(params_HK.抖音团购_关注概率)
        thirdPage.私信概率_TG.setProgress(params_HK.抖音团购_私信概率)
        thirdPage.私信话术_TG.setText(params_HK.抖音团购_私信话术)

        thirdPage.作品关键词_SPH.setText(params_HK.微信视频号_作品关键词)
        thirdPage.评论关键词_SPH.setText(params_HK.微信视频号_评论关键词)
        thirdPage.运行时长_SPH.setText(params_HK.微信视频号_运行时长.toString())
        thirdPage.首评评论_SPH.setChecked(params_HK.微信视频号_首评评论)
        thirdPage.首评留言_SPH.setText(params_HK.微信视频号_首评留言)
        thirdPage.视频直接留言_SPH.setChecked(params_HK.微信视频号_视频直接留言)
        thirdPage.视频直接留言话术_SPH.setText(params_HK.微信视频号_视频直接留言话术)
        thirdPage.单一行为_SPH.setChecked(params_HK.微信视频号_单一行为)
        thirdPage.点赞概率_SPH.setProgress(params_HK.微信视频号_点赞概率)
        thirdPage.评论概率_SPH.setProgress(params_HK.微信视频号_评论概率)
        thirdPage.目标客户评论话术_SPH.setText(params_HK.微信视频号_目标客户评论话术)
        thirdPage.关注概率_SPH.setProgress(params_HK.微信视频号_关注概率)
        thirdPage.私信概率_SPH.setProgress(params_HK.微信视频号_私信概率)
        thirdPage.私信话术_SPH.setText(params_HK.微信视频号_私信话术)

        thirdPage.功能选择.setSelection(parseInt(params_HK.微信其他功能_功能选择))
        thirdPage.附近的人筛选.setSelection(parseInt(params_HK.微信其他功能_附近的人筛选))

        thirdPage.群聊组名称.setText(params_HK.微信群聊_群聊组名称)
        thirdPage.群聊组加人人数.setText(params_HK.微信群聊_群聊组加人人数)
        thirdPage.加人时打开仅聊天.setChecked(params_HK.微信群聊_加人时打开仅聊天)

        thirdPage.作品关键词_XHS.setText(params_HK.小红书截流_作品关键词)
        thirdPage.排序依据_XHS.setSelection(parseInt(params_HK.小红书截流_排序依据))
        thirdPage.笔记类型.setSelection(parseInt(params_HK.小红书截流_笔记类型))
        thirdPage.发布时间_XHS.setSelection(parseInt(params_HK.小红书截流_发布时间))
        thirdPage.搜索范围_XHS.setSelection(parseInt(params_HK.小红书截流_搜索范围))
        thirdPage.评论关键词_XHS.setText(params_HK.小红书截流_评论关键词)
        thirdPage.运行时长_XHS.setText(params_HK.小红书截流_运行时长.toString())
        thirdPage.首评评论_XHS.setChecked(params_HK.小红书截流_首评评论)
        thirdPage.首评留言_XHS.setText(params_HK.小红书截流_首评留言)
        thirdPage.视频直接留言_XHS.setChecked(params_HK.小红书截流_视频直接留言)
        thirdPage.视频直接留言话术_XHS.setText(params_HK.小红书截流_视频直接留言话术)
        thirdPage.单一行为_XHS.setChecked(params_HK.小红书截流_单一行为)
        thirdPage.点赞概率_XHS.setProgress(params_HK.小红书截流_点赞概率)
        thirdPage.头像点赞概率_XHS.setProgress(params_HK.小红书截流_头像点赞概率)
        thirdPage.评论概率_XHS.setProgress(params_HK.小红书截流_评论概率)
        thirdPage.关注概率_XHS.setProgress(params_HK.小红书截流_关注概率)
        thirdPage.私信概率_XHS.setProgress(params_HK.小红书截流_私信概率)
        thirdPage.私信话术_XHS.setText(params_HK.小红书截流_私信话术)
        thirdPage.目标客户评论话术_XHS.setText(params_HK.小红书截流_目标客户评论话术)
        thirdPage.直接私信_XHS.setChecked(params_HK.小红书截流_直接私信)
        thirdPage.分享评论_XHS.setChecked(params_HK.小红书截流_分享评论)

        thirdPage.作品关键词_XHS_TW.setText(params_HK.小红书图文_作品关键词)
        thirdPage.排序依据_XHS_TW.setSelection(parseInt(params_HK.小红书图文_排序依据))
        thirdPage.发布时间_XHS_TW.setSelection(parseInt(params_HK.小红书图文_发布时间))
        thirdPage.搜索范围_XHS_TW.setSelection(parseInt(params_HK.小红书图文_搜索范围))
        thirdPage.二次筛选_XHS_TW.setChecked(params_HK.小红书图文_二次筛选)
        thirdPage.二次筛选内容_XHS_TW.setText(params_HK.小红书图文_二次筛选内容)
        thirdPage.运行时长_XHS_TW.setText(params_HK.小红书图文_运行时长.toString())
        thirdPage.留言回答内容_XHS_TW.setText(params_HK.小红书图文_留言回答内容)
        thirdPage.高频触达_XHS_TW.setChecked(params_HK.小红书图文_高频触达)
        thirdPage.单一行为_XHS_TW.setChecked(params_HK.小红书图文_单一行为)
        thirdPage.点赞概率_XHS_TW.setProgress(params_HK.小红书图文_点赞概率)
        thirdPage.头像点赞概率_XHS_TW.setProgress(params_HK.小红书图文_头像点赞概率)
        thirdPage.关注概率_XHS_TW.setProgress(params_HK.小红书图文_关注概率)
        thirdPage.私信概率_XHS_TW.setProgress(params_HK.小红书图文_私信概率)
        thirdPage.私信话术_XHS_TW.setText(params_HK.小红书图文_私信话术)


        thirdPage.同行关键词_TH.setText(params_HK.小红书同行_同行关键词)
        thirdPage.查找方式_TH.setSelection(parseInt(params_HK.小红书同行_查找方式))
        thirdPage.排序依据_TH.setSelection(parseInt(params_HK.小红书同行_排序依据))
        thirdPage.笔记类型_TH.setSelection(parseInt(params_HK.小红书同行_笔记类型))
        thirdPage.发布时间_TH.setSelection(parseInt(params_HK.小红书同行_发布时间))
        thirdPage.搜索范围_TH.setSelection(parseInt(params_HK.小红书同行_搜索范围))
        thirdPage.运行时长_TH.setText(params_HK.小红书同行_运行时长.toString())
        thirdPage.单一行为_TH.setChecked(params_HK.小红书同行_单一行为)
        thirdPage.头像点赞概率_TH.setProgress(params_HK.小红书同行_头像点赞概率)
        thirdPage.背景点赞概率_TH.setProgress(params_HK.小红书同行_背景点赞概率)
        thirdPage.关注概率_TH.setProgress(params_HK.小红书同行_关注概率)
        thirdPage.私信概率_TH.setProgress(params_HK.小红书同行_私信概率)
        thirdPage.私信话术_TH.setText(params_HK.小红书同行_私信话术)

        thirdPage.作品关键词_KS.setText(params_HK.快手截流_作品关键词)
        thirdPage.排序_KS.setSelection(parseInt(params_HK.快手截流_排序))
        thirdPage.发布时间_KS.setSelection(parseInt(params_HK.快手截流_发布时间))
        thirdPage.作品时长_KS.setSelection(parseInt(params_HK.快手截流_作品时长))
        thirdPage.搜索范围_KS.setSelection(parseInt(params_HK.快手截流_搜索范围))
        thirdPage.手动选择地区_KS.setChecked(params_HK.快手截流_手动选择地区)
        thirdPage.评论关键词_KS.setText(params_HK.快手截流_评论关键词)
        thirdPage.运行时长_KS.setText(params_HK.快手截流_运行时长.toString())
        thirdPage.首评评论_KS.setChecked(params_HK.快手截流_首评评论)
        thirdPage.首评留言_KS.setText(params_HK.快手截流_首评留言)
        thirdPage.视频直接留言_KS.setChecked(params_HK.快手截流_视频直接留言)
        thirdPage.视频直接留言话术_KS.setText(params_HK.快手截流_视频直接留言话术)
        thirdPage.单一行为_KS.setChecked(params_HK.快手截流_单一行为)
        thirdPage.点赞概率_KS.setProgress(params_HK.快手截流_点赞概率)
        thirdPage.头像点赞概率_KS.setProgress(params_HK.快手截流_头像点赞概率)
        thirdPage.评论概率_KS.setProgress(params_HK.快手截流_评论概率)
        thirdPage.关注概率_KS.setProgress(params_HK.快手截流_关注概率)
        thirdPage.私信概率_KS.setProgress(params_HK.快手截流_私信概率)
        thirdPage.私信话术_KS.setText(params_HK.快手截流_私信话术)
        thirdPage.目标客户评论话术_KS.setText(params_HK.快手截流_目标客户评论话术)




    }
}
catch (e) {
    log("Error: " + params_HK.抖音截流_排序依据)
    console.log(e)
}


///保存参数
thirdPage.保存.click(function () {
    // //保存时获得参数，后导入本地储存中
    var param_obj_HK = {
        ///当前页数
        当前页数: thirdPage.参数viewpager.getCurrentItem()
        , 抖音截流_作品关键词: thirdPage.作品关键词.text()
        , 抖音截流_排序依据: thirdPage.排序依据.getSelectedItemPosition().toString()
        , 抖音截流_发布时间: thirdPage.发布时间.getSelectedItemPosition().toString()
        , 抖音截流_视频时长: thirdPage.视频时长.getSelectedItemPosition().toString()
        , 抖音截流_搜索范围: thirdPage.搜索范围.getSelectedItemPosition().toString()
        , 抖音截流_内容形式: thirdPage.内容形式.getSelectedItemPosition().toString()
        , 抖音截流_评论关键词: thirdPage.评论关键词.text()
        , 抖音截流_运行时长: parseInt(thirdPage.运行时长.text())
        , 抖音截流_首评评论: thirdPage.首评评论.checked
        , 抖音截流_首评留言: thirdPage.首评留言.text()
        , 抖音截流_视频直接留言: thirdPage.视频直接留言.checked
        , 抖音截流_视频直接留言话术: thirdPage.视频直接留言话术.text()
        , 抖音截流_单一行为: thirdPage.单一行为.checked
        , 抖音截流_点赞概率: parseInt(thirdPage.点赞概率.getProgress())
        , 抖音截流_头像点赞概率: parseInt(thirdPage.头像点赞概率.getProgress())
        , 抖音截流_评论概率: parseInt(thirdPage.评论概率.getProgress())
        , 抖音截流_关注概率: parseInt(thirdPage.关注概率.getProgress())
        , 抖音截流_私信概率: parseInt(thirdPage.私信概率.getProgress())
        , 抖音截流_私信话术: thirdPage.私信话术.text()
        , 抖音截流_目标客户评论话术: thirdPage.目标客户评论话术.text()

        , 抖音图文_作品关键词: thirdPage.作品关键词_TW.text()
        , 抖音图文_评论关键词: thirdPage.评论关键词_TW.text()
        , 抖音图文_运行时长: parseInt(thirdPage.运行时长_TW.text())
        , 抖音图文_首评评论: thirdPage.首评评论_TW.checked
        , 抖音图文_首评留言: thirdPage.首评留言_TW.text()
        , 抖音图文_视频直接留言: thirdPage.视频直接留言_TW.checked
        , 抖音图文_视频直接留言话术: thirdPage.视频直接留言话术_TW.text()
        , 抖音图文_单一行为: thirdPage.单一行为_TW.checked
        , 抖音图文_点赞概率: parseInt(thirdPage.点赞概率_TW.getProgress())
        , 抖音图文_头像点赞概率: parseInt(thirdPage.头像点赞概率_TW.getProgress())
        , 抖音图文_评论概率: parseInt(thirdPage.评论概率_TW.getProgress())
        , 抖音图文_关注概率: parseInt(thirdPage.关注概率_TW.getProgress())
        , 抖音图文_私信概率: parseInt(thirdPage.私信概率_TW.getProgress())
        , 抖音图文_私信话术: thirdPage.私信话术_TW.text()
        , 抖音图文_目标客户评论话术: thirdPage.目标客户评论话术_TW.text()

        , 抖音团购_团购搜索词: thirdPage.团购搜索词.text()
        , 抖音团购_地区: thirdPage.地区.text()
        , 抖音团购_运行时长: parseInt(thirdPage.运行时长_TG.text())
        , 抖音团购_单一行为: thirdPage.单一行为_TG.checked
        , 抖音团购_有用点赞概率: parseInt(thirdPage.有用点赞概率_TG.getProgress())
        , 抖音团购_关注概率: parseInt(thirdPage.关注概率_TG.getProgress())
        , 抖音团购_私信概率: parseInt(thirdPage.私信概率_TG.getProgress())
        , 抖音团购_私信话术: thirdPage.私信话术_TG.text()
        , 抖音团购_回复概率: parseInt(thirdPage.回复概率_TG.getProgress())
        , 抖音团购_回复话术: thirdPage.回复话术_TG.text()

        , 微信视频号_作品关键词: thirdPage.作品关键词_SPH.text()
        , 微信视频号_评论关键词: thirdPage.评论关键词_SPH.text()
        , 微信视频号_运行时长: parseInt(thirdPage.运行时长_SPH.text())
        , 微信视频号_首评评论: thirdPage.首评评论_SPH.checked
        , 微信视频号_首评留言: thirdPage.首评留言_SPH.text()
        , 微信视频号_视频直接留言: thirdPage.视频直接留言_SPH.checked
        , 微信视频号_视频直接留言话术: thirdPage.视频直接留言话术_SPH.text()
        , 微信视频号_单一行为: thirdPage.单一行为_SPH.checked
        , 微信视频号_点赞概率: parseInt(thirdPage.点赞概率_SPH.getProgress())
        , 微信视频号_评论概率: parseInt(thirdPage.评论概率_SPH.getProgress())
        , 微信视频号_目标客户评论话术: thirdPage.目标客户评论话术_SPH.text()
        , 微信视频号_关注概率: parseInt(thirdPage.关注概率_SPH.getProgress())
        , 微信视频号_私信概率: parseInt(thirdPage.私信概率_SPH.getProgress())
        , 微信视频号_私信话术: thirdPage.私信话术_SPH.text()

        , 微信其他功能_功能选择: thirdPage.功能选择.getSelectedItemPosition().toString()
        , 微信其他功能_附近的人筛选: thirdPage.附近的人筛选.getSelectedItemPosition().toString()

        , 微信群聊_群聊组名称: thirdPage.群聊组名称.text()
        , 微信群聊_群聊组加人人数: thirdPage.群聊组加人人数.text()
        , 微信群聊_加人时打开仅聊天: thirdPage.加人时打开仅聊天.checked


        , 小红书截流_作品关键词: thirdPage.作品关键词_XHS.text()
        , 小红书截流_排序依据: thirdPage.排序依据_XHS.getSelectedItemPosition().toString()
        , 小红书截流_笔记类型: thirdPage.笔记类型.getSelectedItemPosition().toString()
        , 小红书截流_发布时间: thirdPage.发布时间_XHS.getSelectedItemPosition().toString()
        , 小红书截流_搜索范围: thirdPage.搜索范围_XHS.getSelectedItemPosition().toString()
        , 小红书截流_评论关键词: thirdPage.评论关键词_XHS.text()
        , 小红书截流_运行时长: parseInt(thirdPage.运行时长_XHS.text())
        , 小红书截流_首评评论: thirdPage.首评评论_XHS.checked
        , 小红书截流_首评留言: thirdPage.首评留言_XHS.text()
        , 小红书截流_视频直接留言: thirdPage.视频直接留言_XHS.checked
        , 小红书截流_视频直接留言话术: thirdPage.视频直接留言话术_XHS.text()
        , 小红书截流_单一行为: thirdPage.单一行为_XHS.checked
        , 小红书截流_点赞概率: parseInt(thirdPage.点赞概率_XHS.getProgress())
        , 小红书截流_头像点赞概率: parseInt(thirdPage.头像点赞概率_XHS.getProgress())
        , 小红书截流_评论概率: parseInt(thirdPage.评论概率_XHS.getProgress())
        , 小红书截流_关注概率: parseInt(thirdPage.关注概率_XHS.getProgress())
        , 小红书截流_私信概率: parseInt(thirdPage.私信概率_XHS.getProgress())
        , 小红书截流_私信话术: thirdPage.私信话术_XHS.text()
        , 小红书截流_目标客户评论话术: thirdPage.目标客户评论话术_XHS.text()
        , 小红书截流_直接私信: thirdPage.直接私信_XHS.checked
        , 小红书截流_分享评论: thirdPage.分享评论_XHS.checked



        , 小红书图文_作品关键词: thirdPage.作品关键词_XHS_TW.text()
        , 小红书图文_排序依据: thirdPage.排序依据_XHS_TW.getSelectedItemPosition().toString()
        ,小红书图文_发布时间: thirdPage.发布时间_XHS_TW.getSelectedItemPosition().toString()
        , 小红书图文_搜索范围: thirdPage.搜索范围_XHS_TW.getSelectedItemPosition().toString()
        , 小红书图文_二次筛选: thirdPage.二次筛选_XHS_TW.checked
        , 小红书图文_二次筛选内容: thirdPage.二次筛选内容_XHS_TW.text()
        , 小红书图文_运行时长: parseInt(thirdPage.运行时长_XHS_TW.text())
        , 小红书图文_留言回答内容: thirdPage.留言回答内容_XHS_TW.text()
        , 小红书图文_高频触达: thirdPage.高频触达_XHS_TW.checked
        , 小红书图文_单一行为: thirdPage.单一行为_XHS_TW.checked
        , 小红书图文_点赞概率: parseInt(thirdPage.点赞概率_XHS_TW.getProgress())
        , 小红书图文_头像点赞概率: parseInt(thirdPage.头像点赞概率_XHS_TW.getProgress())
        , 小红书图文_关注概率: parseInt(thirdPage.关注概率_XHS_TW.getProgress())
        , 小红书图文_私信概率: parseInt(thirdPage.私信概率_XHS_TW.getProgress())
        , 小红书图文_私信话术: thirdPage.私信话术_XHS_TW.text()


        , 小红书同行_同行关键词: thirdPage.同行关键词_TH.text()
        , 小红书同行_查找方式: thirdPage.查找方式_TH.getSelectedItemPosition().toString()
        , 小红书同行_排序依据: thirdPage.排序依据_TH.getSelectedItemPosition().toString()
        , 小红书同行_笔记类型: thirdPage.笔记类型_TH.getSelectedItemPosition().toString()
        , 小红书同行_发布时间: thirdPage.发布时间_TH.getSelectedItemPosition().toString()
        , 小红书同行_搜索范围: thirdPage.搜索范围_TH.getSelectedItemPosition().toString()
        , 小红书同行_运行时长: parseInt(thirdPage.运行时长_TH.text())
        , 小红书同行_单一行为: thirdPage.单一行为_TH.checked
        , 小红书同行_头像点赞概率: parseInt(thirdPage.头像点赞概率_TH.getProgress())
        , 小红书同行_背景点赞概率: parseInt(thirdPage.背景点赞概率_TH.getProgress())
        , 小红书同行_关注概率: parseInt(thirdPage.关注概率_TH.getProgress())
        , 小红书同行_私信概率: parseInt(thirdPage.私信概率_TH.getProgress())
        , 小红书同行_私信话术: thirdPage.私信话术_TH.text()

        , 快手截流_作品关键词: thirdPage.作品关键词_KS.text()
        , 快手截流_排序: thirdPage.排序_KS.getSelectedItemPosition().toString()
        , 快手截流_发布时间: thirdPage.发布时间_KS.getSelectedItemPosition().toString()
        , 快手截流_作品时长: thirdPage.作品时长_KS.getSelectedItemPosition().toString()
        , 快手截流_搜索范围: thirdPage.搜索范围_KS.getSelectedItemPosition().toString()
        , 快手截流_手动选择地区: thirdPage.手动选择地区_KS.checked
        , 快手截流_评论关键词: thirdPage.评论关键词_KS.text()
        , 快手截流_运行时长: parseInt(thirdPage.运行时长_KS.text())
        , 快手截流_首评评论: thirdPage.首评评论_KS.checked
        , 快手截流_首评留言: thirdPage.首评留言_KS.text()
        , 快手截流_视频直接留言: thirdPage.视频直接留言_KS.checked
        , 快手截流_视频直接留言话术: thirdPage.视频直接留言话术_KS.text()
        , 快手截流_单一行为: thirdPage.单一行为_KS.checked
        , 快手截流_点赞概率: parseInt(thirdPage.点赞概率_KS.getProgress())
        , 快手截流_头像点赞概率: parseInt(thirdPage.头像点赞概率_KS.getProgress())
        , 快手截流_评论概率: parseInt(thirdPage.评论概率_KS.getProgress())
        , 快手截流_关注概率: parseInt(thirdPage.关注概率_KS.getProgress())
        , 快手截流_私信概率: parseInt(thirdPage.私信概率_KS.getProgress())
        , 快手截流_私信话术: thirdPage.私信话术_KS.text()
        , 快手截流_目标客户评论话术: thirdPage.目标客户评论话术_KS.text()

    }


    local_storage.put("params_HK", param_obj_HK)

    toastLog("参数保存成功")


})


/////////////////////////////////////////卡密储存//////////////////////////

var password = local_storage.get("passWord_storage")
try {
    if (password) {
        settingPage.卡密.setText(password)
    }
}
catch (e) {
    log("Error: " + e)
}


settingPage.保存配置.click(function () {
    var password = settingPage.卡密.text()
    local_storage.put("passWord_storage", password)
    toastLog("卡密保存成功")
    verif = verification(password)
})

/////验证卡密登录

var verif = verification(password)

function verification(password) {
    /////这里换成你自己的API KEY
    let pjysdk = new PJYSDK("cugtadrdqusohemtisa0", "uFmM8Wtr0xt8CC8y7WvS6a3OorrTzu2A");
    pjysdk.debug = true;
    pjysdk.SetCard(password);

    // 监听心跳失败事件
    pjysdk.event.on("heartbeat_failed", function (hret) {
        toastLog(hret.message);
        if (hret.code === 10214) {
            // sleep(200);
            exit();  // 退出脚本
            return
        }
        log("心跳失败，尝试重登...")
        sleep(2000);
        let login_ret = pjysdk.CardLogin();
        if (login_ret.code == 0) {
            log("重登成功");
        } else {
            toastLog(login_ret.message);  // 重登失败
            sleep(200);
            exit();  // 退出脚本
        }
    });

    // 当脚本正常或者异常退出时会触发exit事件
    events.on("exit", function () {
        pjysdk.CardLogout(); // 调用退出登录
        log("结束运行");
    });



    let login_ret = pjysdk.CardLogin();

    if (login_ret.code == 0) {
        // 登录成功，后面写你的业务代码
        toastLog("登录成功")

        try {
            settingPage.有效期.setText(pjysdk.login_result.expires.toString())
        }
        catch (e) {
            toastLog("Error: " + e)
        }
        return true;
    } else {
        // 登录失败提示
        toast(login_ret.message);

        try { settingPage.有效期.setText("--/--/--") }
        catch (e) {
            toastLog("Error: " + e)
        }
        return false;
    }

}



////主按钮执行
main_executeButton.click(function () {
    threads.shutDownAll()///防止傻逼多跑线程
    verif = verification(password)
    if (verif) {
        toastLog("卡密登录成功")
        enabled = true
        if (timer.checked) {
            var timerThread = threads.start(function () {
                var currentDate = new Date()
                var currentTime = currentDate.getHours() * 60 * 60 * 1000 + currentDate.getMinutes() * 60 * 1000 + currentDate.getSeconds() * 1000;
                var timePickerTime = timePicker.getCurrentHour() * 60 * 60 * 1000 + timePicker.getCurrentMinute() * 60 * 1000;
                var timeInterval = timePickerTime - currentTime;
                if (timeInterval > 0) {
                    toastLog("程序将会在：" + Math.floor(timeInterval / 60000) + "分钟多后进行,请勿关闭程序");

                    setTimeout(function () {

                        switch (true) {
                            case mainPage.养号按钮.checked:
                                toastLog("执行养号任务")
                                var 运行时长 = parseInt(secondPage.运行时长.text())
                                var 单个视频最小时长 = parseInt(secondPage.最小观看时间.text())
                                var 单个视频最大时长 = parseInt(secondPage.最大观看时间.text())
                                var 留言数组 = secondPage.评论留言.text().split("#")
                                var 作品评论概率 = parseInt(secondPage.作品评论概率值.text())
                                var 作者关注概率 = parseInt(secondPage.作者关注概率值.text())
                                var 作品点赞概率 = parseInt(secondPage.作品点赞概率值.text())
                                var 访问作者主页概率 = parseInt(secondPage.访问作者主页概率值.text())

                                switch (true) {
                                    case DY_YH_button.checked:
                                        toastLog("执行抖音养号任务")
                                        app.launchApp("抖音")
                                        threads.start(function () {
                                            YH_DY.DY_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
                                                留言数组, 作品评论概率, 作者关注概率,
                                                作品点赞概率, 访问作者主页概率);
                                        })
                                        break;


                                    case WX_YH_button.checked:
                                        toastLog("执行微信养号任务")
                                        app.launchApp("微信")
                                        threads.start(function () {

                                            YH_WX.WX_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
                                                留言数组, 作品评论概率, 作者关注概率,
                                                作品点赞概率, 访问作者主页概率);
                                        })
                                        break;


                                    case XHS_YH_button.checked:
                                        toastLog("执行小红书养号任务");
                                        app.launchApp("小红书")
                                        threads.start(function () {
                                            YH_XHS.XHS_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
                                                留言数组, 作品评论概率, 作者关注概率,
                                                作品点赞概率, 访问作者主页概率);
                                        })
                                        break;


                                    case KS_YH_button.checked:
                                        toastLog("执行快手养号任务")
                                        app.launchApp("快手")
                                        threads.start(function () {
                                            YH_KS.KS_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
                                                留言数组, 作品评论概率, 作者关注概率,
                                                作品点赞概率, 访问作者主页概率);
                                        })

                                        break;

                                    default:
                                        console.log("没有养号按钮被选中");

                                }

                                break;

                            case mainPage.获客按钮.checked:
                                toastLog("执行获客任务")
                                switch (true) {
                                    case DY_HK_button.checked:
                                        switch (true) {
                                            case DY_HK_button1.checked:
                                                toastLog("执行抖音截流获客任务")
                                                ///获得参数
                                                var 运行时长 = parseInt(thirdPage.运行时长.text())
                                                var 作品关键词 = thirdPage.作品关键词.text()
                                                var 排序依据 = thirdPage.排序依据.getSelectedItem().toString()
                                                var 内容形式 = thirdPage.内容形式.getSelectedItem().toString()
                                                var 发布时间 = thirdPage.发布时间.getSelectedItem().toString()
                                                var 视频时长 = thirdPage.视频时长.getSelectedItem().toString()
                                                var 搜索范围 = thirdPage.搜索范围.getSelectedItem().toString()
                                                var keyWord_array = thirdPage.评论关键词.text().split("#")
                                                var 首评回复 = thirdPage.首评评论.checked
                                                var 首评数组 = thirdPage.首评留言.text().split("#")
                                                var 视频直接留言 = thirdPage.视频直接留言.checked
                                                var 视频直接留言数组 = thirdPage.视频直接留言话术.text().split("#")
                                                var 单一行为 = thirdPage.单一行为.checked
                                                var 点赞概率 = thirdPage.点赞概率.getProgress()
                                                var 评论概率 = thirdPage.评论概率.getProgress()
                                                var 评论数组 = thirdPage.目标客户评论话术.text().split("#")

                                                var 关注概率 = thirdPage.关注概率.getProgress()
                                                var 私信概率 = thirdPage.私信概率.getProgress()
                                                var 头像点赞概率 = thirdPage.头像点赞概率.getProgress()
                                                var 私信数组 = thirdPage.私信话术.text().split("#")


                                                log(排序依据, 内容形式, 发布时间, 视频时长, 搜索范围)


                                                app.launchApp("抖音")
                                                threads.start(function () {
                                                    HK_DY_JL.Main(运行时长,
                                                        作品关键词, 排序依据, 内容形式, 发布时间, 视频时长, 搜索范围, keyWord_array,
                                                        首评回复, 首评数组, 视频直接留言, 视频直接留言数组, 单一行为,
                                                        点赞概率, 头像点赞概率, 评论概率, 评论数组, 关注概率, 私信概率, 私信数组);
                                                })
                                                break;
                                            case DY_HK_button2.checked:
                                                toastLog("执行抖音图文经验获客任务")
                                                ///获得参数

                                                var 运行时长 = parseInt(thirdPage.运行时长_TW.text())
                                                var 搜索关键词 = thirdPage.作品关键词_TW.text()
                                                var 客户关键词数组 = thirdPage.评论关键词_TW.text().split("#")
                                                var 首评回复 = thirdPage.首评评论_TW.checked
                                                var 首评数组 = thirdPage.首评留言_TW.text().split("#")
                                                var 图文直接评论 = thirdPage.视频直接留言_TW.checked
                                                var 直接留言数组 = thirdPage.视频直接留言话术_TW.text().split("#")
                                                var 单一行为 = thirdPage.单一行为_TW.checked
                                                var 点赞概率 = thirdPage.点赞概率_TW.getProgress()
                                                var 评论概率 = thirdPage.评论概率_TW.getProgress()
                                                var 评论数组 = thirdPage.目标客户评论话术_TW.text().split("#")
                                                var 关注概率 = thirdPage.关注概率_TW.getProgress()
                                                var 私信概率 = thirdPage.私信概率_TW.getProgress()
                                                var 头像点赞概率 = thirdPage.头像点赞概率_TW.getProgress()
                                                var 私信数组 = thirdPage.私信话术_TW.text().split("#")

                                                app.launchApp("抖音")
                                                threads.start(function () {
                                                    HK_DY_TW.Main(搜索关键词, 客户关键词数组, 运行时长, 图文直接评论, 直接留言数组, 首评回复, 首评数组, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 评论数组, 私信数组)


                                                    log(2)
                                                })
                                                break;
                                            case DY_HK_button3.checked:
                                                toastLog("执行抖音团购获客任务")
                                                ///获得参数
                                                var 团购搜索词 = thirdPage.团购搜索词.text()
                                                var 地区 = thirdPage.地区.text()
                                                var 单一行为 = thirdPage.单一行为_TG.checked
                                                var 关注概率 = thirdPage.关注概率_TG.getProgress()
                                                var 私信概率 = thirdPage.私信概率_TG.getProgress()
                                                var 有用点赞概率 = thirdPage.有用点赞概率_TG.getProgress()
                                                var 私信数组 = thirdPage.私信话术_TG.text().split("#")
                                                var 回复概率 = thirdPage.回复概率_TG.getProgress()
                                                var 回复数组 = thirdPage.回复话术_TG.text().split("#")
                                                var 运行时长 = parseInt(thirdPage.运行时长_TG.text())

                                                app.launchApp("抖音")
                                                threads.start(function () {
                                                    HK_DY_TG.Main(团购搜索词, 地区, 单一行为, 关注概率, 私信概率, 有用点赞概率, 回复概率, 私信数组, 回复数组, 运行时长)




                                                })
                                                break;
                                            default:
                                                console.log("没有二级按钮被选中");
                                        }
                                        break;
                                    case WX_HK_button.checked:
                                        switch (true) {
                                            case WX_HK_button1.checked:
                                                toastLog("执行视频号截流任务")
                                                ///获得参数
                                                var 运行时长 = parseInt(thirdPage.运行时长_SPH.text())
                                                var 搜索关键词 = thirdPage.作品关键词_SPH.text()
                                                var 直接评论 = thirdPage.视频直接留言_SPH.checked
                                                var 直接留言数组 = thirdPage.视频直接留言话术_SPH.text().split("#")
                                                var 首评回复 = thirdPage.首评评论_SPH.checked
                                                var 首评数组 = thirdPage.首评留言_SPH.text().split("#")
                                                var 客户关键词数组 = thirdPage.评论关键词_SPH.text().split("#")
                                                var 点赞概率 = thirdPage.点赞概率_SPH.getProgress()
                                                var 评论概率 = thirdPage.评论概率_SPH.getProgress()
                                                var 关注概率 = thirdPage.关注概率_SPH.getProgress()
                                                var 私信概率 = thirdPage.私信概率_SPH.getProgress()
                                                var 单一行为 = thirdPage.单一行为_SPH.checked
                                                var 留言数组 = thirdPage.目标客户评论话术_SPH.text().split("#")
                                                var 私信数组 = thirdPage.私信话术_SPH.text().split("#")


                                                app.launchApp("微信")
                                                threads.start(function () {
                                                    HK_WX_SPH.Main(搜索关键词, 运行时长, 直接评论, 直接留言数组, 首评回复, 首评数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 单一行为, 留言数组, 私信数组)


                                                })
                                                break;
                                            case WX_HK_button2.checked:
                                                toastLog("执行微信获客任务2")
                                                app.launchApp("微信")
                                                var 附近的人筛选 = thirdPage.附近的人筛选.getSelectedItem().toString()
                                                var 功能选择 = thirdPage.功能选择.getSelectedItem().toString()



                                                threads.start(function () { HK_WX_FJS.Main(附近的人筛选, 功能选择) })
                                                break;
                                            case WX_HK_button3.checked:
                                                toastLog("执行微信获客任务3")
                                                ////传参
                                                var 群聊组名 = thirdPage.群聊组名称.text().split("#")
                                                var 目标人数数组 = thirdPage.群聊组加人人数.text().split("#")
                                                var 仅聊天 = thirdPage.加人时打开仅聊天.checked

                                                app.launchApp("微信")
                                                threads.start(function () {
                                                    HK_WX_QL.Main(群聊组名, 目标人数数组,  仅聊天)
                                                })
                                                break;
                                            default:
                                                console.log("没有二级按钮被选中");
                                        }
                                        break;
                                    case XHS_HK_button.checked:
                                        switch (true) {
                                            case XHS_HK_button1.checked:
                                                var 运行时长 = parseInt(thirdPage.运行时长_XHS.text())
                                                var 搜索关键词 = thirdPage.作品关键词_XHS.text()
                                                var 笔记类型 = thirdPage.笔记类型.getSelectedItem().toString()
                                                var 排序依据 = thirdPage.排序依据_XHS.getSelectedItem().toString()
                                                var 发布时间 = thirdPage.发布时间_XHS.getSelectedItem().toString()
                                                var 搜索范围 = thirdPage.搜索范围_XHS.getSelectedItem().toString()
                                                var 客户关键词数组 = thirdPage.评论关键词_XHS.text().split("#")
                                                var 点赞概率 = thirdPage.点赞概率_XHS.getProgress()
                                                var 评论概率 = thirdPage.评论概率_XHS.getProgress()
                                                var 评论数组 = thirdPage.目标客户评论话术_XHS.text().split("#")
                                                var 关注概率 = thirdPage.关注概率_XHS.getProgress()
                                                var 私信概率 = thirdPage.私信概率_XHS.getProgress()
                                                var 头像点赞概率 = thirdPage.头像点赞概率_XHS.getProgress()
                                                var 单一行为 = thirdPage.单一行为_XHS.checked
                                                var 留言数组 = thirdPage.目标客户评论话术_XHS.text().split("#")
                                                var 私信数组 = thirdPage.私信话术_XHS.text().split("#")
                                                var 直接私信 = thirdPage.直接私信_XHS.checked

                                                var 直接留言 = thirdPage.视频直接留言_XHS.checked
                                                var 直接留言数组 = thirdPage.视频直接留言话术_XHS.text().split("#")
                                                var 首评回复 = thirdPage.首评评论_XHS.checked
                                                var 首评数组 = thirdPage.首评留言_XHS.text().split("#")
                                                var 分享评论 = thirdPage.分享评论_XHS.checked




                                                toastLog("执行小红书获客任务1")
                                                app.launchApp("小红书")
                                                threads.start(function () {
                                                    HK_XHS_JL.Main(搜索关键词, 笔记类型, 排序依据,发布时间,搜索范围, 运行时长,
                                                        直接留言, 直接留言数组, 首评回复, 首评数组,
                                                        客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信
                                                    ) 
                                                })
                                                break;
                                            case XHS_HK_button2.checked:
                                                toastLog("执行小红书获客任务2-图文经验-8")
                                                ///获得参数
                                                var 搜索关键词 = thirdPage.作品关键词_XHS_TW.text()
                                                var 排序依据 = thirdPage.排序依据_XHS_TW.getSelectedItem().toString()
                                                var 发布时间 = thirdPage.发布时间_XHS_TW.getSelectedItem().toString()
                                                var 搜索范围 = thirdPage.搜索范围_XHS_TW.getSelectedItem().toString()
                                                var 运行时长 = parseInt(thirdPage.运行时长_XHS_TW.text())
                                                var 二次筛选 = thirdPage.二次筛选_XHS_TW.checked
                                                var keywords = thirdPage.二次筛选内容_XHS_TW.text().split("#")
                                                var 高频触达 = thirdPage.高频触达_XHS_TW.checked
                                                var 单一行为 = thirdPage.单一行为_XHS_TW.checked
                                                var 点赞概率 = thirdPage.点赞概率_XHS_TW.getProgress()
                                                var 关注概率 = thirdPage.关注概率_XHS_TW.getProgress()
                                                var 私信概率 = thirdPage.私信概率_XHS_TW.getProgress()
                                                var 头像点赞概率 = thirdPage.头像点赞概率_XHS_TW.getProgress()
                                                var 私信数组 = thirdPage.私信话术_XHS_TW.text().split("#")


                                                var 直接留言数组 = thirdPage.留言回答内容_XHS_TW.text().split("#")





                                                app.launchApp("小红书")
                                                threads.start(function () {
                                                    HK_XHS_TW.Main(搜索关键词, 排序依据,发布时间,搜索范围,运行时长, 二次筛选, keywords,直接留言数组, 高频触达, 单一行为, 点赞概率, 关注概率, 私信概率, 头像点赞概率, 私信数组)
                                                })
                                                break;
                                            case XHS_HK_button3.checked:
                                                toastLog("执行小红书获客任务3")
                                                ///获得参数
                                                var 搜索关键词 = thirdPage.同行关键词_TH.text()
                                                var 运行时长 = parseInt(thirdPage.运行时长_TH.text())
                                                var 查找方式 = thirdPage.查找方式_TH.getSelectedItem().toString()
                                                var 笔记类型 = thirdPage.笔记类型_TH.getSelectedItem().toString()
                                                var 排序依据 = thirdPage.排序依据_TH.getSelectedItem().toString()
                                                var 发布时间 = thirdPage.发布时间_TH.getSelectedItem().toString()
                                                var 搜索范围 = thirdPage.搜索范围_TH.getSelectedItem().toString()
                                                var 单一行为 = thirdPage.单一行为_TH.checked
                                                var 背景点赞概率 = thirdPage.背景点赞概率_TH.getProgress()
                                                var 关注概率 = thirdPage.关注概率_TH.getProgress()
                                                var 私信概率 = thirdPage.私信概率_TH.getProgress()
                                                var 私信数组 = thirdPage.私信话术_TH.text().split("#")
                                                var 头像点赞概率 = thirdPage.头像点赞概率_TH.getProgress()




                                                app.launchApp("小红书")
                                                threads.start(function () { HK_XHS_TH.Main(搜索关键词,笔记类型, 排序依据,发布时间,搜索范围,运行时长,查找方式,单一行为,背景点赞概率,关注概率,私信概率,头像点赞概率,私信数组) })
                                                break;
                                            default:
                                                console.log("没有二级按钮被选中");
                                        }
                                        break;
                                    case KS_HK_button.checked:
                                        switch (true) {
                                            case KS_HK_button1.checked:
                                                toastLog("执行快手获客任务1")
                                                ///获得参数



                                                app.launchApp("快手")
                                                threads.start(function () {
                                                    var 搜索关键词 = thirdPage.作品关键词_KS.text()
                                                    var 排序 = thirdPage.排序_KS.getSelectedItem().toString()
                                                    var 发布时间 = thirdPage.发布时间_KS.getSelectedItem().toString()
                                                    var 作品时长 = thirdPage.作品时长_KS.getSelectedItem().toString()
                                                    var 搜索范围 = thirdPage.搜索范围_KS.getSelectedItem().toString()
                                                    var 手动选择城市 = thirdPage.手动选择地区_KS.checked
                                                    var 运行时长 = parseInt(thirdPage.运行时长_KS.text())
                                                    var 直接留言 = thirdPage.视频直接留言_KS.checked
                                                    var 直接留言数组 = thirdPage.视频直接留言话术_KS.text().split("#")
                                                    var 客户关键词数组 = thirdPage.评论关键词_KS.text().split("#")
                                                    var 点赞概率 = thirdPage.点赞概率_KS.getProgress()
                                                    var 评论概率 = thirdPage.评论概率_KS.getProgress()
                                                    var 留言数组 = thirdPage.目标客户评论话术_KS.text().split("#")
                                                    var 关注概率 = thirdPage.关注概率_KS.getProgress()
                                                    var 私信概率 = thirdPage.私信概率_KS.getProgress()
                                                    var 头像点赞概率 = thirdPage.头像点赞概率_KS.getProgress()
                                                    var 单一行为 = thirdPage.单一行为_KS.checked
                                                    var 私信数组 = thirdPage.私信话术_KS.text().split("#")
                                                    var 首评回复 = thirdPage.首评评论_KS.checked
                                                    var 首评数组 = thirdPage.首评留言_KS.text().split("#")


                                                    HK_KS.Main(搜索关键词, 排序, 发布时间, 作品时长, 搜索范围, 手动选择城市,
                                                        运行时长, 直接留言, 直接留言数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 首评回复
                                                        , 首评数组)

                                                })
                                                break;
                                            default:
                                                console.log("没有二级按钮被选中");
                                        }
                                        break;
                                    default:
                                        console.log("获客模式中没有一级按钮被选中");
                                }
                                break;

                            default:
                                toastLog("请选择模式");

                        }
                    }, timeInterval)
                }
                else { toastLog("设置时间小于当前时间,请重新设置") }
            })
        }
        else {
            switch (true) {
                case mainPage.养号按钮.checked:
                    toastLog("执行养号任务")
                    var 运行时长 = parseInt(secondPage.运行时长.text())
                    var 单个视频最小时长 = parseInt(secondPage.最小观看时间.text())
                    var 单个视频最大时长 = parseInt(secondPage.最大观看时间.text())
                    var 留言数组 = secondPage.评论留言.text().split("#")
                    var 作品评论概率 = parseInt(secondPage.作品评论概率值.text())
                    var 作者关注概率 = parseInt(secondPage.作者关注概率值.text())
                    var 作品点赞概率 = parseInt(secondPage.作品点赞概率值.text())
                    var 访问作者主页概率 = parseInt(secondPage.访问作者主页概率值.text())

                    switch (true) {
                        case DY_YH_button.checked:
                            toastLog("执行抖音养号任务")
                            app.launchApp("抖音")
                            threads.start(function () {
                                YH_DY.DY_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
                                    留言数组, 作品评论概率, 作者关注概率,
                                    作品点赞概率, 访问作者主页概率);
                            })
                            break;


                        case WX_YH_button.checked:
                            toastLog("执行微信养号任务")
                            app.launchApp("微信")
                            threads.start(function () {

                                YH_WX.WX_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
                                    留言数组, 作品评论概率, 作者关注概率,
                                    作品点赞概率, 访问作者主页概率);
                            })
                            break;


                        case XHS_YH_button.checked:
                            toastLog("执行小红书养号任务");
                            app.launchApp("小红书")
                            threads.start(function () {
                                YH_XHS.XHS_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
                                    留言数组, 作品评论概率, 作者关注概率,
                                    作品点赞概率, 访问作者主页概率);
                            })
                            break;


                        case KS_YH_button.checked:
                            toastLog("执行快手养号任务")
                            app.launchApp("快手")
                            threads.start(function () {
                                YH_KS.KS_Main(运行时长, 单个视频最小时长, 单个视频最大时长,
                                    留言数组, 作品评论概率, 作者关注概率,
                                    作品点赞概率, 访问作者主页概率);
                            })

                            break;

                        default:
                            console.log("没有养号按钮被选中");

                    }

                    break;

                case mainPage.获客按钮.checked:
                    toastLog("执行获客任务")
                    switch (true) {
                        case DY_HK_button.checked:
                            switch (true) {
                                case DY_HK_button1.checked:

                                    ///获得参数
                                    var 运行时长 = parseInt(thirdPage.运行时长.text())
                                    var 作品关键词 = thirdPage.作品关键词.text()
                                    var 排序依据 = thirdPage.排序依据.getSelectedItem().toString()
                                    var 内容形式 = thirdPage.内容形式.getSelectedItem().toString()
                                    var 发布时间 = thirdPage.发布时间.getSelectedItem().toString()
                                    var 视频时长 = thirdPage.视频时长.getSelectedItem().toString()
                                    var 搜索范围 = thirdPage.搜索范围.getSelectedItem().toString()
                                    var keyWord_array = thirdPage.评论关键词.text().split("#")
                                    var 首评回复 = thirdPage.首评评论.checked
                                    var 首评数组 = thirdPage.首评留言.text().split("#")
                                    var 视频直接留言 = thirdPage.视频直接留言.checked
                                    var 视频直接留言数组 = thirdPage.视频直接留言话术.text().split("#")
                                    var 单一行为 = thirdPage.单一行为.checked
                                    var 点赞概率 = thirdPage.点赞概率.getProgress()
                                    var 评论概率 = thirdPage.评论概率.getProgress()
                                    var 评论数组 = thirdPage.目标客户评论话术.text().split("#")

                                    var 关注概率 = thirdPage.关注概率.getProgress()
                                    var 私信概率 = thirdPage.私信概率.getProgress()
                                    var 头像点赞概率 = thirdPage.头像点赞概率.getProgress()
                                    var 私信数组 = thirdPage.私信话术.text().split("#")


                                    log(排序依据, 内容形式, 发布时间, 视频时长, 搜索范围)


                                    app.launchApp("抖音")
                                    threads.start(function () {
                                        toastLog("执行抖音截流获客任务")
                                        HK_DY_JL.Main(运行时长,
                                            作品关键词, 排序依据, 内容形式, 发布时间, 视频时长, 搜索范围, keyWord_array,
                                            首评回复, 首评数组, 视频直接留言, 视频直接留言数组, 单一行为,
                                            点赞概率, 头像点赞概率, 评论概率, 评论数组, 关注概率, 私信概率, 私信数组);



                                    })
                                    break;
                                case DY_HK_button2.checked:

                                    ///获得参数

                                    var 运行时长 = parseInt(thirdPage.运行时长_TW.text())
                                    var 搜索关键词 = thirdPage.作品关键词_TW.text()
                                    var 客户关键词数组 = thirdPage.评论关键词_TW.text().split("#")
                                    var 首评回复 = thirdPage.首评评论_TW.checked
                                    var 首评数组 = thirdPage.首评留言_TW.text().split("#")
                                    var 图文直接评论 = thirdPage.视频直接留言_TW.checked
                                    var 直接留言数组 = thirdPage.视频直接留言话术_TW.text().split("#")
                                    var 单一行为 = thirdPage.单一行为_TW.checked
                                    var 点赞概率 = thirdPage.点赞概率_TW.getProgress()
                                    var 评论概率 = thirdPage.评论概率_TW.getProgress()
                                    var 评论数组 = thirdPage.目标客户评论话术_TW.text().split("#")
                                    var 关注概率 = thirdPage.关注概率_TW.getProgress()
                                    var 私信概率 = thirdPage.私信概率_TW.getProgress()
                                    var 头像点赞概率 = thirdPage.头像点赞概率_TW.getProgress()
                                    var 私信数组 = thirdPage.私信话术_TW.text().split("#")

                                    app.launchApp("抖音")
                                    threads.start(function () {
                                        toastLog("执行抖音图文经验获客任务")
                                        HK_DY_TW.Main(搜索关键词, 客户关键词数组, 运行时长, 图文直接评论, 直接留言数组, 首评回复, 首评数组, 单一行为, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 评论数组, 私信数组)

                                    })
                                    break;
                                case DY_HK_button3.checked:

                                    toastLog("执行抖音团购获客任务")
                                    ///获得参数
                                    var 团购搜索词 = thirdPage.团购搜索词.text()
                                    var 地区 = thirdPage.地区.text()
                                    var 单一行为 = thirdPage.单一行为_TG.checked
                                    var 关注概率 = thirdPage.关注概率_TG.getProgress()
                                    var 私信概率 = thirdPage.私信概率_TG.getProgress()
                                    var 有用点赞概率 = thirdPage.有用点赞概率_TG.getProgress()
                                    var 私信数组 = thirdPage.私信话术_TG.text().split("#")
                                    var 回复概率 = thirdPage.回复概率_TG.getProgress()
                                    var 回复数组 = thirdPage.回复话术_TG.text().split("#")
                                    var 运行时长 = parseInt(thirdPage.运行时长_TG.text())

                                    app.launchApp("抖音")
                                    threads.start(function () {
                                        HK_DY_TG.Main(团购搜索词, 地区, 单一行为, 关注概率, 私信概率, 有用点赞概率, 回复概率, 私信数组, 回复数组, 运行时长)




                                    })
                                    break;
                                default:
                                    console.log("没有二级按钮被选中");
                            }
                            break;
                        case WX_HK_button.checked:
                            switch (true) {
                                case WX_HK_button1.checked:
                                    toastLog("执行视频号截流任务")
                                    ///获得参数
                                    var 运行时长 = parseInt(thirdPage.运行时长_SPH.text())
                                    var 搜索关键词 = thirdPage.作品关键词_SPH.text()
                                    var 直接评论 = thirdPage.视频直接留言_SPH.checked
                                    var 直接留言数组 = thirdPage.视频直接留言话术_SPH.text().split("#")
                                    var 首评回复 = thirdPage.首评评论_SPH.checked
                                    var 首评数组 = thirdPage.首评留言_SPH.text().split("#")
                                    var 客户关键词数组 = thirdPage.评论关键词_SPH.text().split("#")
                                    var 点赞概率 = thirdPage.点赞概率_SPH.getProgress()
                                    var 评论概率 = thirdPage.评论概率_SPH.getProgress()
                                    var 评论数组 = thirdPage.目标客户评论话术_SPH.text().split("#")
                                    var 关注概率 = thirdPage.关注概率_SPH.getProgress()
                                    var 私信概率 = thirdPage.私信概率_SPH.getProgress()
                                    var 单一行为 = thirdPage.单一行为_SPH.checked
                                    var 留言数组 = thirdPage.私信话术_SPH.text().split("#")
                                    var 私信数组 = thirdPage.私信话术_SPH.text().split("#")


                                    app.launchApp("微信")
                                    threads.start(function () {
                                        log(直接留言数组)
                                        HK_WX_SPH.Main(搜索关键词, 运行时长, 首评回复, 首评数组, 直接评论, 直接留言数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 单一行为, 留言数组, 私信数组)


                                    })
                                    break;
                                case WX_HK_button2.checked:
                                    toastLog("执行微信加人任务")
                                    app.launchApp("微信")
                                    var 附近的人筛选 = thirdPage.附近的人筛选.getSelectedItem().toString()
                                    var 功能选择 = thirdPage.功能选择.getSelectedItem().toString()



                                    threads.start(function () { HK_WX_FJS.Main(附近的人筛选, 功能选择) })
                                    break;
                                case WX_HK_button3.checked:
                                    toastLog("执行微信获客任务3")
                                    ////传参
                                    var 群聊组名 = thirdPage.群聊组名称.text().split("#")
                                    var 目标人数数组 = thirdPage.群聊组加人人数.text().split("#")
                                    var 仅聊天 = thirdPage.加人时打开仅聊天.checked

                                    app.launchApp("微信")
                                    threads.start(function () {
                                        HK_WX_QL.Main(群聊组名, 目标人数数组,  仅聊天)
                                    })
                                    break;
                                default:
                                    console.log("没有二级按钮被选中");
                            }
                            break;
                        case XHS_HK_button.checked:
                            switch (true) {
                                case XHS_HK_button1.checked:
                                    var 运行时长 = parseInt(thirdPage.运行时长_XHS.text())
                                    var 搜索关键词 = thirdPage.作品关键词_XHS.text()
                                    var 笔记类型 = thirdPage.笔记类型.getSelectedItem().toString()
                                    var 排序依据 = thirdPage.排序依据_XHS.getSelectedItem().toString()
                                    var 发布时间 = thirdPage.发布时间_XHS.getSelectedItem().toString()
                                    var 搜索范围 = thirdPage.搜索范围_XHS.getSelectedItem().toString()
                                    var 客户关键词数组 = thirdPage.评论关键词_XHS.text().split("#")
                                    var 点赞概率 = thirdPage.点赞概率_XHS.getProgress()
                                    var 评论概率 = thirdPage.评论概率_XHS.getProgress()
                                    var 评论数组 = thirdPage.目标客户评论话术_XHS.text().split("#")
                                    var 关注概率 = thirdPage.关注概率_XHS.getProgress()
                                    var 私信概率 = thirdPage.私信概率_XHS.getProgress()
                                    var 头像点赞概率 = thirdPage.头像点赞概率_XHS.getProgress()
                                    var 单一行为 = thirdPage.单一行为_XHS.checked
                                    var 留言数组 = thirdPage.目标客户评论话术_XHS.text().split("#")
                                    var 私信数组 = thirdPage.私信话术_XHS.text().split("#")
                                    var 直接私信 = thirdPage.直接私信_XHS.checked

                                    var 直接留言 = thirdPage.视频直接留言_XHS.checked
                                    var 直接留言数组 = thirdPage.视频直接留言话术_XHS.text().split("#")
                                    var 首评回复 = thirdPage.首评评论_XHS.checked
                                    var 首评数组 = thirdPage.首评留言_XHS.text().split("#")
                                    var 分享评论 = thirdPage.分享评论_XHS.checked




                                    toastLog("执行小红书获客任务1")
                                    app.launchApp("小红书")
                                    threads.start(function () {
                                        HK_XHS_JL.Main(搜索关键词, 笔记类型, 排序依据,发布时间,搜索范围, 运行时长,
                                            直接留言, 直接留言数组, 首评回复, 首评数组,
                                            客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 分享评论, 直接私信
                                        ) 
                                    })
                                    break;
                                case XHS_HK_button2.checked:
                                    toastLog("执行小红书获客任务2-图文经验-8")
                                    ///获得参数
                                    var 搜索关键词 = thirdPage.作品关键词_XHS_TW.text()
                                    var 排序依据 = thirdPage.排序依据_XHS_TW.getSelectedItem().toString()
                                    var 发布时间 = thirdPage.发布时间_XHS_TW.getSelectedItem().toString()
                                    var 搜索范围 = thirdPage.搜索范围_XHS_TW.getSelectedItem().toString()
                                    var 运行时长 = parseInt(thirdPage.运行时长_XHS_TW.text())
                                    var 二次筛选 = thirdPage.二次筛选_XHS_TW.checked
                                    var keywords = thirdPage.二次筛选内容_XHS_TW.text().split("#")
                                    var 高频触达 = thirdPage.高频触达_XHS_TW.checked
                                    var 单一行为 = thirdPage.单一行为_XHS_TW.checked
                                    var 点赞概率 = thirdPage.点赞概率_XHS_TW.getProgress()
                                    var 关注概率 = thirdPage.关注概率_XHS_TW.getProgress()
                                    var 私信概率 = thirdPage.私信概率_XHS_TW.getProgress()
                                    var 头像点赞概率 = thirdPage.头像点赞概率_XHS_TW.getProgress()
                                    var 私信数组 = thirdPage.私信话术_XHS_TW.text().split("#")


                                    var 直接留言数组 = thirdPage.留言回答内容_XHS_TW.text().split("#")





                                    app.launchApp("小红书")
                                    threads.start(function () {
                                        HK_XHS_TW.Main(搜索关键词, 排序依据,发布时间,搜索范围,运行时长, 二次筛选, keywords,直接留言数组, 高频触达, 单一行为, 点赞概率, 关注概率, 私信概率, 头像点赞概率, 私信数组)
                                    })
                                    
                                    break;
                                case XHS_HK_button3.checked:
                                    toastLog("执行小红书获客任务3")
                                    ///获得参数
                                    var 搜索关键词 = thirdPage.同行关键词_TH.text()
                                    var 运行时长 = parseInt(thirdPage.运行时长_TH.text())
                                    var 查找方式 = thirdPage.查找方式_TH.getSelectedItem().toString()
                                    var 笔记类型 = thirdPage.笔记类型_TH.getSelectedItem().toString()
                                    var 排序依据 = thirdPage.排序依据_TH.getSelectedItem().toString()
                                    var 发布时间 = thirdPage.发布时间_TH.getSelectedItem().toString()
                                    var 搜索范围 = thirdPage.搜索范围_TH.getSelectedItem().toString() 
                                    var 单一行为 = thirdPage.单一行为_TH.checked
                                    var 背景点赞概率 = thirdPage.背景点赞概率_TH.getProgress()
                                    var 关注概率 = thirdPage.关注概率_TH.getProgress()
                                    var 私信概率 = thirdPage.私信概率_TH.getProgress()
                                    var 私信数组 = thirdPage.私信话术_TH.text().split("#")
                                    var 头像点赞概率 = thirdPage.头像点赞概率_TH.getProgress()




                                    app.launchApp("小红书")
                                    threads.start(function () { HK_XHS_TH.Main(搜索关键词,笔记类型, 排序依据,发布时间,搜索范围,运行时长,查找方式,单一行为,背景点赞概率,关注概率,私信概率,头像点赞概率,私信数组)  })
                                    break;
                                default:
                                    console.log("没有二级按钮被选中");
                            }
                            break;
                        case KS_HK_button.checked:
                            switch (true) {
                                case KS_HK_button1.checked:
                                    toastLog("执行快手获客任务1")
                                    ///获得参数



                                    app.launchApp("快手")
                                    threads.start(function () {
                                        var 搜索关键词 = thirdPage.作品关键词_KS.text()
                                        var 排序 = thirdPage.排序_KS.getSelectedItem().toString()
                                        var 发布时间 = thirdPage.发布时间_KS.getSelectedItem().toString()
                                        var 作品时长 = thirdPage.作品时长_KS.getSelectedItem().toString()
                                        var 搜索范围 = thirdPage.搜索范围_KS.getSelectedItem().toString()
                                        var 手动选择城市 = thirdPage.手动选择地区_KS.checked
                                        var 运行时长 = parseInt(thirdPage.运行时长_KS.text())
                                        var 直接留言 = thirdPage.视频直接留言_KS.checked
                                        var 直接留言数组 = thirdPage.视频直接留言话术_KS.text().split("#")
                                        var 客户关键词数组 = thirdPage.评论关键词_KS.text().split("#")
                                        var 点赞概率 = thirdPage.点赞概率_KS.getProgress()
                                        var 评论概率 = thirdPage.评论概率_KS.getProgress()
                                        var 留言数组 = thirdPage.目标客户评论话术_KS.text().split("#")
                                        var 关注概率 = thirdPage.关注概率_KS.getProgress()
                                        var 私信概率 = thirdPage.私信概率_KS.getProgress()
                                        var 头像点赞概率 = thirdPage.头像点赞概率_KS.getProgress()
                                        var 单一行为 = thirdPage.单一行为_KS.checked
                                        var 私信数组 = thirdPage.私信话术_KS.text().split("#")
                                        var 首评回复 = thirdPage.首评评论_KS.checked
                                        var 首评数组 = thirdPage.首评留言_KS.text().split("#")


                                        HK_KS.Main(搜索关键词, 排序, 发布时间, 作品时长, 搜索范围, 手动选择城市,
                                            运行时长, 直接留言, 直接留言数组, 客户关键词数组, 点赞概率, 评论概率, 关注概率, 私信概率, 头像点赞概率, 单一行为, 留言数组, 私信数组, 首评回复
                                            , 首评数组)

                                    })
                                    break;
                                default:
                                    console.log("没有二级按钮被选中");
                            }
                            break;
                        default:
                            console.log("获客模式中没有一级按钮被选中");
                    }
                    break;

                default:
                    toastLog("请选择模式");

            }
        }
    }
    else { toastLog("请先进行卡密登录") }
}
)




main_stop.click(function () {
    threads.shutDownAll()
    toastLog("任务已停止")
})





//悬浮和悬浮窗
mainPage.floaterService.on("check", function (checked) {

    if (checked && floaty.checkPermission() != true) {
        /// 当被选中同时没有权限时,请求权限
        log("请求悬浮窗权限")
        floaty.requestPermission()
    }
    if (checked && floaty.checkPermission()) {
        log("打开悬浮窗")

        logFloatWindow.init();

        logFloatWindow.setFloatySubTitle("长按角标以拖动")
        logFloatWindow.handleStart(logFloatWindow);

        setInterval(() => { }, 1000);
        var isFloatyRunning = logFloatWindow.isRunning();
        log(isFloatyRunning)
        ///接收事件


    }

    if (!checked) {
        log("关闭悬浮窗")
        // floater_thread.interrupt();
        logFloatWindow.handleStop(logFloatWindow);
        var isFloatyRunning = logFloatWindow.isRunning();
        log(isFloatyRunning)
    }


})



 













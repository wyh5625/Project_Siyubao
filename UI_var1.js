// "ui";
// importClass(android.graphics.Color);
// importClass(android.graphics.drawable.GradientDrawable);
// importClass(android.graphics.drawable.GradientDrawable.Orientation);
// activity.setTheme(com.google.android.material.R$style.Theme_Material3_Light_NoActionBar);
var screenWidth = device.width;
var screenHeight = device.height;
var drawerWidth = Math.floor(screenWidth * 0.8);
/////////////////////////////////////////////////////////////////////////主页
var mainPage = ui.inflate
    (
        <drawer id="drawer" bg="#F8F8FF">



            {/*主页*/}


            <vertical id="主页" bg="#F3F4F8">
                {/* 1.顶部区域 */}
                <vertical id="顶部" w="*" h="0" layout_weight="40" gravity="center_vertical" >
                    <horizontal>
                        <appbar bg="#F3F4F8" >
                            <toolbar id="toolbar" h="35dp" w="40dp" bg="#F3F4F8" />
                        </appbar>
                        <horizontal id="内部图片和文字" h="*" w="*" bg="#F3F4F8" gravity="center_vertical">
                            <img id="image_hand" src="file:///sdcard/appSync/Project_Siyubao/images/22A7F58E.png" h="40dp" w="30dp" padding="0dp 2dp 2dp 5dp" />
                            <text text="欢迎" src="image_hand_path" textsize="14sp" typeface="monospace" textColor="#000000" textStyle="bold" />
                        </horizontal>
                    </horizontal>
                </vertical>

                {/* 2.主控件栏 */}
                <vertical id="主控件栏" w="*" h="0" layout_weight="400" >
                    {/* 2.1卡片区域 */}
                    <vertical id="卡片区" w="*" h="0" layout_weight="5.5">

                        <com.google.android.material.card.MaterialCardView
                            id="card1"
                            marginTop="0dp"
                            marginLeft="8dp"
                            marginRight="8dp"
                            marginBottom="5dp"
                            cardBackgroupColor="#F8F8FF"
                            clickable="True"
                            cardCornerRadius="18dp"
                            h="0"
                            w="*"
                            layout_weight="1"
                            elevation="10dp"
                        >

                            <horizontal>

                                <img src="file:///sdcard/appSync/Project_Siyubao/images/Top1.png"
                                    h="*"
                                    w="0"
                                    scaleType="centerCrop"
                                    layout_weight="0.9" />
                                <vertical h="*" w="0" layout_weight="0.1">
                                    <RadioButton id="养号按钮" />
                                    <img src="file:///sdcard/appSync/Project_Siyubao/images/yh.png" h="70sp" />
                                </vertical>


                            </horizontal>

                        </com.google.android.material.card.MaterialCardView>

                        <com.google.android.material.card.MaterialCardView
                            id="card2"
                            marginTop="2dp"
                            marginLeft="8dp"
                            marginRight="8dp"
                            marginBottom="2dp"
                            cardBackgroupClor="#F8F8FF"
                            clickable="True"
                            cardCornerRadius="18dp"
                            h="0"
                            w="*"
                            layout_weight="1"
                            elevation="5dp"
                        >
                            <horizontal>
                                <img src="file:///sdcard/appSync/Project_Siyubao/images/Buttom1.png"
                                    h="*"
                                    w="0"
                                    scaleType="centerCrop"
                                    layout_weight="0.9" />
                                <vertical h="*" w="0" layout_weight="0.1">
                                    <RadioButton id="获客按钮" />
                                    <img src="file:///sdcard/appSync/Project_Siyubao/images/hk.png" h="70sp" />
                                </vertical>





                            </horizontal>




                        </com.google.android.material.card.MaterialCardView>


                    </vertical>
                    {/* 2.2调时区域 */}
                    <card id="调时区" w="*" h="0" layout_weight="4.5" cardBackgroundColor="#F3F4F8" >
                        {/* 2.2.1定时器 */}
                        <vertical>
                            {/* 2.2.1定时器 */}
                            <horizontal marginLeft="30dp">
                                <horizontal id="定时" gravity="center_vertical">
                                    <img src="file:///sdcard/appSync/Project_Siyubao/images/watch.png" marginLeft="8dp" marginRight="10dp" h="30dp" w="20dp" />
                                    <CheckBox id="timerbox" text="定时" textStyle="bold" textSize="16sp" layoutDirection="rtl" textColor="#000000" typeface="monospace" />
                                    <timepicker id="timepicker" w="*" h="100dp" timePickerMode="spinner" marginLeft="40dp" />
                                </horizontal>
                            </horizontal>

                            <vertical >
                            <card id="主页面开始" clickable="True" w="auto" h="0" layout_weight="1"  marginLeft="30dp" cardBackgroundColor="#FFFFFF" cardCornerRadius="18dp" cardElevation="8dp">
                                <horizontal layout_gravity="center_vertical" >
                                    <img src="@drawable/ic_play_arrow_black_48dp" h="auto" w="0" layout_weight="1.5" layout_gravity="center" />
                                    <button h="auto" w="0" layout_weight="2"  text="开始" clickable="True" bg="#FFFFFF" textColor="#000000" typeface="monospace" textStyle="bold" textSize="14sp" />
                                </horizontal>
                            </card>

                            <card id="主页面停止" clickable="True"  w="auto" h="0" layout_weight="1" marginLeft="30dp" marginTop="15dp" cardBackgroundColor="#FFFFFF" cardCornerRadius="18dp" cardElevation="8dp">
                                <horizontal layout_gravity="center_vertical" >
                                    <img src="@drawable/ic_clear_black_48dp" h="auto" w="0" layout_weight="1.5" layout_gravity="center" />
                                    <button h="auto" w="0" layout_weight="2"  text="结束" clickable="True" bg="#FFFFFF" textColor="#000000" typeface="monospace" textStyle="bold" textSize="14sp" />
                                </horizontal>
                            </card>
                            <vertical id="空白" h = "15dp"/>
                            </vertical>


                        </vertical>
                    </card>
                </vertical>



                <vertical id="留白栏" w="*" h="0" layout_weight="30">
                </vertical>


                {/* 3.底部栏 */}
                <vertical id="底部配件" w="*" h="0" layout_weight="70" gravity="center|center_vertical">

                    <com.google.android.material.bottomappbar.BottomAppBar bg="#F3F4F8" >
                        <card w="*" h="60dp" cardCornerRadius="18dp" >
                            <horizontal h="auto" w="*" layout_gravity="center|center_vertical">
                                <img id="home" layout_weight="1" clickable="true" h="30dp" w="30dp" scaleType="fitCenter" tint="#38393C" src="@drawable/ic_home_black_48dp"/>
                                <img id="home_setting" layout_weight="1" clickable="true" h="25dp" w="30dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_settings_black_48dp" />
                                <img id="home_help" layout_weight="1" clickable="true" h="22dp" w="22dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_help_black_48dp" />

                            </horizontal>
                        </card>
                    </com.google.android.material.bottomappbar.BottomAppBar>
                </vertical>
            </vertical>


            <vertical id="抽屉页布局" layout_gravity="left" bg="#F8F8FF" w="260dp" clickable="true" >


                <vertical w="*" h="0" layout_weight="330" marginTop="30dp" >
                    <horizontal id="卡密激活" clickable="True" gravity="center_vertical" margin="20dp 13dp 0dp 20dp">
                        <img h="22dp" w="22dp" scaleType="centerInside" src="@drawable/ic_perm_identity_black_48dp" />
                        <text text="卡密激活" textColor="#000000" typeface="monospace" textStyle="bold" textSize="16sp" marginLeft="10dp" />
                    </horizontal>

                    <com.google.android.material.divider.MaterialDivider h="1dp" dividerColor="#000000" dividerInsetStart="20dp" dividerInsetEnd="30dp" dividerThickness="2" />
                    <horizontal id="firsth" gravity="center_vertical" margin="20dp 13dp 0dp 20dp" >
                        <img h="22dp" w="22dp" scaleType="centerInside" src="@drawable/ic_accessibility_black_48dp" />
                        <text text="无障碍服务" textColor="#000000" typeface="monospace" textStyle="bold" textSize="16sp" marginLeft="10dp" marginRight="70dp" />
                        <Switch id="autoService" clickable="True" scaleY="0.9" scaleX="0.9" checked="{{auto.service != null}}" />

                    </horizontal>

                    <com.google.android.material.divider.MaterialDivider h="1dp" dividerColor="#000000" dividerInsetStart="20dp" dividerInsetEnd="30dp" dividerThickness="2" />
                    <horizontal id="h" gravity="center_vertical" margin="20dp 13dp 0dp 20dp">
                        <img h="22dp" w="22dp" scaleType="centerInside" src="@drawable/ic_assignment_black_48dp" />
                        <text text="悬浮窗日志" textColor="#000000" typeface="monospace" textStyle="bold" textSize="16sp" marginLeft="10dp" marginRight="70dp" />
                        <Switch id="floaterService" scaleY="0.9" scaleX="0.9" />
                    </horizontal>

                    <com.google.android.material.divider.MaterialDivider h="1dp" dividerColor="#000000" dividerInsetStart="20dp" dividerInsetEnd="30dp" dividerThickness="2" />

                    <horizontal id="分享" clickable="True" gravity="center_vertical" margin="20dp 13dp 0dp 20dp">
                        <img h="22dp" w="22dp" scaleType="centerInside" src="@drawable/ic_share_black_48dp" />
                        <text text="分享" textColor="#000000" typeface="monospace" textStyle="bold" textSize="16sp" marginLeft="10dp" />

                    </horizontal>
                    <com.google.android.material.divider.MaterialDivider h="1dp" dividerColor="#000000" dividerInsetStart="20dp" dividerInsetEnd="30dp" dividerThickness="2" />
                    <horizontal id="官网" gravity="center_vertical" margin="20dp 13dp 0dp 20dp">
                        <img h="24dp" w="22dp" scaleType="centerInside" src="file:///sdcard/appSync/Project_Siyubao/images/logo.png"  />
                        <text text="官网" textColor="#000000" typeface="monospace" textStyle="bold" textSize="16sp" marginLeft="10dp" />

                    </horizontal>
                    <com.google.android.material.divider.MaterialDivider h="1dp" dividerColor="#000000" dividerInsetStart="20dp" dividerInsetEnd="30dp" dividerThickness="2" />
                    <horizontal id="群聊" gravity="center_vertical" margin="20dp 13dp 0dp 20dp">
                        <img h="22dp" w="22dp" scaleType="centerInside" src="@drawable/ic_star_black_48dp" />
                        <text text="加入交流群!" textColor="#000000" typeface="monospace" textStyle="bold" textSize="16sp" marginLeft="10dp" />

                    </horizontal>
                    <com.google.android.material.divider.MaterialDivider h="1dp" dividerColor="#000000" dividerInsetStart="20dp" dividerInsetEnd="30dp" dividerThickness="2" />
                    <horizontal id="客服" gravity="center_vertical" margin="20dp 13dp 0dp 20dp">
                        <img h="22dp" w="22dp" scaleType="centerInside" src="@drawable/ic_mail_black_48dp" />
                        <text text="客服" textColor="#000000" typeface="monospace" textStyle="bold" textSize="16sp" marginLeft="10dp" />

                    </horizontal>
                </vertical>

                <vertical id="底部留白" h="0" layout_weight="200" gravity="bottom" marginBottom="20dp" >
                    <text text="让科技为你工作" margin="18dp 5dp 0dp 5dp" />
                    <com.google.android.material.divider.MaterialDivider h="1dp" dividerColor="#000000" dividerInsetStart="20dp" dividerInsetEnd="30dp" dividerThickness="2" />
                    <text text="©2024 私域宝" margin="15dp 5dp 0dp 0dp" />
                </vertical>

            </vertical>
            {/* ////"#a7b2b6" */}



        </drawer>


    );


///////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////养号第二页
var secondPage = ui.inflate(

    <vertical id="养号第二页" bg="#F3F4F8" >
        {/* 1.顶部 */}
        <vertical id="养号第二页顶部" w="*" h="0" layout_weight="40"  >


            <horizontal id="内部图片和文字2" h="*" w="*" bg="#F3F4F8" gravity="center_vertical" marginLeft="5dp" >
                <horizontal id="返回区" h="*" w="100dp" gravity="center_vertical" clickable="true" >
                    <img id="第二页返回" src="@drawable/ic_arrow_back_black_48dp" h="40dp" w="30dp" padding="5dp 2dp 0dp 5dp" />
                </horizontal>
                {/* <button id="开始养号" text="开始按键" textSize="14sp" textColor="#000000" gravity="center_vertical|right" /> */}
                <card id = "保存" w="75dp" h="*"   layout_gravity="center_vertical|" 
                margin="200dp 15dp 10dp 15dp"
                clickable="true" cardCornerRadius="18dp" elevation="5dp" >
                <text  text = "保存"  textSize="14sp" textColor="#000000" gravity="center" textStyle="bold"  />
                </card>
            </horizontal>


        </vertical>

        {/* 2.主控件栏 */}
        <vertical id="第二页主控件栏" w="*" h="0" layout_weight="430" >
            <ScrollView>
                <vertical>
                    <text text="模式" textStyle="bold" textSize="18sp" textColor="#000000" margin="10dp 5dp 0dp 15dp" />
                    <card
                        clickable="true"
                        marginTop="0dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="45dp"
                        w="*"
                        elevation="10dp"
                    >
                        <horizontal
                            gravity="center_vertical"
                            bg="#FFFFFF"
                            paddingLeft="16dp"
                            paddingRight="16dp"
                        >
                            <text
                                text="抖音"
                                layout_weight="1"
                                gravity="start"
                            />

                            <RadioButton
                                id="抖音养号"
                                gravity="end"
                                layout_width="wrap_content"
                                layout_height="wrap_content"
                                layout_marginLeft="auto"
                            />
                        </horizontal>
                    </card>

                    <card
                        clickable="true"
                        marginTop="0dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="45dp"
                        w="*"
                        elevation="10dp"
                    >
                        <horizontal
                            gravity="center_vertical"
                            bg="#FFFFFF"
                            paddingLeft="16dp"
                            paddingRight="16dp"
                        >
                            <text
                                text="微信"
                                layout_weight="1"
                                gravity="start"
                            />

                            <RadioButton
                                id="微信养号"
                                gravity="end"
                                layout_width="wrap_content"
                                layout_height="wrap_content"
                                layout_marginLeft="auto"
                            />
                        </horizontal>
                    </card>

                    <card
                        clickable="true"
                        marginTop="0dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="45dp"
                        w="*"
                        elevation="10dp"
                    >
                        <horizontal
                            gravity="center_vertical"
                            bg="#FFFFFF"
                            paddingLeft="16dp"
                            paddingRight="16dp"
                        >
                            <text
                                text="小红书"
                                layout_weight="1"
                                gravity="start"
                            />

                            <RadioButton
                                id="小红书养号"
                                gravity="end"
                                layout_width="wrap_content"
                                layout_height="wrap_content"
                                layout_marginLeft="auto"
                            />
                        </horizontal>
                    </card>

                    <card
                        clickable="true"
                        marginTop="0dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="45dp"
                        w="*"
                        elevation="15dp"
                    >
                        <horizontal
                            gravity="center_vertical"
                            bg="#FFFFFF"
                            paddingLeft="16dp"
                            paddingRight="16dp"
                        >
                            <text
                                text="快手"
                                layout_weight="1"
                                gravity="start"
                            />

                            <RadioButton
                                id="快手养号"
                                gravity="end"
                                layout_width="wrap_content"
                                layout_height="wrap_content"
                                layout_marginLeft="auto"
                            />
                        </horizontal>
                    </card>

                    <text text="参数设置" textStyle="bold" textSize="18sp" textColor="#000000" margin="10dp 5dp 0dp 15dp" />

                    <card
                        marginTop="0dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="auto"
                        w="*"
                        elevation="5dp"
                    >

                        <vertical >
                            <card bg="#F3F4F8"
                                h="30dp" >
                                <text text="基本选项" gravity="center" />
                            </card>
                            <vertical >
                                <horizontal h="40dp" w="*" >
                                    <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                    <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                        <input id="运行时长" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                    </horizontal>
                                </horizontal>
                                <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                <horizontal h="40dp">
                                    <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="单个视频观看时长" marginLeft="15dp" />
                                    <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                        <input id="最小观看时间" text="5" inputType="number" singleLine="True" textSize="14sp" /> <text text="~" />
                                        <input id="最大观看时间" text="20" inputType="number" singleLine="True" textSize="14sp" />  <text text="秒" />
                                    </horizontal>
                                </horizontal>
                                <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                <vertical marginTop="10dp" h="75" w="*">
                                    <text text="评论留言设置" marginLeft="15dp" />
                                    <input id="评论留言" marginLeft="15dp" w="310dp" text="666#可以的#视频做的不错啊" singleLine="True" textSize="14sp" />
                                </vertical>
                            </vertical>

                        </vertical>





                    </card>


                    <card marginTop="15dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="auto"
                        w="*"
                        elevation="10dp"

                    >
                        <vertical>
                            <card bg="#F3F4F8"
                                h="30dp" >
                                <text text="概率设置" gravity="center" />
                            </card>
                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="作品评论概率" marginLeft="15dp" />
                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="作品评论概率值" text="0%" marginRight="30dp" />
                            </horizontal>
                            <vertical marginBottom="10dp" gravity="center">
                                <seekbar id="作品评论概率" max="100" w="330dp" />
                            </vertical>
                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="作者关注概率" marginLeft="15dp" />
                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="作者关注概率值" text="0%" marginRight="30dp" />
                            </horizontal>
                            <vertical marginBottom="10dp" gravity="center">
                                <seekbar id="作者关注概率" max="100" w="330dp" />
                            </vertical>
                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="作品点赞概率" marginLeft="15dp" />
                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="作品点赞概率值" text="0%" marginRight="30dp" />
                            </horizontal>
                            <vertical marginBottom="10dp" gravity="center">
                                <seekbar id="作品点赞概率" max="100" w="330dp" />
                            </vertical>
                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="访问作者主页概率" marginLeft="15dp" />
                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="访问作者主页概率值" text="0%" marginRight="30dp" />
                            </horizontal>
                            <vertical marginBottom="10dp" gravity="center">
                                <seekbar id="访问作者主页概率" max="100" w="330dp" />
                            </vertical>
                        </vertical>
                    </card>
                </vertical>
            </ScrollView>
        </vertical>





        <vertical id="留白栏2" w="*" h="0" layout_weight="0">
        </vertical>


        <vertical id="底部配件" w="*" h="0" layout_weight="70" gravity="center|center_vertical">
            <com.google.android.material.bottomappbar.BottomAppBar bg="#F3F4F8">
                <card w="*" h="60dp" cardCornerRadius="18dp" >
                    <horizontal h="auto" w="*" layout_gravity="center|center_vertical">
                        <img id="home" layout_weight="1" clickable="true" h="30dp" w="30dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_home_black_48dp" />
                        <img id="home_setting" layout_weight="1" clickable="true" h="25dp" w="30dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_settings_black_48dp" />
                        <img id="home_help" layout_weight="1" clickable="true" h="22dp" w="22dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_help_black_48dp" />

                    </horizontal>
                </card>
            </com.google.android.material.bottomappbar.BottomAppBar>
        </vertical>
    </vertical>


)




////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////setting页
var settingPage = ui.inflate(
    <vertical id="设置" bg="#F3F4F8"  >
        {/* 1.顶部 */}
        <vertical id="顶部" w="*" h="0" layout_weight="30" bg="#F3F4F8" >
            <horizontal h="0" layout_weight="35" />
            <text w="*" h="0" layout_weight="65" text="其他设置与信息" margin="10dp 0dp 0dp 0dp" textStyle="bold" textSize="18sp" layout_gravity="center" gravity="center" textColor="#000000" typeface="monospace" />
        </vertical>

        <vertical id="主控件栏" w="*" h="0" layout_weight="440" >
            <ScrollView>
                <vertical>
                    <text w="*" h="auto" text="设置" margin="10dp 0dp 0dp 0dp" textStyle="bold" textSize="18sp" layout_gravity="center" gravity="center_vertical" textColor="#000000" />
                    <card
                        marginTop="5dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="auto"
                        w="*"
                        elevation="5dp"
                    >

                        <vertical >

                            <vertical >

                                <vertical marginTop="10dp" h="75" w="*">
                                    <text text="卡密设置" marginLeft="15dp" />
                                    <input id="卡密" text="请输入卡密" textStyle="italic" marginLeft="15dp" w="310dp" singleLine="True" textSize="13sp" />
                                </vertical>
                                <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                <horizontal h="40dp" w="*" >
                                    <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="有效期至" marginLeft="15dp" />
                                    <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                  <text id="有效期" text="--/--/--" />
                                    </horizontal>
                                </horizontal>
                                <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                <horizontal h="40dp">
                                    <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="私域宝版本" marginLeft="15dp" />
                                    <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="25dp">
                                        <text id="版本号" text="Sv.1.03.1" textStyle="bold" textSize="14sp" />
                                    </horizontal>
                                </horizontal>

                            </vertical>
                            <card bg="#F3F4F8"
                                h="30dp" id="保存配置" clickable="true" >
                                <text text="登录并保存" gravity="center" />
                            </card>
                        </vertical>





                    </card>

                    <vertical id="广告和日志" marginTop="15dp" w="*" h="500dp" >

                        <vertical id="日志" w="*" h="0" layout_weight="1.5">
                            <text text="运行日志" textStyle="bold" gravity="center_vertical" textSize="18sp" textColor="#000000" margin="10dp 0dp 0dp 2dp" />
                            <card
                                cardBackgroundColor="#F3F4F8"
                                marginTop="4dp"
                                marginLeft="8dp"
                                marginRight="8dp"
                                marginBottom="10dp"
                                cardCornerRadius="14dp"
                                h="0"
                                w="*"
                                cardElevation="10dp"
                                layout_weight="1"
                            >
                                <vertical>
                                    <card cardBackgroundColor="#F3F4F8" w="*" h="0" layout_weight="3" >
                                        <text text="历史日志信息" gravity="center" textSize="15sp" textColor="#000000" textStyle="bold" />
                                    </card>
                                    <card cardBackgroundColor="#ffffff" margin="10dp 0dp 10dp 0dp" w="*" h="0" layout_weight="15" padding="5dp" >
                                        <vertical>
                                            <console id="console" w="*" h="*"  >
                                            </console>
                                        </vertical>
                                    </card>

                                    <card cardBackgroundColor="#F3F4F8" w="*" h="0" layout_weight="3" >
                                        <card id="clearLog" clickable="true" w="90dp" h="wrap_content" cardBackgroundColor="#FFFFFF" cardCornerRadius="10dp" margin="2dp 0dp 2dp 0dp" padding="2dp" layout_gravity="center" cardElevation="1dp" >
                                            <text text="清空" gravity="center" textSize="14sp" textColor="#000000" />
                                        </card>
                                    </card>
                                </vertical>
                            </card>
                            <vertical h="0" layout_weight="0.05" />

                        </vertical>
                        <vertical id="广告" w="*" h="0" layout_weight="1" >

                            <card
                                marginLeft="8dp"
                                marginRight="8dp"
                                marginBottom="5dp"
                                cardCornerRadius="14dp"
                                h="auto"
                                w="*"
                                elevation="10dp"
                            >
                                <vertical>
                                    <img id="banner" scaleType="centerCrop" src="file:///sdcard/appSync/Project_Siyubao/images/flower1.png" />
                                </vertical>
                            </card>

                        </vertical>
                    </vertical>
                </vertical>
            </ScrollView>
        </vertical>


        {/* <vertical id="留白栏" w="*" h="0" layout_weight="0">
        </vertical> */}


        <vertical id="底部配件" w="*" h="0" layout_weight="70" bg="#F3F4F8" gravity="center|center_vertical">
            <com.google.android.material.bottomappbar.BottomAppBar bg="#F3F4F8">
                <card w="*" h="60dp" cardCornerRadius="18dp" >
                    <horizontal h="auto" w="*" layout_gravity="center|center_vertical">
                        <img id="home" layout_weight="1" clickable="true" h="30dp" w="30dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_home_black_48dp" />
                        <img id="home_setting" layout_weight="1" clickable="true" h="25dp" w="30dp" scaleType="fitCenter" tint="#38393C" src="@drawable/ic_settings_black_48dp" />
                        <img id="home_help" layout_weight="1" clickable="true" h="22dp" w="22dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_help_black_48dp" />

                    </horizontal>
                </card>
            </com.google.android.material.bottomappbar.BottomAppBar>
        </vertical>
    </vertical>
)
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////helpPage
var helpPage = ui.inflate(
    <vertical id="设置" bg="#F3F4F8"  >
        {/* 1.顶部 */}
        <vertical id="顶部" w="*" h="0" layout_weight="30" bg="#F3F4F8" >
            <horizontal h="0" layout_weight="35" />
            <text w="*" h="0" layout_weight="65" text="帮助" margin="10dp 0dp 0dp 0dp" textStyle="bold" textSize="18sp" layout_gravity="center" gravity="center" textColor="#000000" typeface="monospace" />
        </vertical>

        <vertical id="主控件栏" w="*" h="0" layout_weight="440" >
            <ScrollView>
                <vertical>
                    <text w="*" h="auto" text="使用声明" margin="10dp 0dp 0dp 0dp" textStyle="bold" textSize="18sp" layout_gravity="center" gravity="center_vertical" textColor="#000000" />
                    <card
                        marginTop="5dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="auto"
                        w="*"
                        elevation="5dp"

                    >

                        <vertical padding="0dp 10dp 10dp 10dp"  >
                            <text text="本软件是一款用于辅助社交平台营销的第三方RPA软件,为的是减少用户繁琐的手工操作,提升工作效率.任何个人和组织不得利用本软件进行任何违法犯罪活动,包含且不限于:" marginLeft="15dp" textSize="14sp" />
                            <text text="1.散布不良信息，色情广告和虚假内容来骚扰他人" marginLeft="15dp" textSize="14sp" />
                            <text text="2.影响平台app的用户体验、危及其他平台安全及损害他人权益的行为。" marginLeft="15dp" textSize="14sp" />
                            <text text="3.通过软件发送欺诈性内容并进行诈骗活动" marginLeft="15dp" textSize="14sp" />
                            <text text="4.任何含有法律、行政法规禁止的行为" marginLeft="15dp" textSize="14sp" />
                            <text text="等等" marginLeft="15dp" textSize="14sp" />
                            <text text="如有相关违法行为,一切后果将由使用者自行承担,本软件开发者以及所属公司对此不承担任何相关直接责任以及任何形式的连带责任,且对其终止一切服务" marginLeft="15dp" textSize="14sp" />
                        </vertical>

                    </card>
                    <text w="*" h="auto" text="使用帮助" margin="10dp 15dp 0dp 0dp" textStyle="bold" textSize="18sp" layout_gravity="center" gravity="center_vertical" textColor="#000000" />
                    <card
                        marginTop="5dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="auto"
                        w="*"
                        elevation="5dp"
                    >

                        <vertical >
                            <horizontal id="抖音版本号" clickable="true" h="40dp" w="*" >
                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="指导手册" marginLeft="15dp" />
                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="25dp">

                                    <text id="帮助手册" text="查看指导手册" clickable="true" textStyle="bold" textSize="14sp" textColor="#168bbf" />
                                </horizontal>
                            </horizontal>
                        </vertical>






                    </card>

                    <text w="*" h="auto" text="兼容版本" margin="10dp 20dp 0dp 0dp" textStyle="bold" textSize="18sp" layout_gravity="center" gravity="center_vertical" textColor="#000000" />
                    <card
                        marginTop="5dp"
                        marginLeft="8dp"
                        marginRight="8dp"
                        marginBottom="5dp"
                        cardCornerRadius="14dp"
                        h="auto"
                        w="*"
                        elevation="5dp"
                    >

                        <vertical >
                            <horizontal id="抖音版本号" clickable="true" h="40dp" w="*" >
                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="抖音版本" marginLeft="15dp" />
                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="25dp">
                                    <text text="3.0.7" textStyle="bold" textSize="14sp" marginRight="15dp" />
                                    <text id="抖音下载" text="下载" clickable="true" textStyle="bold" textSize="14sp" textColor="#168bbf" />


                                </horizontal>
                            </horizontal>
                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                            <horizontal id="微信版本号" clickable="true" h="40dp" w="*" >
                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="微信版本" marginLeft="15dp" />
                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="25dp">
                                    <text text="8.0.50" textStyle="bold" textSize="14sp" marginRight="15dp" />
                                    <text id="微信下载" text="下载" clickable="true" textStyle="bold" textSize="14sp" textColor="#168bbf" />

                                </horizontal>
                            </horizontal>
                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                            <horizontal id="小红书版本号" h="40dp" clickable="true" w="*" >
                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="小红书版本" marginLeft="15dp" />
                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="25dp">
                                    <text text="v.8.48.0.b461ba7" textStyle="bold" textSize="14sp" marginRight="15dp" />
                                    <text id="小红书下载" text="下载" clickable="true" textStyle="bold" textSize="14sp" textColor="#168bbf" />
                                </horizontal>
                            </horizontal>
                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                            <horizontal id="快手版本号" clickable="true" h="40dp" w="*" >
                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="快手版本" marginLeft="15dp" />
                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="25dp">
                                    <text text="V12.7.10.37930" textStyle="bold" textSize="14sp" marginRight="15dp" />
                                    <text id="快手下载" text="下载" clickable="true" textStyle="bold" textSize="14sp" textColor="#168bbf" />

                                </horizontal>
                            </horizontal>
                        </vertical> 






                    </card>

                </vertical>
            </ScrollView>
        </vertical>

        {/* <vertical id="留白栏" w="*" h="0" layout_weight="0">
        </vertical> */}


        <vertical id="底部配件" w="*" h="0" layout_weight="70" bg="#F3F4F8" gravity="center|center_vertical">
            <com.google.android.material.bottomappbar.BottomAppBar bg="#F3F4F8">
                <card w="*" h="60dp" cardCornerRadius="18dp" >
                    <horizontal h="auto" w="*" layout_gravity="center|center_vertical">
                        <img id="home" layout_weight="1" clickable="true" h="30dp" w="30dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_home_black_48dp" />
                        <img id="home_setting" layout_weight="1" clickable="true" h="25dp" w="30dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_settings_black_48dp" />
                        <img id="home_help" layout_weight="1" clickable="true" h="22dp" w="22dp" scaleType="fitCenter" tint="#38393C" src="@drawable/ic_help_black_48dp" />

                    </horizontal>
                </card>
            </com.google.android.material.bottomappbar.BottomAppBar>
        </vertical>
    </vertical>
)
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////






// ui.setContentView(secondPage);


module.exports = { mainPage, secondPage, thirdPage, settingPage, helpPage }
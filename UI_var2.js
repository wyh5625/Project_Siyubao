/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////获客第三页
var thirdPage = ui.inflate(


    <vertical id="获客第三页" bg="#F3F4F8" >
        {/* 1.顶部 */}

        <vertical id="顶部" w="*" h="0" layout_weight="40"  >


            <horizontal id="内部图片和文字" h="*" w="*" bg="#F3F4F8" marginLeft="5dp" >
                <horizontal id="返回区" h="*" w="100dp" gravity="center_vertical" clickable="true" >
                    <img id="返回" src="@drawable/ic_arrow_back_black_48dp" h="40dp" w="30dp" padding="5dp 2dp 0dp 5dp" />
                </horizontal>

                <card id="保存" w="75dp" h="*" layout_gravity="center_vertical|"
                    margin="200dp 15dp 10dp 15dp"
                    clickable="true" cardCornerRadius="18dp" elevation="5dp" >
                    <text text="保存" textSize="14sp" textColor="#000000" gravity="center" textStyle="bold" />
                </card>
            </horizontal>

        </vertical>
        {/* 2.主体 */}
        <vertical id="第三页主控件栏" w="*" h="0" layout_weight="430" >
            <text text="模式选择" textStyle="bold" textSize="19sp" textColor="#000000" margin="10dp 5dp 0dp 15dp" />
            <card w="*" h="120dp" cardCornerRadius="10dp" layout_gravity="center_horizontal" elevation="5dp"
                marginLeft="8dp" marginRight="8dp"
            >
                <vertical>
                    <horizontal gravity="center_vertical" w="*" h="0" layout_weight="1" >
                        <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="抖音按钮" text="抖音" margin="5dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                        <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="微信按钮" text="微信" margin="1dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                        <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="小红书按钮" text="小红书" margin="1dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1.2" />
                        <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="快手按钮" text="快手" margin="1dp 2dp 5dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                    </horizontal>
                    <com.google.android.material.divider.MaterialDivider h="1dp" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                    <viewpager id="viewPager" w="*" h="0" layout_weight="1" scrollable="false">
                        <horizontal id="抖音子版块" >

                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="抖音按钮1" text="截流获客" margin="5dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />

                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="抖音按钮2" text="图文截流" margin="1dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="抖音按钮3" text="团购获客" margin="1dp 2dp 5dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                        </horizontal>
                        <horizontal id="微信子版块">
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="微信按钮1" text="视频号截流" margin="5dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="微信按钮2" text="附近加人" margin="1dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="微信按钮3" text="群聊加人" margin="1dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />

                        </horizontal>

                        <horizontal id="小红书子版块">
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="小红书按钮1" text="截流获客" margin="5dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="小红书按钮2" text="图文提问" margin="1dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="小红书按钮3" text="同行粉丝" margin="1dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="小红书按钮4" text="群发" margin="1dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />
                        </horizontal>

                        <horizontal id="快手子版块">
                            <com.google.android.material.button.MaterialButton clickable="true" checkable="true" id="快手按钮1" text="截流获客" margin="5dp 2dp 1dp 2dp" gravity="center_vertical|center_horizontal" textStyle="bold" textColor="#A5AAA3" backgroundTint="#FFFFFF" w="0" layout_weight="1" />


                        </horizontal>

                    </viewpager>





                </vertical>
            </card>
            <text text="参数设置" textStyle="bold" textSize="18sp" textColor="#000000" margin="10dp 10dp 0dp 5dp" />

            <vertical>
                <viewpager id="参数viewpager">
                    <vertical id="mode_para_1" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="筛选设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="作品关键词" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="作品关键词" text="母婴" w="100dp" gravity="center" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="排序依据" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="排序依据" layout_gravity="center" entries="综合排序|最新发布|最多点赞" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="发布时间" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="发布时间" gravity="center" entries="不限|一天内|一周内|半年内" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="视频时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="视频时长" gravity="center" entries="不限|1分钟以下|1-5分钟|5分钟以上" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="搜索范围" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="搜索范围" gravity="center" entries="不限|关注的人|最近看过|还未看过" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="内容形式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="内容形式" gravity="center" entries="不限|视频|图文" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />



                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户的评论关键词" marginLeft="15dp" />
                                                <input id="评论关键词" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>
                                        </vertical>

                                    </vertical>





                                </card>



                                <card id="曝光行为设置"
                                    marginTop="15dp"
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
                                            <text text="曝光行为设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="运行时长" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="首评评论回复" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="首评评论" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>



                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="首评回复话术" marginLeft="15dp" />
                                                <input id="首评留言" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="视频直接留言" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="视频直接留言" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="视频直接留言话术" marginLeft="15dp" />
                                                <input id="视频直接留言话术" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text id="单一行为_dy_text" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="单一行为模式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="单一行为" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="点赞概率值" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="点赞概率" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的头像点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="头像点赞概率值" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="头像点赞概率" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的关注概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="关注概率值" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="关注概率" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="评论概率值" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="评论概率" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户评论话术" marginLeft="15dp" />
                                                <input id="目标客户评论话术" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的私信概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="私信概率值" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="私信概率" max="100" w="330dp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户私信话术" marginLeft="15dp" />
                                                <input id="私信话术" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>
                    </vertical>


                    <vertical id="mode_para_2" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="筛选设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="作品关键词" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="作品关键词_TW" text="母婴" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />



                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户的评论关键词" marginLeft="15dp" />
                                                <input id="评论关键词_TW" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>
                                        </vertical>

                                    </vertical>





                                </card>



                                <card id="曝光行为设置"
                                    marginTop="15dp"
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
                                            <text text="曝光行为设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="运行时长_TW" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="首评评论回复" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="首评评论_TW" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>



                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="首评回复话术" marginLeft="15dp" />
                                                <input id="首评留言_TW" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="视频直接留言" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="视频直接留言_TW" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="视频直接留言话术" marginLeft="15dp" />
                                                <input id="视频直接留言话术_TW" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text id="单一行为_dy_text" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="单一行为模式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="单一行为_TW" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="点赞概率值_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="点赞概率_TW" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的头像点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="头像点赞概率值_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="头像点赞概率_TW" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的关注概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="关注概率值_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="关注概率_TW" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="评论概率值_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="评论概率_TW" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户评论话术" marginLeft="15dp" />
                                                <input id="目标客户评论话术_TW" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的私信概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="私信概率值_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="私信概率_TW" max="100" w="330dp" />

                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户私信话术" marginLeft="15dp" />
                                                <input id="私信话术_TW" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>
                    </vertical>


                    <vertical id="mode_para_3" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="筛选设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="团购搜索词" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="团购搜索词" text="美容" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="目标地区设置" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="地区" text="北京" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>

                                        </vertical>

                                    </vertical>





                                </card>



                                <card id="曝光行为设置"
                                    marginTop="15dp"
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
                                            <text text="曝光行为设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="运行时长_TG" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text id="单一行为_dy_text" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="单一行为模式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="单一行为_TG" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="有用点赞概率值_TG" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="有用点赞概率_TG" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的关注概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="关注概率值_TG" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="关注概率_TG" max="100" w="330dp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的私信概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="私信概率值_TG" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="私信概率_TG" max="100" w="330dp" />

                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户私信话术" marginLeft="15dp" />
                                                <input id="私信话术_TG" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论回复概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="回复概率值_TG" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="回复概率_TG" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户回复话术" marginLeft="15dp" />
                                                <input id="回复话术_TG" marginLeft="15dp" w="310dp" text="可以看看我主页也有#dd#我还知道类似的产品" singleLine="True" textSize="14sp" />
                                            </vertical>
                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>
                    </vertical>


                    <vertical id="mode_para_4" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="筛选设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="作品关键词" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="作品关键词_SPH" text="母婴" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />



                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户的评论关键词" marginLeft="15dp" />
                                                <input id="评论关键词_SPH" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>
                                        </vertical>

                                    </vertical>





                                </card>



                                <card id="曝光行为设置"
                                    marginTop="15dp"
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
                                            <text text="曝光行为设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="运行时长_SPH" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="首评评论回复" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="首评评论_SPH" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>



                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="首评回复话术" marginLeft="15dp" />
                                                <input id="首评留言_SPH" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="视频直接留言" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="视频直接留言_SPH" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="视频直接留言话术" marginLeft="15dp" />
                                                <input id="视频直接留言话术_SPH" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text id="单一行为_dy_text" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="单一行为模式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="单一行为_SPH" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="点赞概率值_SPH" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="点赞概率_SPH" max="100" w="330dp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的关注概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="关注概率值_SPH" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="关注概率_SPH" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="评论概率值_SPH" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="评论概率_SPH" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户评论话术" marginLeft="15dp" />
                                                <input id="目标客户评论话术_SPH" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的私信概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="私信概率值_SPH" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="私信概率_SPH" max="100" w="330dp" />

                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户私信话术" marginLeft="15dp" />
                                                <input id="私信话术_SPH" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>
                    </vertical>
                    <vertical id="mode_para_5" >

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
                                <card bg="#F3F4F8"
                                    h="30dp" >
                                    <text text="功能选择" gravity="center" />
                                </card>
                                <vertical >

                                    <horizontal h="40dp">
                                        <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="功能选择" marginLeft="15dp" />
                                        <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                            <spinner id="功能选择" layout_gravity="center" entries="附近的人加人|微信运动点赞" />
                                        </horizontal>
                                    </horizontal>
                                    <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                    <horizontal h="40dp">
                                        <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="附近的人筛选" marginLeft="15dp" />
                                        <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                            <spinner id="附近的人筛选" gravity="center" entries="只看女生|只看男生|查看全部" />
                                        </horizontal>
                                    </horizontal>

                                </vertical>

                            </vertical>
                        </card>

                    </vertical>


                    <vertical id="mode_para_6" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="多个群聊加人设置" gravity="center" />
                                        </card>
                                        <vertical >

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="群聊组名称集" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="群聊组名称" text="群聊1#群聊2#群聊3" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="群聊组加人人数" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="群聊组加人人数" text="100#200#300" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" >
                                                <text id="仅聊天" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="加人时打开仅聊天" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="加人时打开仅聊天" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>



                                        </vertical>

                                    </vertical>





                                </card>





                            </vertical>
                        </ScrollView>
                    </vertical>

                    <vertical id="mode_para_7" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="筛选设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="作品关键词" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="作品关键词_XHS" text="创业" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="排序依据" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="排序依据_XHS" layout_gravity="center" entries="综合|最新|最多点赞|最多评论|最多收藏" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="笔记类型" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="笔记类型" gravity="center" entries="不限|视频|图文" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="发布时间" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="发布时间_XHS" gravity="center" entries="不限|一天内|一周内|半年内" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="搜索范围" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="搜索范围_XHS" gravity="center" entries="不限|已看过|未看过" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户的评论关键词" marginLeft="15dp" />
                                                <input id="评论关键词_XHS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>
                                        </vertical>

                                    </vertical>





                                </card>



                                <card id="曝光行为设置"
                                    marginTop="15dp"
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
                                            <text text="曝光行为设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="运行时长_XHS" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="首评评论回复" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="首评评论_XHS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>



                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="首评回复话术" marginLeft="15dp" />
                                                <input id="首评留言_XHS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="视频直接留言" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="视频直接留言_XHS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="视频直接留言话术" marginLeft="15dp" />
                                                <input id="视频直接留言话术_XHS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text id="单一行为" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="单一行为模式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="单一行为_XHS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="点赞概率值_XHS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="点赞概率_XHS" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的头像点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="头像点赞概率值_XHS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="头像点赞概率_XHS" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的关注概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="关注概率值_XHS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="关注概率_XHS" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的评论概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="评论概率值_XHS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="评论概率_XHS" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户评论话术" marginLeft="15dp" />
                                                <input id="目标客户评论话术_XHS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户的私信概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="私信概率值_XHS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="私信概率_XHS" max="100" w="330dp" />

                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" >
                                                <text id="直接私信开关" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="直接私信留言" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="直接私信_XHS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户私信话术" marginLeft="15dp" />
                                                <input id="私信话术_XHS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text id="分享私信" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="私信分享评论" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="分享评论_XHS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>




                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>
                    </vertical>

                    <vertical id="mode_para_8" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="筛选设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="作品关键词" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="作品关键词_XHS_TW" text="母婴" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="排序依据" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="排序依据_XHS_TW" layout_gravity="center" entries="综合|最新|最多点赞|最多评论|最多收藏" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="发布时间" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="发布时间_XHS_TW" gravity="center" entries="不限|一天内|一周内|半年内" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="搜索范围" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="搜索范围_XHS_TW" gravity="center" entries="不限|已看过|未看过" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="二次筛选" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="二次筛选_XHS_TW" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="二次筛选内容" marginLeft="15dp" />
                                                <input id="二次筛选内容_XHS_TW" marginLeft="15dp" w="310dp" text="请问有没有人#谁能#求帮帮" singleLine="True" textSize="14sp" />
                                            </vertical>
                                        </vertical>

                                    </vertical>





                                </card>



                                <card id="曝光行为设置"
                                    marginTop="15dp"
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
                                            <text text="曝光行为设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="运行时长_XHS_TW" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="留言回答内容" marginLeft="15dp" />
                                                <input id="留言回答内容_XHS_TW" marginLeft="15dp" w="310dp" text="我有资源#我可以做#可以找我" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="打开曝光行为" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="高频触达_XHS_TW" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>



                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="单一行为" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="单一行为_XHS_TW" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标作品点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="点赞概率值_XHS_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="点赞概率_XHS_TW" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标作者头像点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="头像点赞概率值_XHS_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="头像点赞概率_XHS_TW" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标作者关注概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="关注概率值_XHS_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="关注概率_XHS_TW" max="100" w="330dp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标作者私信概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="私信概率值_XHS_TW" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="私信概率_XHS_TW" max="100" w="330dp" />

                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标作者私信话术" marginLeft="15dp" />
                                                <input id="私信话术_XHS_TW" marginLeft="15dp" w="310dp" text="在吗#我有，你需要吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>
                    </vertical>

                    <vertical id="mode_para_9" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="筛选设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="同行关键词" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="同行关键词_TH" text="兼职" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />



                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="查找方式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="查找方式_TH" layout_gravity="center" entries="笔记内容|用户名称" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="排序依据" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="排序依据_TH" layout_gravity="center" entries="综合|最新|最多点赞|最多评论|最多收藏" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="笔记类型" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="笔记类型_TH" gravity="center" entries="不限|视频|图文" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="发布时间" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="发布时间_TH" gravity="center" entries="不限|一天内|一周内|半年内" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="搜索范围" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="搜索范围_TH" gravity="center" entries="不限|已看过|未看过" />
                                                </horizontal>
                                            </horizontal>
                                        
                                        </vertical>

                                    </vertical>
                                </card>



                                <card id="曝光行为设置"
                                    marginTop="15dp"
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
                                            <text text="曝光行为设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="运行时长_TH" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                                </horizontal>
                                            </horizontal>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text id="单一行为_dy_text" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="单一行为模式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="单一行为_TH" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户头像点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="头像点赞概率值_TH" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="头像点赞概率_TH" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户关注概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="关注概率值_TH" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="关注概率_TH" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户背景点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="背景点赞概率值_TH" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="背景点赞概率_TH" max="100" w="330dp" />
                                            </vertical>



                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户私信概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="私信概率值_TH" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="私信概率_TH" max="100" w="330dp" />

                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户私信话术" marginLeft="15dp" />
                                                <input id="私信话术_TH" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>
                    </vertical>

                    <vertical id="mode_para_10" >
                        <ScrollView>
                            <vertical>
  
                                <card id="群发设置"
                                    marginTop="15dp"
                                    marginLeft="8dp"
                                    marginRight="8dp"
                                    marginBottom="5dp"
                                    cardCornerRadius="14dp"
                                    h="auto"
                                    w="*"
                                    elevation="5dp">

                                    <vertical>
                                        <card bg="#F3F4F8" h="30dp">
                                            <text text="群发设置" gravity="center" />
                                        </card>

                                        <vertical marginTop="10dp">
                                            <RadioGroup orientation="horizontal">
                                                <radio id="发送文字_QF" text="文字" layout_weight="1" gravity="center_vertical" marginLeft="15dp"/>
                                                <radio id="发送图片_QF" text="图片" layout_weight="1" gravity="center_vertical" marginLeft="15dp"/>
                                                <radio id="改群昵称_QF" text="改群昵称" layout_weight="1" gravity="center_vertical" marginLeft="15dp"/>
                                            </RadioGroup>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="文字内容" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="文字内容_QF" text="大家好！" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="在群里的昵称" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="群昵称_QF" text="麦格事务所" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>
                                            
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="群扫描" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="群检测_QF" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>

                                        </vertical>
                                    </vertical>
                                </card>

                                <card id="群发参数设置"
                                    marginTop="15dp"
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
                                            <text text="群发参数设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="发送间隔" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="发送间隔_QF" text="5" inputType="number" singleLine="True" textSize="14sp" /> <text text="秒" />
                                                </horizontal>
                                            </horizontal>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="发送概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="群发送概率值_QF" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="群发送概率_QF" max="100" w="330dp" />
                                            </vertical>

                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>



                    </vertical>

                    <vertical id="mode_para_11" >
                        <ScrollView>
                            <vertical>
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
                                        <card bg="#F3F4F8"
                                            h="30dp" >
                                            <text text="筛选设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="作品关键词" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="作品关键词_KS" text="母婴" w="100dp" singleLine="True" textSize="14sp" marginRight="22dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="排序" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="排序_KS" layout_gravity="center" entries="默认排序|最新发布|点赞最多" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="发布时间" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="发布时间_KS" gravity="center" entries="不限|近1日|近7日|近1月" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="作品时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="作品时长_KS" gravity="center" entries="不限|1分钟内|1-5分钟|超5分钟" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp">
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="搜索范围" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <spinner id="搜索范围_KS" gravity="center" entries="不限|已看过|未看过|已关注" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="手动选择地区_KS" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="手动选择地区_KS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />



                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户的评论关键词" marginLeft="15dp" />
                                                <input id="评论关键词_KS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>
                                        </vertical>

                                    </vertical>





                                </card>



                                <card id="曝光行为设置"
                                    marginTop="15dp"
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
                                            <text text="曝光行为设置" gravity="center" />
                                        </card>
                                        <vertical >
                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="运行时长" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <input id="运行时长_KS" text="60" inputType="number" singleLine="True" textSize="14sp" /> <text text="分钟" />
                                                </horizontal>
                                            </horizontal>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="首评评论回复" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="首评评论_KS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>



                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="首评回复话术" marginLeft="15dp" />
                                                <input id="首评留言_KS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text h="*" w="0" layout_weight="1" gravity="center_vertical" text="视频直接留言" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="视频直接留言_KS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="视频直接留言话术" marginLeft="15dp" />
                                                <input id="视频直接留言话术_KS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <horizontal h="40dp" w="*" >
                                                <text id="单一行为_dy_text" clickable="true" h="*" w="0" layout_weight="1" gravity="center_vertical" text="单一行为模式" marginLeft="15dp" />
                                                <horizontal h="*" w="0dp" layout_weight="1" gravity="right|center_vertical" marginRight="15dp">
                                                    <Switch id="单一行为_KS" marginRight="10dp" />
                                                </horizontal>
                                            </horizontal>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户评论点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="点赞概率值_KS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="点赞概率_KS" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户头像点赞概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="头像点赞概率值_KS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="头像点赞概率_KS" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户关注概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="关注概率值_KS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="关注概率_KS" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />
                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户评论概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="评论概率值_KS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="评论概率_KS" max="100" w="330dp" />
                                            </vertical>
                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户评论话术" marginLeft="15dp" />
                                                <input id="目标客户评论话术_KS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />


                                            <horizontal h="40dp" w="*" gravity="center_vertical" >
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical" text="目标客户私信概率" marginLeft="15dp" />
                                                <text h="*" w="0" layout_weight="1" layout_gravity="center_vertical" gravity="center_vertical|right" id="私信概率值_KS" text="0%" marginRight="30dp" />
                                            </horizontal>
                                            <vertical marginBottom="10dp" gravity="center">
                                                <seekbar id="私信概率_KS" max="100" w="330dp" />

                                            </vertical>


                                            <com.google.android.material.divider.MaterialDivider h="*" dividerColor="#F3F4F8" dividerInsetStart="40dp" dividerInsetEnd="40dp" dividerThickness="4" />

                                            <vertical marginTop="10dp" h="75" w="*">
                                                <text text="目标客户私信话术" marginLeft="15dp" />
                                                <input id="私信话术_KS" marginLeft="15dp" w="310dp" text="求同款#求带#dd#还有吗" singleLine="True" textSize="14sp" />
                                            </vertical>

                                        </vertical>

                                    </vertical>





                                </card>

                            </vertical>
                        </ScrollView>



                    </vertical>

                </viewpager>



            </vertical>

        </vertical>

        <vertical id="留白栏" w="*" h="0" layout_weight="0">
        </vertical>


        <vertical id="底部配件" w="*" h="0" layout_weight="70" gravity="center|center_vertical">
            <com.google.android.material.bottomappbar.BottomAppBar bg="#F3F4F8">
                <card w="*" h="60dp" cardCornerRadius="18dp" >
                    <horizontal h="auto" w="*" layout_gravity="center|center_vertical">
                        <img id="home" layout_weight="1" clickable="true" h="30dp" w="30dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_home_black_48dp" />
                        <img id="home_setting" layout_weight="1" clickable="true" h="25dp" w="30dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_settings_black_48dp" />
                        <img id="home_help" layout_weight="1" clickable="true" h="25dp" w="25dp" scaleType="fitCenter" tint="#a5aaa3" src="@drawable/ic_help_black_48dp" />

                    </horizontal>
                </card>
            </com.google.android.material.bottomappbar.BottomAppBar>
        </vertical>
    </vertical>


)


module.exports = { thirdPage }
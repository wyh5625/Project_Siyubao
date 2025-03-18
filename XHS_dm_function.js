////2024.9.02
function DM_action(){
////包括图和button的线性控件
var father_UIs = className("android.widget.LinearLayout").visibleToUser(true).clickable(false).find()
///有两个子控件的UI，第一个button，第二个是ImageView
var target_father_UI = returned.filter(item => 
    item && item.children() && item.children().length ===2 && item.children()[0].className()=="android.widget.Button"
    )[0]
////备用函数，以防未来变化
}

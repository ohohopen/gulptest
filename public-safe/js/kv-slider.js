$(function(){
  var $kv_menu=$('.kv-menu'),
      $menu_item=$kv_menu.find('li'),
      $kv_txt=$('.kv-txt'),
      $txt_item=$kv_txt.find('li'),
      $kv_bg=$('.kv-bg'),
      $bg_item=$kv_bg.find('li'),            
      _index=0;

  $menu_item.hover(function(){
    _index=$(this).index();
    var _txt_item_h=Math.round($txt_item.outerHeight()),
        _move=-_index*_txt_item_h;
    //- 四單元說明文
    $kv_txt.stop().animate({
      top:_move+'px',
      opacity:1         
    })
    //- 四單元底圖
    $bg_item.eq(_index).stop(true,true).fadeIn(200).css('z-index',70).addClass('go').siblings('li').fadeOut();
    //- $bg_item.eq(_index).show().stop().animate({
    //-   backgroundSize: '200%',
    //-   animationTimingFunction:'linear',
    //-   transition:'40s'
    //- });

  },function(){
    //- 四單元說明文
    $kv_txt.stop().animate({
      opacity:0
    })
    //- 四單元底圖
    $bg_item.fadeOut(800).css('z-index',50);
    //- $bg_item.stop().hide().css({
    //-   backgroundSize: '100%'
    //- });
  })           
})
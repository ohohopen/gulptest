//kv-slider.js start
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

  },function(){
    //- 四單元說明文
    $kv_txt.stop().animate({
      opacity:0
    })
    //- 四單元底圖
    $bg_item.fadeOut(800).css('z-index',50);
  })  
  
  
  var $kv_bg=$('.kv-bg'),
      _kvBg_w=$kv_bg.outerWidth(true),
      _kvBg_h=$kv_bg.outerHeight(true),
      _value=_kvBg_w/_kvBg_h

    // 當kv寬小於高,呈直立長方形時,清除動畫,背景圖改設cover,並調整說明文的top於y中央以免與logo相碰
    if(_value<1.2){
      // console.log('ratio小於1.2，寛小於高')
      // 設定清除bg動畫
      $('.kv-bg').find('li').addClass('clear-animate')
      //四圖說明文設定上下置中
      $('.kv-txt').find('li').addClass('for-mobile-set')
  
    }else{
      // console.log('ratio大於1.2，寬大於高')
      // 取消清除bg動畫
      $('.kv-bg').find('li').removeClass('clear-animate')
      //四圖說明文取消上下置中
      $('.kv-txt').find('li').removeClass('for-mobile-set')
    }
  
    // console.log('寬：'+_kvBg_w)
    // console.log('高：'+_kvBg_h)
    // console.log('比值：'+_value)
    










})
//kv-slider.js end
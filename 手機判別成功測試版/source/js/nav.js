$(function(){
  var $switch=$('.switch'),
      $subMenu=$('.sub-menu')

  //選單收闔
  $switch.on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('open')){
      // console.log('關起')
      $(this).removeClass('open');
      $subMenu.stop().animate({
        left:-246
      },50)
    }else{
      // console.log('打開')
      $(this).addClass('open');
      $subMenu.stop().animate({
        left:0
      },50)
    }
  })
  // PC版滑入自動開啟
  $switch.on('mouseenter',function(){
    $switch.addClass('open');
    $subMenu.stop().animate({
      left:0
    },50)
  })
  // 離開選單範圍收回選單
  $('.main').on('mouseenter',function(){
    $switch.removeClass('open');
    $subMenu.stop().animate({
      left:-246
    },50)

  })
})
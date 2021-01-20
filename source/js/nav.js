//nav.js start
$(function(){
  var $switch=$('.switch'),
  $subMenu=$('.sub-menu'),
  _w=$(window).outerWidth(true)


  //選單收闔
  $switch.on('click',function(e){
    e.preventDefault();
    console.log('vvv')
    if($(this).hasClass('open')){
      console.log('關起')
      $(this).removeClass('open');
      $subMenu.stop().animate({
        left:-246
      },50)
    }else{
      console.log('打開')
      $(this).addClass('open');
      $subMenu.stop().animate({
        left:0
      },50)
    }
  })

  // 是否為行動裝置之判別法1
  function isMobileDevice(){
    var mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    var isMobileDevice=false
    for(var i=0;i<mobileDevice.length;i++){
      if(navigator.userAgent.match(mobileDevice[i])){
        isMobileDevice=true
      }
    }
    return isMobileDevice
  }
  
  isMobileDevice();

  if(isMobileDevice()){
    console.log('這是行動裝置')
  }else{
    console.log('這不是行動裝置')
    // PC版滑入開關會自動開啟選單
    $switch.on('mouseenter',function(){
      console.log('mouseenter')
      $switch.addClass('open');
      $subMenu.stop().animate({
        left:0
      },50)
    })
  }

  // 是否為行動裝置之判別法2
  // function isMobile() {
  //   try{ document.createEvent("TouchEvent"); return true; }
  //   catch(e){ return false;}  
  // }
  // if(isMobile()){
  //   console.log('這是行動裝置')
  // }else{
  //   console.log('這不是行動裝置')
  //   // PC版滑入自動開啟
  //   $switch.on('mouseenter',function(){
  //     console.log('mouseenter')
  //     $switch.addClass('open');
  //     $subMenu.stop().animate({
  //       left:0
  //     })
  //   })
  // }

  // 離開選單範圍, 也就是碰到main的範圍時收回選單
  $('.main').on('mouseenter',function(){
    $switch.removeClass('open');
    $subMenu.stop().animate({
      left:-246
    },50)

  })
  //////////////錨點
  var $subMenu=$('.sub-menu'),
      $subMenuUl=$subMenu.find('ul'),
      $subMenuLi=$subMenuUl.find('li'),
      $kvMenu=$('.kv-menu'),
      $kvMenuLi=$kvMenu.find('li'),
      $content=$('.content'),
      $section=$content.find('section'),
      _index=0,
      _scr=0
  // kv四大鈕
  $kvMenuLi.on('click',function(e) {
    e.preventDefault();
    _index=$(this).index()
    _scr=$section.eq(_index).offset().top;
    $('html,Body').stop().animate({
      scrollTop:_scr
    })
    // console.log(_scr)
  });
  // 左側選單
  $subMenuLi.on('click',function(e) {
    e.preventDefault();
    _index=$(this).index()
    _scr=$section.eq(_index).offset().top;
    $('html,Body').stop().animate({
      scrollTop:_scr
    })
    // console.log(_scr)
  });
})

//nav.js end
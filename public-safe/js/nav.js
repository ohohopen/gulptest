$(function(){
  //選單收闔
  var $switch=$('.switch'),
  $subMenu=$('.sub-menu'),
  _w=$(window).outerWidth(true)



  $switch.click(function(e){
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
  $switch.mouseenter(function(){
    // 手機版這段會造成要按兩次才能正常開關，需加上RWD修正
    if(_w>960){
      $switch.addClass('open');
      $subMenu.stop().animate({
        left:0
      },50)
    }
  })
  // 離開選單範圍, 也就是碰到main的範圍時收回選單
  $('.main').mouseenter(function(){
    $switch.removeClass('open');
    $subMenu.stop().animate({
      left:-246
    },50)

  })  


  //錨點
  var $subMenu=$('.sub-menu'),
      $subMenuUl=$subMenu.find('ul'),
      $subMenuLi=$subMenuUl.find('li'),
      $kvMenu=$('.kv-menu'),
      $kvMenuLi=$kvMenu.find('li'),
      $content=$('.content'),
      $section=$content.find('section'),
      _index=0,
      _scr=0

  $kvMenuLi.click(function(e) {
    e.preventDefault();
    _index=$(this).index()
    _scr=$section.eq(_index).offset().top;
    $('html,Body').stop().animate({
      scrollTop:_scr
    })
    console.log(_scr)
  });
  $subMenuLi.click(function(e) {
    e.preventDefault();
    _index=$(this).index()
    _scr=$section.eq(_index).offset().top;
    $('html,Body').stop().animate({
      scrollTop:_scr
    })
    console.log(_scr)
  });




})
"use strict";

//mqdia-set.js start
$(window).on('resize', function () {
  var _w = $(window).outerWidth(true),
      _h = $(window).outerHeight(true);

  console.log('_w' + _w + ', _h:' + _h);

  if (_w > 1280 && _h < 700) {
    console.log('w>1280/h<700');
    $('.kv-menu').css('display', 'none');
    $('.site-name').css('display', 'none');
  } else if (_w < 1280 && _h < 550) {
    console.log('w<1280/h<550');
    $('.kv-menu').css('display', 'none');
    $('.site-name').css('display', 'none');
    $('.title').css('top', '-25px');
    $('.surfing').css('top', '35%');
  } else if (_w < 600) {
    console.log('w<600');
    $('.kv-menu').css('display', 'none');
    $('.site-name').css('display', 'none');
    $('.surfing').css('top', '50%');
  } else if (_w < 767) {
    console.log('w<767');
    $('.site-name').css('display', 'none');
  } else if (_h < 800) {
    console.log('w<800');
    $('ul.kv-txt').find('li').css('font-size', '40px');
  } else {
    $('.kv-menu').css('display', 'flex');
    $('.site-name').css('display', 'block');
    $('ul.kv-txt').find('li').css('font-size', '56px');
  }
}).resize(); //media-set.js end
"use strict";

//nav.js start
$(function () {
  var $switch = $('.switch'),
      $subMenu = $('.sub-menu'),
      _w = $(window).outerWidth(true); //選單收闔


  $switch.on('click', function (e) {
    e.preventDefault();
    console.log('vvv');

    if ($(this).hasClass('open')) {
      console.log('關起');
      $(this).removeClass('open');
      $subMenu.stop().animate({
        left: -246
      }, 50);
    } else {
      console.log('打開');
      $(this).addClass('open');
      $subMenu.stop().animate({
        left: 0
      }, 50);
    }
  }); // 是否為行動裝置之判別法1

  function isMobileDevice() {
    var mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    var isMobileDevice = false;

    for (var i = 0; i < mobileDevice.length; i++) {
      if (navigator.userAgent.match(mobileDevice[i])) {
        isMobileDevice = true;
      }
    }

    return isMobileDevice;
  }

  isMobileDevice();

  if (isMobileDevice()) {
    console.log('這是行動裝置');
  } else {
    console.log('這不是行動裝置'); // PC版滑入開關會自動開啟選單

    $switch.on('mouseenter', function () {
      console.log('mouseenter');
      $switch.addClass('open');
      $subMenu.stop().animate({
        left: 0
      }, 50);
    });
  } // 是否為行動裝置之判別法2
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


  $('.main').on('mouseenter', function () {
    $switch.removeClass('open');
    $subMenu.stop().animate({
      left: -246
    }, 50);
  }); //////////////錨點

  var $subMenu = $('.sub-menu'),
      $subMenuUl = $subMenu.find('ul'),
      $subMenuLi = $subMenuUl.find('li'),
      $kvMenu = $('.kv-menu'),
      $kvMenuLi = $kvMenu.find('li'),
      $content = $('.content'),
      $section = $content.find('section'),
      _index = 0,
      _scr = 0; // kv四大鈕

  $kvMenuLi.on('click', function (e) {
    e.preventDefault();
    _index = $(this).index();
    _scr = $section.eq(_index).offset().top;
    $('html,Body').stop().animate({
      scrollTop: _scr
    }); // console.log(_scr)
  }); // 左側選單

  $subMenuLi.on('click', function (e) {
    e.preventDefault();
    _index = $(this).index();
    _scr = $section.eq(_index).offset().top;
    $('html,Body').stop().animate({
      scrollTop: _scr
    }); // console.log(_scr)
  });
}); //nav.js end
"use strict";

//copytext.js start
$(function () {
  window.Clipboard = function (window, document, navigator) {
    var textArea, copy;

    function isOS() {
      return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
      textArea = document.createElement('textArea');
      textArea.value = text;
      document.body.appendChild(textArea);
    }

    function selectText() {
      var range, selection;

      if (isOS()) {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }
    }

    function copyToClipboard() {
      document.execCommand("Copy");
      document.body.removeChild(textArea);
    }

    copy = function copy(text) {
      createTextArea(text);
      selectText();
      copyToClipboard();
    };

    return {
      copy: copy
    };
  }(window, document, navigator);

  $(".copy_coupon").on("click", function (e) {
    e.preventDefault();
    var $this = $(this),
        value = $this.prev("input").val();
    window.Clipboard.copy(value);
  });
}); //copytext.js end
"use strict";

//gotop.js start
$(window).on('scroll', function () {
  var h = 250,
      k = $(window).scrollTop(); // $("#txt").html(K)
  // console.log(k)

  if (k > h) {
    $(".gotop").addClass('go');
  } else {
    $(".gotop").removeClass('go');
  }

  $(".gotop").on('click', function () {
    $('html,body').stop().animate({
      scrollTop: 0
    });
  });
  $(".logo-nav").on('click', function () {
    $('html,body').stop().animate({
      scrollTop: 0
    });
  });
}); //gotop.js end
"use strict";

//item-color start
$(window).on('scroll', function () {
  var _w_sct = $(window).scrollTop(),
      $content = $('.content'),
      $section = $content.find('section'),
      _w = $(window).outerWidth(true);

  for (var i = 0; i < 4; i++) {
    var _top = $section.eq(i).offset(),
        _topHeight = $section.eq(i).outerHeight(true),
        _miss = 0,
        _miss2 = 0; // function itemColor(){
    //   if(_w_sct>=_top.top-_miss && _w_sct<_top.top-_miss+_topHeight){
    //     $section.eq(i).find('.item-tag').find('h2').addClass('current')
    //   }else{
    //     $section.eq(i).find('.item-tag').find('h2').removeClass('current')
    //   }
    // }


    function itemColor() {
      if (i === 0 || i === 3) {
        // 如果window scrollTop在section高度座標範圍內
        if (_w_sct >= _top.top - _miss && _w_sct < _top.top + _topHeight - _miss) {
          $section.eq(i).find('.item-tag').find('h2').addClass('current');
        } else {
          $section.eq(i).find('.item-tag').find('h2').removeClass('current');
        }
      } else if (i === 1 || i === 2) {
        if (_w_sct >= _top.top - _miss2 && _w_sct < _top.top + _topHeight - _miss2) {
          $section.eq(i).find('.item-tag').find('h2').addClass('current');
        } else {
          $section.eq(i).find('.item-tag').find('h2').removeClass('current');
        }
      }
    }

    if (_w < 500) {
      _miss = 200;
      _miss2 = 300;
      itemColor();
    } else if (_w > 501 && _w < 767) {
      _miss = 650;
      _miss2 = 550;
      itemColor();
    } else if (_w > 768 && _w < 1280) {
      _miss = 650;
      _miss2 = 650;
      itemColor();
    } else {
      _miss = 750;
      _miss2 = 800;
      itemColor();
    } // console.log('scrollTop='+_w_sct)
    // console.log('_top='+_top.top)
    // console.log('_topHeight='+_topHeight)    
    // console.log('edm頭='+$section.eq(3).offset().top)
    // console.log('edm尾='+$section.eq(3).offset().top+$section.eq(3).outerHeight(true))
    // console.log('_topHeight='+_topHeight)

  }
}); //item-color end
"use strict";

//kv-slider.js start
$(function () {
  var $kv_menu = $('.kv-menu'),
      $menu_item = $kv_menu.find('li'),
      $kv_txt = $('.kv-txt'),
      $txt_item = $kv_txt.find('li'),
      $kv_bg = $('.kv-bg'),
      $bg_item = $kv_bg.find('li'),
      _index = 0;
  $menu_item.hover(function () {
    _index = $(this).index();

    var _txt_item_h = Math.round($txt_item.outerHeight()),
        _move = -_index * _txt_item_h; //- 四單元說明文


    $kv_txt.stop().animate({
      top: _move + 'px',
      opacity: 1
    }); //- 四單元底圖

    $bg_item.eq(_index).stop(true, true).fadeIn(200).css('z-index', 70).addClass('go').siblings('li').fadeOut();
  }, function () {
    //- 四單元說明文
    $kv_txt.stop().animate({
      opacity: 0
    }); //- 四單元底圖

    $bg_item.fadeOut(800).css('z-index', 50);
  });

  var $kv_bg = $('.kv-bg'),
      _kvBg_w = $kv_bg.outerWidth(true),
      _kvBg_h = $kv_bg.outerHeight(true),
      _value = _kvBg_w / _kvBg_h; // 當kv寬小於高,呈直立長方形時,清除動畫,背景圖改設cover,並調整說明文的top於y中央以免與logo相碰


  if (_value < 1.2) {
    // console.log('ratio小於1.2，寛小於高')
    // 設定清除bg動畫
    $('.kv-bg').find('li').addClass('clear-animate'); //四圖說明文設定上下置中

    $('.kv-txt').find('li').addClass('for-mobile-set');
  } else {
    // console.log('ratio大於1.2，寬大於高')
    // 取消清除bg動畫
    $('.kv-bg').find('li').removeClass('clear-animate'); //四圖說明文取消上下置中

    $('.kv-txt').find('li').removeClass('for-mobile-set');
  } // console.log('寬：'+_kvBg_w)
  // console.log('高：'+_kvBg_h)
  // console.log('比值：'+_value)

}); //kv-slider.js end
//# sourceMappingURL=all.js.map

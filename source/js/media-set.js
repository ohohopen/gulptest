//mqdia-set.js start

$(window).on('resize',function(){
  var _w=$(window).outerWidth(true),
      _h=$(window).outerHeight(true)
      console.log('_w'+_w+', _h:'+_h)

  if(_w > 1280 && _h < 700){
    console.log('w>1280/h<700')
    $('.kv-menu').css('display','none');
    $('.site-name').css('display','none');
  }else if(_w < 1280 && _h < 550){
    console.log('w<1280/h<550')
    $('.kv-menu').css('display','none');
    $('.site-name').css('display','none');
  }else if(_w < 600){
    console.log('w<600')
    $('.kv-menu').css('display','none');
    $('.site-name').css('display','none');
  }else{
    $('.kv-menu').css('display','flex');
    $('.site-name').css('display','block');
  }
}).resize()

//media-set.js end
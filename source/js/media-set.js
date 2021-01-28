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
    $('.title').css('top','-25px');
    $('.surfing').css('top','35%');
  }else if(_w < 600){
    console.log('w<600')
    $('.kv-menu').css('display','none');
    $('.site-name').css('display','none');
    $('.surfing').css('top','50%');
  }else if(_w < 767){
    console.log('w<767')
    $('.site-name').css('display','none');
  }else if(_h < 800){
    console.log('h<800')
    $('ul.kv-txt').find('li').css('font-size','40px');
  }else{
    $('.kv-menu').css('display','flex');
    $('.site-name').css('display','block');
    $('ul.kv-txt').find('li').css('font-size','56px');
  }
}).resize()

//media-set.js end
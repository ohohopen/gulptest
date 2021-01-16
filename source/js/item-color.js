$(window).on('scroll',function(){
  var k=$(window).scrollTop(),
      $content=$('.content'),
      $section=$content.find('section')

  for(i=0;i<4;i++){
    var _top=$section.eq(i).offset(),
        _topHeight=$section.eq(i).outerHeight(true),
        _miss=650

    if(k>=_top.top-_miss && k<_top.top-_miss+_topHeight){
      $section.eq(i).find('.item-tag').find('h2').addClass('current')
    }else{
      $section.eq(i).find('.item-tag').find('h2').removeClass('current')
    }
    // console.log('scrollTop='+k)
    // console.log('_top='+_top.top)
    // console.log('_topHeight='+_topHeight)

  }
  
  
})
//item-color start

$(window).on('scroll',function(){
  var _w_sct=$(window).scrollTop(),
      $content=$('.content'),
      $section=$content.find('section'),
      _w=$(window).outerWidth(true)

  for(var i=0;i<4;i++){
    var _top=$section.eq(i).offset(),
        _topHeight=$section.eq(i).outerHeight(true),
        _miss=0,
        _miss2=0

    // function itemColor(){
    //   if(_w_sct>=_top.top-_miss && _w_sct<_top.top-_miss+_topHeight){
    //     $section.eq(i).find('.item-tag').find('h2').addClass('current')
    //   }else{
    //     $section.eq(i).find('.item-tag').find('h2').removeClass('current')
    //   }
    // }

    function itemColor(){
      if(i===0 || i===3){
        // 如果window scrollTop在section高度座標範圍內
        if(_w_sct>=_top.top-_miss && _w_sct<_top.top+_topHeight-_miss){
          $section.eq(i).find('.item-tag').find('h2').addClass('current')
        }else{
          $section.eq(i).find('.item-tag').find('h2').removeClass('current')
        }
      }else if(i===1 || i===2){
        if(_w_sct>=_top.top-_miss2 && _w_sct<_top.top+_topHeight-_miss2){
          $section.eq(i).find('.item-tag').find('h2').addClass('current')
        }else{
          $section.eq(i).find('.item-tag').find('h2').removeClass('current')
        }


      }
    }

    if(_w<500){
      _miss=200;
      _miss2=300;
      itemColor();
    }else if(_w>501 && _w<767){
      _miss=650;
      _miss2=550;
      itemColor();
    }else if(_w>768 && _w<1280){
      _miss=650;
      _miss2=650;
      itemColor();
    }else{
      _miss=750;
      _miss2=800;
      itemColor();
    }
    // console.log('scrollTop='+_w_sct)
    // console.log('_top='+_top.top)
    // console.log('_topHeight='+_topHeight)    
    
    // console.log('edm頭='+$section.eq(3).offset().top)
    // console.log('edm尾='+$section.eq(3).offset().top+$section.eq(3).outerHeight(true))
    // console.log('_topHeight='+_topHeight)
    
  }
})
//item-color end
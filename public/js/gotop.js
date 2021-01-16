$(window).on('scroll',function(){
  var h=250,
      k=$(window).scrollTop()
  // $("#txt").html(K)
  // console.log(k)
  if(k>h){
    $(".gotop").addClass('go')
  }else{
    $(".gotop").removeClass('go')
  }
  $(".gotop").on('click',function(){
    $('html,body').stop().animate({
      scrollTop:0
    })
  })

  $(".logo-nav").on('click',function(){
    $('html,body').stop().animate({
      scrollTop:0
    })
  })



})
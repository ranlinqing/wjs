$(function(){
  //1/动画设置ul的宽度
  var w =0;//累加宽度
  $('.wjs-tabs li').each(function(index,ele){
    w += $(ele).outerWidth(true);
    console.log(w);
    
  });
  //设置给ul
  $('.wjs-tabs').width(w);


  //2给轮播图绑定触屏事件
  //2-1在触屏开始  记录触屏的起点
  //2-2在触屏移动 记录新的触屏位置,计算距离差值
  //2-3咋触屏结束, 判断差值正负,确定用户行为
  var startX = 0;
  var moveX = 0;
  var distanceX = 0;
  $('.wjs-banner').on('touchstart',function(e){
    console.log(e);
    startX = e.originalEvent.targetTouches[0].clientX;
    console.log(startX);
  });
  $('.wjs-banner').on('touchmove',function(e){
    //获取移动后位置
    moveX = e.originalEvent.targetTouches[0].clientX;
    //计算距离差值
    distanceX = moveX - startX;
  })
  $('.wjs-banner').on('touchend',function(e){
    //判断差值正负,确定用户行为
    if (distanceX < 0){
      //向左滑  下一张
      console.log('next');
      $('.carousel').carousel('next');
    }
    if(distanceX > 0){
      //向右滑  上一张
      console.log('prev');
      $('.carousel').carousel('prev');
    }
  });
});
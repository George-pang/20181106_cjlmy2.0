$(function(){
    $(".tab").on("click",function(){
        $(this).addClass("tab-cur").siblings().removeClass("tab-cur");
        var index=$(this).index();
        //在Loop模式下Swiper切换到指定slide。切换到的是slide索引是realIndex
        mySwiper.slideToLoop(index);
        // $(".tab-item").eq(index).show().siblings().hide();
    })

    var mySwiper = new Swiper ('.course-swiper', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        on:{
            slideChange: function(){
                var index=this.realIndex;
                $(".tab").eq(index).addClass("tab-cur").siblings().removeClass("tab-cur");
            },
        }
    });
});
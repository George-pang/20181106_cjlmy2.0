$(function () {
    /* 侧边导航栏 start*/
    // var nav_height = $(".top-nav").height();
    var cTop_1 = $(".gsjj").offset().top;
    var cTop_2 = $(".xyxq").offset().top;
    var cTop_3 = $(".szll").offset().top;
    var cTop_4 = $(".jxhj").offset().top;

    $(window).on("scroll", function () {
        var toTop = $(this).scrollTop();
        // 固定定位切换
        if (toTop >= cTop_1) {
            $(".aside-nav").addClass("fixed");
        } else if (toTop < cTop_1) {
            $(".aside-nav").removeClass("fixed");
        }
        // 判断当前tab
        if (toTop >= cTop_1 && toTop < cTop_2) {
            $(".aside-nav .nav-tab").eq(0).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        } else if (toTop >= cTop_2 && toTop < cTop_3) {
            $(".aside-nav .nav-tab").eq(1).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        } else if (toTop >= cTop_3 && toTop < cTop_4) {
            $(".aside-nav .nav-tab").eq(2).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        } else if (toTop >= cTop_4) {
            $(".aside-nav .nav-tab").eq(3).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        }
    });
    // 点击tab跳转---也可以利用锚点定位
    $(".aside-nav .nav-tab").each(function (index) {
        $(this).on("click", function () {
            $(".nav-tab").removeClass("nav-tab-cur").eq(index).addClass("nav-tab-cur");
            switch (index) {
                case 0:
                    $("html,body").animate({
                        scrollTop: cTop_1 + "px"
                    }, 0);
                    break;
                case 1:
                    $("html,body").animate({
                        scrollTop: cTop_2 + "px"
                    }, 0);
                    break;
                case 2:
                    $("html,body").animate({
                        scrollTop: cTop_3 + "px"
                    }, 0);
                    break;
                case 3:
                    $("html,body").animate({
                        scrollTop: cTop_4 + "px"
                    }, 0);
                    break;
            }
            return false;
        });
    });

    /* 侧边导航栏 end */


    /* 教学环境 tab切换 */
    $(".tab-hd .tab").on("click", function () {
        $(this).addClass("tab-cur").siblings().removeClass("tab-cur");
        var index = $(this).index();
        $(".tab-bd .tab-item").eq(index).addClass("tab-item-cur").siblings().removeClass("tab-item-cur");
        if (index == 0) { //重绘-需要重新初始化swiper
            var swiper = newSwiper(".gallery-thumbs1", ".gallery-top1");
            // 鼠标移入轮播图暂停自动播放
            autoplayStop(swiper, ".gallery-thumbs1");
            autoplayStart(swiper, ".gallery-thumbs1");
        } else if (index == 1) {
            var swiper = newSwiper(".gallery-thumbs2", ".gallery-top2");
            // 鼠标移入轮播图暂停自动播放
            autoplayStop(swiper, ".gallery-thumbs2");
            autoplayStart(swiper, ".gallery-thumbs2");
        }
    });


    // 函数---初始化swiper，参数：选择器--前提：初始化swiper的配置对象参数完全相同
    function newSwiper(selector1, selector2) {
        var galleryThumbs = new Swiper(selector1, {
            spaceBetween: 20,
            slidesPerView: 7,
            loop: true,
            freeMode: true,
            // allowTouchMove:false, //是否允许触摸滑动
            centeredSlides: true, //active slide 居中
            loopedSlides: 7, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper(selector2, {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 7, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000, //3秒切换一次
                disableOnInteraction: false, //用户操作swiper之后自动切换不会停止
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });
        return galleryTop;
    }

    // 函数-鼠标移入缩略图 暂停自动播放
    function autoplayStop(swiper, selector) {
        $(selector).on("mouseenter", function (event) {
            swiper.autoplay.stop();
            return false;
        });
    }
    // 函数-鼠标移出缩略图开始自动播放
    function autoplayStart(swiper, selector) {
        $(selector).on("mouseleave", function (event) {
            swiper.autoplay.start();
            return false;
        });
    }
    // 初始化tab切换中当前tab的swiper
    var swiper = newSwiper(".gallery-thumbs1", ".gallery-top1");
    // 鼠标移入轮播图暂停自动播放
    autoplayStop(swiper, ".gallery-thumbs1");
    autoplayStart(swiper, ".gallery-thumbs1");

});
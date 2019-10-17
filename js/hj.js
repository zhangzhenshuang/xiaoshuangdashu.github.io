/**
 * Created by Administrator on 2019/10/16.
 */

var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })


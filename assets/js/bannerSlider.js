$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoPlay: 1000,
        autoplayTimeout: 2000,  
        autoplayHoverPause: true,
        slideSpeed: 600,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})


// // vars
// 'use strict'
// var testim = document.getElementById("testim"),
//     testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
//     testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
//     testimLeftArrow = document.getElementById("left-arrow"),
//     testimRightArrow = document.getElementById("right-arrow"),
//     testimSpeed = 4500,
//     currentSlide = 0,
//     currentActive = 0,
//     testimTimer,
//     touchStartPos,
//     touchEndPos,
//     touchPosDiff,
//     ignoreTouch = 30;
// ;

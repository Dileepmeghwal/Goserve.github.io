AOS.init({
    offset: 200, // offset (in px) from the original trigger point
     // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    // once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top', // defines which position of the element regarding to window should trigger the animation
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99,

});
gsap.to(".heading", {x: 50, duration: 2, rotation: 360})
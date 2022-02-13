

/*==================== SHOW MENU ====================*/
(()=>{
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu");
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;


    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav(){
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active")
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize){
            const menuItemHasChildern = event.target.parentElement;

            if(menuItemHasChildern.classList.contains("active")){
                collapseSubMenu();
            }
            else {


                if (navMenu.querySelector(".menu-item-has-childern.active")) {
                    collapseSubMenu();
                }
                menuItemHasChildern.classList.add("active");
                const subMenu = menuItemHasChildern.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
        
    });

    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-childern.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-childern.active")
        .classList.remove("active")
    }
    function resizeFix(){
        if (navMenu.classList.contains("open")){
            toggleNav();
        }
        
    }


    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizeFix();
        }
    });
})(); 

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

$(".nav__item").on('click','li',function(){
    // remove classname 'active' from all li who already has classname 'active'
    $(".nav__item .nav__link.active").removeClass("active"); 
    // adding classname 'active' to current click li 
    $(this).addClass("active"); 
}); 
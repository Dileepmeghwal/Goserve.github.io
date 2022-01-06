$("#navMenu").on('click', 'nav__item, function () {
    $("#navMenu nav__link.active").removeClass("active");
    // adding classname 'active' to current click li 
    $(this).addClass("active");
});


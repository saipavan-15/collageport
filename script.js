const hamburger = document.querySelection(".hamburger");
    const menu_bar = document.querySelector(".navbar-menu .menu-bar")

    hamburger.addEventListner("click",()=> {
        menu_bar.classList.toggle("show");
    });
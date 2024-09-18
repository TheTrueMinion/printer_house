const open_burger = document.querySelector(".burger_button");
const burger_menu = document.querySelector(".burger_menu");
const close_burger = document.querySelector(".close_burger");
const body = document.querySelector("body");

open_burger.addEventListener('click', function() {
    burger_menu.style.display = "flex";
    body.style.overflow = "hidden";
    open_burger.style.display = 'none';
});

close_burger.addEventListener('click', function() {
    burger_menu.style.display = "none";
    body.style.overflow = "auto";
    open_burger.style.display = 'block';
});


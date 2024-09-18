const _open_burger = document.querySelector(".burger_button");
const _close_burger = document.querySelector(".close_burger");
const map = document.querySelector(".map");

_open_burger.addEventListener('click', function() {
    map.style.zIndex = "-1";
    // map.style.display = "none";
});

_close_burger.addEventListener('click', function() {
    map.style.zIndex = "1";
});

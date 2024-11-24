let burger = document.getElementById("m-b");
let menu = document.getElementById("nav-mb");

burger.addEventListener("click", () => {
    menu.style.display = "flex";
});

window.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target != burger) {
        menu.style.display = "none";
    }
})

window.addEventListener("resize", () => {
    menu.style.display = "none";
})
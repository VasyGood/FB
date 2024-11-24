let p = document.getElementById("p");

p?.addEventListener("click", () => {
    p.style.backgroundColor = "black"
});

let img = document.getElementById("stimg");

img?.addEventListener("mouseover", () => {  
    deg = 10;
    while (deg <= 720) {
        img.style.transform = `rotate(${deg}deg)`;
        deg += 10;
    }
})

let btn = document.getElementById("btn2");

btn?.addEventListener("click", () => {
    let table = document.getElementById("t1");
    table.style.opacity = 1;
});

let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    let modal = document.getElementById("md");
    modal.style.backgroundColor = "#1b1464";
});

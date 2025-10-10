let x = document.getElementById("pika");
let y = document.getElementById("name");
let z = document.getElementById("desc");

x.addEventListener("click",change => {
    x.style.background = "grey";
    x.style.color = "white";
});

y.addEventListener("mousemove",change2 => {
    y.style.background = "grey";
});

y.addEventListener("mouseleave",change2 => {
    y.style.background = "white";
});

y.addEventListener("click",change2 => {
    z.innerHTML = "I am Now Changed"
});


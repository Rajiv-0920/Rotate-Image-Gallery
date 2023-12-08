const image_container = document.querySelector(".img-container");
var count = 0;
setInterval(() => {
    count += 45;
    image_container.style.transform = `perspective(1000px) rotateY(${count}deg)`;
}, 3000)
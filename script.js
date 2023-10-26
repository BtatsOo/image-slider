imgs = document.querySelectorAll(".image-container img");
icons = document.querySelectorAll(".container i");
console.log(imgs);
i = 1;
function pushImg() {
  imgs.forEach((el) => {
    el.style.transform = `translateX(-${i}00%)`;
  });
  i++;
  if (i == 5) {
    i = 0;
  }
}
setInterval(pushImg, 5000);
icons.forEach((el) => {
  el.addEventListener("click", () => {
    pushImg();
  });
});

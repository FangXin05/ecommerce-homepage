//更新图片数组
const sliderData = [
  { url: "./images/1_tr.jpg" },
  { url: "./images/2_tr.jpg" },
  { url: "./images/3_tr.jpg" },
  { url: "./images/4_tr.jpg" },
  { url: "./images/5_tr.jpg" },
  { url: "./images/6_tr.jpg" },
  { url: "./images/7_tr.jpg" },
  { url: "./images/8_tr.jpg" },
  { url: "./images/9_tr.jpg" },
  { url: "./images/10_tr.jpg" },
  { url: "./images/11_tr.jpg" },
  { url: "./images/12_tr.jpg" },
];
//获取
const slider = document.querySelector(".slider");
const img = document.querySelector(".slider .wrapper img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let i = 0;
//更新图片
function update() {
  img.src = sliderData[i].url;
  document.querySelector(".indicator .active").classList.remove("active");
  document
    .querySelector(`.indicator li:nth-child(${i + 1})`)
    .classList.add("active");
}
//上一张
prev.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = sliderData.length - 1;
  }
  update();
});
//下一张
next.addEventListener("click", function () {
  i++;
  if (i >= sliderData.length) {
    i = 0;
  }
  update();
});
//自动轮播
let timeId = setInterval(function () {
  next.click();
}, 2000);
//光标移入事件
slider.addEventListener("mouseenter", function () {
  clearInterval(timeId);
});
//光标离开事件监听
slider.addEventListener("mouseleave", function () {
  clearInterval(timeId);
  timeId = setInterval(function () {
    next.click();
  }, 1000);
});

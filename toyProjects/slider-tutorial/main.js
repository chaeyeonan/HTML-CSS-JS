const imgs = document.querySelector(".imgs");
const imgAll = document.querySelectorAll(".img");
const slWrap = document.querySelector(".sl-wrap");
const navigators = document.querySelectorAll(".navigator a");

let currentIdx = 0;
let timer = null;

const startSlider = (eq) => {
  imgs.style.left = -100 * eq + "%";
  currentIdx = eq;
};

const startTimer = () => {
  // setInterval 을 멈추려면 clearinterval을 실행해야 한다
  // 하지만 clearInterval의 파라미터로 setInterval 전체를 적용해야 하므로 setInterval을 변수에 대입하여 전달한다.
  timer = setInterval(() => {
    const sliderLoopIdx = (currentIdx + 1) % imgAll.length;
    startSlider(sliderLoopIdx);
  }, 5000);
};

const stopTimer = () => {
  clearInterval(timer);
};

// 마우스 올렸을 때 기능이 멈추고, 마우스 치우면 다시 실행
slWrap.addEventListener("mouseover", () => {
  stopTimer();
});
slWrap.addEventListener("mouseout", () => {
  startTimer();
});

startTimer();

// 네이게이터
navigators.forEach((navigator) => {
  navigator.addEventListener("click", () => {
    console.log(navigator);
  });
});

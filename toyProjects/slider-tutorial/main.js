const imgs = document.querySelector(".imgs");
const imgAll = document.querySelectorAll(".img");
const slWrap = document.querySelector(".sl-wrap");
const navigators = document.querySelectorAll(".navigator a");
const dotAll = document.querySelectorAll(".dot");

let currentIdx = 0;
let timer = null;

const startSlider = (eq) => {
  imgs.style.left = -100 * eq + "%";
  currentIdx = eq;

  dotAll.forEach((dot) => dot.classList.remove("active"));
  dotAll[currentIdx].classList.add("active");
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
    //이전 화살표를 눌렀을 때
    if (navigator.className === "prev") {
      if (currentIdx != 0) startSlider(currentIdx - 1);
      else startSlider(3);
    }
    //다음 화살표를 눌렀을 때
    else if (navigator.className === "next") {
      if (currentIdx === imgAll.length - 1) startSlider(0);
      else startSlider(currentIdx + 1);
    }
  });
});

// dot 클릭했을 때 사진 이동
dotAll.forEach((dot, idx) =>
  dot.addEventListener("click", () => {
    startSlider(idx);
  })
);

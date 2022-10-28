// // $(document).ready(function () {});

// console.log("hello");

// const title = document.querySelector("h1"); // 1. 태그 선택
// console.log(title);

// const sample = document.querySelector("#sample");
// console.log(sample);

// sample.innerHTML = `<p>Hello World</p>`; // 2. 태그 삽입
// console.log(sample);

// title.addEventListener("click", function () {
//   alert("clicked!!");
// }); // 3. 이벤트 기능

// // 4. 반복문
// for (let i = 0; i < 9; i++) {
//   console.log(`안녕하세요:${i}`);
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

const imgWrap = document.querySelector(".sectionImg");

for (let i = 0; i < 200; i++) {
  imgWrap.innerHTML += `<img src="./img/pic${i}.jpg" alt="pic${i}" />`;
  /* imgWrap.insertAdjacentHTML(
    "beforeend",
     `<img src="./img/pic${i}.jpg" alt="pic${i}" />`
   );
    */
}

imgWrap.addEventListener("mousemove", function (e) {
  let X = e.offsetX; //마우스 x축 좌표값 저장
  const screenWidth = document.body.offsetWidth; //현재 브라우저 크기 저장ㄴ
  const percent = Math.floor((X / screenWidth) * 200); // 소수점 버리기 (parseInt 와 같은 기능)
  const imgElm = document.querySelectorAll(".sectionImg img"); //이미지 태그 저장

  for (let j = 0; j < imgElm.length; j++) {
    imgElm[j].style.display = "none"; // 반복문으로 접근해서 모든 사진 display 값 안보이게하기
  }
  imgElm[percent].style.display = "block"; //마우스 커서가 위치한 x좌표를 200으로 나눈 인덱스사진을 보이게함
});

// 1. 버튼 요소 선택
// 2. 반복문으로 버튼 요소 추출
// 3. 버튼 클릭시 전체 active 클래스 삭제
// 4. 각각의 버튼 클릭 시 active 클래스 추가

const btnAll = document.querySelectorAll(".btn");
const panelAll = document.querySelectorAll(".panel");

function activeTabs(i) {
  btnAll.forEach((btn) => btn.classList.remove("active"));
  btnAll[i].classList.add("active");
  panelAll.forEach((panel) => (panel.style.display = "none"));
  panelAll[i].style.display = "block";
}
for (let i = 0; i < btnAll.length; i++) {
  const btn = btnAll[i];
  btn.addEventListener("click", () => {
    activeTabs(i);
  });
}

// ClassName 추가, 수정, 삭제 참고자료 : https://hianna.tistory.com/469

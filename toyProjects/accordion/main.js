const iconAll = document.querySelectorAll("i");
const descAll = document.querySelectorAll(".desc");
const titleAll = document.querySelectorAll(".title-wrap");

// 조건문 이용
titleAll.forEach((item, idx) =>
  item.addEventListener("click", () => {
    iconClick(idx);
  })
);

const iconClick = (idx) => {
  const otherIcons = Array.from(iconAll).filter((item) => item != iconAll[idx]);

  otherIcons.forEach((item) => (item.className = "ri-add-line"));
  descAll.forEach((item) => (item.style.height = "0"));

  iconAll[idx].className === "ri-add-line"
    ? ((iconAll[idx].className = "ri-close-line"),
      (descAll[idx].style.height = "50px"))
    : ((iconAll[idx].className = "ri-add-line"),
      (descAll[idx].style.height = "0"));
};

// toggle 이용
// titleAll.forEach((header) =>
//   header.addEventListener("click", () => {
//     header.classList.toggle("acitve");
//   })
// );

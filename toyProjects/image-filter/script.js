const btnAll = document.querySelectorAll(".filter-btn");

const onClickBtn = (idx) => {
  btnAll.forEach((btn) => btn.classList.remove("active"));
  btnAll[idx].classList.add("active");
};

btnAll.forEach((btn, idx) =>
  btn.addEventListener("click", () => onClickBtn(idx))
);

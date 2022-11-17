const btnAll = document.querySelectorAll(".btn");
const panelAll = document.querySelectorAll(".panel");

btnAll.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    btnAll.forEach((btn) => btn.classList.remove("active"));
    panelAll.forEach((panel) => (panel.style.display = "none"));
    btnAll[idx].className += " active";
    panelAll[idx].style.display = "block";
  });
});

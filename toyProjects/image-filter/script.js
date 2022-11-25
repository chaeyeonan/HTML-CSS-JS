const btnAll = document.querySelectorAll(".filter-btn");
const imgAll = document.querySelectorAll(".filter-image");
const imgWrap = document.querySelector(".filter-images");

// tab click function
const onClickBtn = (idx) => {
  btnAll.forEach((btn) => btn.classList.remove("active"));
  btnAll[idx].classList.add("active");

  // if (btnAll[idx].innerHTML != "all") {
  const array = Array.from(imgAll).filter((img) =>
    img.children[0].children[0]
      .getAttribute("src")
      .includes(btnAll[idx].innerHTML.toLowerCase())
  );
  // }

  array.forEach((i) => console.log(i.children[0].children[0]));
  // if (btnAll[idx].innerHTML != "all") {
  //   imgAll.forEach((img) => img.remove());
  // }
};

btnAll.forEach((btn, idx) =>
  btn.addEventListener("click", () => onClickBtn(idx))
);

// image click function
const overLay = document.querySelector(".overlay");
const lightBox = document.querySelector(".light-box");

const closeLightBox = () => {
  overLay.classList.remove("show");
  lightBox.classList.remove("show");
};

overLay.addEventListener("click", closeLightBox);

const onClickImg = (e) => {
  const closeBtn = document.querySelector(".ri-close-line");
  const lightBoxTitle = document.querySelector(".title p");
  const lightBoxImg = document.querySelector(".light-box-img img");

  const target = e.currentTarget;
  const selectedImg = target.children[0].children[0].getAttribute("src");

  if (selectedImg.includes("bag")) lightBoxTitle.innerHTML = " Bag";
  else if (selectedImg.includes("shoe")) lightBoxTitle.innerHTML = " Shoe";
  else if (selectedImg.includes("watch")) lightBoxTitle.innerHTML = " Watch";
  else if (selectedImg.includes("camera")) lightBoxTitle.innerHTML = " Camera";
  else if (selectedImg.includes("headphone"))
    lightBoxTitle.innerHTML = " Headphone";

  lightBoxImg.setAttribute("src", selectedImg);

  overLay.classList.add("show");
  lightBox.classList.add("show");

  closeBtn.addEventListener("click", closeLightBox);
};

imgAll.forEach((img) => img.addEventListener("click", onClickImg));

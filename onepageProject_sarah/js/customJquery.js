$(function () {
  let imgs = "";

  for (let i = 0; i < 200; i++) {
    imgs += `<img src='img/pic${i}.jpg' />`;
  }

  $(".sectionImg").html(imgs);
  $(".sectionImg").on("mousemove", function (e) {
    let posX = e.pageX;
    const wid = $(window).width();
    const percent = Math.floor((posX / wid) * 200);

    $(".sectionImg img").hide();
    $(".sectionImg img").eq(percent).show();
  });
});

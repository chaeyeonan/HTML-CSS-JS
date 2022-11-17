$(function () {
  // const btn = $(".btn");
  // console.log(btn);
  $(".btn").click(function () {
    $(".btn").removeClass("active");
    $(this).addClass("active");

    $(".panel").hide();
    const idx = $(this).index();
    $(".panel").eq(idx).show();
  });
});

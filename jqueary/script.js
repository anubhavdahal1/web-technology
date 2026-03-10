// jquery selector

$(document).ready(function () {
  // id selector
  //   let uservalue = $("#username").val();
  //   console.log(uservalue);
  //   class selector
  //   let para = $(".paragraph");
  //   console.log(para);
  //   Element selector
  //   let ptag = $("P");
  //   console.log(ptag);
  // input type text selector
  //   let inputtypetext = $(":text");
  //   console.log(inputtypetext);
  //   event listener
  //   let btn = $("#btn");
  //   btn.on("click", function () {
  //     alert("clicked");
  //   });
  //   $("#entryfrom").on("change", function () {
  //     alert("change noticed");
  //   });
  //   $("#username").on("focus", function () {
  //     // alert("focus noticed");
  //     console.log("focus noticed");
  //   });
  // window/document events
  //   $(document).on("scroll", function () {
  //     alert("window scroll noticed");
  //   });

  $("#hidebtn").on("click", function () {
    $("#textcontent").hide(2000);
  });

  $("#showbtn").on("click", function () {
    $("#textcontent").show();
  });
  $("#animatebtn").on("click", function () {
    $("#animatebtn").animate(
      {
        marginTop: "100px",
        padding: "5px 10px",
        borderRadius: "5px",
      },
      2000,
      // complete(),
    );
  });
  $("#stopbtn").on("click", function () {
    $("#animatebtn").stop();
  });

  $("#fadebtn").on("click", function () {
    $("#fadepara").fadeOut(5000);
  });
  $("#fadeinbtn").on("click", function () {
    $("#fadepara").fadeIn(1000);
  });
});
function complete() {
  alert("animation is completed");
}
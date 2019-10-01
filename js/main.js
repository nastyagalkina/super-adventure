$(document).ready(function() {
    $("button[filter]").click(function() {
      if ($(this).attr("filter") != "all") {
        $(".filter>div[filter != '" + $(this).attr("filter") + "']").hide(350);
        $(".filter>div[filter = '" + $(this).attr("filter") + "']").show(350);
      } else {
        $(".filter>div").show(350);
      }
    });
  });
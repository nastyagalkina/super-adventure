$(document).ready(function() {
    $("button[filter]").click(function() {
      if ($(this).attr("filter") != "all") {
        $(".filter>div[filter != '" + $(this).attr("filter") + "']").hide(350);
        $(".filter>div[filter = '" + $(this).attr("filter") + "']").show(350);
      } else {
        $(".filter>div").show(350);
      }
    });
    $("#navigation").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });
  });

function tick () {
  let curTime = new Date();
  let hours = 23 - curTime.getHours();
  if (hours < 10)
    hours = "0" + hours;
  let minutes = 59 - curTime.getMinutes();
  if (minutes < 10)
    minutes = "0" + minutes;
  let seconds = 59 - curTime.getSeconds();
  if (seconds < 10)
    seconds = "0" + seconds;
  document.getElementById("h").innerHTML = hours + " : ";
  document.getElementById("m").innerHTML = minutes + " : ";
  document.getElementById("s").innerHTML = seconds;
  }


  setInterval(tick,1000);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}  

new WOW().init();
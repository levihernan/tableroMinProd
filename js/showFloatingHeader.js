function showFloatingHeader() {
var scroller = $("body");

  if (scroller.scrollTop() > 120) {
    $('#tableroFloatingHeader').addClass("opacity1");
    console.log('lalala')
  } else {
    $('#tableroFloatingHeader').removeClass("opacity1");
  };
}

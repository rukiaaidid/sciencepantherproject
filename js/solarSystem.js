function split(str) {
  var l = str.indexOf(":");

  if (l > 0) return str.toUpperCase(str.slice(0, l));
  else return "";
}

var infoBlue = $(".info p");
for (var i = 0, len = infoBlue.length; i < len; i++) {
  var moo = infoBlue[i].innerHTML;

  var darkBlue = split(moo);
}

$(document).ready(function () {
  // var moo = infoblue[2].match(/:([^ ]*)/);
  // alert(moo);

  $(".planetOrbit").click(function (e) {
    e.preventDefault();
    $(".planetOrbit").css("border-color", "#112B3D");

    $(this).css("border-color", "#AADAFA");

    var planet = this.id;

    $(".pinfo").hide(0);
    $("." + planet + "-info").slideDown("slow");
  });
  $(".sun").click(function (e) {
    e.preventDefault();
    //    $('.planetOrbit').css("border-color", "#112B3D");
    $(".planetOrbit").css("border-color", "#112B3D");
    $(".pinfo").hide(0);
    $(".sun-info").slideDown();
  });
});

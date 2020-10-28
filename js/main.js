$.support.transition = true;

$("#myModal").on("show.bs.modal", function (e) {
  if (!data) {
    return e.preventDefault(); // stops modal from being shown
  }
});

$(".btn.danger").button("toggle").addClass("fat");
$(".cta").click(function () {
 

 
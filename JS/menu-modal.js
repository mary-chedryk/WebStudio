var modal = document.getElementById("myModal-menu");

var btn = document.getElementById("myBtn-menu");

var span = document.getElementsByClassName("close-menu")[0];

btn.onclick = function() {
  modal.style.display = "block";
  modal.style.visibility = "visible";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
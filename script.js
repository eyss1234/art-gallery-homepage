function show(id) {
  document.getElementById(id).style.display = 'block';
}
function hide(id) {
  document.getElementById(id).style.display = 'none';
}

function displaySearch() {
  let inputBox = document.getElementById("search-input");
  if (inputBox.style.display === "none") {
    inputBox.style.display = "block";
  } else {
    inputBox.style.display = "none";
  }
}
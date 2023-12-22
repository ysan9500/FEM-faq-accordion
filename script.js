function toggleText(id, buttonimg) {
  let text = document.getElementById(id);
  let button = document.getElementById(buttonimg);
  let style = window.getComputedStyle(text)
  if (style.display === "none") {
    text.style.display = "block";
    button.src = "./assets/images/icon-minus.svg";
  }
  else {
    text.style.display = "none";
    button.src = "./assets/images/icon-plus.svg";
  }
}
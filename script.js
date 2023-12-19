function toggleText(id, button) {
  let text = document.getElementById(id);
  let style = window.getComputedStyle(text)
  if (style.display === "none") {
    text.style.display = "block";
    button.getElementsByTagName('img')[0].src = "./assets/images/icon-minus.svg";
  }
  else {
    text.style.display = "none";
    button.getElementsByTagName('img')[0].src = "./assets/images/icon-plus.svg";
  }
}
import './style.css'

const btn0 = document.getElementById('btn0');
const btn50 = document.getElementById('btn50');
const btn100 = document.getElementById('btn100');
const progress = document.querySelector('.progress');

if (btn0 && btn50 && btn100 && progress) {
  btn0.addEventListener("click", () => {
    progress.setAttribute("style", "height: 16px;");
  })
  btn50.addEventListener("click", () => {
    progress.setAttribute("style", "height: 8px;");
  })
  btn100.addEventListener("click", () => {
    progress.setAttribute("style", "height: 0px;");
  })
}

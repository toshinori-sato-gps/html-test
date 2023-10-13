import './style.css'

const btn = document.getElementById('btn');
const overlay = document.querySelector('.overlay');

if (btn && overlay) {
  let isSet = false;
  btn.addEventListener("click", () => {
    if (isSet) {
      overlay.classList.remove('show');
    } else {
      overlay.classList.add('show');
    }

    isSet = !isSet;
  })
}

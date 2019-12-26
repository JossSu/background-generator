const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const css = document.querySelector('h3')
const body = document.querySelector('body')


function colorGradient() {
  body.style.background =
    "linear-gradient(to right,"
    + color1.value
    + ", "
    + color2.value
    + ")"
  // 分號如果加在上述尾部會無法正常work
  return css.innerText = body.style.background + ';'
}

color1.addEventListener('input', colorGradient)

color2.addEventListener('input', colorGradient)


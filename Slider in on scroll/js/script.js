function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var late = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(late, wait);
    if (callNow) func.apply(context, args);
  };
}
const slider = document.querySelectorAll(".slide-in");
function checkSlide() {
  slider.forEach((sliderimg) => {
    const sliderinat = window.scrollY + window.innerHeight - sliderimg.height / 2;
    const imgbottom = sliderimg.offsetTop + sliderimg.height;
    const shown = sliderinat > sliderimg.offsetTop;
    const isNotScrolledPast = window.scrollY < imgbottom;
    if (shown && isNotScrolledPast) {
      sliderimg.classList.add("active");
    } else {
      sliderimg.classList.remove("active");
    }
  });
}
// window.addEventListener("scroll", checkSlide);

window.addEventListener("scroll", debounce(checkSlide));

const viewport = document.getElementById("view").offsetWidth;
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const slider = document.querySelector("div.slider");
const viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

viewSliders[0].style.backgroundColor = "grey";
btnNext.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "white";
    btnPrev.style.visibility = "visible";
    viewSlide++;
    if (!(viewSlide < viewSliders.length-1)) {
        btnNext.style.visibility = "hidden";
        console.log(viewSlide);
    }
    viewSliders[viewSlide].style.backgroundColor = "grey";
    slider.style.left = -viewSlide * viewport + "px";
});

btnPrev.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "white";
    btnNext.style.visibility = "visible";
    viewSlide--;
    if (!(viewSlide > 0)) {
        btnPrev.style.visibility = "hidden";
    }
    viewSliders[viewSlide].style.backgroundColor = "grey";
    slider.style.left = -viewSlide * viewport + "px";
});
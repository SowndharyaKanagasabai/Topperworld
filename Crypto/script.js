//Header Menu toggle
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")

    if (icon == "fa fa-solid fa-bars") {
        e.target.setAttribute("class", "fa fa-solid fa-xmark");
    } else {
        e.target.setAttribute("class", "fa fa-solid fa-bars");

    }
    nav.classList.toggle("showNav")
}

//carousel
const carouselContainer = document.querySelector(".carouselContainer")
const eachCarouselWidth = document.querySelector(".eachCarousel").clientWidth
const allEachCarousel = document.querySelectorAll(".eachCarousel")
const allIndicator = document.querySelectorAll(".indicator");

const slideCarousel = (index) => {
    for (let x = 0; x<allEachCarousel.length; x++) {
        if (x===index) {

            allEachCarousel[x].classList.add("eachCarouselBorder")
            allIndicator[x].classList.add("activeIndicator")
        }
        else {
            allEachCarousel[x].classList.remove("eachCarouselBorder")
            allIndicator[x].classList.remove("activeIndicator")
        }
    }

    carouselContainer.scrollLeft = (index * (eachCarouselWidth + 10))
    


}
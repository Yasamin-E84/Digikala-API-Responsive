import { getDB } from "../api.js";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

async function Slider() {
  try {
    const res = await getDB();

    const slides = res.slider.map(
      (item) => `
      <div class="swiper-slide">
        <a href="${item.link}" class="block w-full h-full">
          <img
            src="${item.src}"
            alt="${item.title}"
            title="${item.title}"
            class="w-full h-full block object-cover desktop:block mobile:hidden"
          />
          <img
            src="${item.Msrc}"
            alt="${item.title}"
            title="${item.title}"
            class="h-full block object-cover desktop:hidden mobile:block w-110 rounded-xl"
          />
        </a>
      </div>
    `,
    );
    const wrapper = document.querySelector(".slider-wrapper");
    wrapper.innerHTML = slides.join("");

    new Swiper(".Slider", {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          centeredSlides: true,
          spaceBetween: 2,
        },
        1024: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 0,
        },
      },
    });
  } catch (error) {
    console.error(error.message);
  }
}

Slider();

export default Slider;

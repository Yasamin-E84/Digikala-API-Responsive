import { getDB } from "../api.js";

const res = await getDB();

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
function Location() {
  new Swiper(".locswiper", {
    modules: [Navigation],
    loop: false,
    slidesPerView: 5.1,
    spaceBetween: 10,
    rtl: true,
    navigation: {
      nextEl: ".city-next",
      prevEl: ".city-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2.2,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4.2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5.1,
        spaceBetween: 10,
      },
    },
  });
}

try {
  const locSwiper = res.locationCity.map((item) => {
    return `
                  <div
                    class="swiper-slide flex h-14 items-center justify-between rounded-full border border-gray-300 !w-auto bg-white py-2 px-1 text-md font-semibold text-slate-700"
                  >
                    <span class="font-Iran desktop:text-sm mobile:text-[12px]">${item.city}</span>
                    <img src="./src/img/Header/left-black.svg" alt="">
                  </div>
        `;
  });

  document.querySelector(".locswiperkid").innerHTML = locSwiper.join(" ");
} catch (error) {
  console.error(error.message);
}

try {
  const citiesList = res.cities.map((item) => {
    return `
                  <div class="cities w-full flex justify-between items-center py-2 border-b border-[#eaeaec] pb-2">
              <div class="cities-item flex justify-center items-center gap-x-1 cursor-pointer">
                <span class="font-Iran text-sm">${item.city}</span>
                <span class="font-Iran text-sm text-[#878b90]">در ${item.province}</span>
              </div>
              <img src="./src/img/Header/left-black.svg" alt="" />
            </div>
        `;
  });

  document.querySelector(".cities-list").innerHTML = citiesList.join(" ");
} catch (error) {
  console.error(error.message);
}

const locModal = document.querySelector(".loc-modal");
const locOpen = document.querySelector(".location-choose");
const locClose = document.querySelector(".loc-close");
const bgCover = document.querySelector(".cover-bg-loc-full");

function openModal() {
  locModal.classList.remove("hidden");
  bgCover.classList.remove("hidden");
  bgCover.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeModal() {
  locModal.classList.add("hidden");
  bgCover.classList.add("hidden");
  bgCover.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

locOpen.addEventListener("click", openModal);
locClose.addEventListener("click", closeModal);

bgCover.addEventListener("click", closeModal);

const locScroll = document.querySelector(".loc-scroll");
const locDivider = document.querySelector(".loc-divider");

function toggleDivider() {
  locDivider.classList.toggle("hidden", locScroll.scrollTop <= 20);
}

toggleDivider();
locScroll.addEventListener("scroll", toggleDivider);

Location();
export default Location;

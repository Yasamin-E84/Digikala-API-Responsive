import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { getDB } from "../api.js";

async function Ads() {
  try {
    const res = await getDB();
    const ads = res.ads.map((item) => {
      return `
        <div class="desktop:min-w-60 desktop:w-[24%] mobile:w-[45%] mobile:h-30 desktop:h-auto desktop:rounded-2xl mobile:rounded-lg overflow-hidden">
          <img src="${item.img}" alt="" title="${item.title}" class="w-full h-full object-cover" />
        </div>
      `;
    });
    document.querySelector(".ads").innerHTML = ads.join("");
  } catch (error) {
    console.log(error.message);
  }
  try {
    const res = await getDB();
    const ads2 = res.ads2.map((item) => {
      return `
        <div class="desktop:min-w-60 desktop:w-[24%] mobile:w-[45%] mobile:h-30 desktop:h-auto desktop:rounded-2xl mobile:rounded-lg overflow-hidden">
          <img src="${item.img}" alt="" title="${item.title}" class="w-full h-full object-cover" />
        </div>
      `;
    });
    document.querySelector(".ads2").innerHTML = ads2.join("");
  } catch (error) {
    console.log(error.message);
  }

  let secondsEl = document.querySelectorAll(".second");
  let minutesEl = document.querySelectorAll(".minute");
  let hoursEl = document.querySelectorAll(".hour");

  function updateCountdown() {
    let now = new Date();
    let midnight = new Date();

    midnight.setHours(24, 0, 0, 0);

    let diff = Math.floor((midnight - now) / 1000);

    if (diff <= 0) {
      midnight.setDate(midnight.getDate() + 1);
      diff = Math.floor((midnight - now) / 1000);
    }

    let hours = Math.floor(diff / 3600);
    let minutes = Math.floor((diff % 3600) / 60);
    let seconds = diff % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    hoursEl.forEach((el) => (el.textContent = hours));
    minutesEl.forEach((el) => (el.textContent = minutes));
    secondsEl.forEach((el) => (el.textContent = seconds));
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  try {
    let res = await getDB();

    let incSwiper = res.incredible.map((item) => {
      return `
        <div class="swiper-slide cursor-pointer ${item.border ? "rounded-tr-lg rounded-br-lg" : ""} overflow-hidden !w-[152px]">
          <div class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
            <img src="${item.img}" alt="" />
            <p class="font-Iran text-[#777b81] text-[12px] text-right w-full">
              ${item.title}
            </p>
            <div class="flex justify-between items-start w-full">
              <div class="font-number text-[12px] font-bold text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full">
                ${item.discount}
              </div>
              <div class="flex flex-col justify-center items-center">
                <div class="flex justify-center items-center gap-1">
                  <span class="font-number text-sm">${item.newPrice}</span>
                  <img src="./src/img/inc/toman.svg" alt="">
                </div>
                <span class="font-number text-sm text-[#cdced1] line-through ml-4">
                  ${item.oldPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    const lastSlide = `
      <div class="swiper-slide !w-[160px] pl-4">
        <div class="bg-white w-full h-[260px] rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
          <div class="p-2 rounded-full border-2 border-[#19bfd3]">
            <img src="./src/img/inc/blueleft.svg" alt="" />
          </div>
          <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
            مشاهده همه
          </span>
        </div>
      </div>
    `;

    document.querySelector(".inc-wrapper").innerHTML +=
      incSwiper.join("") + lastSlide;
  } catch (error) {
    console.log(error.message);
  }

  new Swiper(".inc-swiper", {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 2,
    navigation: {
      nextEl: ".inc-next",
      prevEl: ".inc-prev",
    },
  });
}

export default Ads;

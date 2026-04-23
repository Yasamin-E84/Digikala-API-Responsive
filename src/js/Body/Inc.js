import { getDB } from "../api";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

async function Incredible() {
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

    let amazingmobile = res.amazingmobile.map((item) => {
      return `
        <div class="cursor-pointer shrink-0 ${item.border ? "rounded-tr-lg rounded-br-lg" : ""} h-60 overflow-hidden !w-[130px]">
          <div class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
            <img src="${item.img}" alt="" />
            <p class="font-Iran text-[#777b81] text-[12px] text-right w-full line-clamp-2 leading-6 text-black">
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
        <div class="bg-white w-40 shrink-0 ml-4 h-70 rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
          <div class="p-2 rounded-full border-2 border-black">
            <img src="./src/img/inc/blackleft.svg" alt="" />
          </div>
          <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
            مشاهده همه
          </span>
        </div>
    `;

    document.querySelector(".mobile-amazing-items").innerHTML += amazingmobile.join("") + lastSlide;
  } catch (error) {
    console.log(error.message);
  }

}

export default Incredible;
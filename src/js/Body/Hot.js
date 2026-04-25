import { getDB } from "../api.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

async function Hot() {
  try {
    const res = await getDB();
    const data = res.hot || [];
    let desktopSlides = "";

    for (let i = 0; i < data.length; i += 3) {
      const first = data[i];
      const second = data[i + 1];
      const third = data[i + 2];

      desktopSlides += `
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start py-2">
            ${
              first
                ? `
                <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <img src="${first.img}" alt="${first.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${first.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${first.title}</p>
              </div>
            `
                : ""
            }
            ${
              second
                ? `
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 border-b border-[#f0f0f1] p-4">
                <img src="${second.img}" alt="${second.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${second.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${second.title}</p>
              </div>
            `
                : ""
            }
            ${
              third
                ? `
              <div class="w-full h-[120px] cursor-pointer flex justify-between items-center gap-2 p-4">
                <img src="${third.img}" alt="${third.title}" class="w-16 h-16 object-contain rounded-md bg-[#f8f8f8]" />
                <span class="font-number text-[36px] text-[#19bfd3] font-bold">${third.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-6 text-right line-clamp-2 flex-1">${third.title}</p>
              </div>
            `
                : ""
            }
          </div>
        </div>
      `;
    }

    document.querySelector(".hot-wrapper").innerHTML = desktopSlides;
  } catch (error) {
    console.log(error.message);
  }

  try {
    const res = await getDB();
    const data = res.hot || [];
    let mobileSlides = "";

    for (let i = 0; i < data.length; i += 3) {
      const first = data[i];
      const second = data[i + 1];
      const third = data[i + 2];

      mobileSlides += `
        <div class="swiper-slide">
          <div class="w-full flex flex-col justify-start items-start gap-2">
            ${
              first
                ? `
              <div class="w-full h-[100px] cursor-pointer flex justify-between items-center border border-[#e0e0e2] rounded-xl pl-2">
              <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
              <img src="${first.img}" alt="${first.title}" class="h-full object-contain mix-blend-multiply" /></div>
              <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${first.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${first.title}</p>
              </div>
            `
                : ""
            }
            ${
              second
                ? `
              <div class="w-full h-[100px] flex justify-between cursor-pointer items-center border border-[#e0e0e2] rounded-xl pL-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                <img src="${second.img}" alt="${second.title}" class="h-full object-contain mix-blend-multiply" /></div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${second.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${second.title}</p>
              </div>
            `
                : ""
            }
            ${
              third
                ? `
              <div class="w-full h-[100px] flex justify-between items-center cursor-pointer border border-[#e0e0e2] rounded-xl pl-2">
                <div class="h-full rounded-2xl overflow-hidden bg-[#f6f6f6] ml-4">
                <img src="${third.img}" alt="${third.title}" class="h-full object-contain mix-blend-multiply" /></div>
                <span class="font-number text-white bg-[#ef4056] rounded-full min-w-8 h-8 flex justify-center items-center">${third.id}</span>
                <p class="font-Iran text-[14px] text-[#3f4064] leading-7 text-right line-clamp-2 flex-1 px-2">${third.title}</p>
              </div>
            `
                : ""
            }
          </div>
        </div>
      `;
    }

    document.querySelector(".hot-mobile-wrapper").innerHTML = mobileSlides;
  } catch (error) {
    console.log(error.message);
  }

  new Swiper(".hot-swiper", {
    modules: [Navigation],
    slidesPerView: 3.3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".hot-next",
      prevEl: ".hot-prev",
    },
  });

  new Swiper(".hot-mobile-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
  });
}

    export default Hot;


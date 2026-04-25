import { getDB } from "../api.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

async function Grouping() {
  try {
    const res = await getDB();
    const data = res.grouping;
    let grouping = "";

    for (let i = 0; i < data.length; i += 2) {
      const first = data[i];
      const second = data[i + 1];

      grouping += `
        <div class="swiper-slide !w-[120px]">
          ${
            first
              ? `
            <div class="flex flex-col justify-between items-center w-full h-[200px] cursor-pointer">
              <div class="flex flex-col justify-center items-center w-full gap-2">
                <img src="${first.img}" alt="${first.title}" class="w-25">
                <span class="font-Iran text-[12px] text-center font-semibold">${first.title}</span>
              </div>
            </div>
          `
              : ""
          }

          ${
            second
              ? `
            <div class="flex flex-col justify-between items-center w-full h-[200px] cursor-pointer">
              <div class="flex flex-col justify-center items-center w-full gap-2">
                <img src="${second.img}" alt="${second.title}" class="w-25">
                <span class="font-Iran text-[12px] text-center font-semibold">${second.title}</span>
              </div>
            </div>
          `
              : ""
          }
        </div>
      `;
    }

    document.querySelector(".grouping-wrapper").innerHTML = grouping;
  } catch (error) {
    console.log(error.message);
  }
  try {
  const res = await getDB();
  const data = res.grouping;
  let grouping = "";

  for (let i = 0; i < data.length; i += 2) {
    const first = data[i];
    const second = data[i + 1];

    grouping += `
      <div class="flex flex-col gap-2 shrink-0 w-[90px]">
        ${
          first
            ? `
          <div class="flex flex-col justify-center items-center w-full cursor-pointer">
            <div class="flex flex-col justify-center items-center w-full gap-1">
              <img src="${first.img}" alt="${first.title}" class="w-20">
              <span class="font-Iran text-[10px] text-center">${first.title}</span>
            </div>
          </div>
        `
            : ""
        }

        ${
          second
            ? `
          <div class="flex flex-col justify-center items-center w-full cursor-pointer">
            <div class="flex flex-col justify-center items-center w-full gap-1">
              <img src="${second.img}" alt="${second.title}" class="w-20">
              <span class="font-Iran text-[10px] text-center">${second.title}</span>
            </div>
          </div>
        `
            : ""
        }
      </div>
    `;
  }

  document.querySelector(".grouping-mobile").innerHTML = grouping;
} catch (error) {
  console.log(error.message);
}
  new Swiper(".grouping-swiper", {
    modules: [Navigation],
    slidesPerView: 7.5,
    spaceBetween: 60,
    navigation: {
      nextEl: ".grouping-next",
      prevEl: ".grouping-prev",
    },
  });
}

export default Grouping;
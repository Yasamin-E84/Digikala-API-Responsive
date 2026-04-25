import { getDB } from "../api.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

async function Brands() {
  try {
    const res = await getDB();
    const brandsDesktop = res.brands.map((item) => {
      return `
        <div class="swiper-slide !w-[135px]">
          <a href="${item.url || "#"}" title="${item.title}" class="w-full h-26 border-r border-[#f0f0f1] flex justify-center items-center px-2">
            <img src="${item.img}" alt="${item.title}" class="w-[85%] object-contain" />
          </a>
        </div>
      `;
    });

    document.querySelector(".brands-wrapper").innerHTML = brandsDesktop.join("");
  } catch (error) {
    console.log(error.message);
  }

  try {
    const res = await getDB();
    const brandsMobile = res.brands.map((item) => {
      return `
        <a href="${item.url || "#"}" title="${item.title}" class="shrink-0 w-[80px] h-[100px] rounded-lg border border-[#e0e0e2] bg-[#f5f5f5] flex flex-col justify-center items-center gap-2 px-1">
          <img src="${item.img}" alt="${item.title}" class="w-[75%] object-contain mix-blend-multiply" />
          <span class="font-Iran text-[12px] text-[#3f4064] text-center w-full truncate">${item.title}</span>
        </a>
      `;
    });

    document.querySelector(".brands-mobile").innerHTML = brandsMobile.join("");
  } catch (error) {
    console.log(error.message);
  }

  new Swiper(".brands-swiper", {
    modules: [Navigation],
    slidesPerView: 8,
    spaceBetween: 8,
    navigation: {
      nextEl: ".brands-next",
      prevEl: ".brands-prev",
    },
  });
}

export default Brands;

import { getDB } from "../api.js";

const res = await getDB();

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

async function MSearch() {
  try {
    const searchHot = res.HotSearh.map((item) => {
      return `
    <div class="swiper-slide cursor-pointer !flex !flex-row !items-center gap-2 !w-auto rounded-full border border-gray-300 bg-white py-2 px-2">
      <span class="font-Iran text-sm font-semibold text-slate-700 whitespace-nowrap">${item.title}</span>
      <img src="./src/img/Header/left-black.svg" alt="" class="w-4 h-4 shrink-0" />
    </div>
  `;
    });
    document.querySelector(".hot-wrapper").innerHTML = searchHot.join(" ");
  } catch (error) {
    console.log(error.message);
  }
  var swiper = new Swiper(".Search-hot-swiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
  });
  const closeBtn = document.querySelector(".close-MSearch-popup");
  const MSearchPopup = document.querySelector(".MSearch-popup");
  const MSearch = document.querySelector(".MSearch");
    MSearch.addEventListener("click", () => {
      MSearchPopup.classList.remove("translate-y-full", "invisible", "opacity-0","pointer-events-none");
    });
    closeBtn.addEventListener("click", () => {
      MSearchPopup.classList.add("translate-y-full","invisible","opacity-0","pointer-events-none");});

}

MSearch();
export default MSearch;

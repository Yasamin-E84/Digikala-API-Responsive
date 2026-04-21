import { getDB } from "../api";

const res = await getDB();

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

async function Story() {
  try {

    const storySwiper = res.Story.map((item) => {
      return `
        <div class="swiper-slide">
          <div class="flex flex-col justify-center items-center p-2 gap-2 w-23">
            <div class="rounded-full overflow-hidden w-22 h-22 bg-linear-to-b from-[#95489c] to-[#c84198] p-0.5">
              <div class="bg-white rounded-full w-full h-full p-1">
                <img src="${item.img}" alt="" class="rounded-full" />
              </div>
            </div>
            <span class="font-Iran text-xs text-[#574a6d] line-clamp-2 text-center w-full">${item.text}</span>
          </div>
        </div>
      `;
    });

    document.querySelector(".story-wrapper").innerHTML = storySwiper.join("");

    new Swiper(".Story", {
      modules: [Navigation],
      slidesPerView: 10.5,
      spaceBetween: 0,
      navigation: {
        nextEl: ".story-next",
        prevEl: ".story-prev",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export default Story;
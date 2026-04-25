import { getDB } from "../api.js";

async function chosen() {
  try {
    const res = await getDB();
    const chosen = (res.chosen || []).map((item) => {
      return `
        <div class="h-[286px] border-l border-b border-[#f0f0f1] px-2 pt-2 pb-3 flex flex-col justify-between items-start" dir="rtl">
          <div class="w-full h-[182px] flex justify-center items-center">
            <img src="${item.img}" alt="${item.title}" class="max-h-full w-[78%] object-contain" />
          </div>
          <div class="w-full flex flex-col gap-1">
            <div class="w-full flex justify-between items-end">
              <span class="font-number text-white bg-[#d32f2f] rounded-full min-w-10 h-6 px-2 text-[14px] leading-6 text-center ${item.discount ? "block" : "hidden"}">${item.discount || ""}</span>
              <div class="flex justify-end items-end gap-1">
                <span class="font-number text-[18px] leading-none text-[#2f2f56] font-bold">${item.newPrice}</span>
<img src="./src/img/inc/toman.svg" alt="" class="w-5">             
 </div>
            </div>
            <span class="font-number text-[13px] text-[#c7c9ce] line-through self-end ml-6 ${item.oldPrice ? "block" : "hidden"}">${item.oldPrice || ""}</span>
          </div>
        </div>
      `;
    });

    document.querySelector(".chosen-items").innerHTML = chosen.join("");
  } catch (error) {
    console.log(error.message);
  }
}

export default chosen;


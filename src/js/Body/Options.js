import { getDB } from "../api.js";

async function Options() {
  try {
    const res = await getDB();
    const options2 = (res.options2 || []).map((item) => {
      const images = (item.images || [])
        .map((img, index, arr) => {
          const isFirst = index === 0;
          const isLast = index === arr.length - 1;
          return `
            <div class="w-[50%] h-35 flex justify-center items-center ${isFirst ? "border-l border-b border-[#f0f0f1]" : ""} ${isLast ? "border-r border-t border-[#f0f0f1]" : ""}">
              <img src="${img}" alt="${item.title}" class="w-[80%] object-contain" />
            </div>
          `;
        })
        .join("");

      return `
        <div class="w-[25%] min-h-[300px] border-l border-[#f0f0f1] p-4 flex flex-col justify-between items-start">
          <div class="w-full flex flex-col gap-1">
            <h3 class="font-Iran text-[16px] text-[#23254e] font-semibold">${item.title}</h3>
            <span class="font-Iran text-[11px] text-[#b1b3b8]">${item.subtitle || ""}</span>
          </div>

          <div class="w-full flex flex-wrap items-center mt-3">
            ${images}
          </div>

          <a href="${item.url || "#"}" class="w-full flex justify-center items-center gap-1 mt-3 font-Iran text-[16px] text-[#19bfd3]">
            مشاهده
            <img src="./src/img/blueleftsmall.svg" alt="" class="w-6">
          </a>
        </div>
      `;
    });

    document.querySelector(".options2").innerHTML = options2.join("");
  } catch (error) {
    console.log(error.message);
  }
  try {
    const res = await getDB();
    const options = (res.options || []).map((item) => {
      const images = (item.images || [])
        .map((img, index, arr) => {
          const isFirst = index === 0;
          const isLast = index === arr.length - 1;
          return `
            <div class="w-[50%] h-35 flex justify-center items-center ${isFirst ? "border-l border-b border-[#f0f0f1]" : ""} ${isLast ? "border-r border-t border-[#f0f0f1]" : ""}">
              <img src="${img}" alt="${item.title}" class="w-[80%] object-contain" />
            </div>
          `;
        })
        .join("");

      return `
        <div class="w-[25%] min-h-[300px] border-l border-[#f0f0f1] p-4 flex flex-col justify-between items-start">
          <div class="w-full flex flex-col gap-1">
            <h3 class="font-Iran text-[16px] text-[#23254e] font-semibold">${item.title}</h3>
            <span class="font-Iran text-[11px] text-[#b1b3b8]">${item.subtitle || ""}</span>
          </div>

          <div class="w-full flex flex-wrap items-center mt-3">
            ${images}
          </div>

          <a href="${item.url || "#"}" class="w-full flex justify-center items-center gap-1 mt-3 font-Iran text-[16px] text-[#19bfd3]">
            مشاهده
            <img src="./src/img/blueleftsmall.svg" alt="" class="w-6">
          </a>
        </div>
      `;
    });

    document.querySelector(".options").innerHTML = options.join("");
  } catch (error) {
    console.log(error.message);
  }
}

export default Options;


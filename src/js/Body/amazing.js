import { getDB } from "../api.js";

getDB;

async function Amazing() {
  try {
    const res = await getDB();
    const amazing = res.amazing.map((item) => {
      return `
        <div class="w-20 h-20 relative bg-white rounded-full flex justify-center items-center">
                <img src="${item.img}" alt="" class="rounded-full w-[80%]">
                <div class="absolute rounded-full bg-[#d32f2f] font-number text-[14px] px-1.5 py-0.5 text-white bottom-0 right-0">${item.discount}</div>
            </div>
      `;
    });
    document.querySelector(".amazing-items").innerHTML = amazing.join("");
  } catch (error) {
    console.log(error.message);
  }
}
export default Amazing;

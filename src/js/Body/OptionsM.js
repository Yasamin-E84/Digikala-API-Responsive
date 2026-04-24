import { getDB } from "../api";

function makeOptionCards(data) {
  const cards = data.map((item) => {
    return `
              <div
                class="w-[170px] h-[280px] bg-white border border-[#e0e0e2] rounded-lg flex flex-col justify-start items-center gap-2 shrink-0"
              >
              <div class="bg-[#f0f0f1] w-full p-2">
                <img
                  src="${item.img}"
                  alt=""
                  class="w-full h-[130px] object-cover mix-blend-multiply"
                />
                </div>
                <div class="w-full p-2 flex flex-col justify-start items-start gap-2">
                <div class="w-full flex flex-col justify-start items-start gap-1">
                  <p class="font-Iran text-[14px] text-[#3f4064] line-clamp-2">
                    ${item.title}
                  </p>
                </div>
                <div class="w-full flex flex-col justify-center items-center gap-1">
                  <div class="w-full flex justify-start items-center">
                      <span class="font-number text-white bg-[#d32f2f] rounded-full px-3 py-0.5 text-[12px] ${item.discount ? "block" : "hidden"}">${item.discount || ""}</span>
                      <span class="font-number text-[#b4b6ba] text-[12px] line-through ${item.discount ? "block" : "hidden"}">${item.oldPrice || ""}</span>
                  </div>
                  <div class="w-full flex justify-start items-center gap-1">
                    <span class="font-number text-[22px] text-[#3f4064] font-bold">${item.newPrice}</span>
                    <img src="./src/img/inc/toman.svg" alt="" class="w-4" />
                  </div>
                </div>
                </div>
              </div>
            `;
  });

  const lastSlide = `
                <div class="bg-white w-[170px] h-[270px] flex flex-col justify-center items-center gap-2
                ">
                <div class="p-2 flex justify-center items-center border-2 border-black rounded-full">
                    <img src="./src/img/leftgraybig.svg" alt="" class="w-6" /></div>
                    <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
                        مشاهده همه
                    </span>
                </div>
        `;

  return cards.join("") + lastSlide;
}

async function OptionsM() {
  try {
    const res = await getDB();
    document.querySelector(".optionsM1").innerHTML = makeOptionCards(
      res.optionsM1 || []
    );
    document.querySelector(".optionsM2").innerHTML = makeOptionCards(
      res.optionsM2 || []
    );
    document.querySelector(".optionsM3").innerHTML = makeOptionCards(
      res.optionsM3 || []
    );
    document.querySelector(".optionsM4").innerHTML = makeOptionCards(
      res.optionsM4 || []
    );
  } catch (error) {
    console.log(error.message);
  }
}
export default OptionsM;

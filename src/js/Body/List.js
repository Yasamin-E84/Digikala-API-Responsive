import { getDB } from "../api.js";

async function List() {
  try {
    const res = await getDB();

    const list = res.list.map((item) => {
      return `
                <div class="flex flex-col w-20 justify-center items-center gap-1 h-30">
          <a href="${item.link}" class="flex flex-col justify-start items-center gap-1 h-full">
            <img src="${item.icon}" alt="" class="w-12" />
            <span class="w-16 font-Iran text-[12px] text-center leading-6"
              >${item.text}</span
            ></a
          >
        </div>
            `;
    });
    document.querySelector(".list").innerHTML = list.join("");
  } catch (error) {
    console.log(error.message);
  }
  try {
    const res = await getDB();

    const list = res.listModal.map((item) => {
      return `
                <div class="flex flex-col desktop:w-20 mobile:w-30 justify-center items-center gap-1 h-30">
          <a href="${item.link}" class="flex flex-col justify-start items-center gap-1 h-full">
            <img src="${item.icon}" alt="" class="w-12" />
            <span class="w-16 font-Iran text-[12px] text-center leading-6"
              >${item.text}</span
            ></a
          >
        </div>
            `;
    });
    document.querySelector(".list-modal-container").innerHTML = list.join("");
  } catch (error) {
    console.log(error.message);
  }
  try {
    const res = await getDB();

    const list = res.modalService.map((item) => {
      return `
                <div
              class="flex justify-between items-start desktop:w-70 mobile:w-[98%] desktop:min-h-30  mobile:min-h-22 desktop:border border-[#eaeaec] mobile:border-b desktop:rounded-lg p-4 gap-2"
            >
              <img src="${item.pic}" alt="" class="w-13" />
              <div class="flex flex-col justify-start desktop:w-50 mobile:w-full items-center gap-2">
                <div class="flex justify-between w-full items-center">
                  <h3 class="font-Iran text-sm font-bold">${item.title}</h3>
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 24px; height: 24px; fill: #a1a3a8"
                    width="24"
                    height="24"
                  >
                    <defs>
                      <symbol
                        id="arrowLeft"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z"
                          clip-rule="evenodd"
                        ></path>
                      </symbol>
                    </defs>
                    <g>
                      <path
                        fill-rule="evenodd"
                        d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p class="font-Iran text-xs text-[#666] leading-6 w-full text-right line-clamp-2">
${item.text}                </p>
              </div>
            </div>
            `;
    });
    document.querySelector(".list-modal-services").innerHTML = list.join("");
  } catch (error) {
    console.log(error.message);
  }
  const closeList = document.querySelector(".closelist");
  const listModal = document.querySelector(".list-modal");
  const openList = document.querySelector(".more-list");
  const bgCover = document.querySelector(".cover-bg-loc-full");

  openList.addEventListener("click", () => {
    listModal.classList.remove("hidden");
    listModal.classList.add("flex");
    bgCover.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  });
  closeList.addEventListener("click", () => {
    listModal.classList.add("hidden");
    listModal.classList.remove("flex");
    bgCover.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });
}
export default List;

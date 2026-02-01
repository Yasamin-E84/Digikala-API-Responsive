async function Annoying() {
  try {
    const data = await fetch(
      "https://yasamin-e84.github.io/Digikala-API-Responsive/src/db/db.json"
    );
    const res = await data.json();

    const annoying = res.annoying
      .map((item) => {
        return `
<div class="pain-subject w-fit h-[70vh] p-3 absolute top-0 right-full overflow-y-scroll">

  <a href="#" class="flex gap-2 w-55 justify-start items-start">
    <span class="font-Iran mt-1 w-fit text-xs text-[#008eb2]">
      ${item.topLink}
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" style="fill:#008eb2;" width="18" height="18">
      <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
    </svg>
  </a>

  <div class="subjects flex gap-2">
    ${item.sections
      .map(
        (section) => `
      <div class="w-55 p-2 mt-4 flex flex-col gap-2">

        <div class="titles w-full flex flex-row gap-1 border-r-2 border-r-[#ed1944] pr-2 group justify-start items-center">
          <span class="font-Iran text-[14px] font-bold text-black group-hover:text-[#ed1944]">
            ${section.title}
          </span>

          <img src="./src/img/Header/left-black.svg" class="w-4.5 block group-hover:hidden">
          <img src="./src/img/Header/left-red.svg" class="w-4.5 hidden group-hover:block">
        </div>

        ${section.items
          .map(
            (child) => `
          <div class="child">
            <span class="font-Iran text-xs text-[#a2a2a2]">${child}</span>
          </div>
        `
          )
          .join("")}

      </div>
    `
      )
      .join("")}
  </div>
</div>
`;
      })
      .join("");

    document.querySelector(".painful-subject").innerHTML = annoying;
  } catch (error) {
    console.error(error.message);
  }
}

export default Annoying;

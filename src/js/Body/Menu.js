import { getDB } from "../api.js";

const res = await getDB();

async function Menu() {
  try {
    const menu = res.menu.map((item) => {
      const isCategory =
        item.text.includes("دسته") || item.type === "category";

      return `
        <div class="tab-menu-item flex h-full flex-col items-center justify-center gap-1">
          <a
            href="${isCategory ? "#" : item.href}"
            class="tab-menu-item flex h-full flex-col items-center justify-center gap-1"
            ${isCategory ? "data-tabs-open" : ""}
          >
            <img src="${item.icon}" alt="" class="w-6" />
            <span class="font-Iran text-[12px] text-[#3f4064]">${item.text}</span>
          </a>
        </div>
      `;
    });

    document.querySelector(".tab-menu").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
}

export default Menu;
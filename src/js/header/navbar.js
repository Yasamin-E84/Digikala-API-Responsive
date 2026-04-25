import { getDB } from "../api.js";

const res = await getDB();

async function NavBar() {
  try {

    const navBar = res.navbar.map((item) => {
      return `
        <div class="nav-items cursor-pointer items-end flex justify-end gap-2 h-10 flex-col group">
          <a class="flex items-center gap-1" href="${item.link}">
            <img src=${item.img} class="w-4.5" />
            <span class="font-Iran text-[12px] text-[#3f3f3f]">
              ${item.title}
            </span>
          </a>
          <div class="underline w-3 h-0.5 opacity-0 bg-[#ed1944] rounded-full group-hover:opacity-100 group-hover:w-full transition-all duration-300"></div>
        </div>`;
    });

    document.querySelector(".navigation").innerHTML = navBar.join(" ");

    let navItems = document.querySelectorAll(".nav-items");

    navItems.forEach((item) => {
      item.addEventListener("mouseenter", function (e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const width = rect.width;

        const el = e.currentTarget;

        el.classList.remove("items-start", "items-end");

        if (mouseX < width / 2) {
          el.classList.add("items-end");
        } else {
          el.classList.add("items-start");
        }
      });
    });
  } catch (error) {
    console.error(error.message);
  }
}
NavBar();
export default NavBar;

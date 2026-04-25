import { getDB } from "../api";

async function Tabs() {
  try {
    const res = await getDB();
    const tabsRoot = document.querySelector("[data-tabs]");
    const tabsList = document.querySelector("[data-tabs-list]");
    const tabsContent = document.querySelector("[data-tabs-content]");
    const closeBtn = document.querySelector("[data-tabs-close]");
    const backdrop = document.querySelector("[data-tabs-backdrop]");
    const sheet = document.querySelector("[data-tabs-sheet]");

    if (!tabsRoot || !tabsList || !tabsContent) return;

    const isMobile = () => window.matchMedia("(max-width: 1023px)").matches;

    function categoryIconHtml() {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M4 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm0 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm1 11a1 1 0 100 2h4a1 1 0 100-2h-4z" clip-rule="evenodd"></path>
        </svg>
      `;
    }

    function simpleItemsHtml(items) {
      return items
        .map((item) => {
          return `
            <a
              href="${item.url}"
              class="block py-2 font-Iran text-[13px] leading-7 text-[#81858b]"
            >
              ${item.title}
            </a>
          `;
        })
        .join("");
    }

    function groupedSectionsHtml(sections) {
      return sections
        .map((section) => {
          return `
            <div class="mb-4">
              <span class="mb-2 block font-Iran text-[13px] font-bold text-[#424750]">
                ${section.title}
              </span>

              <div class="flex flex-col">
                ${simpleItemsHtml(section.items)}
              </div>
            </div>
          `;
        })
        .join("");
    }

    function columnHtml(column) {
      if (column.type === "grouped") {
        return `
          <div class="mb-5">
            <div class="mb-3 flex items-center gap-1 border-r-2 border-r-[#ef4056] pr-2">
              <span class="font-Iran text-[14px] font-bold text-[#23254e]">
                ${column.title}
              </span>

              <img
                src="./src/img/Header/left-black.svg"
                alt=""
                class="h-4 w-4"
              />
            </div>

            ${groupedSectionsHtml(column.sections)}
          </div>
        `;
      }

      if (column.type === "simple") {
        return `
          <div class="mb-5">
            <div class="mb-3 flex items-center gap-1 border-r-2 border-r-[#ef4056] pr-2">
              <span class="font-Iran text-[14px] font-bold text-[#23254e]">
                ${column.title}
              </span>

              <img
                src="./src/img/Header/left-black.svg"
                alt=""
                class="h-4 w-4"
              />
            </div>

            <div class="flex flex-col">
              ${simpleItemsHtml(column.items)}
            </div>
          </div>
        `;
      }

      return "";
    }

    function contentHtml(category) {
      return `
        <div>
          <a
            href="${category.topLink.url}"
            class="mb-4 flex items-center gap-1 font-Iran text-xs text-[#008eb2]"
          >
            <span>${category.topLink.title}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="fill: #008eb2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
              ></path>
            </svg>
          </a>

          ${category.columns.map((column) => columnHtml(column)).join("")}
        </div>
      `;
    }

    function setActiveTab(index) {
      const buttons = tabsList.querySelectorAll("[data-tabs-item]");

      buttons.forEach((button) => {
        button.classList.remove(
          "bg-white",
          "text-[#ef4056]",
          "border-r-2",
          "border-r-[#ef4056]",
        );
        button.classList.add("bg-[#f0f0f1]", "text-[#424750]", "border-r-transparent");
      });

      const activeButton = buttons[index];
      if (!activeButton) return;

      activeButton.classList.remove(
        "bg-[#f0f0f1]",
        "text-[#424750]",
        "border-r-transparent",
      );
      activeButton.classList.add(
        "bg-white",
        "text-[#ef4056]",
        "border-r-2",
        "border-r-[#ef4056]",
      );

      tabsContent.innerHTML = contentHtml(res.megaMenu[index]);
      tabsContent.scrollTop = 0;
    }

    function openTabs(event) {
      event.preventDefault();
      if (!isMobile()) return;

      tabsRoot.classList.remove("hidden");
      tabsRoot.classList.add("block");
      requestAnimationFrame(() => {
        backdrop?.classList.remove("opacity-0");
        sheet?.classList.remove("translate-y-full");
      });

      document.body.classList.add("overflow-hidden");

      setActiveTab(0);
    }

    function closeTabs() {
      backdrop?.classList.add("opacity-0");
      sheet?.classList.add("translate-y-full");
      window.setTimeout(() => {
        tabsRoot.classList.add("hidden");
        tabsRoot.classList.remove("block");
      }, 280);

      document.body.classList.remove("overflow-hidden");
    }

    tabsList.innerHTML = res.megaMenu
      .map((category, index) => {
        return `
          <button
            type="button"
            class="flex min-h-[74px] w-full flex-col items-center justify-center gap-1 border-b border-[#e0e0e2] border-r-2 border-r-transparent bg-[#f0f0f1] px-1 text-[#424750] transition-colors duration-200"
            data-tabs-item
            data-tabs-index="${index}"
          >
            <span class="flex h-5 w-5 items-center justify-center text-current">
              ${categoryIconHtml(category.icon)}
            </span>

            <span class="line-clamp-2 text-center font-Iran text-[11px] leading-5">
              ${category.title}
            </span>
          </button>
        `;
      })
      .join("");

    tabsList.querySelectorAll("[data-tabs-item]").forEach((button) => {
      button.addEventListener("click", () => {
        setActiveTab(Number(button.dataset.tabsIndex));
      });
    });

    document.addEventListener("click", (event) => {
      const openButton = event.target.closest("[data-tabs-open]");

      if (openButton) {
        openTabs(event);
      }
    });

    closeBtn?.addEventListener("click", closeTabs);
    backdrop?.addEventListener("click", closeTabs);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !tabsRoot.classList.contains("hidden")) {
        closeTabs();
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

export default Tabs;
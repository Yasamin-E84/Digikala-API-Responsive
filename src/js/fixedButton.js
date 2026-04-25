import { getDB } from "./api";

function cardHtml(card) {
  const isOrange = card.tag?.variant === "orange";
  const wrapBg = isOrange ? "bg-[#feebde]" : "bg-[#dbf3e6]";
  const tagBg = isOrange ? "bg-[#ff8042]" : "bg-[#029a49]";

  return `
    <a href="${card.href || "#"}" class="block w-full rounded-lg p-5 no-underline text-inherit ${wrapBg}">
      <div class="mb-2.5 flex items-center justify-start gap-3">
        <h3 class="m-0 font-Iran text-[17px] font-bold text-black">${card.title || ""}</h3>
        <img class="h-5 w-5" src="${card.titleIcon || ""}" alt="" />
      </div>

      <div class="flex w-fit items-center gap-2 rounded-br-sm rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl px-3 py-0.5 ${tagBg}">
        <img class="h-[18px] w-[18px] -scale-x-100 brightness-0 invert" src="${card.tag?.icon || ""}" alt="" />
        <p class="m-0 font-Iran text-xs font-bold text-white">${card.tag?.text || ""}</p>
      </div>

      <div class="mt-9 flex w-full justify-end">
        <img class="h-[120px] w-[120px] object-contain sm:h-[130px] sm:w-[130px]" src="${card.illustration || ""}" alt="" />
      </div>
    </a>
  `;
}

function faqItemHtml(question, answer) {
  return `
    <details class="group rounded-xl border border-[#f0f0f1] bg-white p-3">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-bold text-[#3f4064]">
        <span>${question || ""}</span>
        <img src="./src/img/fixed-button/down.svg" alt="" class="h-5 w-5 transition-transform group-open:rotate-180" />
      </summary>
      <p class="mt-3 text-sm leading-7 text-[#3f4064]">${answer || ""}</p>
    </details>
  `;
}

function initFixedWidgets() {
    const rootH = document.querySelector("[data-fixed-help]");
    if (!rootH) return;
  
    const openBtn = rootH.querySelector("[data-help-open]");
    const closeBtns = rootH.querySelectorAll("[data-help-close]");
    const panel = rootH.querySelector("[data-help-panel]");
    const closeFab = rootH.querySelector("[data-help-desktop-fab-close]");
  
    const mobileBubble = rootH.querySelector("[data-help-mobile-bubble]");
    const mobileFloat = rootH.querySelector("[data-help-mobile-float]");
  
    let mobileClosed = false;
  
    function openHelp() {
      openBtn.classList.add("hidden");
  
      closeFab.classList.remove("hidden");
      closeFab.classList.add("flex");
  
      panel.classList.remove("hidden");
      panel.classList.add("flex");
    }
  
    function closeHelp() {
      openBtn.classList.remove("hidden");
  
      closeFab.classList.add("hidden");
      closeFab.classList.remove("flex");
  
      panel.classList.add("hidden");
      panel.classList.remove("flex");
    }
  
    function handleScroll() {
      const doc = document.documentElement;
      const ratio =
        window.scrollY / (doc.scrollHeight - window.innerHeight);
  
      if (ratio >= 0.1 && window.innerWidth < 1024 && !mobileClosed) {
        mobileClosed = true;
  
        mobileBubble?.classList.add("hidden");
  
        setTimeout(() => {
          mobileFloat?.classList.remove("hidden");
          mobileFloat?.classList.add("animate-bounce");
        }, 2000);
      }
    }
  
    openBtn?.addEventListener("click", openHelp);
    closeBtns.forEach((btn) => btn.addEventListener("click", closeHelp));
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeHelp();
    });
  
    window.addEventListener("scroll", handleScroll, { passive: true });
  
    closeHelp(); // start closed
  }

function fillFromApi() {
  const rootS = document.querySelector("[data-fixed-super]");
  const rootH = document.querySelector("[data-fixed-help]");

  if (!rootS || !rootH) return;

  getDB()
    .then((res) => {
      const superData = res.fixedSupermarket;

      if (superData) {
        const collapsedTitle = rootS.querySelector("[data-super-label-collapsed]");
        const expandedTitle = rootS.querySelector("[data-super-title-short]");
        const expandedTagline = rootS.querySelector("[data-super-tagline]");
        const basketIcon = rootS.querySelector("[data-fixed-super-basket-img]");
        const modalTitle = rootS.querySelector("[data-fixed-super-modal-title]");
        const modalSubtitle = rootS.querySelector("[data-fixed-super-modal-sub]");
        const cardsHost = rootS.querySelector("[data-fixed-super-cards]");

        if (collapsedTitle) {
          collapsedTitle.textContent = superData.buttonTitle || "سوپرمارکت";
        }

        if (expandedTitle) {
          expandedTitle.textContent = superData.buttonTitle || "سوپرمارکت";
        }

        if (expandedTagline) {
          expandedTagline.textContent =
            superData.buttonTagline || "تنوع بالا و پرتخفیف";
        }

        if (basketIcon) {
          basketIcon.src = superData.basketIcon || "";
        }

        if (modalTitle) {
          modalTitle.textContent = superData.modalTitle || "";
        }

        if (modalSubtitle) {
          modalSubtitle.textContent = superData.modalSubtitle || "";
        }

        if (cardsHost && Array.isArray(superData.cards)) {
          cardsHost.innerHTML = superData.cards.map(cardHtml).join("");
        }
      }

      const helpData = res.fixedHelp;

      if (helpData) {
        const desktopIcon = rootH.querySelector("[data-help-icon]");
        const mobileIcon = rootH.querySelector("[data-help-icon-mobile]");
        const mobileBubbleText = rootH.querySelector("[data-help-mobile-bubble-text]");
        const mobileFloatText = rootH.querySelector("[data-help-mobile-float-text]");
        const headerTitle = rootH.querySelector("[data-help-h-title]");
        const greeting = rootH.querySelector("[data-help-greeting]");
        const intro = rootH.querySelector("[data-help-intro]");
        const faqHost = rootH.querySelector("[data-help-faq]");
        const callLink = rootH.querySelector("[data-help-call]");
        const mobileLink = rootH.querySelector("[data-help-mobile-link]");

        if (desktopIcon) desktopIcon.src = helpData.icon || "";
        if (mobileIcon) mobileIcon.src = helpData.icon || "";

        if (mobileBubbleText) {
          mobileBubbleText.textContent =
            helpData.mobileFloatingText || "پشتیبانی آنلاین";
        }

        if (mobileFloatText) {
          mobileFloatText.textContent =
            helpData.mobileFloatingText || "پشتیبانی آنلاین";
        }

        if (headerTitle) {
          headerTitle.textContent = helpData.headerTitle || "پشتیبانی آنلاین";
        }

        if (greeting) {
          greeting.textContent = helpData.greeting || "سلام 👋👋";
        }

        if (intro) {
          intro.textContent = helpData.intro || "";
        }

        if (faqHost && Array.isArray(helpData.faq)) {
          faqHost.innerHTML = helpData.faq
            .map((item) => faqItemHtml(item.question, item.answer))
            .join("");
        }

        if (helpData.callUs?.href) {
          if (callLink) callLink.href = helpData.callUs.href;
          if (mobileLink) mobileLink.href = helpData.callUs.href;
        }
      }
    })
    .catch((err) => console.log(err.message))
    .finally(initFixedWidgets);
}

fillFromApi();
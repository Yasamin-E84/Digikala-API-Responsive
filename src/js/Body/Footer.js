import { getDB } from "../api";

const STATIC_FOOTER = {
  backToTopLabel: "رفتن به بالا",
  logo: "./src/img/Header/logo.png",
  supportLine: "تلفن پشتیبانی: ۰۲۱-۴۳۳۰۰۰۱۰ - ۰۲۱-۹۱۰۰۰۱۰۰",
  addressLine: "تهران، میدان ونک، خیابان ملاصدرا",
  upButtonLabel: "بازگشت به بالا",

  mobileSupport: {
    title: "تماس با پشتیبانی",
    subtitle: "۷ روز هفته، ۲۴ ساعت",
    actionLabel: "تماس",
    href: "tel:02143300000",
    icon: "./src/img/footer/icon-support.svg",
  },

  mobileApp: {
    title: "اپلیکیشن دیجی‌کالا",
    subtitle: "تجربه خرید بهتر در موبایل",
    actionLabel: "دانلود",
    href: "#app",
    icon: "./src/img/footer/icon-digiapp.svg",
  },
};

function accChevron() {
  return `
    <img 
      src="./src/img/footer/chevron-down.svg" 
      alt="" 
      class="footer-acc-chevron w-5 h-5 opacity-60 shrink-0 transition-transform duration-200" 
    />
  `;
}

async function Footer() {
  const root = document.getElementById("site-footer");
  if (!root) return;

  let f = {};

  try {
    const res = await getDB();
    f = res.footer || {};
  } catch (e) {
    console.log(e.message);
    return;
  }

  const topBadges = f.topBadges || [];
  const linkColumns = f.linkColumns || [];
  const social = f.social || [];
  const dl = f.downloadBanner || {};
  const br = f.bragging || { title: "", bodyHtml: "" };
  const trust = f.trustStrip || [];
  const perks = f.perks || [];
  const partners = f.partners || { title: "شرکای تجاری", logos: [] };

  const sp = STATIC_FOOTER.mobileSupport;
  const app = STATIC_FOOTER.mobileApp;
  const navCols = linkColumns.slice(0, 3);

  const colHtml = (col, idx) => {
    const id = `footer-acc-nav-${idx}`;

    const links = (col.links || [])
      .map((l) => {
        return `
          <a 
            href="${l.href || "#"}" 
            class="font-Iran text-[12px] text-[#3f4064] block py-1.5"
          >
            ${l.text}
          </a>
        `;
      })
      .join("");

    return `
      <div class="border-t border-[#e0e0e2] ${idx === 0 ? "border-t-0" : ""}">
        <button 
          type="button" 
          class="footer-acc-head w-full flex justify-between items-center py-3.5 text-right" 
          data-acc-btn 
          aria-expanded="false" 
          data-acc-target="#${id}"
        >
          <span class="font-Iran text-[14px] font-bold text-[#1f1f1f]">
            ${col.title || ""}
          </span>
          ${accChevron()}
        </button>

        <div 
          class="footer-acc-body hidden border-t border-[#f0f0f1] bg-[#fafafa] px-4 py-2" 
          id="${id}"
        >
          ${links}
        </div>
      </div>
    `;
  };

  const partnersId = "footer-acc-partners";

  const partLogos = (partners.logos || [])
    .map((g) => {
      return `
        <a 
          href="${g.href || "#"}" 
          class="border border-[#e0e0e2] rounded p-2 flex items-center justify-center h-12 bg-white"
        >
          <img 
            src="${g.img}" 
            alt="" 
            class="max-h-8 max-w-full object-contain" 
            onerror="this.src='./src/img/footer/placeholder.svg'" 
          />
        </a>
      `;
    })
    .join("");

  const partnersBlock = `
    <div class="border-t border-[#e0e0e2]">
      <button 
        type="button" 
        class="footer-acc-head w-full flex justify-between items-center py-3.5 text-right" 
        data-acc-btn 
        aria-expanded="false" 
        data-acc-target="#${partnersId}"
      >
        <span class="font-Iran text-[14px] font-bold text-[#1f1f1f]">
          ${partners.title || "شرکای تجاری"}
        </span>
        ${accChevron()}
      </button>

      <div 
        class="footer-acc-body hidden border-t border-[#f0f0f1] bg-[#fafafa] px-4 py-3" 
        id="${partnersId}"
      >
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
          ${partLogos}
        </div>
      </div>
    </div>
  `;

  const socialRow = social
    .map((s) => {
      return `
        <a href="${s.href || "#"}" class="inline-flex">
          <img 
            src="${s.img}" 
            alt="" 
            class="w-8 h-8 object-contain" 
            onerror="this.src='./src/img/footer/placeholder.svg'" 
          />
        </a>
      `;
    })
    .join("");

  const lastCol = linkColumns.find((c) => c.isNewsletter);

  const deskLastUnit = lastCol
    ? `
      <div class="extra-center-last-unit flex flex-col w-[85%] max-w-md gap-0">
        <p class="font-Iran text-[16px] mb-2 text-[#3f4064]">
          ${lastCol.title || ""}
        </p>

        <form class="w-full" onsubmit="return false">
          <div class="flex rounded-lg overflow-hidden bg-[#f0f0f1] p-0.5 gap-0.5 w-full h-[50px] max-w-sm">
            <input 
              type="email" 
              readonly 
              class="font-Iran flex-1 h-full px-2 text-right text-sm bg-transparent border-none outline-none" 
              placeholder="${lastCol.newsletterPlaceholder || "ایمیل"}" 
              value="" 
            />
            <button 
              type="button" 
              class="font-Iran w-[75px] h-full rounded-md bg-[#e0e0e2] text-white text-sm"
            >
              ثبت
            </button>
          </div>
        </form>

        <div class="footer-social-row flex items-center justify-start gap-8 my-4 flex-wrap">
          ${socialRow}
        </div>
      </div>
    `
    : `
      <div class="footer-social-row flex items-center justify-start gap-6">
        ${socialRow}
      </div>
    `;

  const deskLinkGrid = linkColumns
    .filter((c) => !c.isNewsletter)
    .map((col) => {
      const lnk = (col.links || [])
        .map((l) => {
          return `
            <a 
              href="${l.href || "#"}" 
              class="font-Iran text-[12px] text-[#b3a69c] block my-2.5 first:mt-0"
            >
              ${l.text}
            </a>
          `;
        })
        .join("");

      return `
        <div>
          <p class="font-Iran text-[16px]">${col.title || ""}</p>
          <div class="mt-0">${lnk}</div>
        </div>
      `;
    })
    .join("");

  const storeLinks = (dl.stores || [])
    .map((s) => {
      return `
        <a href="${s.href || "#"}" class="shrink-0">
          <img 
            src="${s.img}" 
            alt="" 
            class="h-11 w-auto max-w-[140px] object-contain" 
            onerror="this.src='./src/img/footer/placeholder.svg'" 
          />
        </a>
      `;
    })
    .join("");

  const moreStore = dl.moreStore
    ? `
      <div class="bg-white rounded-lg p-0 shrink-0">
        <a href="${dl.moreStore.href || "#"}">
          <img 
            src="${dl.moreStore.img}" 
            alt="" 
            class="h-11 w-11 object-contain" 
            onerror="this.src='./src/img/footer/placeholder.svg'" 
          />
        </a>
      </div>
    `
    : "";

  const trustHtml = trust
    .map((t) => {
      return `
        <a 
          href="${t.href || "#"}" 
          class="bragging-badge-item border border-[#e0e0e0] rounded p-2 flex items-center justify-center"
        >
          <img 
            src="${t.img}" 
            alt="" 
            class="w-16 h-16 object-contain" 
            onerror="this.src='./src/img/footer/placeholder.svg'" 
          />
        </a>
      `;
    })
    .join("");

  const badgeRow = topBadges
    .map((b) => {
      return `
        <div class="footer-badges-center-item flex-1 min-w-0">
          <a href="#" class="flex flex-col items-center justify-center gap-1.5 w-full h-full p-1">
            <div class="item-top min-h-16 flex items-center">
              <img 
                src="${b.img}" 
                alt="" 
                class="max-w-[90%] h-auto object-contain mx-auto" 
                onerror="this.src='./src/img/footer/placeholder.svg'" 
              />
            </div>
            <p class="item-bottom text-center font-Iran text-[12px] text-[#2b2b2b] line-clamp-2">
              ${b.text || ""}
            </p>
          </a>
        </div>
      `;
    })
    .join("");

  const perksHtml = perks
    .map((p) => {
      return `
        <a 
          href="${p.href || "#"}" 
          class="flex h-20 items-center justify-center bg-white p-1"
        >
          <img 
            src="${p.img}" 
            alt="" 
            class="h-auto max-h-12 w-[60%] max-w-[100px] object-contain" 
            onerror="this.src='./src/img/footer/placeholder.svg'" 
          />
        </a>
      `;
    })
    .join("");

  root.innerHTML = `
    <div class="w-full bg-white text-right">

      <!-- mobile -->
      <div class="mobile:block desktop:hidden px-4">
        <div class="flex justify-center py-2">
          <button 
            type="button" 
            class="footer-back-top font-Iran inline-flex items-center justify-center gap-1.5 rounded-full bg-[#f0f0f1] px-4 py-2 text-[12px] text-[#3f4064]"
          >
            <span>${STATIC_FOOTER.backToTopLabel}</span>
            <img src="./src/img/footer/up.svg" alt="" class="w-4 h-4" />
          </button>
        </div>

        <div class="border-t border-[#e0e0e2]">
          <div class="flex justify-between items-center gap-3 py-3">
            <div class="flex items-center gap-2 min-w-0">
              <img 
                src="${sp.icon}" 
                alt="" 
                class="w-10 h-10 shrink-0 rounded-full" 
                onerror="this.src='./src/img/footer/placeholder.svg'" 
              />
              <div class="min-w-0 text-right">
                <p class="font-Iran text-[13px] font-bold text-[#1f1f1f]">${sp.title}</p>
                <p class="font-Iran text-[11px] text-[#6b7280]">${sp.subtitle}</p>
              </div>
            </div>

            <a 
              href="${sp.href}" 
              class="font-Iran shrink-0 rounded-full bg-[#f0f0f1] px-4 py-1.5 text-[12px] text-[#3f4064]"
            >
              ${sp.actionLabel}
            </a>
          </div>
        </div>

        <div class="border-t border-[#e0e0e2]">
          <div class="flex justify-between items-center gap-3 py-3">
            <div class="flex items-center gap-2 min-w-0">
              <img 
                src="${app.icon}" 
                alt="" 
                class="w-10 h-10 shrink-0 rounded-full" 
                onerror="this.src='./src/img/footer/placeholder.svg'" 
              />
              <div class="min-w-0 text-right">
                <p class="font-Iran text-[13px] font-bold text-[#1f1f1f]">${app.title}</p>
                <p class="font-Iran text-[11px] text-[#6b7280]">${app.subtitle}</p>
              </div>
            </div>

            <a 
              href="${app.href}" 
              class="font-Iran shrink-0 rounded-full bg-[#f0f0f1] px-4 py-1.5 text-[12px] text-[#3f4064]"
            >
              ${app.actionLabel}
            </a>
          </div>
        </div>

        <div class="border-t border-[#e0e0e2]">
          ${navCols.map((c, i) => colHtml(c, i)).join("")}
          ${partnersBlock}
        </div>

        <div class="mt-1 border-t border-[#e0e0e2] pt-4">
          <h2 class="font-Iran text-[16px] font-bold text-[#1f1f1f] mb-2 pr-0">
            ${br.title || ""}
          </h2>

          <div class="footer-bragging-box relative" id="bragging-wrap-m" data-bragging-wrap>
            <div
              class="bragging-prose text-[#717171] text-sm leading-[1.8] text-right pr-0 overflow-hidden transition-[max-height] duration-300 max-h-[3.6em] [&_p]:mb-2.5 [&_a]:text-[#007bff]"
              id="bragging-text-m"
              data-bragging-text
            >
              ${br.bodyHtml || ""}
            </div>

            <div 
              class="bragging-fade pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white from-40% to-transparent" 
              id="bragging-fade-m" 
              data-bragging-fade 
              aria-hidden="true"
            ></div>
          </div>

          <button 
            type="button" 
            class="bragging-more font-Iran -mt-0.5 flex items-center gap-1 text-[14px] text-[#2bb3c5] pt-1" 
            data-bragging-more 
            data-bragging-kind="m"
          >
            <span>مشاهده بیشتر</span>
            <img src="./src/img/footer/chevron-left.svg" alt="" class="w-4 h-4" />
          </button>
        </div>

        <p class="font-Iran text-center text-[12px] text-gray-500 py-5 border-t border-[#e0e0e2] mt-2">
          ${f.copyright || ""}
        </p>
      </div>

      <!-- desktop -->
      <div class="mobile:hidden desktop:block">
        <div class="mt-6 border-t border-gray-200 pt-6 w-full max-w-full mx-auto px-4">
          <div class="flex items-center justify-between flex-wrap gap-4 max-w-7xl mx-auto">
            <div>
              <div class="mb-1">
                <a href="index.html">
                  <img 
                    src="${STATIC_FOOTER.logo}" 
                    alt="" 
                    class="h-[30px] w-[195px] object-contain object-right" 
                    onerror="this.src='./src/img/footer/placeholder.svg'" 
                  />
                </a>
              </div>

              <div class="font-Iran text-[12px] text-[#404040] space-y-1.5">
                <p class="m-0">${STATIC_FOOTER.supportLine}</p>
                <p class="m-0">${STATIC_FOOTER.addressLine}</p>
              </div>
            </div>

            <button 
              type="button" 
              class="footer-back-top font-Iran flex h-10 w-[137px] items-center justify-center gap-1 rounded-lg border border-gray-300 text-[#a4a6ab] text-[12px]"
            >
              <img src="./src/img/footer/up.svg" alt="" class="w-3.5 h-3.5" />
              <span class="m-0">${STATIC_FOOTER.upButtonLabel}</span>
            </button>
          </div>
        </div>

        <div class="footer-badges w-full py-2">
          <div class="footer-badges-center flex max-w-7xl mx-auto justify-center items-stretch min-h-28">
            ${badgeRow}
          </div>
        </div>

        <div class="extra w-full min-h-0">
          <div class="extra-center max-w-7xl mx-auto flex flex-wrap justify-between gap-8 py-2 px-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 w-full min-w-0">
              ${deskLinkGrid}
            </div>
            ${deskLastUnit}
          </div>
        </div>

        <div class="download w-full max-w-7xl mx-auto px-4 my-2">
          <div class="download-center rounded-2xl bg-[#3c4b6d] flex flex-wrap items-center justify-between gap-4 p-4">
            <div class="flex items-center gap-4 min-w-0">
              <img 
                src="${dl.appIcon || ""}" 
                alt="" 
                class="h-11 w-11 object-contain shrink-0" 
                onerror="this.src='./src/img/footer/placeholder.svg'" 
              />
              <p class="font-Iran text-base md:text-lg text-white m-0 break-words">
                ${dl.title || ""}
              </p>
            </div>

            <div class="flex flex-wrap items-center justify-end gap-2">
              ${storeLinks}
              ${moreStore}
            </div>
          </div>
        </div>

        <div class="bragging border-t border-gray-200 w-full max-w-7xl mx-auto px-4 pt-6">
          <h3 class="font-Iran text-lg text-[#5b5b5b] font-bold m-0 mb-2 text-right">
            ${br.title || ""}
          </h3>

          <div class="bragging-text-wrap w-full relative mb-2" id="bragging-wrap-d" data-bragging-wrap-d>
            <div
              class="bragging-prose bragging-prose--desk text-[#717171] text-sm leading-[1.8] text-right overflow-hidden transition-[max-height] duration-300 max-h-[3.6em] pr-2 [&_p]:mb-2.5"
              id="bragging-text-d"
              data-bragging-text-d
            >
              ${br.bodyHtml || ""}
            </div>

            <div 
              class="bragging-fade-d pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white from-40% to-transparent" 
              id="bragging-fade-d" 
              data-bragging-fade-d
            ></div>
          </div>

          <button 
            type="button" 
            class="bragging-more-d font-Iran mb-3 inline-flex items-center gap-1 text-[14px] text-[#30c5d7]" 
            data-bragging-more-d 
            data-bragging-kind="d"
          >
            <span>مشاهده بیشتر</span>
            <img src="./src/img/blueleftsmall.svg" alt="" class="w-4 h-4" />
          </button>

          <div class="bragging-badges flex flex-wrap items-center justify-end gap-2 w-full my-2">
            ${trustHtml}
          </div>

          <p class="copyright-center text-center font-Iran text-[12px] text-gray-500 py-5 border-t border-gray-200 m-0">
            ${f.copyright || ""}
          </p>
        </div>
      </div>

      <div class="w-full bg-[#e4e4e6] p-px">
        <div class="perks mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          ${perksHtml}
        </div>
      </div>
    </div>
  `;

  root.addEventListener("click", (e) => {
    if (e.target.closest(".footer-back-top")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const accBtn = e.target.closest("[data-acc-btn]");

    if (accBtn) {
      const targetSel = accBtn.getAttribute("data-acc-target");
      if (!targetSel) return;

      const panel = root.querySelector(targetSel);
      if (!panel) return;

      const isOpen = !panel.classList.contains("hidden");
      const chev = accBtn.querySelector(".footer-acc-chevron");

      if (isOpen) {
        panel.classList.add("hidden");
        accBtn.setAttribute("aria-expanded", "false");
        if (chev) chev.classList.remove("rotate-180");
      } else {
        panel.classList.remove("hidden");
        accBtn.setAttribute("aria-expanded", "true");
        if (chev) chev.classList.add("rotate-180");
      }
    }

    const moreM = e.target.closest("[data-bragging-more][data-bragging-kind='m']");

    if (moreM) {
      const t = root.querySelector("#bragging-text-m");
      const fa = root.querySelector("#bragging-fade-m");

      if (t) {
        t.classList.remove("max-h-[3.6em]");
        t.classList.add("max-h-none");
      }

      if (fa) fa.classList.add("hidden");
      moreM.classList.add("hidden");
    }

    if (e.target.closest("[data-bragging-more-d]")) {
      const t = root.querySelector("#bragging-text-d");
      const fa = root.querySelector("#bragging-fade-d");

      if (t) {
        t.classList.remove("max-h-[3.6em]");
        t.classList.add("max-h-none");
      }

      if (fa) fa.classList.add("hidden");
      root.querySelector("[data-bragging-more-d]")?.classList.add("hidden");
    }
  });
}

export default Footer;
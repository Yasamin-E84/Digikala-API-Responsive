function Footer() {
  const root = document.getElementById("site-footer");
  if (!root) return;

  root.addEventListener("click", (e) => {
    if (e.target.closest(".footer-back-top")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const accBtn = e.target.closest("[data-acc-btn]");

    if (accBtn) {
      const targetSel = accBtn.getAttribute("data-acc-target");
      const panel = root.querySelector(targetSel);
      const icon = accBtn.querySelector(".footer-acc-chevron");

      if (panel) {
        const isOpen = !panel.classList.contains("hidden");

        panel.classList.toggle("hidden", isOpen);
        accBtn.setAttribute("aria-expanded", String(!isOpen));
        icon?.classList.toggle("rotate-180", !isOpen);
      }
    }

    if (e.target.closest("[data-bragging-more-m]")) {
      const text = root.querySelector("#bragging-text-m");
      const fade = root.querySelector("#bragging-fade-m");
      const btn = root.querySelector("[data-bragging-more-m]");
      const btnText = btn?.querySelector("span");
      const btnIcon = btn?.querySelector("img");

      const isOpen = text?.classList.contains("max-h-none");

      if (isOpen) {
        text.classList.remove("max-h-none");
        text.classList.add("max-h-[3.6em]");
        fade?.classList.remove("hidden");
        if (btnText) btnText.textContent = "مشاهده بیشتر";
        btnIcon?.classList.remove("rotate-180");
      } else {
        text?.classList.remove("max-h-[3.6em]");
        text?.classList.add("max-h-none");
        fade?.classList.add("hidden");
        if (btnText) btnText.textContent = "مشاهده کمتر";
        btnIcon?.classList.add("rotate-180");
      }
    }

    if (e.target.closest("[data-bragging-more-d]")) {
      const text = root.querySelector("#bragging-text-d");
      const fade = root.querySelector("#bragging-fade-d");
      const btn = root.querySelector("[data-bragging-more-d]");
      const btnText = btn?.querySelector("span");
      const btnIcon = btn?.querySelector("img");

      const isOpen = text?.classList.contains("max-h-none");

      if (isOpen) {
        text.classList.remove("max-h-none");
        text.classList.add("max-h-[3.6em]");
        fade?.classList.remove("hidden");
        if (btnText) btnText.textContent = "مشاهده بیشتر";
        btnIcon?.classList.remove("rotate-180");
      } else {
        text?.classList.remove("max-h-[3.6em]");
        text?.classList.add("max-h-none");
        fade?.classList.add("hidden");
        if (btnText) btnText.textContent = "مشاهده کمتر";
        btnIcon?.classList.add("rotate-180");
      }
    }
  });
}

export default Footer;
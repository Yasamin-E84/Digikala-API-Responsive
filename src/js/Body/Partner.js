import { getDB } from "../api";

async function Partner() {
    try {
        const res = await getDB();
        const partner = res.partner.map((item) => {
            return `
                <div class="${item.mobile ? "mobile:block desktop:block" : "mobile:hidden desktop:block"} desktop:rounded-2xl mobile:rounded-lg overflow-hidden cursor-pointer ${item.mobile ? "mobile:w-[95%] desktop:w-[49%]" :"mobile:w-[95%] desktop:w-[49%]"} " title="${item.title}">
                    <img src="${item.img}" alt="${item.title}" class="w-full object-cover">
                </div>
            `;
        });
        document.querySelector(".partnership").innerHTML = partner.join("");
    } catch (error) {
        console.log(error.message);
    }
    try {
        const res = await getDB();
        const partner2 = res.partner2.map((item) => {
            return `
                <div class="rounded-2xl overflow-hidden cursor-pointer w-[49%]" title="${item.title}">
                    <img src="${item.img}" alt="${item.title}" class="w-full object-cover">
                </div>
            `;
        });
        document.querySelector(".partnership2").innerHTML = partner2.join("");
    } catch (error) {
        console.log(error.message);
    }
    try {
        let res = await getDB();
        let partnerMobile1 = res.partner.map((item) => {
          return `
            <div class="w-[95%] border border-[#eaeaec] rounded-lg overflow-hidden cursor-pointer ${item.id == 2 ?"block":"hidden"}">
              <img src="${item.img}" alt="" title="${item.title}" class="w-full h-full object-cover" />
            </div>
          `;
        });
        document.querySelector(".partner-mobile-1").innerHTML = partnerMobile1.join("");
      } catch (error) {
        console.log(error.message);
        
      }
}
export default Partner;
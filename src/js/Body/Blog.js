import { getDB } from "../api.js";
const res = await getDB();

async function Blog() {
  try {
    const data = res.blog || [];
    const blogItems = data.map((item) => {
      return `
                <div class="flex-col gap-2 rounded-xl overflow-hidden border border-[#eaeaec] desktop:h-75 mobile:h-60 ${item.mobile ? "mobile:block" :"mobile:hidden desktop:block"}">
                <img src="${item.img}" alt="${item.title}" class="w-full object-cover">
                <div class="px-4 py-2">
                <span class="font-Iran desktop:text-[13px] mobile:text-[13px]">${item.title}</span></div>
            </div>
            `;
    });
    document.querySelector(".blog-items").innerHTML = blogItems.join("");
  } catch (error) {
    console.log(error.message);
  }
}
export default Blog;

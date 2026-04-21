async function Services() {
  try {
    let data = await fetch("http://localhost:5173/db.json");
    let res = await data.json();

    const services = res.services.map((item) => {
      return `
        <div class="services-items flex flex-col py-2 box-border rounded-lg bg-white border border-[#d7d7d7] justify-between items-center w-1/6 h-18">
            <img src="${item.Simg}" alt="" class="w-10">
            <span class="font-Iran text-[12px] text-black font-normal text-center">${item.Stitle}</span>
          </div>`;
    });

    document.querySelector(".services").innerHTML = services.join(" ");

  } catch (error) {
    console.error(error.message);
  }
}
Services();
export default Services;

async function Setting() {
  let coverBg = document.querySelector(".cover-bg");
  let itemCat = document.querySelector(".items-categories");
  itemCat.addEventListener("mouseenter", function(){
    coverBg.classList.add("!block");
  })
  itemCat.addEventListener("mouseleave", function(){
    coverBg.classList.remove("!block");
  })
}
export default Setting;

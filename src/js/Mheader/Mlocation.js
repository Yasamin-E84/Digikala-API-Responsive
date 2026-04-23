async function Mlocation() {
    const MLocation=document.querySelector(".MLocation");
    const locModal=document.querySelector(".loc-modal");
    const bgCover=document.querySelector(".cover-bg-loc-full");
    MLocation.addEventListener("click",()=>{
        locModal.classList.remove("hidden");
        bgCover.classList.remove("hidden");
    });
}
export default Mlocation;
async function Mlocation() {
    const MLocation=document.querySelector(".MLocation");
    const locModal=document.querySelector(".loc-modal");
    MLocation.addEventListener("click",()=>{
        locModal.classList.remove("hidden");
    });
}
export default Mlocation;
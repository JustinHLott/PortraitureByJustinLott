import {loadGallery} from "./functions.js";

document.addEventListener("DOMContentLoaded",  () => {
    // load gallery
    loadGallery({
        folder: "pics/AmyGroom",
        images: imagesAmy.map(src => src.split('/').pop()),
        containerId: "gallery",
        group: "amy"
        });
});

const imagesAmy = [
"father of groom helps.png",
"father of groom helps2.png",
"groom adjusts cuff links.png"


];
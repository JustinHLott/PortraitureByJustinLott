import {loadGallery} from "./functions.js";

document.addEventListener("DOMContentLoaded",  () => {
    // load gallery
    loadGallery({
        folder: "pics/Weddings",
        images: imagesUsed.map(src => src.split('/').pop()),
        containerId: "gallery",
        group: "amy"
        });
});

const imagesUsed = [
"boquet focus blurry dip.png",
"boquet toss.jpg",
"bouquet toss2.jpg",
"Bride & groom touch foreheads.jpg",
"Bride behind groom's shoulder.png",
"Bride holds groom's face.png",
"Bride in front touching grooms chin.png",
"closeup couple & rings.png",
"cut cake 2 strobes.png",
"Detail invitation.jpg",
"detail ring1.jpg",
"detail ring2.jpg",
"detail ring4.jpg",
"kissing through ring.png",
"Nose above lips.jpg",
"outdoor natural light1.png",
"outdoor natural light2.png",
"outdoor natural light3.png",
"Outdoor strobe.png",
"shutter drag.png",
"side view half.png",
"Side view.png",
"veil howto1.png"

];
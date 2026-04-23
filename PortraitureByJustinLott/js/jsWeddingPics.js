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
"Bride & groom touch foreheads.jpg",
"Bride behind groom's shoulder.png",
"Bride holds groom's face.png",
"Bride in front touching grooms chin.png",
"closeup couple & rings.png",
"Detail invitation.jpg",
"detail ring1.jpg",
"detail ring2.jpg",
"detail ring4.jpg",
"kissing through ring.png",
"Nose above lips.jpg",
"side view half.png",
"Side view.png"
];
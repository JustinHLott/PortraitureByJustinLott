import {loadGallery} from "./functions.js";

document.addEventListener("DOMContentLoaded",  () => {
    // load gallery
    loadGallery({
        folder: "pics/AmyKids",
        images: imagesAmy.map(src => src.split('/').pop()),
        containerId: "gallery",
        group: "amy"
        });
});

const imagesAmy = [
"back of daughters dress.png",
"daughter and bride in mommy's shoes.png",
"daughter holds dad's hand backwards.png",
"daughter in bride's shoes.png",
"Ew and kiss.png",
"family pose.png",
"hush and kiss.png",
"pics of kids couple kissing in background.png",
"Shoes close up kissing couple in background.png"
];
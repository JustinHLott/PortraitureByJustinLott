import {loadGallery} from "./functions.js";

document.addEventListener("DOMContentLoaded",  () => {
    // load gallery
    loadGallery({
        folder: "pics/Amy",
        images: imagesAmy.map(src => src.split('/').pop()),
        containerId: "gallery",
        group: "amy"
        });
});

const imagesAmy = [
"back of couple sitting in pew.png",
"back of hands forming a heart.png",
"Behind bride and groom kissing at reception.png",
"boquest close up couple in background.png",
"bride & groom backs holding hands.png",
"Bride & groom bride looks up at camera man.png",
"Bride & groom hold hands against wall.png",
"Bride & groom hold hands around tree.png",
"Bride & groom hold picture frame.png",
"bride & groom looking up at camera man in tree.png",
"Bride & groom sitting in back of car.png",
"Bride & groom sitting on park bench under tree.png",
"Bride & groom through the branches.png",
"Bride & groom with both parents.png",
"bride & groom with parents.png",
"Bride holds boquest looks out of window.png",
"Bride holds wedding shoes.png",
"Bride hugs sitting groom from behind.png",
"Bride lens into groom.png",
"Bride shows ring on groom's chest.png",
"close up groom kisses bride's ring hand.png",
"faces smiling through heart shaped fingers.png",
"Flower girls frame mom and dad kissing.png",
"groom holds bride's face nose to nose.png",
"Groom holds sign That's my wife.png",
"groom hugs bride from behind backlit.png",
"groom kisses bride's forehead back lit by sun.png",
"groom kisses ring hand.png",
"groom twirls bride backlit.png",
"groom twirls bride.png",
"Grooms back bride hugs showing hands.png",
"rings groom kisses ring hand2.png",
"rings intertwined pinkies showing rings closeup.png",
"side view sillouette.png",
"veil pinned on my mother.png"

];
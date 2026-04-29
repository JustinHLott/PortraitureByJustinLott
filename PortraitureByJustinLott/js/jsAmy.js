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
"bride & groom backs holding hands.png",
"Bride & groom hold hands against wall.png",
"Bride & groom hold hands around tree.png",
"Bride & groom sitting on park bench under tree.png",
"Bride & groom through the branches.png",
"Bride leans into groom.png",
"groom holds bride's face nose to nose.png",
"groom hugs bride from behind backlit.png",
"groom kisses bride's forehead back lit by sun.png",
"groom twirls bride backlit.png",
"groom twirls bride.png",
"groom with bride boquet in foreground.png",
"rBride shows ring on groom's chest.png",
"rclose up (not) groom kisses bride's ring hand.png",
"rclose up groom kisses bride's ring hand.png",
"rclose up groom kisses bride's ring hand2.png",
"rGrooms back bride hugs showing hands.png",
"rings intertwined pinkies showing rings closeup.png",
"wback of hands forming a heart.png",
"wBride & groom with both parents.png",
"wfaces smiling through heart shaped fingers.png",
"xbride & groom looking up at camera man in tree.png",
"xBride & groom looking up bride looks up at camera man.png",
"xBride hugs sitting groom from behind.png",
"zback of couple sitting in pew.png",
"zBehind bride and groom kissing at reception.png",
"zBride & groom sitting in back of car.png",
"zbride & groom with parents.png",
"zBride holds boquest looks out of window.png",
"zBride holds wedding shoes.png",
"zGroom holds sign That's my wife.png",
"zside view sillouette.png",
"zveil pinned on my mother.png"

];
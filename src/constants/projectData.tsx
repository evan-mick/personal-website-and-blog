import photo from "public/header.jpg";
import { ProjectLinkHolder } from "./types";
import { Project } from "./Project";


import tetronScrn1 from "public/games/Tetron/screenshot1.jpg";
import tetronScrn2 from "public/games/Tetron/screenshot2.png";
import tetronScrn3 from "public/games/Tetron/screenshot3.png";
import tetronScrn4 from "public/games/Tetron/screenshot4.png";


/*

    BRGD games
    - tell tale heart
    - US(FPS)
    - Boogie Brawl
    - Ascension
    Gamejam games
    - note in the wind
    - atlas swings
    - skippy
    - Benny 
    - Metaverse Campfire VR 
    The gun knight
    Wolfenstein Engine 
    CAB 

    In progress
    - ASOP 
    - Pavlov Zombies Map
    - BrunoVentures 
    - Social Media App 

*/



export const TetronProj : Project = {
    name: "Tetron",
    description: "Roguelikelike top down twin stick shooter",
    tools : "Gamemaker Studio 2, Aesprite, Steam SDK",
    images : [
        
        tetronScrn2,
        tetronScrn3,
        tetronScrn4,
    ], 
    link : "https://store.steampowered.com/app/1348960/Tetron/",
}

export const TetronProjLink : ProjectLinkHolder = {
    linkTo: "/projects/tetron", 
    photoLink: photo, 
    desc: "Tetron is a twin stick action roguelite on Steam",
}

export const NameToProject : { [key: string]: Project }  = {
    tetron : TetronProj,
}

export const FinishedProjectsLinks : ProjectLinkHolder[] = [
    TetronProjLink,

]

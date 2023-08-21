import photo from "public/header.jpg";
import { ProjectLinkHolder, Project } from "./types";

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
    Taxi 

    In progress
    - ASOP 
    - Pavlov Zombies Map
    - BrunoVentures 
    - Social Media App 

*/


// Benny
import bennyMain from "public/games/Benny/main.png"
import bennyScreenshot from "public/games/Benny/screenshot1.png"

export const BennyProj : Project = {
    name: "Benny",
    description: "",
    tools : "Unity, C#, Git, and Logic Pro",
    images : [
        bennyScreenshot
    ], 
    link : "https://polymars.itch.io/benny",
}

export const BennyProjLink : ProjectLinkHolder = {
    linkTo: "/projects/benny", 
    photoLink: bennyMain, 
    desc: "Benny is a murder mystery game where you uncover your husband's murderer",
}

// Skippy
import skippyMain from "public/games/Skippy/main.png"
import skippyScreenshot from "public/games/Skippy/screenshot1.png"

export const SkippyProj : Project = {
    name: "Skippy",
    description: "",
    tools : "Unity, C#, and Git",
    images : [
        skippyScreenshot
    ], 
    link : "https://dexmakesgames.itch.io/skippy",
}

export const SkippyProjLink : ProjectLinkHolder = {
    linkTo: "/projects/skippy", 
    photoLink: skippyMain, 
    desc: "Skippy is a full motion video based game where you take care of an alien creature",
}

// Ascension
import ascensionMain from "public/games/BRGD/Ascension/main.png"
import ascensionScreenshot from "public/games/BRGD/Ascension/screenshot1.png"

export const AscensionProj : Project = {
    name: "Ascension",
    description: "",
    tools : "Unity, C#, and Git",
    images : [
        ascensionScreenshot
    ], 
    link : "https://brownrisdgames.itch.io/ascension",
}

export const AscensionProjLink : ProjectLinkHolder = {
    linkTo: "/projects/ascension", 
    photoLink: ascensionMain, 
    desc: "Ascension is a zero gravity first person shooter",
}

// USFPS
import usfpsMain from "public/games/BRGD/USFPS/main.png"
import usfpsScreenshot from "public/games/BRGD/USFPS/screenshot1.png"

export const USFPSProj : Project = {
    name: "US(F)PS",
    description: "",
    tools : "Unreal, Blueprints, and Git",
    images : [
        usfpsScreenshot
    ], 
    link : "https://brownrisdgames.itch.io/usfps",
}

export const USFPSProjLink : ProjectLinkHolder = {
    linkTo: "/projects/usfps", 
    photoLink: usfpsMain, 
    desc: "Deliver packages and explode oncoming traffic in US(F)PS",
}

// Boogie Brawl
import bbMain from "public/games/BRGD/BoogieBrawl/main.png"
import bbScreenshot from "public/games/BRGD/BoogieBrawl/screenshot1.png"

export const BBProj : Project = {
    name: "Boogie Brawl",
    description: "",
    tools : "Unity, C#, and Git",
    images : [
        bbScreenshot
    ], 
    link : "https://brownrisdgames.itch.io/boogie-brawl",
}

export const BBProjLink : ProjectLinkHolder = {
    linkTo: "/projects/boogiebrawl", 
    photoLink: bbMain, 
    desc: "Boogie Brawl: a 2 player dance battle fighting game",
}

// Tell Tale Heart
import tthMain from "public/games/BRGD/TellTaleHeart/main.jpeg"
import tthScreenshot from "public/games/BRGD/TellTaleHeart/screenshot2.jpeg"

export const TTHProj : Project = {
    name: "Tell Tale Heart",
    description: "Stealth horror game",
    tools : "Unity, C#, and Git",
    images : [
        tthScreenshot
    ], 
    link : "https://brownrisdgames.itch.io/tell-tale-heart",
}

export const TTHProjLink : ProjectLinkHolder = {
    linkTo: "/projects/telltaleheart", 
    photoLink: tthMain, 
    desc: "Tell Tale Heart is a first person stealth horror game",
}



// A note in the wind
import noteMain from "public/games/NoteInTheWind/main.png"
import noteScreenshot from "public/games/NoteInTheWind/screenshot2.png"

export const NoteProj : Project = {
    name: "A Note in the Wind",
    description: "Made for the annual Gamemaker's toolkit gamejam. " +
    "We placed in the top 10% (ranked 552 out of 6818 entries). " +
    "In the game, you control the wind guiding a paper airplane while avoiding obstacles. " +
    "I was responsible for programming and design on this project.",
    tools : "Unity, C#, and Git",
    images : [
        noteScreenshot
    ], 
    link : "https://elsira.itch.io/a-note-in-the-wind",
}

export const NoteProjLink : ProjectLinkHolder = {
    linkTo: "/projects/noteinthewind", 
    photoLink: noteMain, 
    desc: "In a Note in the Wind, you control the wind to guide a paper airplane",
}

// ATLAS SWINGS
import asMain from "public/games/AtlasSwings/main.png";
import asScreen1 from "public/games/AtlasSwings/screenshot1.png";

export const AtlasSwingsProj : Project = {
    name: "Atlas Swings",
    description: "",
    tools : "Unity, C#, Git, Geopipe NY assets",
    images : [
        asScreen1
    ], 
    link : "https://cindy-lithium.itch.io/atlas-swings",
}

export const AtlasSwingsProjLink : ProjectLinkHolder = {
    linkTo: "/projects/atlasswings", 
    photoLink: asMain, 
    desc: "Winner of the first Geopipe Gamejam, Atlas Swings is a destructive golf simulator set in New York",
}

// TETRON 
import tetronScrn1 from "public/games/Tetron/screenshot1.jpg";
import tetronScrn2 from "public/games/Tetron/screenshot2.png";
import tetronScrn3 from "public/games/Tetron/screenshot3.png";
import tetronScrn4 from "public/games/Tetron/screenshot4.png";

export const TetronProj : Project = {
    name: "Tetron",
    description: "Tetron top down twin stick shooter. " +
    "It is one of the projects I am most proud of because I designed and created every single aspect of it. " +
    "Every line of code, art asset, and sound was created by me. " +
    "If you are a journalist or employeer that wants access to the game, contact me and I am happy to send a Steam key free of charge.",
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
    atlasswings : AtlasSwingsProj,
    noteinthewind : NoteProj,
    telltaleheart : TTHProj,
    boogiebrawl : BBProj,
    ascension : AscensionProj,
    usfps : USFPSProj,
    benny : BennyProj,
    skippy : SkippyProj
}

export const FinishedProjectsLinks : ProjectLinkHolder[] = [
    AtlasSwingsProjLink, 
    USFPSProjLink,
    NoteProjLink,
    TetronProjLink,
    TTHProjLink,
    BBProjLink,
    AscensionProjLink,
    BennyProjLink,
    SkippyProjLink,
]

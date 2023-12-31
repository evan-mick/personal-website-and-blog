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
// import bennyMain from "public/games/Benny/main.png"
// import bennyScreenshot from "public/games/Benny/screenshot1.png"

export const BennyProj : Project = {
    name: "Benny",
    description: "I made this with a close game dev friend of mine from Brown for the week-long 2022 Brackey’s game jam (RIP Brackey’s). It is a dialogue-based detective game with a cool twist at the end. For it, I did design, sound, programming, and, for the first and only time in my life so far, writing (!). Every line of dialogue was written by yours truly, and I’ve gone back and played it and still been proud of it. I programmed the dialogue mechanics (which is the bulk of the game haha) and general game logic. I also made the music and sound effects. My friend made the art and assisted with programming. \n" + 
	"Looking back, I don’t think there is anything I would have done differently. The game was well received and still gets a surprising number of plays to this day (probably mostly because my friend happens to be an established game dev youtuber). The game ended up really polished and though simple it is an interesting experience.",
    tools : "Unity, C#, Git, and Logic Pro",
    images : [
        "/games/Benny/screenshot1.png"
        // bennyScreenshot
    ], 
    link : "https://polymars.itch.io/benny",
}

export const BennyProjLink : ProjectLinkHolder = {
    linkTo: "/projects/benny", 
    photoLink: "/games/Benny/main.png", 
    desc: "Benny is a murder mystery game where you uncover your husband's murderer",
}

// Origami Bird Battle
// import birdbattleScreenshot from "public/games/BirdBattle/birdbattlescreenshot.png"
// import birdbattleMain from "public/games/BirdBattle/birdbattlefront.png"

export const BirdBattleProj : Project = {
    name: "Origami Bird Battle",
    description: "Made with a (fluid) group of 20 people in the Brown RISD Game Developers," +
    "Origami Bird Battle is an intense, lighthearted, and fun 1v1 brawler." + 
    " We used Godot in this project, and I was one of the only people on the team who had used the engine" +
    " My primary responsibility for this project was to architect the project from a coding standpoint," +
    " delegate tasks between about 10 programmers (most of whom had never coded before), help them, and code parts of the project that needed extra support. "
    + " I had a lot of fun working on this, and it felt like the culmination of a lot of lessons learned from previous projects."
    + " In particular, retention. Nearly every programmer who was there at the beginning stayed in some capacity to the end," +
    " this is not a given for our club, and I partially attribute it to my work making sure newcomers felt guided throughout the process." +
    " If I could go back, I would do more to communicate better with the artists on our team and do more to ensure they know what to do as well.",
    tools : "Godot and Git",
    images : [
        "/games/BirdBattle/birdbattlescreenshot.png"
    ], 
    link : "https://brownrisdgames.itch.io/origami-bird-battle",
}

export const BirdBattleProjLink : ProjectLinkHolder = {
    linkTo: "/projects/origamibirdbattle", 
    photoLink: "/games/BirdBattle/birdbattlefront.png", 
    desc: "Origami Bird Battle is a 1v1 base building and fighting game",
}

// Skippy
// import skippyMain from "public/games/Skippy/main.png"
import skippyScreenshot from "public/games/Skippy/screenshot1.png"

export const SkippyProj : Project = {
    name: "Skippy",
    description: "Made for the Virtual Pet Jam in January 2022. The game is a full motion video-based interactive experience where you raise a pet alien. I did programming, sound, music, and minigame design for this project. It was the first time I edited video sounds directly with Logic which was fun. I created all the audio for the final cutscene, which I had never done. It got a lot of positive feedback and placed 11th out of 124 entries. \n" +
    "Looking back, I wish we had done more with the mini-games portion of the experience. I think some work could have been done to communicate it better and make them more interesting. They were also a little bit too difficult (we compensated by making only small portions required to be played at a time).",
    tools : "Unity, C#, and Git",
    images : [
        "/games/Skippy/screenshot1.png"
    ], 
    link : "https://dexmakesgames.itch.io/skippy",
}

export const SkippyProjLink : ProjectLinkHolder = {
    linkTo: "/projects/skippy", 
    photoLink: "/games/Skippy/main.png", 
    desc: "Skippy is a full motion video based game where you take care of an alien creature",
}

// Ascension
// import ascensionMain from "public/games/BRGD/Ascension/main.png"
// import ascensionScreenshot from "public/games/BRGD/Ascension/screenshot1.png"

export const AscensionProj : Project = {
    name: "Ascension",
    description: "This is another Brown RISD Game Developer’s project I worked on in Spring 2022. I did programming, sound, and level design for this project. It was one of the first finished 3D projects I made, and it was a lot of fun to work on. The main mechanic of it is the fact it's zero gravity, and you use the recoil of your gun to move and traverse through the world. I worked on level mechanics (that was designed to be accessible to designers) and movement mechanics. \n" +
    "If I could go back, I wish we improved the lighting. Many of the models look pretty good but the levels seem a bit lifeless. I also think we could have done more to communicate the main mechanics and make the UI look a little better. In general, I think more time should have been spent polishing it, but of course, there are only so many hours we have each semester. It is definitely an idea I would revisit again.",
    tools : "Unity, C#, and Git",
    images : [
        "/games/BRGD/Ascension/screenshot1.png"
    ], 
    link : "https://brownrisdgames.itch.io/ascension",
}

export const AscensionProjLink : ProjectLinkHolder = {
    linkTo: "/projects/ascension", 
    photoLink: "/games/BRGD/Ascension/main.png", 
    desc: "Ascension is a zero gravity first person shooter",
}

// USFPS
// import usfpsMain from "public/games/BRGD/USFPS/main.png"
// import usfpsScreenshot from "public/games/BRGD/USFPS/screenshot1.png"

export const USFPSProj : Project = {
    name: "US(F)PS",
    description: "US(F)PS was envisioned as a ‘merican delivery simulator. I worked on it in Brown RISD Game Developers from January 2023 to May 2023 on Saturdays. For the project, I did programming and some sound effects (the explosions, gunshots, UI sounds, etc. were me). \n" +
    "I also played a more pivotal programming role than I was used to as I was one of a small minority of people in the club who already had experience with Unreal. Teaching other students how to use Blueprints was certainly a challenge, but ultimately taught me a lot about leadership, especially in a programming context. I ended up having some involvement in nearly every mechanic as most of my job was helping other team members. That semester, we were also a smaller team than normal and had some issues with the art. Partially because it is a 3D game. It also taught me how to downsize and change paths accordingly. \n" +
    "If I were to go back, there are some design decisions that I wish we scrapped earlier, and I also wish we had thought more programmatically about what the game should look like earlier on. I think we didn’t have quite enough time to polish. Still, though, the project ended up being pretty fun, and I think we achieved our original goal.",
    tools : "Unreal, Blueprints, and Git",
    images : [
        "/games/BRGD/USFPS/screenshot1.png"
    ], 
    link : "https://brownrisdgames.itch.io/usfps",
}

export const USFPSProjLink : ProjectLinkHolder = {
    linkTo: "/projects/usfps", 
    photoLink: "/games/BRGD/USFPS/main.png", 
    desc: "Deliver packages and explode oncoming traffic in US(F)PS",
}

// Boogie Brawl
// import bbMain from "public/games/BRGD/BoogieBrawl/main.png"
// import bbScreenshot from "public/games/BRGD/BoogieBrawl/screenshot1.png"

export const BBProj : Project = {
    name: "Boogie Brawl",
    description: "The first game I ever made with the Brown RISD Game Developer’s Club. It is a rhythm-based, 2 player dance game where you attack and defend on the beat. I pitched the original idea: disco-themed Jo Jo’s Bizarre Adventure (I learned that the key to any design student’s heart is mentioning anime, even if you don’t watch it yourself). For the project, I was a programmer and designer. I programmed the rhythm backend (BPM stuff mainly) and battle mechanics. It was the first time I had worked with a larger team and with other artists. I had a lot of fun. \n" +
	"If I could go back, I think I would have added or changed some mechanics to make the whole thing a little more interesting. I also would have tried to polish it more. I remember the project getting to a somewhat stagnant point halfway through, and I think I’ve since learned more about what to do in that type of scenario. Overall though, I am incredibly happy with the outcome. ",
    tools : "Unity, C#, and Git",
    images : [
        "/games/BRGD/BoogieBrawl/screenshot1.png"

    ], 
    link : "https://brownrisdgames.itch.io/boogie-brawl",
}

export const BBProjLink : ProjectLinkHolder = {
    linkTo: "/projects/boogiebrawl", 
    photoLink: "/games/BRGD/BoogieBrawl/main.png", 
    desc: "Boogie Brawl: a 2 player dance battle fighting game",
}

// Tell Tale Heart
import tthMain from "public/games/BRGD/TellTaleHeart/main.jpeg"
import tthScreenshot from "public/games/BRGD/TellTaleHeart/screenshot2.jpeg"

export const TTHProj : Project = {
    name: "Tell Tale Heart",
    description: "Made with Brown RISD Game Developer’s in Fall 2022. I was a programmer and sound designer for this project, I also blocked out the main level. It is a 3D first-person stealth-based horror game. I learned a lot about clean coding practices and component-based design from this project. There are scripts from it I still use for similar projects and prototypes. For instance, I created an “Eyes” script, which is a general-use script to have AI detect the players and other objects which emit an event when they’re seen. I used that same script for both the enemies and the “cameras” littered around the level, and on future projects I can make use of it because it's so modular. I had similar approaches to UI scripts and AI sound mechanics. \n" +
    "If I could go back, one thing I would have done differently is spent more time designing and using the level. While we had worked on the mechanics are art throughout the duration of the semester, it wasn’t until the last couple of sessions that we blocked out and made the level. It is one of only a few 3D games ever made by Brown RISD Game Developers, these types of mistakes are hard to foresee, but I know for next time. ",
    tools : "Unity, C#, and Git",
    images : [
        "/games/BRGD/TellTaleHeart/screenshot2.jpeg"
    ], 
    link : "https://brownrisdgames.itch.io/tell-tale-heart",
}

export const TTHProjLink : ProjectLinkHolder = {
    linkTo: "/projects/telltaleheart", 
    photoLink: "/games/BRGD/TellTaleHeart/main.jpeg", 
    desc: "Tell Tale Heart is a first person stealth horror game",
}



// A note in the wind
import noteMain from "public/games/NoteInTheWind/main.png"
import noteScreenshot from "public/games/NoteInTheWind/screenshot2.png"

export const NoteProj : Project = {
    name: "A Note in the Wind",
    description: "This project was made in July 2023 for the annual Game Maker’s Toolkit game jam. The theme was “Roles reversed” and we had 48 hours to make a video game from scratch. We decided to go with the idea that instead of controlling a plane, you control the wind guiding the plane. \n" +
	"I worked on this project over a weekend while I was at 2K. It was fun to come out of the office, then dive into a quick games project. I did programming work for it. I implemented a parallax scrolling effect, the enemy mechanics, and I polished up much of the gameplay to make it a bit easier and more accessible. I also did some refactoring so we could add more content in our short time frame. \n" + 
	"If I could go back, I think I would have taken another hour or 2 to polish and made movement and traversal a tad easier. I also wish we had a death state (you can’t technically “lose” the game, but are encouraged to go fast), though the rest of the team didn’t want it so I went along with it. This was the third GMTK game jam I have done. The other 2 are not featured on this website because one was from early high school and the other had… \“room for improvement\". It was also the best-placed GMTK game I’ve worked on (top 8%), which I attribute largely to our amazingly talented art team who really brought the game up a notch with its presentation. ",
    // description: "Made for the annual Gamemaker's toolkit gamejam. " +
    // "We placed in the top 10% (ranked 552 out of 6818 entries). " +
    // "In the game, you control the wind guiding a paper airplane while avoiding obstacles. " +
    // "I was responsible for programming and design on this project.",
    tools : "Unity, C#, and Git",
    images : [
        "/games/NoteInTheWind/screenshot2.png"
    ], 
    link : "https://elsira.itch.io/a-note-in-the-wind",
}

export const NoteProjLink : ProjectLinkHolder = {
    linkTo: "/projects/noteinthewind", 
    photoLink: "/games/NoteInTheWind/main.png", 
    desc: "In a Note in the Wind, you control the wind to guide a paper airplane",
}

// ATLAS SWINGS
import asMain from "public/games/AtlasSwings/main.png";
import asScreen1 from "public/games/AtlasSwings/screenshot1.png";

export const AtlasSwingsProj : Project = {
    name: "Atlas Swings",
    description: "I made this game with a few other artists for the month-long Geopipe game jam in January 2023. I helped create destruction, the map, cameras, and main golf swing mechanics. I also ended up guiding some of the programming and design direction. \n" +
    "Working on this project was incredibly fun and rewarding. At the start, I was on break and helped make the initial prototype. When we returned to school, we rented a conference room to stay in to work together at night. Lots of bug fixes, banter, and snacks were had in that conference room. At the end of it, we did not expect much from it, but when the announcements were made I remember going to one of Brown’s dining areas to watch to see what the results would be, and was incredibly surprised when we ended up winning. Afterward, we all got dinner together using some of the cash prizes from the competition. It was one of only a few times I have been properly paid for game development at that time. Overall I learned a lot and it was a great experience. ",
    tools : "Unity, C#, Git, Geopipe NY assets",
    images : [
        "/games/AtlasSwings/screenshot1.png",
    ], 
    link : "https://cindy-lithium.itch.io/atlas-swings",
}

export const AtlasSwingsProjLink : ProjectLinkHolder = {
    linkTo: "/projects/atlasswings", 
    photoLink: "/games/AtlasSwings/main.png", 
    desc: "Winner of the first Geopipe Gamejam, Atlas Swings is a destructive golf simulator set in New York",
}

// TETRON 
import tetronScrn1 from "public/games/Tetron/screenshot1.jpg";
import tetronScrn2 from "public/games/Tetron/screenshot2.png";
import tetronScrn3 from "public/games/Tetron/screenshot3.png";
import tetronScrn4 from "public/games/Tetron/screenshot4.png";

export const TetronProj : Project = {
    name: "Tetron",
    description: "Tetron top-down rogue-lite twin-stick shooter. It is one of the projects I am most proud of because I designed and created every single aspect of it. Every line of code, art asset, and sound was created by me. This includes over 30 enemies, level generation, 4 characters (with different abilities), a map system, meta-game progression, and much more. I began working on it around when COVID started and worked on it passionately for about 8 months and ultimately released it on Steam. \n" +
	"Going back, there is very little I would change about how I went about creating it. I think the art style is simplistic, but considering it's not my background, I am very proud of what I ended up making for visuals. The code for the game is some of the cleanest I had ever made for a Gamemaker game, and everything is very polished. There are some balance changes I want to make eventually, so maybe I will update the project when I have the time. I also might go back and improve the music, I think I could add more tracks and make the mixing more polished. \n" +
    "PS If you are a journalist or employer that wants access to the game, contact me and I am happy to send a Steam key free of charge.",
    tools : "Gamemaker Studio 2, Aesprite, Steam SDK",
    images : [
        
        "/games/Tetron/screenshot2.png",
        "/games/Tetron/screenshot3.png",
        "/games/Tetron/screenshot4.png",
    ], 
    link : "https://store.steampowered.com/app/1348960/Tetron/",
}

export const TetronProjLink : ProjectLinkHolder = {
    linkTo: "/projects/tetron", 
    photoLink: "/header.jpg", 
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
    skippy : SkippyProj,
    origamibirdbattle : BirdBattleProj
}

export const FinishedProjectsLinks : ProjectLinkHolder[] = [
    AtlasSwingsProjLink, 
    BirdBattleProjLink,
    USFPSProjLink,
    NoteProjLink,
    TetronProjLink,
    TTHProjLink,
    BBProjLink,
    AscensionProjLink,
    BennyProjLink,
    SkippyProjLink,
]

import { StaticImageData } from "next/image";
import photo from "public/header.jpg";




export interface Project {
    name: string,
    description: string,
    tools?: string[],
    images?: StaticImageData[],
}


const TetronProj : Project = {
    name: "Tetron",
    description: "Roguelikelike top down twin stick shooter",
    tools : [
        "Gamemaker Studio 2",
        "Aesprite",
        "Steam SDK",
    ],
    images : [
        photo,
    ]
}

export const NameToProject : { [key: string]: Project }  = {
    tetron : TetronProj,
}


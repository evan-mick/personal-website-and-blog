import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Project {
    name: string,
    description: string,
    link?: string,
    tools?: string,
    images?: string[],
    // images?: StaticImageData[],
}

export interface BlogPostMetaData {
    name: string,
    description: string,
    date: string,
    img: string,
    // img: StaticImport | string,
    url: string, 
}

export interface ProjectLinkHolder {
    linkTo: string, 
    photoLink: string,
    // photoLink: StaticImport, 
    desc: string,
    title?: string, 
}


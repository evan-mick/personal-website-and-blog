import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Project {
    name: string,
    description: string,
    tools?: string[],
    images?: StaticImageData[],
    link?: string,
}

export interface ProjectLinkHolder {
    linkTo: string, 
    photoLink: StaticImport, 
    desc: string,
}
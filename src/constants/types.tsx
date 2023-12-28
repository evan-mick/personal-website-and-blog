import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Project {
    name: string,
    description: string,
    link?: string,
    tools?: string,
    images?: StaticImageData[],
}

export interface BlogPostData {
    name: string,
    description: string,
}

export interface ProjectLinkHolder {
    linkTo: string, 
    photoLink: StaticImport, 
    desc: string,
}
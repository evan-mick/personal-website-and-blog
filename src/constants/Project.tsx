import { StaticImageData } from "next/image";





export interface Project {
    name: string;
    description: string;
    tools?: string;
    images?: StaticImageData[];
}

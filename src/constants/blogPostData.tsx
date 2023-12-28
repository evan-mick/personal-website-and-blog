import { BlogPostMetaData, ProjectLinkHolder } from "./types";
import blogtest from "public/games/Skippy/screenshot1.png"


export var testData: BlogPostMetaData = {
    name: "Test Data",
    description: "this is a test data thanga lasjfklasdjflasdkf",
    date: "",
    img: blogtest,
    url: ""
}
export const TestProjLink : ProjectLinkHolder = {
    linkTo: "/blog/test", 
    photoLink: blogtest, 
    desc: "This is a test blog",
}


export const NameToBlogData : { [key: string]: BlogPostMetaData }  = {
    testData: testData,
}

export const AvailableBlogs : ProjectLinkHolder[] = [
    TestProjLink, 

]

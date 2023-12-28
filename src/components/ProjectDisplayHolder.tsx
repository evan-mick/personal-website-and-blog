
import { ProjectLinkHolder } from "../constants/types";
import ProjectDisplay from "./ProjectDisplay";


export default function ProjectDisplayHolder(props: { data: ProjectLinkHolder[] }) {
    return (
        <div className="flex flex-wrap gap-4 md:gap-16 justify-center">
            {props.data.map((link,i) =>
                <ProjectDisplay key={i} linkTo={link.linkTo} photoLink={link.photoLink} desc={link.desc}/>
            )}
        </div>
    );
}

import { ProjectLinkHolder } from "../constants/types";
import ProjectDisplay from "./ProjectDisplay";


export default function ProjectDisplayHolder(props: { data: ProjectLinkHolder[] }) {

    return (
        <div className="flex justify-center">
            {props.data.map((link,i) =>
                <ProjectDisplay key={i} linkTo={link.linkTo} photoLink={link.photoLink} desc={link.desc}/>
            )}
        </div>
    );
}
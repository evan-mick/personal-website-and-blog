'use client'


import "../globals.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";



export default function ProjectDisplay(props: {linkTo: string, photoLink: StaticImport, desc: string}) {

    const router = useRouter();
    function onAnyClick() {
        console.log("clicked " + props.linkTo); 

        router.push(props.linkTo);

        //redirect(props.linkTo, RedirectType.replace);

    }

    return (
        <div className="h-64 w-96 shadow-lg rounded-lg transition ease-out hover:scale-105">
            <button onClick={() => onAnyClick()}>
                <Image className="w-96 h-48 overflow-hidden object-contain hover:object-scale-down"
                    src={props.photoLink}
                    alt="Photo"
                />
                <div className="h-16 bg-black"/>
            </button>
        </div>
    );


    
}
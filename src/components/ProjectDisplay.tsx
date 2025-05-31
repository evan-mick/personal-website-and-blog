"use client";

import "../globals.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { ProjectLinkHolder } from "@/constants/types";

export default function ProjectDisplay(props: ProjectLinkHolder) {
    const router = useRouter();
    function onAnyClick() {
        console.log("clicked " + props.linkTo);

        router.push(props.linkTo);

        //redirect(props.linkTo, RedirectType.replace);
    }

    console.log(props.linkTo);

    return (
        <div className="h-76 w-96 shadow-lg rounded-lg hover:outline transition ease-out hover:scale-105">
            <button
                onClick={() => onAnyClick()}
                className="flex-col justify-center align-middle items-center "
            >
                {props.title == undefined
                    ? <></>
                    : <h1 className="text-l mb-2 mt-2">{props.title}</h1>}
                <img
                    className="w-96 md:h-48 object-scale-down md:object-cover"
                    src={props.photoLink}
                    alt="Photo"
                    width={100}
                />
                <p className="m-4 text-center hidden md:flex">
                    {props.desc}
                </p>
            </button>
        </div>
    );
}


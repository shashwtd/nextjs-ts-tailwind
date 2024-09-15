"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loader = () => {

    return (
        <div className="w-screen h-screen bg-neutral-950 text-white flex items-center justify-center p-0">
            
        </div>
    );
};

export default Loader;
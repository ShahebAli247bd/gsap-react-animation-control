import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
    const boxContainer = useRef();
    const [animation, setAnimation] = useState("center");

    useGSAP(
        () => {
            gsap.killTweensOf(".box");

            // Reset elements to their original state
            gsap.set(".box", { y: 0, opacity: 1, scale: 1 });

            gsap.to(".box", {
                y: 50,
                opacity: 0,
                scale: 0,
                stagger: {
                    each: 0.1,
                    repeat: -1,
                    from: animation,
                    repeatDelay: 0.1,
                    yoyo: true,
                },
                ease: "back.in",
                duration: 0.5, // Slightly longer duration for smoother effect
            });
        },
        { scope: boxContainer, dependencies: [animation] }
    );

    return (
        <>
            <div className="container">
                <div ref={boxContainer} className="boxContainer">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
                <select
                    id="animation"
                    onChange={(e) => setAnimation(e.target.value)}
                >
                    <option value={"center"}>center</option>
                    <option value={"start"}>start</option>
                    <option value={"end"}>end</option>
                    <option value={"random"}>random</option>
                    <option value={"edge"}>edge</option>
                </select>
            </div>
        </>
    );
};

export default App;

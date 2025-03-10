import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Animation = () => {
    const boxContainer = useRef();
    const [animation, setAnimation] = useState("center");
    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState("");

    useGSAP(
        () => {
            gsap.killTweensOf(".box");

            // Reset elements to their original state
            gsap.set(".box", { y: 0, opacity: 1, scale: 1 });
            if (loading) {
                gsap.to(".box", {
                    y: 50,
                    opacity: loading ? 1 : 0,
                    scale: 0,
                    stagger: {
                        each: 0.1,
                        repeat: -1,
                        from: animation,
                        repeatDelay: 0.1,
                        yoyo: true,
                    },
                    ease: "back.in",
                    duration: 0.5,
                });
            }
        },
        { scope: boxContainer, dependencies: [animation, loading] }
    );

    const handleCode = () => {
        setLoading(!loading);
        setCode(`
        const boxContainer = useRef();
        const [animation, setAnimation] = useState("center");
        const [loading, setLoading] = useState(true);

        useGSAP(() => {
            gsap.killTweensOf(".box");

            // Reset elements to their original state
            gsap.set(".box", { y: 0, opacity: 1, scale: 1 });
            if (loading) {
                gsap.to(".box", {
                    y: 50,
                    opacity: loading ? 1 : 0,
                    scale: 0,
                    stagger: {
                        each: 0.1,
                        repeat: -1,
                        from: ${animation},
                        repeatDelay: 0.1,
                        yoyo: true,
                    },
                    ease: "back.in",
                    duration: 0.5, 
                });
            }
        },
        { scope: boxContainer, dependencies: [animation, loading] }
    );
    `);
    };

    const handleCopy = () => {
        navigator.clipboard
            .writeText(code)
            .then(() => alert("Code Copid"))
            .catch(() => alert("Can't Copy"));
    };

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
                <div className="animationBtn">
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
                    <button onClick={handleCode}>
                        {loading ? "Get Code" : "Loading..."}
                    </button>
                </div>
                <div className="animationCode">
                    {!loading && (
                        <pre
                            onClick={handleCopy}
                            style={{ background: "black", color: "white" }}
                        >
                            {code}
                        </pre>
                    )}
                </div>
            </div>
            <div className="animationSettings">animationSettings</div>
        </>
    );
};

export default Animation;

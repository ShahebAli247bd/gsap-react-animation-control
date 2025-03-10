import React from "react";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";

const AnimationLayout = () => {
    return (
        <div className="AnimationLayout">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default AnimationLayout;

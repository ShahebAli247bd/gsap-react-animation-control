import React from "react";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="rootLayout">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default RootLayout;

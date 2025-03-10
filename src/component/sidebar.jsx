import React from "react";
import { Route, Routes } from "react-router-dom";

import Welcome from "./welcome";
const pages = [
    {
        name: "Home",
        url: "/",
        title: "Welcome to our App",
    },
    {
        name: "About",
        url: "/about",
        title: "Welcome to our App",
    },
    {
        name: "Contact",
        url: "/contact",
        title: "Welcome to our App",
    },
    {
        name: "All Animation",
        url: "/animation",
        title: "Welcome to our App",
    },
];
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                {pages.map((page) => (
                    <li key={page.name}>
                        <a href={page.url}>{page.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

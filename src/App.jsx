import React from "react";
import "./App.css";
import Welcome from "./component/welcome";
import About from "./component/about";
import Contact from "./component/contact";
import Animation from "./component/animation";
import RootLayout from "./component/layout/rootLayout";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import AnimationLayout from "./component/layout/AnimationLayout";
const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Welcome />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="animation" element={<AnimationLayout />}>
                    <Route index element={<Animation />} />
                </Route>
            </>
        )
    );
    return (
        <div className="mainContainer">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;

import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import Slides from "./Slides";
import Contact from "./Contact";
import About from "./About";

function useWelcomeRoutes() {
    return <>
        <Route path="/welcome" element={<Layout />} >
            <Route index element={<Slides />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
        </Route>
    </>
}

export default useWelcomeRoutes;
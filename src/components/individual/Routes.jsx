import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile"

function IndividualRoutes() {
    return <Routes>
        <Route path="individual" element={<Layout />} >
            <Route path="profile" index element={<Profile />} />
        </Route>
    </Routes>
}

export default IndividualRoutes;
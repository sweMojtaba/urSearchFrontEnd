import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile"

function useIndividualRoutes() {
    return <>
        <Route path="/individual" element={<Layout />} >
            <Route path="profile" index element={<Profile />} />
        </Route>
    </>
}

export default useIndividualRoutes;
import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile"
import Search from "./Search";
import Applications from "./Applications";
import Import from "../import/Import";

function useIndividualRoutes() {
    return <>
        <Route path="/individual" element={<Layout />} >
            <Route index element={<Search />} />
            <Route path="profile" element={<Profile />} />
            <Route path="search" element={<Search />} />
            <Route path="applications" element={<Applications />} />
            <Route path="import" element={<Import />} />
        </Route>
    </>
}

export default useIndividualRoutes;
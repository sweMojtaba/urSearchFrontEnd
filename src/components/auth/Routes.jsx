import React from "react";
import { Route } from "react-router-dom";
import Layout from "../welcome/Layout";
import Signup from "./p1/Signup";
import Login from '../auth/p1/Login';
import SignupRole from '../auth/p2/Signup';
import LoginRole from '../auth/p2/Login';

import "./styles.scss";

function useAuthRoutes() {
    return <>
        <Route path="/auth" element={<Layout />}>
            <Route path="signup">
                <Route index element={<Signup />} />
                <Route path=':role' element={<SignupRole />} />
            </Route>
            <Route path="login">
                <Route index element={<Login />} />
                <Route path=':role' element={<LoginRole />} />
            </Route>
        </Route>
    </>
}

export default useAuthRoutes;
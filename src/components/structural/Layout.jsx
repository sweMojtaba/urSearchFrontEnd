import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
    const [userState, setUserState] = useState(0);
    useEffect(() => {
        const userStateStored = localStorage.getItem("userState");
        if (userStateStored === null) {
            setUserState(0);
        } else {
            setUserState(parseInt(userStateStored));
        }
    }, [])
    return <UserContext.Provider value={[userState, setUserState]}>
        <Header />
        <Outlet />
    </UserContext.Provider>
}

export default Layout;
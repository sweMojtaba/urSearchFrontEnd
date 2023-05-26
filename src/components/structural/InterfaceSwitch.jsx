import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import UserContext from './UserContext';

function InterfaceSwitch() {
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
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/welcome" element={<Welcome/>} />
            <Route path="" />
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;
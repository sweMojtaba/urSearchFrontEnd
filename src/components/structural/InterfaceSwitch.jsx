import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slides from '../Welcome/Slides';
import UserContext from './UserContext';
import WelcomeLayout from '../Welcome/Layout';
import Contact from '../Welcome/Contact';
import About from '../Welcome/About';
import AuthLayout from '../auth/Layout';
import Signup from '../auth/Signup';
import Login from '../auth/Login';

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
                <Route path="/" element={<WelcomeLayout />} >
                    <Route index element={<Slides />} />
                </Route>
                <Route path="/welcome" element={<WelcomeLayout />} >
                    <Route index element={<Slides />} />
                    <Route path="/welcome/contact" element={<Contact />} />
                    <Route path="/welcome/about" element={<About />} />
                </Route>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="/auth/signup" element={<Signup />} />
                    <Route path="/auth/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;
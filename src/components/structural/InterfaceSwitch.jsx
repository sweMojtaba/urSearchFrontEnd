import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slides from '../welcome/Slides';
import UserContext from './UserContext';
import WelcomeLayout from '../welcome/Layout';
import Contact from '../welcome/Contact';
import About from '../welcome/About';
import Signup from '../auth/p1/Signup';
import Login from '../auth/p1/Login';
import SignupRole from '../auth/p2/Signup';
import LoginRole from '../auth/p2/Login';
import UnderConstruction from '../common/UnderConstruction';
import Redirect from '../common/Redirect';
import Import from '../import/Import';
import Profile from '../individual/Profile';
import HeaderIndividual from '../individual/Header';

function InterfaceSwitch() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const userStateStored = localStorage.getItem("userState");
        // console.log(userStateStored)
        let state = parseInt(userStateStored);
        if (isNaN(state)) {
            state = 0;
        }
        console.log(state);
        let name = localStorage.getItem("username");
        if (name === null || name === undefined || isNaN(name)) {
            name = "";
        }
        console.log(name);
        setUser({
            state,
            name
        });
    }, [])

    useEffect(() => {
        localStorage.setItem("userState", user.state);
        localStorage.setItem("userName", user.name);
        console.log("Local storage reset with", user);
    }, [user])

    return <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomeLayout />} >
                    <Route index element={<Slides />} />
                    {/* Miscellaneous */}
                    <Route path="/under-construction" element={<UnderConstruction />} />
                    <Route path="/redirect" element={<Redirect />} />
                    <Route path="import" element={<Import/>} />
                </Route>
                <Route path="welcome" element={<WelcomeLayout />} >
                    <Route index element={<Slides />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="auth" element={<WelcomeLayout />}>
                    <Route path="signup">
                        <Route index element={<Signup />} />
                        <Route path=':role' element={<SignupRole />} />
                    </Route>
                    <Route path="login">
                        <Route index element={<Login />} />
                        <Route path=':role' element={<LoginRole />} />
                    </Route>
                </Route>
                <Route path="individual" element={<HeaderIndividual />} >
                    <Route path="profile" index element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;
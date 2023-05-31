import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slides from '../welcome/Slides';
import UserContext from './UserContext';
import WelcomeLayout from '../welcome/Layout';
import Contact from '../welcome/Contact';
import About from '../welcome/About';
import AuthLayout from '../auth/Layout';
import Signup from '../auth/p1/Signup';
import Login from '../auth/p1/Login';
import SignupRole from '../auth/p2/Signup';
import LoginRole from '../auth/p2/Login';
import UnderConstruction from '../common/UnderConstruction';
import Redirect from '../common/Redirect';
import Import from '../import/Import';

function InterfaceSwitch() {
    const [userState, setUserState] = useState(() => {
        const userStateStored = localStorage.getItem("userState");
        if (userStateStored === null) {
            return 0
        } else {
            return parseInt(userStateStored);
        }
    });

    useEffect(() => {
        localStorage.setItem("userState", userState);
        console.log(`User state changed to ${userState}`)
    }, [userState])

    return <UserContext.Provider value={[userState, setUserState]}>
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
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;
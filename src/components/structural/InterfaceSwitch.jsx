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
                    <Route path="/auth/signup">
                        <Route index element={<Signup />} />
                        <Route path='/auth/signup/individual' element/>
                        <Route path='/auth/signup/lab' element/>
                    </Route>
                    <Route path="/auth/login">
                        <Route index element={<Login />} />
                        <Route path='/auth/login/individual' element/>
                        <Route path='/auth/login/lab' element/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;
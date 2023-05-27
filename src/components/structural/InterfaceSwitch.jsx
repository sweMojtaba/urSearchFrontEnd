import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slides from '../Welcome/Slides';
import UserContext from './UserContext';
import Layout from '../Welcome/Layout';
import Contact from '../Welcome/Contact';
import About from '../Welcome/About';

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
                <Route path="/" element={<Layout />} >
                    <Route index element={<Slides/>}/>
                </Route>
                <Route path="/welcome" element={<Layout />} >
                    <Route index element={<Slides/>}/>
                    <Route path="/welcome/contact" element={<Contact/>}/>
                    <Route path="/welcome/about" element={<About/>}/>
                </Route>
                <Route path="" />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;
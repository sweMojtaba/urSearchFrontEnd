import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slides from '../welcome/Slides';
import UserContext from './UserContext';
import WelcomeLayout from '../welcome/Layout';
import UnderConstruction from '../common/UnderConstruction';
import Redirect from '../common/Redirect';
import Import from '../import/Import';
import getUserStored from './getUserStored';
import AuthRoutes from '../auth/Routes';
import WelcomeRoutes from '../welcome/Routes';
import IndividualRoutes from '../individual/Routes';

function InterfaceSwitch() {
    const [user, setUser] = useState(getUserStored);

    useEffect(() => {
        const user = getUserStored();
        setUser(user);
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
                    <Route path="import" element={<Import />} />
                </Route>
            </Routes>
            <WelcomeRoutes />
            <AuthRoutes />
            <IndividualRoutes />
        </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;
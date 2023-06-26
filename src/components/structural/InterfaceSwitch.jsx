import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slides from '../welcome/Slides';
import UserContext from './UserContext';
import WelcomeLayout from '../welcome/Layout';
import UnderConstruction from '../common/UnderConstruction';
import Redirect from '../common/Redirect';
import Import from '../import/Import';
import getUserStored from './getUserStored.ts';
import useAuthRoutes from '../auth/Routes';
import useIndividualRoutes from '../individual/Routes';
import useWelcomeRoutes from '../welcome/Routes';

function InterfaceSwitch() {
    const [user, setUser] = useState(getUserStored);
    const welcomeRoutes = useWelcomeRoutes();
    const authRoutes = useAuthRoutes();
    const individualRoutes = useIndividualRoutes();

    useEffect(() => {
        const user = getUserStored();
        setUser(user);
    }, [])

    useEffect(() => {
        localStorage.setItem("userState", user.state.toString());
        localStorage.setItem("userName", user.name);
        console.log("Local storage reset with", user);
    }, [user])

    // https://github.com/remix-run/react-router/discussions/10160
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
                {welcomeRoutes}
                {authRoutes}
                {individualRoutes}
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;
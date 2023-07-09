import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slides from '../welcome/Slides';
import UserContext from './UserContext';
import WelcomeLayout from '../welcome/Layout';
import UnderConstruction from '../miscellaneous/UnderConstruction';
import Redirect from '../miscellaneous/Redirect';
import getUserStored from './getUserStored.ts';
import useAuthRoutes from '../auth/Routes';
import useIndividualRoutes from '../individual/Routes';
import useWelcomeRoutes from '../welcome/Routes';
import IndividualLayout from "../individual/Layout";
import Search from "../individual/Search"

function InterfaceSwitch() {
    const [user, setUser] = useState(getUserStored);
    const welcomeRoutes = useWelcomeRoutes();
    const authRoutes = useAuthRoutes();
    const individualRoutes = useIndividualRoutes();
    const switchHomeRoutes = useSwitchHomeRoutes(user.state);

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
    return <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
                {switchHomeRoutes}
                <Route path="/" element={<WelcomeLayout />} >
                    {/* Miscellaneous */}
                    <Route path="/under-construction" element={<UnderConstruction />} />
                    <Route path="/redirect" element={<Redirect />} />
                </Route>
                {welcomeRoutes}
                {authRoutes}
                {individualRoutes}
                <Route path='*' element={<WelcomeLayout />}>
                    <Route element={<UnderConstruction />} />
                    {/* TO-DO: 404 */}
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
}

export default InterfaceSwitch;

function useHomeRoute(layoutElement, outletElement) {
    return <Route path='/' element={layoutElement}>
        <Route index element={outletElement} />
    </Route>
}

function useSwitchHomeRoutes(userState) {
    const welcomeHomeRoute = useHomeRoute(<WelcomeLayout />, <Slides />);
    const individualHomeRoute = useHomeRoute(<IndividualLayout />, <Search />);
    const labHomeRoute = useHomeRoute(<WelcomeLayout />, <Slides />); // TO-DO: change to lab elements
    switch (userState) {
        case 0:
            return welcomeHomeRoute;
        case 1:
            return individualHomeRoute;
        case 2:
            return labHomeRoute;
    }
}
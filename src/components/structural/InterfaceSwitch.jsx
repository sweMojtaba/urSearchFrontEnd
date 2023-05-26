import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';

function InterfaceSwitch() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/welcome" element={<Welcome/>} />
            <Route path="" />
        </Routes>
    </BrowserRouter>
}

export default InterfaceSwitch;
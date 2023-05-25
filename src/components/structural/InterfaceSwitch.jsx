import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
 


function InterfaceSwitch() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/* To-do */}
                <Route index />
                <Route path=""/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default InterfaceSwitch;
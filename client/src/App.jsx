import { useState } from 'react';

import CaPortal from './pages/CaPortal';
import CAPage from './pages/CAPage';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SuccessfulRegistration from './pages/SucessfulRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import CaLoginForm from './components/CARegistration/CaLoginForm';
import UserProfile from './components/UserProfile/UserProfile';
import NormalRegistration from './pages/NormalRegistration';
import NotFound from './pages/NotFound';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/" element={<Home />} />
                <Route path="/caportal" element={<CaPortal />} />
                <Route path="/caregistration" element={<CAPage />} />
                <Route
                    path="/successful"
                    element={<SuccessfulRegistration />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/calogin" element={<CaLoginForm />} />
                <Route path="/normalregistration" element={<NormalRegistration/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;

import { useEffect, useState } from 'react';

import CaPortal from './pages/CaPortal';
import CAPage from './pages/CAPage';
import Dashboard from './pages/Dashboard';
import SuccessfulRegistration from './pages/SucessfulRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CaLoginForm from './components/CARegistration/CaLoginForm';
import UserProfile from './components/UserProfile/UserProfile';
import NormalRegistration from './pages/NormalRegistration';
import NotFound from './pages/NotFound';
import NewHomePage from './pages/newHomePage';

import EventsPage from './pages/EventsPage';

import NewAboutUs from './pages/NewAboutUs';
import Sponsors from './pages/Sponsors';

import ScrollToTop from './components/ScrollToTop';

function App() {

    return (
        <BrowserRouter>
        <ScrollToTop />
             <Routes>
                <Route path="/" element={<NewHomePage />} />
                <Route path='/about' element={<NewAboutUs/>}/>
                <Route path='/events'element={<EventsPage />} />
                <Route
                    path="/registration"
                    element={<NormalRegistration />}
                />
                <Route path="/sponsors" element={<Sponsors/>} />
                <Route path="/caportal" element={<CaPortal />} />
                <Route path="/calogin" element={<CaLoginForm />} />
                <Route path="/caregistration" element={<CAPage />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/successful"
                    element={<SuccessfulRegistration />}
                    />
                <Route path="*" element={<NotFound />} />   
            </Routes>
        </BrowserRouter>
    );
}
export default App;

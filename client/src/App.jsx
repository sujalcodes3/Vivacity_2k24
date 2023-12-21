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

import { UserEmailContext } from './store/userEmailContext';

function App() {
    const [userEmail, setUserEmail] = useState('');

    return (
        <UserEmailContext.Provider value={{ userEmail, setUserEmail }}>
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
                </Routes>
            </BrowserRouter>
        </UserEmailContext.Provider>
    );
}
export default App;

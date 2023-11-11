import CaPortal from './pages/CaPortal';
import CAPage from './pages/CAPage';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SuccessfulRegistration from './pages/SucessfulRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventsPage from './pages/EventsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/caportal" element={<CaPortal />} />
                <Route path="/caregistration" element={<CAPage />} />
                <Route
                    path="/successful"
                    element={<SuccessfulRegistration />}
                />
                <Route path="/dashboard"element={<Dashboard/>}/>
                <Route path="/events" element={<EventsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

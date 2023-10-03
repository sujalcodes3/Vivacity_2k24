import CaPortal from './pages/CaPortal';
import CAPage from './pages/CAPage';
import Home from './pages/Home';
import SuccessfulRegistration from './pages/SucessfulRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caportal" element={<CaPortal />} />
        <Route path="/caregistration" element={<CAPage />} />
        <Route path="/successful" element={<SuccessfulRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import CaPortal from "./pages/CaPortal";
import CAPage from "./pages/CAPage";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/CA-Portal" element={<CaPortal/>}/>
         <Route path="/CA-registeration" element={<CAPage/>}/>
      </Routes>
      </BrowserRouter>
   );

}

export default App;

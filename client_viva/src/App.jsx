import CaPortal from "./pages/CaPortal";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
   return (
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/CA-Portal" element={<CaPortal/>}/>
      </Routes>
      </BrowserRouter>
   );
}

export default App;

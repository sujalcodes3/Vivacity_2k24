import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route
                  path='/'
                  element={<Home/>}
               />
               <Route
               path ='*'
               element = {<h1 className="p-5 text-center">Error 404 : Not Found</h1>}
               />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;

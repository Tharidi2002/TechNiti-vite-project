// import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./view/pages/Login/Login.tsx";
import {DefaultLayout} from "./view/Common/DefaultLayout/DefaultLayout.tsx";
// import {DefaultLayout} from "./view/Common/DefaultLayout/DefaultLayout.tsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
           <BrowserRouter>
               {/*<DefaultLayout/>*/}
               <Routes>
                   <Route path="/*" element={<DefaultLayout />}></Route>
                   <Route path="/login" element={<Login />}></Route>
               </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;
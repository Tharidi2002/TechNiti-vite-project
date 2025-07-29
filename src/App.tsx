// import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./view/pages/Login/Login.tsx";
import {DefaultLayout} from "./view/Common/DefaultLayout/DefaultLayout.tsx";
import {useEffect} from "react";
import {isTokenExpired} from "./auth/auth.ts";
import {Unauthorized} from "./auth/Unauthorized.tsx";


// import {DefaultLayout} from "./view/Common/DefaultLayout/DefaultLayout.tsx";

function App() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            navigate('/login');
        }
    }, [navigate]);


    return (
        <div className="min-h-screen flex flex-col">
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/unauthorized" element={<Unauthorized/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
// MainContent.tsx

import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
import {ProtectedRoute} from "../../../auth/ProtectedRoute.tsx";
import {AdminPanel} from "../../pages/AdminPanel/AdminPanel.tsx";
import {ManageProducts} from "../../pages/ManageProducts/ManageProducts.tsx";
import {useEffect, useState} from "react";



export function MainContent() { // Changed from mainContent to MainContent
    const [role, setRole] = useState<string | null>(null);
    
    useEffect(() => {
        const storedRole = localStorage.getItem("role");
        setRole(storedRole);
    }, []);
    
    return (
        <div className="container mx-auto px-4 py-8">
            <Routes>
                {/* Routes visible to customers only */}
                {role === 'customer' && (
                    <>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/shopping-cart" element={<ShoppingCart/>}/>
                    </>
                )}
                
                {/* Admin routes - only visible to admins */}
                {role === 'admin' && (
                    <>
                        <Route path="/admin-panel" element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <AdminPanel/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/manage-products" element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <ManageProducts/>
                            </ProtectedRoute>
                        }/>
                       {/* <Route path="/manage-products" element={
                            <ProtectedRoute allowedRoles={['admin']}>
                                <ManageProducts/>
                            </ProtectedRoute>
                        }/>*/}
                    </>
                )}
            </Routes>
        </div>
    );
}
/*
import {useNavigate} from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center">Welcome Back</h1>
                <p className="text-gray-600 mb-8 text-center">Sign in to your account</p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
                    >
                        Sign In
                    </button>

                    <div className='mt-1 mb-4'>
                        <button onClick={() => navigate("/")} className="text-sm font-medium text-purple-600 hover:text-purple-500">Go Back</button>
                    </div>

                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Google
                        </button>
                        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}*/


import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { backendApi } from "../../../api.ts";
import {getUserFromToken} from "../../../auth/auth.ts";
import type {UserData} from "../../../model/UserData.ts";

type FormData = {
    username: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormData>();

    const authenticateUser = async (data: FormData) => {
        try {
            const userCredentials = {
                username: data.username,  // assuming your backend uses "username" for email
                password: data.password
            };

            const response = await backendApi.post('/auth/login', userCredentials);
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            // const user:UserData = getUserFormToken(accessToken);
            // localStorage.setItem('username', user.username as string);
            // localStorage.setItem('role', user.role as string);

            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const user:UserData = getUserFromToken(accessToken);
            localStorage.setItem('username', user.username as string);
            localStorage.setItem('role', user.role as string);

            alert("Successfully logged in!");
            if (user.role === 'customer') {
                navigate('/');
            } else if (user.role === 'admin') {
                navigate('/admin-panel')
            }
        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
            <div className="w-full max-w-sm bg-white border border-green-300 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-green-800 underline decoration-2 mb-6 text-center">
                    Sign In
                </h2>
                <div className="mt-1 mb-4">
                    <button onClick={() => navigate("/")}
                            className="text-sm text-green-600 hover:text-green-900 underline">
                        Go Back
                    </button>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(authenticateUser)}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-green-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            {...register("username")}
                            className="mt-1 block w-full border border-green-200 rounded-md text-sm shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-green-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="mt-1 block w-full border border-green-200 rounded-md text-sm shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
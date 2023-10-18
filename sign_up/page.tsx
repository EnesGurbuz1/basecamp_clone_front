// pages/signup.tsx
import React from 'react';

const SignUpPage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto bg-white p-10 rounded-lg shadow-md">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create Your Account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">Join our community by creating a new account</p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="first-name" className="sr-only">First Name</label>
                                <input 
                                    id="first-name" 
                                    name="first-name" 
                                    type="text" 
                                    required 
                                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="First Name" 
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="sr-only">Last Name</label>
                                <input 
                                    id="last-name" 
                                    name="last-name" 
                                    type="text" 
                                    required 
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Last Name" 
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address-signup" className="sr-only">Email Address</label>
                                <input 
                                    id="email-address-signup" 
                                    name="email" 
                                    type="email" 
                                    required 
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Email address" 
                                />
                            </div>
                            <div>
                                <label htmlFor="password-signup" className="sr-only">Password</label>
                                <input 
                                    id="password-signup" 
                                    name="password" 
                                    type="password" 
                                    required 
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Password" 
                                />
                            </div>
                            <div>
                                <label htmlFor="password-confirm" className="sr-only">Confirm Password</label>
                                <input 
                                    id="password-confirm" 
                                    name="password-confirm" 
                                    type="password" 
                                    required 
                                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Confirm Password" 
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input 
                                    id="privacy-policy" 
                                    name="privacy-policy" 
                                    type="checkbox" 
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                                />
                                <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-900">
                                    I accept the Privacy Policy
                                </label>
                            </div>
                        </div>

                        <div>
                            <button 
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;

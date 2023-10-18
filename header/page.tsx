// Header.tsx
import React from 'react';

const Header: React.FC = () => {

    return (
        <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg p-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="flex items-center w-full md:w-auto">
                    <img src="/path-to-your-logo.png" alt="Project Logo" className="w-12 h-12 mr-3 transform hover:scale-105 transition-transform duration-300" />
                    <h1 className="text-3xl font-bold tracking-wider">Project Name</h1>
                </div>
                <div className="flex items-center">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="mr-4 px-3 py-2 rounded bg-white text-black" 
                    />
                    <button className="mr-4">
                        🌙
                    </button>
                </div>
                <nav className="flex flex-wrap items-center mt-4 md:mt-0 w-full md:w-auto">
                    {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                        <button key={item} className="mx-2 bg-transparent hover:bg-indigo-700 hover:text-white border border-indigo-500 rounded px-4 py-2 transition-colors duration-300 w-full md:w-auto">
                            {item}
                        </button>
                    ))}
                    <div className="relative mx-2 group w-full md:w-auto mt-4 md:mt-0">
                        <i className="fas fa-bell transform hover:scale-105 transition-transform duration-300"></i>
                        <span className="bg-red-500 text-white text-xs rounded-full h-4 w-4 absolute top-0 right-0 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">3</span>
                    </div>
                    <select className="mx-2 bg-transparent border-none text-indigo-200 hover:text-indigo-100 transition-colors duration-300 w-full md:w-auto mt-4 md:mt-0">
                        <option value="EN">EN</option>
                        <option value="TR">TR</option>
                    </select>
                    <div className="relative mx-2 group w-full md:w-auto mt-4 md:mt-0">
                        <img src="/path-to-profile-pic.jpg" alt="Profile" className="w-12 h-12 rounded-full cursor-pointer transform hover:scale-105 transition-transform duration-300" />
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 text-black z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="/profile" className="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Profile</a>
                            <a href="/settings" className="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Settings</a>
                            <a href="/logout" className="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Logout</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;

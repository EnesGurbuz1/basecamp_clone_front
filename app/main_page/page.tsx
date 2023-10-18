// pages/MainPage.tsx
import React from 'react';

const MainPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <header className="bg-indigo-700 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/path-to-your-logo.png" alt="Project Logo" className="w-12 h-12 mr-3" />
                        <h1 className="text-3xl font-bold">Project Name</h1>
                    </div>
                    <nav className="flex items-center">
                        {['Dashboard', 'Projects', 'Tasks', 'Activities', 'Teams', 'Settings'].map((item) => (
                            <a key={item} href="#" className="mx-3 hover:text-indigo-300">
                                {item}
                            </a>
                        ))}
                        <img src="/path-to-profile-pic.jpg" alt="Profile" className="w-10 h-10 rounded-full ml-4" />
                    </nav>
                </div>
            </header>
            <main className="container mx-auto mt-10 px-4">
                <h2 className="text-4xl font-semibold mb-6">Welcome Back, [User Name]!</h2>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-2xl font-bold mb-4">Projects</h3>
                        <p>Your ongoing projects will be listed here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-2xl font-bold mb-4">Tasks</h3>
                        <p>Your tasks for today will be displayed here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-2xl font-bold mb-4">Activities</h3>
                        <p>Recent activities and updates will appear here.</p>
                    </div>
                </section>
                <section className="bg-white p-6 rounded-lg shadow-md text-black mb-6">
                    <h3 className="text-2xl font-bold mb-4">Your Teams</h3>
                    <p>Here you can see and manage your teams.</p>
                    <ul className="mt-4">
                        {['Team Alpha', 'Team Beta', 'Team Gamma'].map((team) => (
                            <li key={team} className="mb-2">
                                <a href="#" className="text-indigo-600 hover:underline">{team}</a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="bg-white p-6 rounded-lg shadow-md text-black">
                    <h3 className="text-2xl font-bold mb-4">Latest Notifications</h3>
                    <ul>
                        {['Notification 1', 'Notification 2', 'Notification 3'].map((notif) => (
                            <li key={notif} className="border-b border-gray-200 py-2">
                                {notif}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <footer className="bg-indigo-700 p-4 mt-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Project Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default MainPage;

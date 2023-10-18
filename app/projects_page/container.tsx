import React from 'react';
import Boxes from './boxes';
import ProjectActivity from './project_activity';

function Container({ children }: { children: React.ReactNode }) {
  const avatars = [
    { color: 'bg-red-400', letter: 'F' },
    { color: 'bg-blue-400', letter: 'E' },
    { color: 'bg-green-400', letter: 'F' },
    { color: 'bg-yellow-400', letter: 'O' },
    { color: 'bg-purple-400', letter: 'H' },
    { color: 'bg-pink-400', letter: 'E' },
    { color: 'bg-indigo-400', letter: 'G' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-20 rounded-lg shadow-md w-full max-w-6xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold">Projects</h1>
          </div>
          <button className="bg-white p-2 rounded-full shadow-md">...</button>
        </div>
        <p className="text-center mb-4">Wordpress Harici Gelen Proje Dokümanları</p>
        <div className="flex items-center justify-center mt-2">
          <button className="bg-white px-2 py-0.5 rounded-lg shadow-md mr-2 text-xs">
            Set up people
          </button>
          <div className="flex space-x-1">
            {avatars.map((avatar, idx) => (
              <div key={idx} className={`${avatar.color} w-4 h-4 rounded-full flex items-center justify-center text-white text-xs`}>
                {avatar.letter}
              </div>
            ))}
          </div>
        </div>
        <Boxes />
        <ProjectActivity />
        {children}
      </div>
    </div>
  );
}

export default Container;

//mobile compatibility has been implemented.
//mobil uyumluluk uygulanmıştır.

"use client"

import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('everything');
  const [showFilterInput, setShowFilterInput] = useState(false);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);

    // Only show the filter input for 'projects' or 'people'
    if (filter === 'projects' || filter === 'people') {
      setShowFilterInput(true);
    } else {
      setShowFilterInput(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <Head>
        <title>Search Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-lg">
        <div className="bg-white p-4 rounded shadow-lg">
          {showFilterInput && (
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <div className="flex-grow">
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Find projects..."
                />
              </div>
              <button
                className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded mt-2 sm:mt-0 sm:ml-4 hover:bg-green-600 focus:outline-none"
              >
                Filter
              </button>
            </div>
          )}

          <div className="flex justify-center bg-gray-200 p-2 rounded-lg">
            <button
              className={`px-4 py-1 ${activeFilter === 'everything' ? 'bg-white rounded-lg shadow' : ''}`}
              onClick={() => handleFilterClick('everything')}
            >
              Everything
            </button>
            <button
              className={`mx-2 px-4 py-1 ${activeFilter === 'projects' ? 'bg-white rounded-lg shadow' : ''}`}
              onClick={() => handleFilterClick('projects')}
            >
              Filter by projects
            </button>
            <button
              className={`px-4 py-1 ${activeFilter === 'people' ? 'bg-white rounded-lg shadow' : ''}`}
              onClick={() => handleFilterClick('people')}
            >
              Filter by people
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


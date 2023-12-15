"use client"

import Head from 'next/head';

const YourDrafts = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Head>
        <title>Your Drafts</title>
      </Head>

      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-gray-300 p-4">
            <span className="text-2xl text-white font-bold">M</span>
          </div>
          <span className="text-2xl font-semibold">Your Drafts</span>
        </div>

        <div className="border-dashed border-2 border-gray-300 rounded p-4">
          <div className="flex items-center justify-center">
            <span className="text-4xl text-gray-300">✏️</span>
          </div>
          <p className="text-center text-gray-500 mt-4">
            You haven't saved any drafts yet.
          </p>
          <p className="text-center text-gray-400 mt-2">
            When you save a message or document as a draft, it'll show up here. Your drafts aren't visible to anyone else. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourDrafts;

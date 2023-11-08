import React from 'react';

const AssignmentsPage: React.FC = () => {
  return (
    <div className="body min-h-screen flex flex-col items-center justify-center py-10">
      
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-6xl bg-white p-8 shadow-lg rounded-lg h-full">
      <img
          src="https://bc3-production-assets-cdn.basecamp-static.com/5321781/people/BAhpBIISoQI=--54400445fe389a1609c1981816b42fd6f04890d5/avatar/in/260/3a3ea00cfc35332cedf6e5e9a32e94da.avif?v=1"
          alt=""
          className="mx-auto h-20 w-auto rounded-full"
        />
        <header className="mb-6 text-center mt-2">
          <h1 className="text-2xl font-semibold">Here are your assignments</h1>
        </header>
        
        <div className="mb-6 flex justify-between items-center">
          <label htmlFor="emailNotification" className="text-sm text-gray-600">
            <input type="checkbox" id="emailNotification" className="form-checkbox h-4 w-4 text-blue-600 mr-2" />
            Emailing my assignments every Monday
          </label>
        </div>
        
        <nav className="mb-6 text-center">
          <button className="text-blue-600 font-semibold mr-8 pb-1 border-b-2 border-blue-600">My assignments</button>
          <button className="text-gray-400 font-semibold pb-1 border-b-2 border-transparent hover:border-gray-400 hover:text-gray-500">Stuff I've assigned</button>
        </nav>
        
        <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded">
          <p className="mb-2 text-md text-gray-600">You don't have any assignments right now</p>
          <p className="text-sm text-gray-400">To-dos and cards assigned to you will show up here.</p>
        </div>
        
      </div>
    </div>
  );
}

export default AssignmentsPage;

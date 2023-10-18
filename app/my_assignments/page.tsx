import React from 'react';

const AssignmentsPage: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-10">
      
      <div className="bg-white w-96 p-8 rounded-lg shadow-md">

        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Here are your assignments</h1>
        </header>
        
        <div className="mb-6 flex justify-between items-center">
          <label htmlFor="emailNotification" className="text-sm text-gray-600">
            <input type="checkbox" id="emailNotification" className="form-checkbox h-4 w-4 text-blue-600 mr-2" />
            Emailing my assignments every Monday
          </label>
        </div>
        
        <nav className="mb-6">
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

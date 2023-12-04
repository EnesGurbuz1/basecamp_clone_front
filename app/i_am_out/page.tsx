// pages/out-of-office.tsx
"use client"
import React, { useState } from 'react';
import { Switch, DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/reset.css'; // Import Ant Design styles or customize in your CSS file

const OutOfOfficePage: React.FC = () => {
  const [isOut, setIsOut] = useState(false);
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(7, 'days'));

  const handleSwitchChange = (checked: boolean) => {
    setIsOut(checked);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Out of Office?</h1>
        {/* ... Other content ... */}
        
        <div className="flex items-center justify-between bg-purple-200 p-4 rounded-md mb-4">
          {/* ... Avatar and name ... */}
          <Switch
            checked={isOut}
            onChange={handleSwitchChange}
            checkedChildren="I'm in"
            unCheckedChildren="I'm out"
          />
        </div>

        {isOut && (
          <div className="bg-purple-100 p-4 rounded-md mb-4">
            <h2 className="text-lg font-bold mb-2">I'll be Out of Office...</h2>
            <div className="flex justify-between mb-2">
              <DatePicker
                value={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <DatePicker
                value={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <button className="bg-purple-600 text-white rounded px-4 py-2">Save</button>
            <p className="text-xs mt-2">Note: It may take up to 30min for your avatar to update everywhere.</p>
          </div>
        
        )}

        {/* ... Other sections ... */}
        <div className="text-sm mt-4">
          <h2 className="font-bold mb-2">How will my colleagues know that I'm out?</h2>
          <p>There are several ways in which we flag that you are out, and when you are coming back:</p>
          <ul className="list-disc pl-4">
            <li className="mb-1">Person Card & Avatar: We place an "OUT" yellow overlay on your avatar across the entire Basecamp.</li>
            <li className="mb-1">Autocomplete: if someone types @yourname, the autocomplete will show that you are out and when you are coming back.</li>
            <li className="mb-1">Your activity: if someone visits your activity page, they will see when you are out and when you are coming back.</li>
          </ul>
        </div>

        <div className="text-sm mt-4">
          <h2 className="font-bold mb-2">Do I get notifications while I'm Out?</h2>
          <p>Out of Office doesn't affect your notifications. To limit your own notifications, you can change your notifications from the <a className="text-blue-500 hover:text-blue-700">Notifications Settings</a></p>
        </div>

        <div className="text-sm mt-4">
          <h2 className="font-bold mb-2">Is there an auto-responder while out?</h2>
          <p>Out of Office is NOT an auto-responder. OOO is a visual way to communicate to other people that you're out, and when you'll be back..</p>
        </div>
      </div>
    </div>
  );
};

export default OutOfOfficePage;

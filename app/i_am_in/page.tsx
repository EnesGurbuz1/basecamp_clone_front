// pages/out-of-office.tsx
import React from 'react';
import { Switch } from 'antd';

const OutOfOfficePage: React.FC = () => {
  // You would manage the switch state here, e.g., with React's useState
  // const [isOutOfOffice, setIsOutOfOffice] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Out of Office?</h1>
        <p className="mb-4">Heading out on holiday? Taking a few days off? Let your colleagues know you're out.</p>
        
        <div className="flex items-center justify-between bg-purple-200 p-4 rounded-md mb-4">
          <div className="flex items-center">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
              M
            </div>
            <div>
              <p className="font-semibold">Murat</p>
              <p className="text-sm">Jr Engineer at Fırat DİKMEN..</p>
            </div>
          </div>
          <Switch checkedChildren="I'm in" unCheckedChildren="I'm out" defaultChecked />
        </div>

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

        {/* ... Other sections ... */}

      </div>
    </div>
  );
};

export default OutOfOfficePage;

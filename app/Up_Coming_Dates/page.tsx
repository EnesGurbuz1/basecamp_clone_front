//Dosya Çalışıyor Bir Sıkıntı Yok
"use client"
import React from 'react';
import { Calendar } from 'antd';
import moment, { Moment } from 'moment';
import 'antd/dist/reset.css';

const UpcomingDates: React.FC = () => {
  // Function to render custom data in calendar cells
  const dateCellRender = (value: Moment) => {
    // You can customize the content here based on the date
    return null; // Currently, no custom content
  };

  // Function to render a custom header in the calendar
  const headerRender = ({ value, type, onChange, onTypeChange }) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    const current = value.clone();
    const localeData = value.localeData();
    const months = [];
    for (let i = 0; i < 12; i++) {
      current.month(i);
      months.push(localeData.monthsShort(current));
    }

    for (let index = start; index < end; index++) {
      monthOptions.push(
        <option key={`${index}`} value={index}>
          {months[index]}
        </option>,
      );
    }

    const month = value.month();

    const year = value.year();
    const options = [];
    for (let i = year - 10; i < year + 10; i += 1) {
      options.push(
        <option key={i} value={i} className="leading-none">
          {i}
        </option>,
      );
    }
    return (
      <div className="flex items-center justify-between px-2 py-4">
        <div>
          <a onClick={() => onChange(value.clone().subtract(1, 'month'))}>
            <div className="cursor-pointer">&lt;</div>
          </a>
        </div>
        <div>
          <span className="text-xl font-semibold">{year}</span>
          <span className="text-xl mx-2">-</span>
          <span className="text-xl font-semibold">{months[month]}</span>
        </div>
        <div>
          <a onClick={() => onChange(value.clone().add(1, 'month'))}>
            <div className="cursor-pointer">&gt;</div>
          </a>
        </div>
      </div>
    );
  };


  
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center my-4">
          Upcoming Dates
        </h2>
        <p className="text-blue-500 cursor-pointer hover:underline">
          Add this Schedule to your Google Calendar, Outlook, or iCal...
        </p>
      </div>
      <Calendar dateCellRender={dateCellRender} headerRender={headerRender} />
      <div className="text-center my-4">
        <div className="text-lg">
          <strong>SUN, NOV 26</strong>
        </div>
        <p>Nothing's on the schedule</p>
      </div>
      <div className="text-center pb-4">
        <p className="text-blue-500 cursor-pointer hover:underline">
          Show everything up to Feb 29, 2024
        </p>
      </div>
    </div>
  );
};

export default UpcomingDates;




////Daha gelişmiş verisyonu ama basecamp sitesinden farklı


// return (
//     <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
//       <div className="flex flex-col items-center">
//         <h2 className="text-3xl font-bold text-center my-4">
//           Upcoming Dates
//         </h2>
//         <p className="text-blue-500 cursor-pointer hover:underline">
//           Add this Schedule to your Google Calendar, Outlook, or iCal...
//         </p>
//       </div>
      
//       {/* Calendar container with max-width and auto margins for horizontal centering */}
//       <div className="max-w-4xl mx-auto">
//         <Calendar />
//       </div>

//       <div className="text-center my-4">
//         <div className="text-lg">
//           <strong>SUN, NOV 26</strong>
//         </div>
//         <p>Nothing's on the schedule</p>
//       </div>
      
//       <div className="text-center pb-4">
//         <p className="text-blue-500 cursor-pointer hover:underline">
//           Show everything up to Feb 29, 2024
//         </p>
//       </div>
//     </div>
//   );
// };

// export default UpcomingDates;
import React from 'react';
 // Stil dosyasını import ediyoruz

const ActivityPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-#283c46">Preferences</h1>
        <div className="flex items-center w-full mb-4">
          <hr className="flex-grow border-#283c46" />
          <h2 className="text-2xl font-semibold text-#283c46 mx-4">Color Theme</h2>
          <hr className="flex-grow border-#283c46" />
        </div>
        <p className="text-center text-#283c46 mb-4">Choose a color for buttons, menus, and accents.</p>
        <div className="flex space-x-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500"></div>
            <div className="w-10 h-10 rounded-full bg-black"></div>
            <div className="w-10 h-10 rounded-full bg-purple-500"></div>
            <div className="w-10 h-10 rounded-full bg-green-500"></div>
            <div className="w-10 h-10 rounded-full bg-orange-500"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
        </div>
        <div className="flex items-center w-full mb-4">
          <hr className="flex-grow border-#283c46" />
          <h2 className="text-2xl font-semibold text-#283c46 mx-4">Appearance</h2>
          <hr className="flex-grow border-#283c46" />
        </div>
        <div className="flex space-x-4 mb-4">
            <button className="px-4 py-2 rounded bg-white border border-gray-300">
                Always light 🔆
            </button>
            <button className="px-4 py-2 rounded bg-white border border-gray-300">
                Always Dark 🌙
            </button>
            <button className="px-4 py-2 rounded bg-white border border-gray-300">
                Same as OS 🖥️
            </button>
        </div>
        <div className="flex items-center w-full mb-2">
          <hr className="flex-grow border-#283c46" />
          <h2 className="text-2xl font-semibold text-#283c46 mx-4">Date/Time</h2>
          <hr className="flex-grow border-#283c46" />
        </div>
        <label className="text-xl font-medium text-#283c46 mb-2 self-start">Time zone</label>
        <small className="text-#283c46 mb-4 self-start">
          Basecamp uses your time zone setting for email notifications, event reminders, 
          <a href="#" className="text-blue-500 underline">your profile</a>, and 
          <a href="#" className="text-blue-500 underline">your notification settings</a>.
        </small>
        <div className="border border-gray-300 rounded p-2 mb-4 w-full">
          <select className="input input--select input--square w-full" name="person[time_zone_name]" id="person_time_zone_name">
              {/* Burada optionlarınızı ekleyebilirsiniz. Örnek olarak birkaçını ekledim. */}
              <option value="International Date Line West">(GMT-12:00) International Date Line West</option>
              <option value="American Samoa">(GMT-11:00) American Samoa</option>
              <option value="Midway Island">(GMT-11:00) Midway Island</option>
              {/* ... Diğer optionlarınız ... */}
          </select>
        </div>
        <label className="text-xl font-medium text-#283c46 mb-2 self-start">First day of the week</label>
        <small className="text-#283c46 mb-4 self-start">
          Basecamp uses this when presenting calendars.
        </small>
        <div className="border border-gray-300 rounded p-2 mb-4 w-full">
          <select className="input input--select input--square w-full" name="person[first_week_day]" id="person_first_week_day">
              <option selected value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
          </select>
        </div>
        <label className="text-xl font-medium text-#283c46 mb-2 self-start">Time format</label>
        <small className="text-#283c46 mb-4 self-start">
          Basecamp uses this format when displaying the time.
        </small>
        <div className="border border-gray-300 rounded p-2 mb-4 w-full">
          <select className="input input--select input--square w-full" name="person[time_format]" id="person_time_format">
              <option selected value="twelve_hour">12-hour clock</option>
              <option value="twenty_four_hour">24-hour clock</option>
          </select>
        </div>
        <button className="bg-green-500 text-white px-12 py-2 w-full rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
  Save my Date/Time changes
</button>



      </div>
    </div>
  );
}

export default ActivityPage;

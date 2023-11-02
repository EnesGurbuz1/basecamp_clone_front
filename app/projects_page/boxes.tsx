import React from 'react';

function Boxes() {
  return (
    <div className="flex space-x-4 mt-8">
      <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
        <h2 className="border-b pb-2 mb-4 text-sm text-center">Box 1 Başlık</h2>
        <div className="flex items-center space-x-2 mb-2">
          <input type="checkbox" id="task1" className="form-checkbox h-4 w-4 text-blue-600" />
          <label htmlFor="task1" className="text-xs">Görev 1</label>
        </div>
        <p className="text-2xs">Görev Açıklaması</p>
      </div>
      <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
        <h2 className="border-b pb-2 mb-4 text-sm text-center">Box 2 Başlık</h2>
        <div className="flex items-center space-x-2 mb-2">
          <input type="checkbox" id="task2" className="form-checkbox h-4 w-4 text-blue-600" />
          <label htmlFor="task2" className="text-xs">Görev 2</label>
        </div>
        <p className="text-2xs">Görev Açıklaması</p>
      </div>
      <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
        <h2 className="border-b pb-2 mb-4 text-sm text-center">Box 3 Başlık</h2>
        <div className="flex items-center space-x-2 mb-2">
          <input type="checkbox" id="task3" className="form-checkbox h-4 w-4 text-blue-600" />
          <label htmlFor="task3" className="text-xs">Görev 3</label>
        </div>
        <p className="text-2xs">Görev Açıklaması</p>
      </div>
    </div>
  );
}

export default Boxes;

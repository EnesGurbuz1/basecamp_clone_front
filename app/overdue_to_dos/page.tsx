"use client"

import { Checkbox } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import React from 'react';

interface OverdueTodo {
  id: number;
  title: string;
  projectName: string;
  overdueDays: number;
  dueDateRange: string;
  assignedTo: string;
}

// Example data - you would fetch this from your backend or state management store.
const overdueTodos: OverdueTodo[] = [
  {
    id: 1,
    title: 'deneme',
    projectName: 'Analiz in Projects',
    overdueDays: 101,
    dueDateRange: 'Thu, Aug 17',
    assignedTo: 'Hasan K.',
  },
  {
    id: 2,
    title: 'diyagram',
    projectName: 'Veritabani Diagram in Projects',
    overdueDays: 141,
    dueDateRange: 'Tue, Jul 4 - Sat, Jul 8',
    assignedTo: 'Enes',
  },
  // ... more overdueTodos
];

const OverdueTodosPage: React.FC = () => {
    return (
      <div className="flex justify-center items-center p-6 bg-gray-100 min-h-screen">
        <div className="w-full max-w-3xl bg-white rounded shadow">
          <h1 className="text-3xl font-bold text-center text-red-500 p-4 border-b">Overdue to-dos</h1>
          <div className="divide-y">
            {overdueTodos.map((todo, index) => (
              <div key={todo.id} className={`p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl text-gray-800">{todo.overdueDays} days overdue</h2>
                  <span className="px-3 py-1 text-sm text-yellow-800 bg-yellow-200 rounded-full flex items-center">
                    <ClockCircleOutlined className="mr-1" />
                    {todo.projectName}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <Checkbox />
                  <span className="ml-2 flex-1">{todo.title}</span>
                  <span className="text-sm text-gray-500">{todo.dueDateRange}</span>
                  <span className="ml-4 px-3 py-1 text-sm text-blue-800 bg-blue-200 rounded-full">{todo.assignedTo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OverdueTodosPage;
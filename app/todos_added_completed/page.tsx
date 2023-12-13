"use client"
import { useState } from 'react';
import { Button, Divider, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

// Örnek veriler, durum yönetim mantığınızla değiştirin
const sampleTodos: TodoItem[] = [
  // ... to-do öğeleriniz
];

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(sampleTodos);

  // Tarih işleme mantığı ile değiştirin
  const [currentDate, setCurrentDate] = useState<string>('Sunday, November 26');

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white shadow-xl rounded px-10 py-8 mb-8 w-full max-w-4xl">
          <div className="mb-8 flex justify-center items-center">
            <Button type="default" shape="circle" icon={<LeftOutlined />} size="large" />
            <Title level={2} className="mx-5">
              {currentDate}
            </Title>
            <Button type="default" shape="circle" icon={<RightOutlined />} size="large" />
          </div>
          <Divider> To-dos added & completed </Divider>
          <div className="flex justify-between text-lg">
            <div className="w-1/2 text-center">
              <Title level={4}>No to-dos were added</Title>
            </div>
            <div className="w-1/2 text-center">
              <Title level={4}>No to-dos were completed</Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

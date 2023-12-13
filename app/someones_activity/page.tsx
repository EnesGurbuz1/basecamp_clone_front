"use client"
import { Input, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

interface ActivityItem {
  key: string;
  name: string;
  role: string;
  company: string;
  avatar?: string; // Optional, in case there's an avatar image
}

const activities: ActivityItem[] = [
  {
    key: '1',
    name: 'Murat',
    role: 'Jr Engineer',
    company: 'Firat DIKMEN',
    avatar: 'M',
  },
  {
    key: '2',
    name: 'Elif',
    role: 'Engineer',
    company: 'Firat DIKMEN',
    // Add avatar if available
  },
  {
    key: '3',
    name: 'Enes',
    role: 'Co-Engineer',
    company: 'Firat DIKMEN',
    // Add avatar if available
  },
  // ... more items
];

const ActivityPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md px-2">
        <div className="text-xl font-semibold mb-2">
        Whose activity would you like to see?
        </div>
        <Input.Search
          placeholder="Jump to a person..."
          onSearch={(value) => console.log(value)}
          className="mb-4"
        />
        <List
          itemLayout="horizontal"
          dataSource={activities}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  item.avatar ? (
                    <Avatar>{item.avatar}</Avatar>
                  ) : (
                    <Avatar icon={<UserOutlined />} />
                  )
                }
                title={<a href="javascript:void(0);">{item.name}</a>}
                description={`${item.role} at ${item.company}`}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ActivityPage;

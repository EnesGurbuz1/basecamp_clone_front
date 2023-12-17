// pages/Page.tsx

import { Menu, Button } from 'antd';
import 'antd/dist/reset.css'; // Make sure to import the styles for Ant Design

export default function Page() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto flex">
        {/* Sidebar .*/}
        <div className="w-1/4 p-4 bg-white shadow-lg">
          <Menu mode="vertical">
  <Menu.Item key="1">My Assignments</Menu.Item>
  <Menu.Item key="2">My Bookmarks</Menu.Item>
  <Menu.Item key="3">My Schedule</Menu.Item>
  <Menu.Item key="4">My Drafts</Menu.Item>
  <Menu.Item key="5">My Recent Activity</Menu.Item>
  <Menu.Item key="6">My Boosts</Menu.Item>
</Menu>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-600">Recently visited</h4>
            {/* Add a list of recently visited items here */}
          </div>
        </div>
        {/* Main Content */}
        <div className="w-3/4 p-4">
          <div className="bg-white p-4 rounded shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">P</h2>
              <Button type="primary">Choose a color</Button>
            </div>
            <div className="my-4">
              {/* Toggle Switch UI for "Always light.." */}
              Always light
            </div>
            <div className="my-4">
              <h4 className="text-gray-600">Time zone</h4>
              {/* Dropdown or select UI for timezone */}
            </div>
            <div className="my-4">
              <h4 className="text-gray-600">First day of the week</h4>
              {/* Dropdown or select UI for days of the week */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

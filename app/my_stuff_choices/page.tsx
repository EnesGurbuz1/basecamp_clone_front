// pages/index.tsx..
"use client"
import React from 'react';
import { Layout, Menu } from 'antd';
import { BookOutlined, CalendarOutlined, DragOutlined, StarOutlined, RiseOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

export default function HomePage() {
  return (
    <Layout className="h-screen">
      <Sider width={200} className="site-layout-background">
        <Menu mode="vertical" defaultSelectedKeys={['1']} className="h-full border-r">
          <Menu.Item key="1" icon={<BookOutlined />}>
            My Assignments
          </Menu.Item>
          <Menu.Item key="2" icon={<StarOutlined />}>
            My Bookmarks
          </Menu.Item>
          <Menu.Item key="3" icon={<CalendarOutlined />}>
            My Schedule
          </Menu.Item>
          <Menu.Item key="4" icon={<DragOutlined />}>
            My Drafts
          </Menu.Item>
          <Menu.Item key="5" icon={<RiseOutlined />}>
            My Recent Activity
          </Menu.Item>
          <Menu.Item key="6" icon={<ClockCircleOutlined />}>
            My Boosts
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="p-6 bg-white">
        <Content>
          <div className="text-xl font-bold mb-4">Recently Visited</div>
          {/* Add content here */}
        </Content>
      </Layout>
    </Layout>
  );
}

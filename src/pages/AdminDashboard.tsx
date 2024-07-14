// src/pages/AdminDashboard.tsx

import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const AdminDashboard: React.FC = () => {
  const { '*': subPage } = useParams();  // Get the subpage path

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Admin Panel</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/admin/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              <Link to="/admin/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<NotificationOutlined />}>
              <Link to="/admin/notifications">Notifications</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>{subPage ? subPage : 'Dashboard'}</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Routes>
              <Route path="/" element={<h2>Welcome to the Admin Dashboard</h2>} />
              <Route path="users" element={<h2>User Management</h2>} />
              <Route path="settings" element={<h2>Settings</h2>} />
              <Route path="notifications" element={<h2>Notifications</h2>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;

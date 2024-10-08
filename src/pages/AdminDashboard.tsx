import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserSwitchOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UploadOutlined,
  FileImageOutlined,
  BarsOutlined,
  PlusSquareOutlined
} from "@ant-design/icons";
import { Routes, Route, Link, useParams } from "react-router-dom";
import UserManagement from "../components/user managment/UserManagement";
import RoleManagement from "../components/role managment/RoleManagement";
import UploadFile from "../components/upload files/UploadFiles";
import FileList from "../components/upload files/Files";
import Category from "../components/category/CategoryManegment";


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const AdminDashboard: React.FC = () => {
  const { "*": subPage } = useParams();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="header"
        style={{ backgroundColor: "#003366", color: "#ffffff" }}
      >
        <div className="logo" style={{ color: "#ffffff", fontSize: "24px" }}>
          Admin Panel
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#003366" }}
        >
          <Menu.Item key="1" style={{ color: "#ffffff" }}>
            Admin Panel
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              height: "100%",
              borderRight: 0,
              backgroundColor: "#f5f5f5",
            }}
          >
            <SubMenu
              key="1"
              icon={<UserOutlined />}
              title="User Manegment"
              style={{ color: "#003366" }}
            >
              <Menu.Item
                key="Users"
                icon={<UserOutlined />}
                style={{ color: "#003366" }}
              >
                <Link to="/admin/users" style={{ color: "#003366" }}>
                  Users
                </Link>
              </Menu.Item>
              <Menu.Item
                key="Roles"
                icon={<UserSwitchOutlined />}
                style={{ color: "#003366" }}
              >
                <Link to="/admin/roles" style={{ color: "#003366" }}>
                  User Roles
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key="3"
              icon={<LaptopOutlined />}
              style={{ color: "#003366" }}
            >
              <Link to="/admin/settings" style={{ color: "#003366" }}>
                Settings
              </Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<NotificationOutlined />}
              style={{ color: "#003366" }}
            >
              <Link to="/admin/notifications" style={{ color: "#003366" }}>
                Notifications
              </Link>
            </Menu.Item>
            <SubMenu
              key="5"
              icon={<FileImageOutlined />}
              title="Files"
              style={{ color: "#003366" }}
            >
              <Menu.Item
                key="uploadFiles"
                icon={<UploadOutlined />}
                style={{ color: "#003366" }}
              >
                <Link to="/admin/uploadFiles" style={{ color: "#003366" }}>
                  Upload Files
                </Link>
              </Menu.Item>
              <Menu.Item
                key="files"
                icon={<FileImageOutlined />}
                style={{ color: "#003366" }}
              >
                <Link to="/admin/files" style={{ color: "#003366" }}>
                  View Files
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="6"
              icon={<BarsOutlined />}
              title="Category"
              style={{ color: "#003366" }}
            >
              <Menu.Item key="Create" icon={<PlusSquareOutlined />} style={{ color: "#003366" }}
              >
                                <Link to="/admin/addCategory" style={{ color: "#003366" }}>Add Category</Link>

              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px", backgroundColor: "#f5f5f5" }}>
          <Breadcrumb style={{ margin: "16px 0", color: "#003366" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>{subPage ? subPage : "Dashboard"}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: "#ffffff",
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <h2 style={{ color: "#003366" }}>
                    Welcome to the Admin Dashboard
                  </h2>
                }
              />
              <Route path="users" element={<UserManagement />} />
              <Route path="roles" element={<RoleManagement />} />
              <Route path="uploadFiles" element={<UploadFile />} />
              <Route path="addCategory" element={<Category />} />
              <Route path="files" element={<FileList />} />
              <Route
                path="settings"
                element={<h2 style={{ color: "#003366" }}>Setting</h2>}
              />
              <Route
                path="notifications"
                element={<h2 style={{ color: "#003366" }}>Notifications</h2>}
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;

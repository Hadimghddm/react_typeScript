import React, { useState, useEffect } from "react";
import { Form, message } from "antd";
import UserTable from "./UserTable";
import UserFormModal from "./UserFormModal";
import RoleFormModal from "./RoleFormModal";
import UserLogsModal from "./UserLogsModal";
import UserFilter from "./UserFilter";
import {
  deleteUser,
  findAllUsers,
  update,
  filterUsers,
  createUser,
  updateAssignmentRole,
  userLog,
} from "../../services/userService";
import { getRoles } from "../../services/roleService";
import { User, Role } from "./types";

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRoleModalVisible, setIsRoleModalVisible] = useState(false);
  const [isLogModalVisible, setIsLogModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [logs, setLogs] = useState<any[]>([]);
  const [form] = Form.useForm();
  const [roleForm] = Form.useForm();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [filter, setFilter] = useState<string>("");

  const fetchUsers = async (page: number, pageSize: number) => {
    try {
      const response = await findAllUsers(page, pageSize);
      setUsers(response.data);
      setPagination({
        current: page,
        pageSize,
        total: response.meta.totalItems,
      });
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await getRoles();
      if (response.status === "Success" && Array.isArray(response.data)) {
        setRoles(response.data);
      } else {
        console.error("Roles data is not in expected format");
        message.error("Failed to fetch roles");
      }
    } catch (error) {
      console.error("Error fetching roles:", error);
      message.error("Failed to fetch roles");
    }
  };

  useEffect(() => {
    fetchUsers(pagination.current, pagination.pageSize);
    fetchRoles();
  }, []);

  const handleTableChange = (pagination: any) => {
    fetchUsers(pagination.current, pagination.pageSize);
  };

  const handleFilterUsers = async () => {
    try {
      const response = await filterUsers({ Date: filter });
      setUsers(response.data);
    } catch (error) {
      message.error("Failed to filter users");
    }
  };

  const fetchUserLogs = async (userId: number) => {
    try {
      const response = await userLog(userId);
      if (response.status === "Success" && Array.isArray(response.data)) {
        setLogs(response.data);
        setIsLogModalVisible(true);
      } else {
        message.error("Failed to fetch user logs");
      }
    } catch (error) {
      console.error("Failed to fetch user logs", error);
      message.error("Failed to fetch user logs");
    }
  };

  const handleEditUser = (record: User) => {
    setEditingUser(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleUpdateUser = async (id: number, values: Record<any, any>) => {
    try {
      await update(id, values);
      message.success("User updated successfully");
      fetchUsers(pagination.current, pagination.pageSize);
    } catch (error) {
      message.error("Failed to update user");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      message.success("User deleted successfully");
      fetchUsers(pagination.current, pagination.pageSize);
    } catch (error) {
      message.error("Failed to delete user");
    }
  };

  const handleUpdateRole = async (values: Record<any, any>) => {
    try {
      if (editingUser) {
        await updateAssignmentRole({
          title: values.role,
          userId: editingUser.id,
        });
        message.success("Role updated successfully");
        fetchUsers(pagination.current, pagination.pageSize);
        setIsRoleModalVisible(false);
        setEditingUser(null);
      }
    } catch (error) {
      message.error("Failed to update role");
    }
  };

  const handleRoleClick = (record: User) => {
    setEditingUser(record);
    roleForm.setFieldsValue({ role: record.role });
    setIsRoleModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingUser) {
        await handleUpdateUser(editingUser.id, values);
      } else {
        const newUser = await createUser(values);
        message.success("User created successfully");
        setUsers([...users, newUser]);
        setPagination((prev) => ({ ...prev, total: prev.total + 1 }));
        await fetchUsers(pagination.current, pagination.pageSize);
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingUser(null);
    } catch (error) {
      console.error("Failed to save user", error);
      message.error("Failed to save user");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingUser(null);
  };

  const handleRoleCancel = () => {
    setIsRoleModalVisible(false);
    roleForm.resetFields();
    setEditingUser(null);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setIsModalVisible(true);
  };

  return (
    <>
      <UserFilter
        filter={filter}
        onFilterChange={setFilter}
        onFilterUsers={handleFilterUsers}
        onAddUser={handleAddUser}
      />
      <UserTable
        users={users}
        pagination={pagination}
        onEdit={handleEditUser}
        onDelete={handleDelete}
        onRoleClick={handleRoleClick}
        onLogClick={fetchUserLogs}
        onTableChange={handleTableChange}
      />
      <UserFormModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        form={form}
        editingUser={editingUser}
      />
      <RoleFormModal
        visible={isRoleModalVisible}
        onOk={async () => {
          try {
            const values = await roleForm.validateFields();
            await handleUpdateRole(values);
          } catch (error) {
            message.error("Failed to update role");
          }
        }}
        onCancel={handleRoleCancel}
        form={roleForm}
        roles={roles}
      />
      <UserLogsModal
        visible={isLogModalVisible}
        logs={logs}
        onCancel={() => setIsLogModalVisible(false)}
      />
    </>
  );
};

export default UserManagement;

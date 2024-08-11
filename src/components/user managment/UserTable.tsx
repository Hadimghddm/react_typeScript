import React from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import { User } from "./types";

interface UserTableProps {
  users: User[];
  pagination: any;
  onEdit: (record: User) => void;
  onDelete: (id: number) => void;
  onRoleClick: (record: User) => void;
  onLogClick: (userId: number) => void;
  onTableChange: (pagination: any) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  pagination,
  onEdit,
  onDelete,
  onRoleClick,
  onLogClick,
  onTableChange,
}) => {
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text: string, record: User) => (
        <Button
          type="link"
          style={{ color: "#003366" }}
          onClick={() => onLogClick(record.id)}
        >
          {text}
        </Button>
      ),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role: string | undefined, record: User) => (
        <Button
          type="link"
          style={{ color: "#008080" }}
          onClick={() => onRoleClick(record)}
        >
          {role ? role : "No Role"}
        </Button>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (text: any, record: User) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger style={{ color: "#ff9900" }}>
              Delete
            </Button>
          </Popconfirm>
          <Button
            type="link"
            style={{ color: "#003366" }}
            onClick={() => onEdit(record)}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey="id"
      pagination={pagination}
      onChange={onTableChange}
    />
  );
};

export default UserTable;

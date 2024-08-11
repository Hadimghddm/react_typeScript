import React from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import { Role } from "../user managment/types"; // Assuming types are in a separate file

interface RoleTableProps {
  roles: Role[];
  onEdit: (record: Role) => void;
  onDelete: (id: number) => void;
}

const RoleTable: React.FC<RoleTableProps> = ({ roles, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Actions",
      key: "action",
      render: (text: any, record: Role) => (
        <Space size="middle">
          <Button type="link" style={{ color: "#003366" }} onClick={() => onEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this role?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger style={{ color: "#ff9900" }}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={roles} rowKey="id" />;
};

export default RoleTable;

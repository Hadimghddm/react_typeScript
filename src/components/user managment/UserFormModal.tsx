import React from "react";
import { Modal, Form, Input } from "antd";
import { User } from "./types";

interface UserFormModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  form: any;
  editingUser: User | null;
}

const UserFormModal: React.FC<UserFormModalProps> = ({
  visible,
  onOk,
  onCancel,
  form,
  editingUser,
}) => {
  return (
    <Modal
      title={editingUser ? "Edit User" : "Add User"}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Save"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input the first name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input the last name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input the email!" }]}
        >
          <Input type="email" />
        </Form.Item>
        {!editingUser && (
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input the password!" }]}
          >
            <Input.Password />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};

export default UserFormModal;

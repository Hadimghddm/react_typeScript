import React from "react";
import { Modal, Form, Input } from "antd";

interface RoleAssignmentModalProps {
  visible: boolean;
  onCancel: () => void;
  onAssign: (values: { title: string; userName: string }) => void;
}

const RoleAssignmentModal: React.FC<RoleAssignmentModalProps> = ({ visible, onCancel, onAssign }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onAssign(values);
      form.resetFields();
    } catch (error) {
      // Handle form validation error
    }
  };

  return (
    <Modal
      title="Assign Role"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="Assign"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Role Title"
          rules={[{ required: true, message: "Please input the role title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="userName"
          label="User Name"
          rules={[{ required: true, message: "Please input the username!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RoleAssignmentModal;

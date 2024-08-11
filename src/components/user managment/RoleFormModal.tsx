import React from "react";
import { Modal, Form, Select } from "antd";
import { Role } from "./types";

interface RoleFormModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  form: any;
  roles: Role[];
}

const RoleFormModal: React.FC<RoleFormModalProps> = ({
  visible,
  onOk,
  onCancel,
  form,
  roles,
}) => {
  return (
    <Modal
      title="Update Role"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Update"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please select a role!" }]}
        >
          <Select placeholder="Select a role">
            {roles.map((role) => (
              <Select.Option key={role.id} value={role.title}>
                {role.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RoleFormModal;

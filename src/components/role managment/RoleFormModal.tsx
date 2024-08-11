import React from "react";
import { Modal, Form, Input } from "antd";
import { Role } from ".././user managment/types";
interface RoleFormModalProps {
    visible: boolean;
    onCancel: () => void;
    onSave: (values: { title: string }) => void;
    initialValues?: Role | null;
  }
  
  const RoleFormModal: React.FC<RoleFormModalProps> = ({
    visible,
    onCancel,
    onSave,
    initialValues = null,
  }) => {
    const [form] = Form.useForm();
  
    // Reset form fields when modal visibility changes or when initialValues changes
    React.useEffect(() => {
      form.resetFields();
      if (initialValues) {
        form.setFieldsValue(initialValues);
      }
    }, [visible, initialValues, form]);
  
    const handleOk = async () => {
      try {
        const values = await form.validateFields();
        onSave(values);
        form.resetFields(); // Reset fields after successful save
      } catch (error) {
        // Handle form validation error
      }
    };
  
    return (
      <Modal
        title={initialValues ? "Edit Role" : "Add Role"}
        visible={visible}
        onOk={handleOk}
        onCancel={onCancel}
        okText="Save"
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
        </Form>
      </Modal>
    );
  };
  
  export default RoleFormModal;
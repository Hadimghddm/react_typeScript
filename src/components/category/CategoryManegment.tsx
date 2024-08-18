import { Alert, Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import create from "../../services/categoryService";

const Category: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (values: { title: string; parentTitle?: string }) => {
    try {
      const response = await create(values);

      if (response.status === "error") {
        setError(response.message);
        return;
      }

      setSuccess(`Category has been created. Category: ${response.title}`);
      form.resetFields();
    } catch (error: any) {
      setError(error.message || "Failed to create category");
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setError(null);
    setSuccess(null);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setError(null);
    setSuccess(null);
    form.resetFields();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Category
      </Button>
      <Modal
        title="Add Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ title: "", parentTitle: "" }}
        >
          <Form.Item
            label="Category Title"
            name="title"
            rules={[
              { required: true, message: "Please input category title!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Parent Category Title (Optional)"
            name="parentTitle"
          >
            <Input />
          </Form.Item>

          {error && <Alert message={error} type="error" />}
          {success && <Alert message={success} type="success" />}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Category
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Category;

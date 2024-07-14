// src/pages/ForgotPasswordPage.tsx

import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (values: { email: string }) => {
    // Add forgot password logic here
    console.log('Forgot password for', values.email);
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', padding: '50px 0' }}>
      <h2>Forgot Password</h2>
      <Form
        name="forgot-password"
        initialValues={{ remember: true }}
        onFinish={handleForgotPassword}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Send Reset Link
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPasswordPage;

// src/pages/LoginPage.tsx

import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (values: { email: string; password: string }) => {
    // Add login logic here
    console.log('Logging in with', values.email, values.password);
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', padding: '50px 0' }}>
      <h2>Login</h2>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
          <Link to="/admin">login</Link>
          </Button>
        </Form.Item>
      </Form>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
        <br />
        <Link to="/generate-otp">Login with OTP</Link>
      </div>
    </div>
  );
};

export default LoginPage;

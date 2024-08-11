import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../context/auth/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { email, password, setEmail, setPassword, handleSubmit } = useAuth();

  return (
    <div style={{
      maxWidth: 400,
      margin: 'auto',
      padding: '50px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ textAlign: 'center', color: '#003366' }}>Login</h2>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={() => handleSubmit && handleSubmit()}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: '#003366' }} />}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail && setEmail(e.target.value)}
            style={{ borderColor: '#008080' }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined style={{ color: '#003366' }} />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword && setPassword(e.target.value)}
            style={{ borderColor: '#008080' }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ backgroundColor: '#003366', borderColor: '#003366' }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <Link to="/forgot-password" style={{ color: '#008080' }}>Forgot Password?</Link>
        <br />
        <Link to="/generate-otp" style={{ color: '#ff9900' }}>Login with OTP</Link>
      </div>
    </div>
  );
};

export default LoginPage;

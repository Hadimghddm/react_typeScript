// src/components/LoginWithOtpForm.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { loginWithOtp } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginWithOtpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    setSuccess(null);
    try {
      // Call the API to login with OTP
      const response = await loginWithOtp(email, otp);
      
      // Handle response, if login is successful, redirect to admin
      if (response.data.message === 'Login successfully!') {
        console.log(":::::::::::::::::::::::::::::::::::");
        setSuccess('Login successfully!');
        
        navigate('/admin');
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <Form onFinish={handleLogin} layout="vertical">
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="OTP" name="otp" rules={[{ required: true, message: 'Please input your OTP!' }]}>
        <Input value={otp} onChange={(e) => setOtp(e.target.value)} />
      </Form.Item>
      {error && <Alert message={error} type="error" />}
      {success && <Alert message={success} type="success" />}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginWithOtpForm;

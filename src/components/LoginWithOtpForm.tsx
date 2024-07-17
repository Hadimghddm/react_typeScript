// src/components/LoginWithOtpForm.tsx
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert, Statistic, Row, Col } from 'antd';
import { loginWithOtp } from '../services/authService';
import { Link, useNavigate } from 'react-router-dom';

const LoginWithOtpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [deadline, setDeadline] = useState(Date.now() + 3 * 60 * 1000); // 3 minutes from now
  const [showRefreshLink, setShowRefreshLink] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    setSuccess(null);
    try {
      // Call the API to login with OTP
      const response = await loginWithOtp(email, otp);
      
      // Handle response, if login is successful, redirect to admin
      if (response.data.message === 'Login successfully!') {
        setSuccess('Login successfully!');
        navigate('/admin');
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() > deadline) {
        setShowRefreshLink(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

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
        <Row gutter={16} align="middle">
          <Col>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Col>
          <Col>
            {showRefreshLink ? (
              <Link to="/refresh-otp">Refresh OTP</Link>
            ) : (
              <Statistic.Countdown 
                title="Time remaining"
                value={deadline}
                onFinish={() => setShowRefreshLink(true)}
              />
            )}
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default LoginWithOtpForm;

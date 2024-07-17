import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { refreshOtp } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const RefreshOtpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRefreshOtp = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      await refreshOtp(email);
      setSuccess('OTP has been refreshed and sent to your email');
      navigate('/login-otp');
    } catch (error) {
      setError('Failed to refresh OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      onFinish={handleRefreshOtp}
      layout="vertical"
      initialValues={{ email }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      {error && <Alert message={error} type="error" />}
      {success && <Alert message={success} type="success" />}
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Refresh OTP
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RefreshOtpForm;

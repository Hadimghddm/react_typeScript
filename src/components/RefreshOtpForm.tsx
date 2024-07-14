// src/components/RefreshOtpForm.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { refreshOtp } from '../services/authService';

const RefreshOtpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRefreshOtp = async () => {
    setError(null);
    setSuccess(null);
    try {
      await refreshOtp(email);
      setSuccess('OTP has been refreshed and sent to your email');
    } catch (error) {
      setError('Failed to refresh OTP');
    }
  };

  return (
    <Form onFinish={handleRefreshOtp} layout="vertical">
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      {error && <Alert message={error} type="error" />}
      {success && <Alert message={success} type="success" />}
      <Form.Item>
        <Button type="primary" htmlType="submit">Refresh OTP</Button>
      </Form.Item>
    </Form>
  );
};

export default RefreshOtpForm;

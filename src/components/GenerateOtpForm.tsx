// src/components/GenerateOtpForm.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { generateOtp, findOneUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const GenerateOtpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);
    try {
      // Validate the email before generating OTP
      const response = await findOneUser(email);
      if (response.data.message !== 'Valid user') {
        setError('Invalid email');
        return;
      }

      // Generate OTP if the email is valid
      const otpResponse = await generateOtp(email);
      const otpCode = otpResponse.data.otpCode;
      setSuccess(`OTP has been sent to your email. OTP: ${otpCode}`);
      
      // Navigate to /login-otp after successful OTP generation
      navigate('/login-otp');
    } catch (error) {
      setError('Failed to generate OTP');
    }
  };

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      {error && <Alert message={error} type="error" />}
      {success && <Alert message={success} type="success" />}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Generate OTP
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GenerateOtpForm;

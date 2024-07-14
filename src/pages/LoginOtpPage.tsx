// src/pages/LoginOtpPage.tsx
import React from 'react';
import { Row, Col } from 'antd';
import LoginWithOtpForm from '../components/LoginWithOtpForm';

const LoginOtpPage: React.FC = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <h1>Login with OTP</h1>
        <LoginWithOtpForm />
      </Col>
    </Row>
  );
};

export default LoginOtpPage;

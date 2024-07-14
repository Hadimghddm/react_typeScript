// src/pages/OtpPage.tsx
import React from 'react';
import { Row, Col } from 'antd';
import GenerateOtpForm from '../components/GenerateOtpForm';
import LoginWithOtpForm from '../components/LoginWithOtpForm';

const OtpPage: React.FC = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <h1>Login with OTP</h1>
        <GenerateOtpForm />
        <LoginWithOtpForm />
      </Col>
    </Row>
  );
};

export default OtpPage;

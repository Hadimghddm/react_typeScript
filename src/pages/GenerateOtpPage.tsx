// src/pages/GenerateOtpPage.tsx
import React from 'react';
import { Row, Col } from 'antd';
import GenerateOtpForm from '../components/GenerateOtpForm';

const GenerateOtpPage: React.FC = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <h1>Generate OTP</h1>
        <GenerateOtpForm />
      </Col>
    </Row>
  );
};

export default GenerateOtpPage;

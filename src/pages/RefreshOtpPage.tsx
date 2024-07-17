import React from 'react';
import { Row, Col } from 'antd';
import RefreshOtpForm from '../components/RefreshOtpForm';

const RefreshOtpPage: React.FC = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <h1>Refresh OTP</h1>
        <RefreshOtpForm />
      </Col>
    </Row>
  );
};

export default RefreshOtpPage;

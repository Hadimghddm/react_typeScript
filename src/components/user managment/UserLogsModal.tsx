import React from "react";
import { Modal, Table, Button } from "antd";

interface UserLogsModalProps {
  visible: boolean;
  logs: any[];
  onCancel: () => void;
}

const UserLogsModal: React.FC<UserLogsModalProps> = ({
  visible,
  logs,
  onCancel,
}) => {
  return (
    <Modal
      title="User Logs"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="close" onClick={onCancel}>
          Close
        </Button>,
      ]}
    >
      <Table
        dataSource={logs}
        columns={[
          {
            title: "Login Time",
            dataIndex: "loginTime",
            key: "loginTime",
            render: (loginTime: string) =>
              new Date(loginTime).toLocaleString(), // Format the loginTime
          },
        ]}
        rowKey="loginTime" // Use loginTime as the row key
        pagination={false}
      />
    </Modal>
  );
};

export default UserLogsModal;

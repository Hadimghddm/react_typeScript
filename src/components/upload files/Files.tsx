import React, { useEffect, useState } from 'react';
import { Card, Col, Row,message,Button } from 'antd';
import { Files,Delete } from '../../services/uploadFile'; 


interface FileData {
    id: number;
    name: string;
    type: string;
    userId: number;
    createdAt: string;
    path: string;
  }
  
  const FilesList: React.FC = () => {
    const [files, setFiles] = useState<FileData[]>([]);
  
    useEffect(() => {
      const fetchFiles = async () => {
        try {
          const response = await Files();
          setFiles(response.data);
        } catch (error) {
          console.error("Failed to fetch files", error);
        }
      };
  
      fetchFiles();
    }, []);
  
    const handleDelete = async (id: number) => {
      try {
        await Delete(id);
        setFiles(files.filter(file => file.id !== id));
        message.success('File deleted successfully');
      } catch (error) {
        console.error('Failed to delete file', error);
        message.error('Failed to delete file');
      }
    };
  
    return (
      <Row gutter={[16, 16]}>
        {files.map((file) => (
          <Col key={file.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={file.name}
                  src={`http://localhost:4000/uploads/${file.path.split('\\').pop()}`}
                  style={{ height: 200, objectFit: 'cover' }}
                />
              }
              actions={[
                <Button
                  type="text"
                  danger
                  onClick={() => handleDelete(file.id)}
                >
                  Delete
                </Button>,
              ]}
            >
              <Card.Meta title={file.name} description={`Uploaded on: ${new Date(file.createdAt).toLocaleDateString()}`} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  
  export default FilesList;
 
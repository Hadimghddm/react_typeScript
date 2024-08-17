import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { Files } from '../../services/uploadFile'; 


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
  
    return (
      <Row gutter={[16, 16]}>
        {files.map((file) => (
          <Col key={file.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={file.name}
                  src="D:\node.js\node.js\uploads\IMG_1719.PNG"// مسیر فایل از API response
                  style={{ height: 200, objectFit: 'cover' }}
                />
              }
            >
              <Card.Meta title={file.name} description={`Uploaded on: ${new Date(file.createdAt).toLocaleDateString()}`} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  
  export default FilesList;


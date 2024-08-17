import React from "react";
import { Upload, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadFile as uploadFileToServer } from "../../services/uploadFile"; 
import "./UploadFiles.css"; 

const UploadFile: React.FC = () => {
  const props = {
    name: "file",
    multiple: false, 
    action: "", 
    customRequest: async (options: any) => {
      const { onSuccess, onError, file, onProgress } = options;
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await uploadFileToServer(formData);
        onSuccess(response.data, file);
        message.success(`${file.name} file uploaded successfully.`);
      } catch (error) {
        onError(error);
        message.error(`${file.name} file upload failed.`);
      }
    },
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <h1>Upload Files</h1>
      <div className="upload-container">
        <Upload {...props} className="custom-upload" listType="picture-circle">
          <Button icon={<PlusOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
    </div>
  );
};

export default UploadFile;

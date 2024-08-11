import React from "react";
import { Input, Button } from "antd";

interface UserFilterProps {
  filter: string;
  onFilterChange: (value: string) => void;
  onFilterUsers: () => void;
  onAddUser: () => void;
}

const UserFilter: React.FC<UserFilterProps> = ({
  filter,
  onFilterChange,
  onFilterUsers,
  onAddUser,
}) => {
  return (
    <div
      style={{
        marginBottom: 16,
        padding: "10px",
        backgroundColor: "#f5f5f5",
        borderRadius: "4px",
      }}
    >
      <Input
        placeholder="Filter users"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ marginRight: 16, width: 200 }}
      />
      <Button
        type="primary"
        onClick={onFilterUsers}
        style={{
          backgroundColor: "#003366",
          borderColor: "#003366",
          marginRight: 16,
        }}
      >
        Filter
      </Button>
      <Button
        type="primary"
        onClick={onAddUser}
        style={{ backgroundColor: "#008080", borderColor: "#008080" }}
      >
        Add User
      </Button>
    </div>
  );
};

export default UserFilter;

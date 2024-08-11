import React, { useState, useEffect } from "react";
import { Button, message } from "antd";
import RoleTable from "./RoleTable";
import RoleFormModal from "./RoleFormModal";
import RoleAssignmentModal from "./RoleAssignmentModal";
import { createRole, deleteRole, getRoles, update } from "../../services/roleService";
import { assignmentRole } from "../../services/userService";
import { Role } from "../user managment/types"; // Assuming types are in a separate file

const RoleManagement: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAssignmentModalVisible, setIsAssignmentModalVisible] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await getRoles();
      if (response.data && Array.isArray(response.data)) {
        setRoles(response.data);
      } else {
        message.error("Failed to fetch roles");
      }
    } catch (error) {
      message.error("Failed to fetch roles");
    }
  };

  const handleDeleteRole = async (id: number) => {
    try {
      await deleteRole(id);
      message.success("Role deleted successfully");
      fetchRoles();
    } catch (error) {
      message.error("Failed to delete role");
    }
  };

  const handleAddRole = () => {
    setEditingRole(null);
    setIsModalVisible(true);
  };

  const handleEditRole = (record: Role) => {
    setEditingRole(record);
    setIsModalVisible(true);
  };

  const handleSaveRole = async (values: { title: string }) => {
    try {
      if (editingRole) {
        await update(editingRole.id, { title: values.title });
        message.success("Role updated successfully");
      } else {
        await createRole(values);
        message.success("Role created successfully");
      }
      fetchRoles();
      setIsModalVisible(false);
      setEditingRole(null);
    } catch (error) {
      message.error("Failed to save role");
    }
  };

  const handleAssignRole = async (values: { title: string; userName: string }) => {
    try {
      await assignmentRole(values);
      message.success("Role assigned successfully");
      setIsAssignmentModalVisible(false);
    } catch (error) {
      message.error("Failed to assign role");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 16, display: "flex", gap: "16px" }}>
        <Button
          type="primary"
          onClick={handleAddRole}
          style={{ backgroundColor: "#003366", borderColor: "#003366" }}
        >
          Add Role
        </Button>
        <Button
          type="primary"
          onClick={() => setIsAssignmentModalVisible(true)}
          style={{ backgroundColor: "#008080", borderColor: "#008080" }}
        >
          Assign Role
        </Button>
      </div>
      <RoleTable roles={roles} onEdit={handleEditRole} onDelete={handleDeleteRole} />
      <RoleFormModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onSave={handleSaveRole}
        initialValues={editingRole}
      />
      <RoleAssignmentModal
        visible={isAssignmentModalVisible}
        onCancel={() => setIsAssignmentModalVisible(false)}
        onAssign={handleAssignRole}
      />
    </div>
  );
};

export default RoleManagement;

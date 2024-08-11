// src/components/types.ts
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role?: string;
  }
  export interface Role {
    id: number;
    title: string;
  }
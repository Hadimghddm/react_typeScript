import React from "react";

import "./App.css";
import AppRouter from "./Router";
import { AuthContextProvider } from "./context/auth/AuthContext";

const App: React.FC = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;

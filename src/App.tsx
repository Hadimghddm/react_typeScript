import React from "react";
// import { Layout } from 'antd';
// import AppBar from './components/AppBar';
// import Sidebar from './components/Sidebar';
// import DataFetcher from './components/DataFetcher';
import "./App.css";
import AppRouter from "./Router";
import { AuthContextProvider } from "./context/auth/AuthContext";

// const { Content } = Layout;

const App: React.FC = () => {
  return (
    // <Layout style={{ minHeight: '100vh' }}>
    //   <Sidebar />
    //   <Layout>
    //     <AppBar />
    //     <Content style={{ padding: '0 24px 24px' }}>
    //       <div
    //         className="site-layout-background"
    //         style={{
    //           padding: 24,
    //           margin: 0,
    //           minHeight: 280,
    //         }}
    //       >
    //         <DataFetcher />
    //       </div>
    //     </Content>
    //   </Layout>
    // </Layout>
    <div>
        <AppRouter />
    </div>
  );
};

export default App;

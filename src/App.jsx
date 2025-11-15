import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MyContext from "./context/MyContext";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"; 

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/", 
      element: (
        <section className="main">
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper transition-all duration-300 ${
                isSidebarOpen ? "w-[18%]" : "w-0 opacity-0"
              }`}
            >
              <Sidebar toggleSidebar={toggleSidebar} />
            </div>

            <div
              className={`contentRight py-5 px-5 transition-all duration-300 ${
                isSidebarOpen ? "w-[82%]" : "w-full"
              }`}
            >
              <Dashboard />
            </div>
          </div>
        </section>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
  };

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export default App;
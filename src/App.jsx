import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Index";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  // ✅ Sidebar toggle state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // ✅ Toggle function
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <section className="main">
            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="contentMain flex">
              {/* Sidebar */}
              <div className={`sidebarWrapper transition-all duration-300 ${isSidebarOpen ? 'w-[18%]' : 'w-0 opacity-0'}`}>
                <Sidebar toggleSidebar={toggleSidebar} />
              </div>

              {/* Main content area */}
              <div
                className={`contentRight py-5 px-5 transition-all duration-300 ${
                  isSidebarOpen ? "w-[82%]" : "w-full"
                }`}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

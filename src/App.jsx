import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MyContext from "./context/MyContext";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"; 
import Product from "./pages/Products";
import AddProduct from "./pages/Products/addProduct";
import { AppBar, Dialog, IconButton, Slide, Toolbar } from "@mui/material";
import { FaDoorClosed } from "react-icons/fa6";
import Typography from '@mui/material/Typography';
import Dashboard from "./pages/Dashboard/Index";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
 const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model : "",
  });

  
     const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  


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

     {
      path: "/products", 
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
              <Product/>
            </div>
          </div>
        </section>
      ),
    },
     {
      path: "/product/upload",
      exact:true,
      element:(
        <>
        <AddProduct/>
        </>
      ),
    },
  ]);
    const [productRows, setProductRows] = useState([
    createData(
      1,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      85
    ),
    createData(
      2,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      35
    ),
    createData(
      3,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      75
    ),
    createData(
      4,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      55
    ),
    createData(
      5,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      15
    ),
    createData(
      6,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      5
    ),
    createData(
      7,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      40
    ),
    createData(
      8,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      20
    ),
    createData(
      9,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      90
    ),
    createData(
      10,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      70
    ),
    createData(
      11,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      40
    ),
    createData(
      12,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      39
    ),
    createData(
      13,
      "Vegetable Steamer for Cooking",
      "Kitchen Appliances",
      "Steamers",
      "₹499",
      "₹299",
      69
    ),
  ]);

function createData(
  id,
  name,
  category,
  subCategory,
  oldPrice,
  newPrice,
  stock
) {
  return { id, name, category, subCategory, oldPrice, newPrice, stock };
}


  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    productRows
  };



  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
        <Dialog
        fullScreen
        open={isOpenFullScreenPanel.open}
        onClose={()=>setIsOpenFullScreenPanel({
          open: false,
        })}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={()=>setIsOpenFullScreenPanel({
                open: false,
              })}
              aria-label="close"
            >
              <FaDoorClosed   />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {isOpenFullScreenPanel ?.model}
            </Typography>
         
          </Toolbar>
        </AppBar>
     
        {
          isOpenFullScreenPanel ?.model === "Add Product" && <AddProduct/>
        }

      </Dialog>

    </MyContext.Provider>
  );
};

export default App;
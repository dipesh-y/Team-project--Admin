import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Index'
const App = () => {

   const router = createBrowserRouter([{
    path:"/",
    element:(
     <>
    <Dashboard/>
    </>
    ),
   }])

  return (
    <>
        <RouterProvider router={router}/>
    </>
    
  )
}

export default App
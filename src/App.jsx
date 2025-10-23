import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Index'
import Header from './components/Header';
const App = () => {

   const router = createBrowserRouter([{
    path:"/",
    element:(
     <>
    <section className='main'>
      <Header/>
    </section>
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
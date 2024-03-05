import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import ProtectedRoute from './routes/Protectedroute'
// import AuthRoute from './routes/Authroute'




const App = () => {
  return (
    <>
      <Routes>
      {/* <Route element={<AuthRoute />}> */}
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      {/* </Route> */}
       
        {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
        {/* </Route> */}

      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />

    </>
  )
}

export default App

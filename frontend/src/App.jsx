import React, { useContext } from 'react'
import Home from './pages/Homepage'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './components/Login';
import { AppContext } from './context/appContext'
const App = () => {
  const {showLogin } = useContext(AppContext);
  return (
  <div className="px-4 sm:px-10 md:px-14 lg:px:28 min-h-screen bg-linear-to-b from-teal-50 to-orange-50 ">
    <Navbar />
    {showLogin && <Login />}
    <Routes> 

      <Route path="/" element={<Home/>}/>
      <Route path="/result" element={<Result />} />
      <Route path="/buy" element={<BuyCredit />} />

    </Routes>
   
  </div>
  )
}

export default App
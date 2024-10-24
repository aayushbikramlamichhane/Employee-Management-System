import { useEffect } from 'react'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

// import AdminDashboard from "./components/Dashboard/AdminDashboard"

// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"

const App = () => {

  useEffect(() => {
    // setLocalStorage()
getLocalStorage()
  })
  

  return (
    <>
    <Login />
    {/* < EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App

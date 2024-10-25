import { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'


import AdminDashboard from "./components/Dashboard/AdminDashboard"

import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData =  useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
  // console.log(authData.employees);
  

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }

  // }, [authData])
  
  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser({role: 'admin'});
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
    }else if(authData){
      const employee = authData.employees.find((e)=> email == e.email && password == e.password);
      if(employee){
        setUser({role: 'employee'});
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}));
      }
    } else{
      alert('wrong credentials');
    }
  }
  
  

  return (
    <>
    {!user ? <Login handleLogin= {handleLogin} />: ''}
    {/* < EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ?<EmployeeDashboard data = { loggedInUserData}/>  : null )}
    </>
  )
}

export default App

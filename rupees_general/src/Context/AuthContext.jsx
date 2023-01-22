import { createContext, useState } from "react";



export const AuthConetxt =  createContext()

const AuthContextProvider = ({children})=>{
  const [data , setdata]  = useState([]);
  const[finalprice , setfinalprice] =useState(0)
  const[token , settoken] = useState("")
  const[username , setusername] = useState("vivek")

  const[userlogin , setuserlogin] = useState(false)
const [adminAuth , setAdminAuth] = useState(false)
  const AdminLogin=()=>{
         setAdminAuth(!adminAuth)
  }
  const UserLogin = ()=>{
    setuserlogin(!userlogin)
  }
 
    
    return <AuthConetxt.Provider value=
    {{
        setdata,
        data,
        finalprice , 
        setfinalprice,
        adminAuth , setAdminAuth,
        AdminLogin,
        userlogin , setuserlogin,
        UserLogin,
        username , setusername
    }}
    
    >{children}</AuthConetxt.Provider>
}

export default AuthContextProvider
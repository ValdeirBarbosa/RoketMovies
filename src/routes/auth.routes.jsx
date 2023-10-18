import {Routes, Route} from "react-router-dom"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { ProfileUser } from "../pages/ProfileUser"
import { Home } from "../pages/Home/Index"



export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sigin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/profile" element={<ProfileUser/>}/>
      
    </Routes>
  )
}
"use client"
import React, { useEffect, useState } from 'react'
import {usePathname} from "next/navigation"
import Header from '../Header/Header';
import Footer from '@/app/Pages/Footer/Footer';
interface propsNavbar {
  children: React.ReactNode;
}

const Navbar : React.FC<propsNavbar>= (props) => {

  const pathname = usePathname();
  const [isLogin ,setIsLogin] = useState(false)
  useEffect(()=> {
    if(pathname === '/Login' || pathname === '/SignUp')
      setIsLogin(true)
    else {
      setIsLogin(false)
    }
 },[pathname])
     
  return (
    <div >
        {isLogin == false ?  <Header /> : "" }
                  {props.children}
         {isLogin == false ?  <Footer /> : "" }
    </div>
  )
}

export default Navbar

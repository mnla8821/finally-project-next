"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import left from "../../../../public/img/left.png";
import right from "../../../../public/img/right.png";


const Info = () => {
         const [valueOfWidth, setValueOfWidth] = useState(false);
         const handleResize = () => {
           if (window.innerWidth <= 640) {
             setValueOfWidth(true);
           } else {
             setValueOfWidth(false);
           }
         };
       
         useEffect(() => {
           // Define An Event When Load A Component
           window.addEventListener("resize", handleResize);
       
           // Execute A Function Once When A Function Is Uploaded
           handleResize();
       
           // Clean Event When End Event
           return () => {
             window.removeEventListener("resize", handleResize);
           };
         }, []);

         return (
         <div className="w-full h-[250vh]"> 
               <div className="w-full h-[17%]  flex justify-between items-center max-sm:w-auto max-sm:justify-center">
                 {valueOfWidth == true ? "" : <Image src={left} alt="left image" />}
                 <h1 className="text-4xl text-[var(--blue)] font-bold w-120 text-center max-md:text-3xl max-sm:text-3xl max-sm:text-center ">
                   تعرف أكثر على المنظمة وذلك من خلال التعرف على
                 </h1>
                 {valueOfWidth == true ? "" : <Image src={right} alt="left image" />}
               </div>
               <div className=" w-full h-[23%] flex justify-evenly items-center max-sm:flex-col max-sm:justify-center max-sm:h-fit">
                 <div className="w-70 h-70 rounded-[50%] bg-[var(--light-blue)] font-bold text-4xl flex justify-center items-center max-sm:my-5 max-sm:w-80 max-sm:h-80">
                   الإستراتيجيات
                 </div>
                 <div className="w-70 h-70 rounded-[50%] bg-[var(--light-blue)] font-bold text-4xl flex justify-center items-center max-sm:my-5 max-sm:w-80 max-sm:h-80">
                   الأهداف
                 </div>
               </div>
               <div className="w-full h-[40%] "></div>
         </div>
     )}

export default Info
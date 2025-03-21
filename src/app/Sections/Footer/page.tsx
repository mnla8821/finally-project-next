"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import left from "../../../../public/img/left.png";
import right from "../../../../public/img/right.png";

const Footer = () => {
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
      <div className="w-full h-[30%]  bg-cover flex justify-between max-sm:flex-col max-sm:items-center bg-[url('/img/footer.png')] ">
        <div className="w-full  h-full flex justify-center items-center underline text-white text-2xl font-bold max-sm:pt-22 ">
          <p className="cursor-pointer">منصة المبدع العربي</p>
        </div>
        <div className="w-full  h-full flex flex-col justify-center items-end pr-34 pt-16  underline text-white text-2xl font-bold max-md:pr-10 max-sm:pr-0 max-sm:items-center ">
          <p className="pt-9 cursor-pointer">الرئيسية</p>
          <p className="pt-9 cursor-pointer">ميزات المنصة</p>
          <p className="pt-9 cursor-pointer">مجالات الكورسات المتاحة</p>
          <p className="pt-9 cursor-pointer">الأهداف -الاستراتيجيات</p>
          <p className="pt-9 cursor-pointer">رؤيتنا</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

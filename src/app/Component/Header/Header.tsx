"use client";
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import logo from "../../../../public/img/logo.jpg";
import { RiMenu3Line } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex justify-center items-center bg-[var(--white-blue)] h-32 max-h-32 nav">
      <div className=" flex justify-evenly items-center w-[30%] login">
        <div className="cursor-pointer text-2xl text-[var(--blue)] bg-white font-bold rounded-full w-20 h-20 flex justify-center items-center translate">
          En
        </div>
        <Link href="/Login" className="cursor-pointer text-2xl text-[var(--white-blue)] bg-[var(--blue)] p-4 rounded-3xl font-bold log-in">
          تسجيل الدخول
        </Link>
      </div>
      <div
        className=" menu w-[70%]"
        style={showMenu == true ? { display: "block" } : { display: "none" }}
      >
        <ul className="flex justify-evenly items-center  ">
          <li className="cursor-pointer text-2xl text-[var(--blue)] font-bold">
            تواصل معنا
          </li>
          <li className="cursor-pointer text-2xl text-[var(--blue)] font-bold">
            تصفح المسارات
          </li>
          <li className="cursor-pointer text-2xl text-[var(--blue)] font-bold">
            الرئيسية
          </li>
          <li
            className="cursor-pointer text-2xl text-[var(--blue)] font-bold"
            style={
              showMenu == true ? { display: "none" } : { display: "block" }
            }
          >
            <Image
              src={logo}
              className="rounded-2xl w-[120px] h-[120px]"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="w-[70%] flex justify-end  pr-18 cursor-pointer menu-icon ">
        {showMenu == true ? (
          <IoAdd
            size={70}
            style={{ rotate: "45deg" }}
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <RiMenu3Line size={50} onClick={() => setShowMenu(true)} />
        )}
      </div>
    </nav>
  );
};

export default Header;

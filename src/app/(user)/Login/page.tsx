import React from "react";
import Link from "next/link";
import Button from "../../Component/Button/Button";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <section className="h-[100vh] flex justify-center items-center">
      <div className="bg-[var(--blue)] h-[70%] w-[28%] rounded-3xl rotate-352 max-sm:w-[75%] max-sm:rotate-357  max-lg:w-[42%]  max-lg:w-[35%]  max-xl:w-[30%]">
        <div className="bg-white h-[100%] w-full rounded-3xl rotate-8 shadow-2xl flex flex-col justify-center max-sm:rotate-3">
          <h2 className="text-3xl  h-[15%] pl-16 font-[500]">
            Login
          </h2>
          <div className="h-[15%] pl-16 w-full flex items-center max-sm:pl-6">
            <input placeholder="Email Address" className=" w-[80%] border-b focus:outline-none" />
          </div>
          <div className="h-[15%] pl-16 w-full flex items-center max-sm:pl-6">
            <input placeholder="Password" className=" w-[80%] border-b focus:outline-none"/>
          </div>
          <Link
            href="/"
            className="h-[10%]  pl-16 px-6 flex items-center font-normal max-sm:pl-6 "
          >
            <Button>Submit</Button>
          </Link>
          <div className="shadow-xl h-[10%] w-full    pt-4 flex items-center   pl-16 max-sm:pl-6">
            <div className=" h-[75%] border  w-auto flex  justify-center items-center px-10 py-4 rounded shadow cursor-pointer max-xl:px-2">
           <FcGoogle size={25}/>   <p className="pl-2 font-[500]"> Continue with Google</p>
            </div>
          </div>
          <Link href="/SignUp" className="h-[10%] bg-white pl-16 pt-6 text-blue-600 cursor-pointer max-sm:pl-6">
               Don&apos;t have an account? Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;

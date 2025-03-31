
import Image from "next/image";
import homeImg from "../../../../public/img/home.jpg";
import Button from "../../Component/Button/Button";
import Link from "next/link";
const Landing = () => {
  return (
    <div className="w-full h-full  bg-gradient-to-b from-[var(--mid-blue)] from-8%  via-[var(--light-blue)] via-90% to-white to-2%  flex flex-col  items-center relative">
      <div className="w-full  h-[100vh] flex items-center max-lg:flex-col max-lg:h-auto  ">
        <div className=" w-full h-fit flex justify-center items-center  max-lg:pt-10 ">
          <Image
            src={homeImg}
            alt=""
            className="w-[70%] h-[70%]  rounded-full"
          />
        </div>
        <div className=" w-full h-fit flex flex-col justify-center items-center ">
          <h1 className="text-[var(--white-blue)] text-[40px] font-bold p-6  max-xl:text-center max-md:text-3xl max-2xl:text-[33px]">
            ! مرحبًا بكم في منصة المبدع العربي
          </h1>
          <p className="text-[var(--white-blue)] text-2xl py-5 rtl px-22  font-bold leading-11  max-md:text-center max-md:text-xl max-xl:px-4">
            حيث نجتمع لنزود أنفسنا بالعلم ونطور مهاراتنا ونتبادل الأفكار
            والخبرات إيمانًا برسالتنا
            <span> &quot;وَقُل رَبِّي زِدْنِي عِلْمًا&quot;</span>
            تسعى منصتنا التعليمية الإلكترونية المجانية، التي أسسها فريق من
            الشباب الملتزمين بالإنسانية وحب الخير، إلى تقديم بيئة تعلّم متميزة.
          </p>
          <Button>
            <Link href="/Login" className="py-5 px-14 text-2xl rounded-2xl font-bold" >
              ابدأ رحلتك معنا
            </Link>
          </Button>
        </div>
      </div>
      <div className="bg-[var(--white-blue)] border-4 border-[var(--light-blue)]  w-[85%] h-[25%] rounded-2xl p-2 flex justify-around max-md:w-[95%]  max-lg:mt-4 ">
        <div className="w-fit  flex flex-col justify-center items-center  ">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-4 text-center h-[40%] max-sm:text-[17px] max-md:text-[20px] max-md:px-1">
            أحصل على الشهادة
          </h3>
          <p className="font-normal h-[50%] max-md:text-[15px] flex items-center text-xl text-center    py-4 max-sm:text-[12px] ">
            لتعزيز فرصك في مسيرتك المهنية
          </p>
        </div>
        <div className=" w-[20%] flex flex-col justify-center items-center  max-lg:w-[15%]">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3 text-center  h-[40%] max-sm:text-[17px] max-md:text-[20px] max-md:px-1">
            اختبر
          </h3>
          <p className="font-normal h-[50%] max-sm:h-auto max-md:text-[15px] flex items-center text-xl  px-6 text-center max-sm:text-[12px] ">
            معلوماتك من خلال الامتحانات الدورية
          </p>
        </div>
        <div className=" w-[20%]  flex flex-col justify-center items-center  max-lg:w-[15%]">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3 text-center  h-[40%] max-sm:text-[17px] max-md:text-[20px] max-md:px-1">
            تعلم
          </h3>
          <p className="font-normal h-[50%] max-sm:h-auto max-md:text-[15px] flex items-center text-xl  px-10 text-center max-sm:text-[12px] ">
            مع أكفأ المدربين
          </p>
        </div>
        <div className=" w-[20%]  flex flex-col justify-center items-center  max-lg:w-[15%]">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3 text-center  h-[40%] max-sm:text-[17px] max-md:text-[20px] max-md:px-1">
            إنضم
          </h3>
          <p className="font-normal h-[50%] max-sm:h-auto max-md:text-[15px] flex items-center text-xl  px-10 text-center max-sm:text-[12px] ">
            إلى الكورس الذي يهمك
          </p>
        </div>
        <div className=" w-[20%]  flex flex-col justify-center items-center  max-lg:w-[15%]">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3 text-center  h-[40%] max-sm:text-[17px] max-md:text-[20px] max-md:px-1">
            تصفح
          </h3>
          <p className="font-normal h-[50%] max-sm:h-auto max-md:text-[15px] flex items-center text-xl  px-10 text-center max-sm:text-[12px] ">
            الكورسات المتنوعة
          </p>
        </div>
        <div className=" w-[40%]  flex  justify-center items-center max-md:w-[25%] ">
          <h3 className="text-[var(--blue)] font-bold text-2xl py-2 px-3  flex justify-center items-center h-[100%] max-md:text-[18px] max-sm:text-[17px]  max-md:px-1">
            ! إبدأ رحلتك في طريق الإبداع
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;

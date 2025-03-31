const Footer = () => {

  return (
    <div className="w-full h-fit">
      <div className="w-full h-[30%]  bg-cover flex justify-between max-sm:flex-col max-sm:items-center bg-[url('/img/footer.png')] ">
        <div className="w-full  h-full flex justify-center items-center underline text-white text-2xl font-bold max-sm:pt-22 ">
          <p className="cursor-pointer pt-24">منصة المبدع العربي</p>
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

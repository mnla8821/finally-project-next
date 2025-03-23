const SlideBar = () => {
  return (
    <div className="h-[120vh] max-xl:h-[auto]">
      <div className="h-[120vh]  pt-8  ">
        <div className=" h-[100%]  w-full  bg-[url(/img/Rectangle.png)] bg-cover  bg-center  flex justify-evenly items-center max-md:flex-col  ">
          <div className="bg-[var(--mid-blue)] w-[20%] h-80 rounded-2xl flex justify-center items-center flex-col max-md:w-[90%] max-md:h-fit max-2xl:w-[30%] max-lg:w-[33%] max-lg:text-[17px]">
            <h1 className=" text-3xl font-bold text-white py-3 px-12  uppercase max-lg:text-2xl">
              دعم إنساني
            </h1>
            <p className="font-normal py-4 px-15 text-right text-[var(--white-blue)] leading-7 ">
              نعمل على توفير المساعدات الطبية لحالات إنسانية من متبرعين، لتحقيق
              أفضل النتائج والمساعدة الفعلية.
            </p>
          </div>
          <div className="bg-[var(--mid-blue)] w-[20%] h-80 rounded-2xl flex justify-center items-center flex-col max-md:w-[90%] max-md:h-fit max-2xl:w-[30%] max-lg:w-[33%] max-lg:text-[17px]">
            <h1 className=" text-3xl font-bold text-white py-3 px-9 uppercase text-center max-lg:text-[20px] max-lg:py-1 max-lg:px-5">
              استشارات طبية و ورشات عمل
            </h1>
            <p className="font-normal py-4 px-15 text-right text-[var(--white-blue)] leading-7">
              تُتاح لك الفرصة للحصول على استشارات طبية مهنية بكل خصوصية وأمان،
              ودورات تدريبية في الصحة وبمشاركة نخبة من الأطباء والاختصاصيين.
            </p>
          </div>
          <div className="bg-[var(--mid-blue)] w-[20%] h-80 rounded-2xl flex justify-center items-center flex-col max-md:w-[90%] max-md:h-fit max-2xl:w-[30%] max-lg:w-[33%] max-lg:text-[17px]">
            <h1 className=" text-3xl font-bold text-white py-3 px-12  uppercase text-center max-lg:text-2xl">
              دورات تدريبية مجانية
            </h1>
            <p className="font-normal py-4 px-15 text-right text-[var(--white-blue)] leading-7">
              نقدم مجموعة متنوعة من الدورات بإشراف مدربين مختصين، لتعزيز قدراتك
              في مختلف المجالات.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;

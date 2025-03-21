import React from "react";
interface propsButton {
  children: React.ReactNode;
}

const Button = (props: propsButton) => {
  return (
    <div className="w-fit h-fit py-5 px-14 bg-[var(--blue)] text-2xl text-white font-bold rounded-2xl cursor-pointer hover:bg-[var(--dark-blue)]">
      <div>{props.children}</div>
    </div>
  );
};

export default Button;

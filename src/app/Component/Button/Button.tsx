import React from "react";
interface propsButton {
  children: React.ReactNode;
}


const Button: React.FC<propsButton> = (props) => {
  return (
    <div className="w-fit h-fit p-2 bg-[var(--blue)]  text-white  rounded cursor-pointer hover:bg-[var(--dark-blue)]">
      <div>{props.children}</div>
    </div>
  );
};

export default Button;

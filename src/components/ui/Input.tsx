import type React from "react";

type InputType = {
  type: string;
  className: string;
  placeholder?: string;
  children?: React.ReactNode;
};

function Input({ type, className, placeholder, children }: InputType) {
  return (
    <input type={type} className={className} placeholder={placeholder}>
      {children}
    </input>
  );
}

export default Input;

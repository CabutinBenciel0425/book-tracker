import type React from "react";

type InputType = {
  type: string;
  className: string;
  placeholder?: string;
  children?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  type,
  className,
  placeholder,
  children,
  value,
  onChange,
}: InputType) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
      {children}
    </input>
  );
}

export default Input;

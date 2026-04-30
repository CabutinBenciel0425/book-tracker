import type React from "react";

type InputType = {
  type: string;
  className: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
};

function Input({
  type,
  className,
  placeholder,
  value,
  onChange,
  id,
}: InputType) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
}

export default Input;

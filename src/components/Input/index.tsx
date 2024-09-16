import React from "react";

interface IProps {
  className?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  name?: string;
  value?: string;
  id?: string;
}

export default function Input({
  className,
  type,
  onChange,
  placeholder,
  name,
  value,
  id,
}: IProps) {
  return (
    <input
      className={`${className} text-sm placeholder:text-[#00000099] border-[0.5px] border-[#00000033] rounded-xl p-4 outline-none`}
      id={id}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

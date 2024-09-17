import React from "react";

type Props = {
  className?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  name?: string;
  value?: string;
  id?: string;
  label: string;
  htmlFor?: string;
};

export default function LabeledInput({
  className,
  type,
  onChange,
  placeholder,
  name,
  value,
  id,
  label,
  htmlFor,
}: Props) {
  return (
    <div className="border-[0.5px] border-[#00000033] rounded-xl px-3 py-2">
      <label htmlFor={htmlFor} className="block text-[#00000099] text-sm">
        {label}
      </label>
      <input
        className={`${className} w-full text-sm placeholder:text-[#00000099] outline-none`}
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

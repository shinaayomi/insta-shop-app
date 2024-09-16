import React, { CSSProperties } from "react";

interface IProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  style?: CSSProperties;
}

export default function FilledButton({
  label,
  onClick,
  className,
  style,
}: IProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} w-full h-10 bg-primary text-white text-sm font-medium rounded-[90px] shadow-[4px_8px_24px_0px_#FE2C5533]`}
      style={style}
    >
      {label}
    </button>
  );
}

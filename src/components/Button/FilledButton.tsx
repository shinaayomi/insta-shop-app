import React, { CSSProperties, ReactNode } from "react";

interface IProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  placeIcon?: string;
  outlined?: boolean;
  grayed?: boolean;
}

export default function FilledButton({
  label,
  onClick,
  className,
  style,
  icon,
  placeIcon,
  outlined,
  grayed,
}: IProps) {
  let differentStyle = "";

  if (outlined) {
    differentStyle = "text-primary border border-primary";
  } else if (grayed) {
    differentStyle = "bg-[#00000008] text-primary";
  } else {
    differentStyle =
      "bg-primary text-white shadow-[4px_8px_24px_0px_#FE2C5533]";
  }

  return (
    <button
      onClick={onClick}
      className={`${className} w-full h-10 flex justify-center items-center gap-2 ${differentStyle} text-sm font-medium rounded-[90px]`}
      style={style}
    >
      {placeIcon === "end" || icon} {label} {placeIcon === "end" && icon}
    </button>
  );
}

import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className="border border-gray-400 rounded-lg text-gray-200 transition-all duration-300 hover:opacity-80 text-md font-normal p-4 max-w-[15rem]"
      {...props}>
      {children}
    </button>
  );
};

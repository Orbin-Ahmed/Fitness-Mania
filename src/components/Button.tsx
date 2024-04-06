import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled: boolean;
};

function Button({
  children,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={twMerge(
        "rounded-md px-10 py-2 cursor-pointer bg-button-primary hover:bg-button-primary-hover text-gray-500 hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;

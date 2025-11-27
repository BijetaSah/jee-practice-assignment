import Link from "next/link";
type ButtonProps = {
  text?: string;
  onClick?: () => void;
};

function Button({ text = "Start Preparation", onClick }: ButtonProps) {
  const baseStyle = `text-white bg-blue-600 cursor-pointer hover:bg-white hover:text-blue-600 border-2 border-blue-600 rounded-lg text-sm px-4 transition-colors duration-300 py-2 font-semibold sm:text-base`;
  if (onClick)
    return (
      <button className={`${baseStyle}`} onClick={onClick}>
        {text}
      </button>
    );

  return (
    <Link href={"/dashboard"} className={`${baseStyle}`}>
      {text}
    </Link>
  );
}
export default Button;

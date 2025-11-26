import Link from "next/link";

function Button() {
  return (
    <Link
      href={"/dashboard"}
      className="text-white bg-blue-600 cursor-pointer hover:bg-white hover:text-blue-600 border-2 border-blue-600 rounded-lg text-sm px-4 transition-colors duration-300 py-2 font-semibold sm:text-base"
    >
      Start preparation
    </Link>
  );
}
export default Button;

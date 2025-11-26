import Link from "next/link";

function Navbar() {
  return (
    <header className="px-4 sm:px-10 md:px-20 bg-stone-100 py-5">
      <nav className="flex justify-between sm:flex-row flex-col items-center gap-y-2">
        <p className="font-bold text-4xl text-blue-700 uppercase">
          Jee Practice
        </p>
        <Link
          href={"/dashboard"}
          className="text-white bg-blue-600 cursor-pointer hover:bg-white hover:text-blue-600 border-2 border-blue-600 rounded-lg text-sm px-4 transition-colors duration-300 py-2 font-semibold sm:text-base"
        >
          Start preparation
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;

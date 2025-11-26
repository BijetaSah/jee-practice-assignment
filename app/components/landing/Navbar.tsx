import Button from "../ui/Button";

function Navbar() {
  return (
    <header className="px-4 sm:px-10 md:px-20 bg-stone-100 py-5">
      <nav className="flex justify-between sm:flex-row flex-col items-center gap-y-2">
        <h1 className="font-bold text-4xl text-blue-700 uppercase">
          Jee Practice
        </h1>
        <Button />
      </nav>
    </header>
  );
}
export default Navbar;

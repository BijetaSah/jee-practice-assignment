import { features } from "@/app/data/features";
import Button from "../ui/Button";
import { FaPenAlt } from "react-icons/fa";

function Hero() {
  return (
    <section className="py-10 px-5 sm:px-10 md:px-15 flex flex-col items-center gap-5">
      <h2 className=" text-blue-700 font-bold text-2xl sm:text-4xl flex gap-2 items-center  ">
        JEE Practice Questions{" "}
        <FaPenAlt className="text-base hidden sm:block" />
      </h2>
      <p className="text-center text-blue-900">
        Boost your JEE preparation with high-quality mock questions and instant
        answer feedback.
      </p>
      <Button />

      {/* features */}
      <div className=" mt-10">
        <h2 className=" text-center font-bold text-2xl mb-5">Why choose us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {features.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="flex  flex-col items-center gap-2 bg-blue-100 px-5 py-8 rounded-xl shadow-md"
            >
              <Icon className="text-white bg-blue-500 h-15 w-15 p-4 rounded-xl " />
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="w-7/10 text-center ">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

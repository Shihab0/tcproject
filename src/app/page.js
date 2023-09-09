import Image from "next/image";
import React from "react";
import hero from "../../public/hero.svg";
import Link from "next/link";
import ContactPage from "./contact/page";

const HomePage = () => {
  return (
    <div>
      <div className="flex h-screen flex-col gap-8 md:gap-3 items-center md:flex-row md:justify-between md:items-center">
        <div className="flex md:flex-1 flex-col justify-center  md:gap-5 item-center">
          <h1
            className="bg-gradient-to-r p-4 mt-3 from-[#114] via-[#112] to-[#114] text-2xl md:text-4xl font-bold text-yellow-200 first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl md:first-letter:text-8xl first-letter:font-bold first-letter:text-white
  first-letter:mr-2 first-letter:float-left"
          >
            Unlocking learning potential with our dedicated tutors in
            Kishoreganj.
          </h1>
          <p className="font-semibold md:text-xl my-2 uppercase text-yellow-100">
            "To connect with a teacher, simply reach out to us. <br /> Contact
            details are available on our website."
          </p>{" "}
          <button
            type="button"
            className="bg-[#112] uppercase w-64  mt-3 md:w-72 py-3 md:px-1 outline md:text-xl rounded-xl font-semibold hover:bg-slate-700"
          >
            <Link href="/contact">Contact for a teacher</Link>
          </button>
        </div>
        <div>
          <Image
            className="imgAnimation md:flex-1"
            width={650}
            src={hero}
          ></Image>
        </div>
      </div>
      <ContactPage></ContactPage>
    </div>
  );
};

export default HomePage;
HomePage;

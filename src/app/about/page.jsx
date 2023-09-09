import Image from "next/image";
import React from "react";
import about from "../../../public/about.svg";
import location from "../../../public/location.svg";
import call from "../../../public/call.svg";
import email from "../../../public/email.svg";

const AboutPage = () => {
  return (
    <div className="">
      <div className="w-full  h-72 object-cover relative">
        <Image src={about} alt="" fill={true}></Image>

        <div>
          <h1 className="absolute text-white font-bold text-2xl bg-slate-800 p-2 right-2 opacity-60 bottom-2">
            Teacher's Corner, Kishoreganj
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-10 md:flex-row mt-10">
        <div>
          <h1 className="text-2xl font-bold ">Who we are?</h1>
          <p className="text-justify mt-4">
            We are a leading private tutoring provider in Kishoreganj, dedicated
            to empowering students with personalized learning experiences to
            excel academically and achieve their educational aspirations.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">What we provide?</h1>
          <p className="text-justify mt-4">
            As a private tutor provider in Kishoreganj, we offer expert tutors
            who provide tailored, one-on-one academic support in a wide range of
            subjects, helping students achieve their full potential.
          </p>
        </div>
      </div>
      <div className="mt-12 bg-green-950 p-7 px-10 rounded-md flex justify-between">
        <div className="flex items-center gap-2">
          <Image width={50} src={location}></Image>
          <div>
            <h1 className="text-2xl font-bold">Address</h1>
            <p>Gurudayal college mur, Harua.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Image width={50} src={email}></Image>
          <div>
            {" "}
            <h1 className="text-2xl font-bold">Email</h1>
            <p>teacherscorner@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image width={50} src={call}></Image>
          <div>
            <h1 className="text-2xl font-bold">Call Us</h1> <p>01729392839</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

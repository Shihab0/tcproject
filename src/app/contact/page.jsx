import React from "react";
import contact from "../../../public/contact.svg";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl md:-mt-16 mb-12">
        Feel free to connect with us.
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-4">
        <div>
          <Image className="imgAnimation" width={460} src={contact}></Image>
        </div>
        <div className="">
          <form action="" className="p-2 w-96 flex flex-col">
            <label htmlFor="">Your name:</label>
            <input
              className="mt-1 text-black px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type="text"
              placeholder="Type your name"
            />
            <label htmlFor="">Your email</label>
            <input
              className="mt-1 text-black px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type="email"
              placeholder="Type your email"
            />
            <label htmlFor="">Your message</label>

            <textarea
              className="mt-1 px-3 text-black py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              name=""
              id=""
              cols="20"
              rows="3"
              placeholder="message.."
            ></textarea>
            <button className="px-2 py-1 font-semibold bg-blue-500 rounded-md mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

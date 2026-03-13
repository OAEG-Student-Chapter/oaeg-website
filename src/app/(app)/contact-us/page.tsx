"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="relative h-full min-h-screen bg-[url('/images/exco2023.webp')] bg-cover bg-center bg-no-repeat py-16 pt-[var(--navbar-height)]">
      <ContactForm />
    </div>
  );
}

const sendEmail = (e: any) => {
  e.preventDefault();

  emailjs
    .sendForm(
      `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
      e.target,
      `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`,
    )
    .then(
      (result) => {},
      (error) => {},
    );
  toast.success("Submitted", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  e.target.reset();
};

const contactPersons = [
  {
    name: "Eng. Gayan Prabuddha",
    email: "gayann@gmail.com",
  },
  {
    name: "Eng. Malitha Chathuranga Peiris",
    email: "malitha.peiris@gmail.com",
  },
];

const ContactForm = () => {
  return (
    <>
      <div className="mx-[10%] mt-16 flex flex-col justify-center rounded-[5px] bg-[rgba(0,0,0,0.8)] p-[5%] text-white">
        <div className="flex justify-start">
          <span className="mb-3 border-l-[3px] border-primary bg-[rgba(0,0,0,0.5)] px-2 py-1">
            Get in touch with us
          </span>
        </div>
        <h4 className="mb-2 text-xl font-bold">Joint Secretaries</h4>
        <div className="mb-4 flex flex-col sm:flex-row">
          {contactPersons.map((contactPerson, index) => (
            <div
              key={index}
              className="mb-2 pr-5 sm:mr-5 sm:border-r-2 sm:border-r-white"
            >
              <span className="text-base">{contactPerson.name}</span> <br />
              <a
                href={`mailto:${contactPerson.email}`}
                className="flex items-center"
              >
                {" "}
                <FaEnvelope className="mr-2" /> {contactPerson.email}
              </a>
            </div>
          ))}
        </div>
        <p className="my-4">
          Or just fill the form below to send us a message and we will get back
          to you as soon as possible.
        </p>
        <form className="w-full" onSubmit={sendEmail}>
          <div className="mb-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <div className="w-full">
              <input
                className="w-full border border-white bg-transparent px-4 py-3 text-white placeholder:text-white"
                type="text"
                placeholder={"Name*"}
                id="name"
                name="name"
                required
              />
            </div>

            <div className="w-full">
              <input
                className="w-full border border-white bg-transparent px-4 py-3 text-white placeholder:text-white"
                type="email"
                placeholder={"Email*"}
                id="email"
                name="email"
                required
              />
            </div>

            <div className="w-full">
              <input
                className="w-full border border-white bg-transparent px-4 py-3 text-white placeholder:text-white"
                type="tel"
                id="phone"
                placeholder={"Phone*"}
                name="phone"
                required
              />
            </div>

            <div className="w-full">
              <select
                className="w-full appearance-none border border-white bg-transparent px-4 py-3 text-white"
                id="membership"
                name="membership"
                defaultValue="null"
                required
              >
                <option hidden value="null" className="bg-white text-black">
                  Membership Status
                </option>
                <option
                  value="Corporate Member"
                  className="bg-white text-black"
                >
                  Corporate Member
                </option>
                <option value="Student Member" className="bg-white text-black">
                  Student Member
                </option>
                <option value="Non-Member" className="bg-white text-black">
                  Non-Member
                </option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <textarea
              className="h-40 w-full resize-none border border-white bg-transparent px-4 py-3 text-white placeholder:text-white"
              id="message"
              placeholder={"Message/Inquiry*"}
              name="message"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-4 cursor-pointer border-none bg-gradient-to-r from-[#ffb629] via-[#ffda56] to-[#ffd7a6] px-4 py-3 text-base font-medium text-black transition-all duration-300 ease-in-out"
              type="submit"
            >
              Submit Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

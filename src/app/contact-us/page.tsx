"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FaEnvelope} from "react-icons/fa6";

export default function Page() {
    return (
        <div className="pt-[var(--navbar-height)] bg-[url('/images/exco2023.webp')] bg-cover bg-center bg-no-repeat h-full min-h-screen relative py-16">
            <ContactForm/>
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
            `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`
        )
        .then(
            (result) => {
            },
            (error) => {
            }
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
        email: "gayann@gmail.com"
    },
    {
        name: "Eng. Malitha Chathuranga Peiris",
        email: "malitha.peiris@gmail.com"
    }
];

const ContactForm = () => {
    return (
        <>
            <div className="mt-16 mx-[10%] p-[5%] flex flex-col justify-center bg-[rgba(0,0,0,0.8)] text-white rounded-[5px]">
                <div className="flex justify-start">
                    <span className="bg-[rgba(0,0,0,0.5)] py-1 px-2 border-l-[3px] border-primary mb-3">Get in touch with us</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Joint Secretaries</h4>
                <div className="flex flex-col sm:flex-row mb-4">
                  {
                    contactPersons.map((contactPerson, index) => (<div key={index} className="pr-5 mb-2 sm:mr-5 sm:border-r-2 sm:border-r-white">
                      <span className="text-base">{contactPerson.name}</span> <br/>
                      <a href={`mailto:${contactPerson.email}`}
                         className="flex items-center"> <FaEnvelope className="mr-2"/> {contactPerson.email}</a>
                    </div>))
                  }
                </div>
                <p className="my-4">
                    Or just fill the form below to send us a message and we will get back to you as soon as possible.
                </p>
                <form className="w-full" onSubmit={sendEmail}>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="w-full">
                            <input
                                className="w-full px-4 py-3 border border-white text-white bg-transparent placeholder:text-white"
                                type="text"
                                placeholder={"Name*"}
                                id="name"
                                name="name"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <input
                                className="w-full px-4 py-3 border border-white text-white bg-transparent placeholder:text-white"
                                type="email"
                                placeholder={"Email*"}
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <input
                                className="w-full px-4 py-3 border border-white text-white bg-transparent placeholder:text-white"
                                type="tel"
                                id="phone"
                                placeholder={"Phone*"}
                                name="phone"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <select
                                className="w-full px-4 py-3 border border-white text-white bg-transparent appearance-none"
                                id="membership"
                                name="membership"
                                defaultValue="null"
                                required
                            >
                                <option hidden value="null" className="bg-white text-black">
                                    Membership Status
                                </option>
                                <option value="Corporate Member" className="bg-white text-black">Corporate Member</option>
                                <option value="Student Member" className="bg-white text-black">Student Member</option>
                                <option value="Non-Member" className="bg-white text-black">Non-Member</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full">
            <textarea
                className="w-full px-4 py-3 border border-white text-white bg-transparent placeholder:text-white resize-none h-40"
                id="message"
                placeholder={"Message/Inquiry*"}
                name="message"
                required
            ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button 
                            className="bg-gradient-to-r from-[#ffb629] via-[#ffda56] to-[#ffd7a6] text-black border-none py-3 px-4 text-base cursor-pointer transition-all duration-300 ease-in-out mt-4 font-medium" 
                            type="submit">
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

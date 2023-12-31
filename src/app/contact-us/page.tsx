"use client";
import navStyles from "@/app/components/app-header/app-navbar.module.css";

export default function Page() {
  return (
    <div className={navStyles.navbarSpace}>
      <ContactForm />
    </div>
  );
}

import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact-form.module.css";

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
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
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

const ContactForm = () => {
  return (
    <>
      <div className={styles.contactFormWrapper}>
        <span className={styles.preFormTitle}>Contact</span>
        <h2 className={styles.formTitle}>Get in touch with us</h2>
        <p style={{ textAlign: "center", marginBlock: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </p>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <input
                className={styles.inputField}
                type="text"
                placeholder={"Name*"}
                id="name"
                name="name"
                required
              />
            </div>

            <div className={styles.formField}>
              <input
                className={styles.inputField}
                type="email"
                placeholder={"Email*"}
                id="email"
                name="email"
                required
              />
            </div>

            <div className={styles.formField}>
              <input
                className={styles.inputField}
                type="tel"
                id="phone"
                placeholder={"Phone*"}
                name="phone"
                required
              />
            </div>

            <div className={styles.formField}>
              <select
                className={styles.selectField}
                id="membership"
                name="membership"
                defaultValue="null"
                required
              >
                <option hidden value="null">
                  Membership Status
                </option>
                <option value="member">Member</option>
                <option value="non-member">Non-Member</option>
              </select>
            </div>
          </div>

          <div className={styles.formField}>
            <textarea
              className={styles.textAreaField}
              id="message"
              placeholder={"Message/Inquiry*"}
              name="message"
              required
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className={styles.submitButton} type="submit">
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

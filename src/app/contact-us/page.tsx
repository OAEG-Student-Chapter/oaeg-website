export default function Page() {
    return (
        <>
            <ContactForm/>
        </>
    );
}

import React from 'react';
import styles from './contact-form.module.css';

const ContactForm = () => {
    return (
        <div className={styles.contactFormWrapper}>
            <span className={styles.preFormTitle}>Contact</span>
            <h2 className={styles.formTitle}>Get in touch with us</h2>
            <p style={{textAlign:"center", marginBlock:'1rem'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
            </p>
            <form className={styles.form}>
                <div className={styles.formGrid}>
                    <div className={styles.formField}>
                        <input className={styles.inputField} type="text"
                               placeholder={"Name*"}
                               id="name" name="name" required />
                    </div>

                    <div className={styles.formField}>
                        <input className={styles.inputField} type="email"
                               placeholder={"Email*"}
                               id="email" name="email" required />
                    </div>

                    <div className={styles.formField}>
                        <input className={styles.inputField} type="tel" id="phone"
                               placeholder={"Phone*"}
                               name="phone" required />
                    </div>

                    <div className={styles.formField}>
                        <select className={styles.selectField} id="membership" name="membership" required>
                            <option selected hidden value="null">Membership Status</option>
                            <option value="member">Member</option>
                            <option value="non-member">Non-Member</option>
                        </select>
                    </div>
                </div>

                <div className={styles.formField}>
                    <textarea className={styles.textAreaField} id="message"
                            placeholder={"Message/Inquiry*"}
                              name="message" required></textarea>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <button className={styles.submitButton} type="submit">Submit Message</button>
                </div>
            </form>
        </div>
    );
};


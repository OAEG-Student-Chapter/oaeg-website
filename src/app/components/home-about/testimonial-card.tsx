import styles from "./testimonial-card.module.css";
import {Krub} from "next/font/google";
const krub = Krub({subsets: ['latin'], style:"italic", weight:['400']});

export default function TestimonialCard() {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.cardLeft}>
                <div style={{
                    padding:5,
                }}>
                    <img
                        style={{
                            width:'100%',
                            height:'100%',
                            objectFit:'cover',
                            aspectRatio: '1/1',
                            borderRadius: '50%',
                        }}
                        src="/images/exco.jpg" alt=""/>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    padding:20,
                }}>
                    <h3 style={{
                        fontSize: '1.3em',
                    }}>Founder</h3>
                    <p style={{
                    }}>Organization</p>
                </div>
            </div>
            <div className={`${styles.cardRight}`}>
                <p className={`${krub.className} ${styles.quote}`}>
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </div>
        </div>
    );
}
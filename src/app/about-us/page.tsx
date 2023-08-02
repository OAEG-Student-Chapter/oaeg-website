
import React from 'react';
import Styles from './about-us.module.css'
import Image from 'next/image';
import Link from 'next/link';
import DescriptionContainer from '../components/about-us-description/description-container';
import Content from './content.json';
import ServiceContainer from '../components/about-us-description/service-container';

export default function Page(){
    return (
        <div className={Styles.main}>
            <DescriptionContainer goal={Content.goal} vision={Content.vision} overview={Content.overview}/>
            <ServicesContainer/>
            <OfficialsBoardContainer/>
        </div>
    );
}



// Code for Services Container
function ServicesContainer() {
    return (
        <div className={Styles.servicesBlock}>
                <h2 className={Styles.servicesHeader}>Services Header</h2>
                <div className={Styles.servicesRow}>
                    {Content.services.slice(0, 3).map((service, index) => (
                        <ServiceContainer serviceObject={service} key={index}/> ))}
                </div>
                <div className={Styles.servicesRow}>
                    {Content.services.slice(3, 6).map((service, index) => (
                        <ServiceContainer serviceObject={service} key={index}/> ))}
                </div>
        </div>
    )
}


// Code for Officials Board Container
function OfficialsBoardContainer() {
    return (
        <div className={Styles.officialsBoardContainer}>
                <h2 className={Styles.officialsBoardHeader}>Officials Header</h2>
                <div className={Styles.officialsRow}>
                    <div className={Styles.subContainer}>
                        <div className={Styles.mainBodyTitle}>Main Body</div>
                            <Link href="/">
                                <Image src="/images/officials_preview.png" alt="Image" width={460} height={587} className={Styles.mainBodyImage}/>
                            </Link>
                    </div>
                    <div className={Styles.subContainer}>
                        <div className={Styles.mainBodyTitle}>Student Chapter</div>
                            <Link href="/">
                                <Image src="/images/officials_preview.png" alt="Image" width={460} height={587} className={Styles.mainBodyImage}/>
                            </Link>
                    </div>
                </div>
        </div>
    )

}

import Styles from './service-container.module.css';

interface ServiceObject {
    title: string;
    description: string;
}

interface ServiceContainerProps {
    serviceObject: ServiceObject;
}

export default function ServiceContainer({serviceObject}: ServiceContainerProps) {
    return (
        <div className={Styles.serviceContainer}>
            <div className={Styles.serviceTitle}>{serviceObject.title}</div>
            <div className={Styles.serviceDescription}>{serviceObject.description}</div>
        </div>
    )
}


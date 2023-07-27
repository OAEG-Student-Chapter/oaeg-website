import styles from "./nav-toggle.module.css";

interface NavToggleButtonProps {
    onPress: () => void;
}

export default function NavToggleButton(props:NavToggleButtonProps){
    return (
        <div onClick={props.onPress}
            className={styles.hamburger} data-toggle="app-header">
            {
                [...Array(3)].map((_, i) => (
                    <div key={i} className={styles.line}/>
                ))
            }
        </div>
    );
}
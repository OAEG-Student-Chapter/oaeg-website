import styles from "./nav-toggle.module.css";
import {FaBars} from "react-icons/fa6";

interface NavToggleButtonProps {
    onPress: () => void;
}

export default function NavToggleButton(props:NavToggleButtonProps){
    return (
        <div onClick={props.onPress}
            className={styles.hamburger} data-toggle="app-header"
             style={{
                 color: "white",
                 fontSize: "2rem",
             }}>
            <FaBars />
        </div>
    );
}
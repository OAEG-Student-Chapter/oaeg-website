import {FaBars} from "react-icons/fa6";

interface NavToggleButtonProps {
    onPress: () => void;
}

export default function NavToggleButton(props:NavToggleButtonProps){
    return (
        <div onClick={props.onPress}
            className="flex flex-col justify-between items-center cursor-pointer w-full h-full p-1 text-white text-[2rem]" 
            data-toggle="app-header">
            <FaBars />
        </div>
    );
}
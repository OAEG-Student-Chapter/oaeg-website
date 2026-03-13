import { FaBars } from "react-icons/fa6";

interface NavToggleButtonProps {
  onPress: () => void;
}

export default function NavToggleButton(props: NavToggleButtonProps) {
  return (
    <div
      onClick={props.onPress}
      className="flex h-full w-full cursor-pointer flex-col items-center justify-between p-1 text-[2rem] text-white"
      data-toggle="app-header"
    >
      <FaBars />
    </div>
  );
}

import { ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    children?: ReactNode;
}

const Button:React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="rounded-sm flex justify-center items-center border-solid border-[1px] pl-4 pr-4">
            {children}
        </button>
    )
}

export default Button;
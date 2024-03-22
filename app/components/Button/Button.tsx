import { ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    children?: ReactNode;
    className?: string;
}

const Button:React.FC<ButtonProps> = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={`${className} rounded-sm flex items-center border-solid border-[1px] pl-4 pr-4`}>
            {children}
        </button>
    )
}

export default Button;
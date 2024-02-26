import { PropsWithChildren, ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    children?: ReactNode;
}

const Button:React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className="border-solid border-[1px] p-[2px]">
            {children}
        </button>
    )
}

export default Button;
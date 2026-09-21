import './CustomButton.css'

interface CustomButtonProps {
    name: string;
    color: string;
    fontColor: string;
    size?: "lg" | "md" | "sm" | "xsm"; // size는 줘도 되고 안 줘도 되는 걸로 설정했습니다. 기본값은 lg로 했습니다.
    onClick?: () => void;
}

function CustomButton({ name, color, fontColor, size = "lg", onClick }: CustomButtonProps) {
    return (
        <div onClick={onClick}
            className={`custom-button custom-button--${size}`} // 작은 따옴표 아니고 ``백틱입니다.
            style={{ '--btn-color': color, '--font-color': fontColor } as React.CSSProperties}
        >
            {name}
        </div>
    )
}

export default CustomButton
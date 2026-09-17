import { type ReactNode } from "react"
import './CustomList.css'
 
interface CustomListProps {
    variant?: "list01" | "list02";
 
    label?: string;
    icon?: ReactNode;
    showChevron?: boolean;
    onClick?: () => void;
 
    title?: string;
    date?: string;
    time?: string;
    thumbnail?: ReactNode;
}
 
function StarIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="#33363D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
 
function ChevronRightIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="#33363D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
 
function CustomList({
    variant = "list01",
    label = "Text",
    icon,
    showChevron = true,
    onClick,
    title = "배송날짜",
    date = "0000.00.00",
    time = "AM 12:00",
    thumbnail,
}: CustomListProps) {
 
    if (variant === "list02") {
        return (
            <div className="list list--list02">
                {thumbnail ?? <div className="list__thumb" />}
                <div className="list__body">
                    <p className="list__title">{title}</p>
                    <div className="list__meta">
                        <p>{date}</p>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        )
    }
 
    return (
        <button className="list list--list01" onClick={onClick}>
            <span className="list__left">
                {icon ?? <StarIcon />}
                <span className="list__label">{label}</span>
            </span>
            {showChevron && <ChevronRightIcon />}
        </button>
    )
}
 
export default CustomList
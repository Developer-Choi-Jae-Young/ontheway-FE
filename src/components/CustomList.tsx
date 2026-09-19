import { type ReactNode } from "react"
import './CustomList.css'
 
interface CustomListProps {
    variant?: "list01" | "list02" | "list03";
 
    label?: string;
    icon?: ReactNode;          // 왼쪽 아이콘 (없으면 표시 안 함)
    trailing?: ReactNode;      // 오른쪽 요소 (없으면 showChevron에 따라 기본 → 표시)
    showChevron?: boolean;
    onClick?: () => void;
 
    title?: string;
    date?: string;
    time?: string;
    thumbnail?: ReactNode;
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
    trailing,
    showChevron = true,
    onClick,
    title = "배송날짜",
    date = "0000.00.00",
    time = "AM 12:00",
    thumbnail,
}: CustomListProps) {
 
    if (variant === "list03") {
        return (
            <div className="list list--list03">
                <span className="list__heading">{label}</span>
            </div>
        )
    }
 
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
                {icon}
                <span className="list__label">{label}</span>
            </span>
            {trailing ?? (showChevron ? <ChevronRightIcon /> : null)}
        </button>
    )
}
 
export default CustomList
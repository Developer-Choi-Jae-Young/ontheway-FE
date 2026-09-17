import './CustomFab.css'
 
interface CustomFabProps {
    onClick?: () => void;
}
 
function PencilIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none"
            stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
    )
}
 
function CustomFab({ onClick }: CustomFabProps) {
    return (
        <button className="custom-fab" onClick={onClick} aria-label="글쓰기">
            <PencilIcon />
        </button>
    )
}
 
export default CustomFab
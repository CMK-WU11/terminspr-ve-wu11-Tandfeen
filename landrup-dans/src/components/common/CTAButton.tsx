import React from "react"

interface CTAButtonProps {
    label: string
    onClick: () => void
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-all">
            {label}
        </button>
    )
}

export default CTAButton
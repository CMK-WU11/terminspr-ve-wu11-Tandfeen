import React from "react"

interface SearchFieldProps {
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchField: React.FC<SearchFieldProps> = ({ placeholder, onChange }) => {
    return (
       <input 
       type="text" 
       placeholder={placeholder}
       onChange={onChange}
       className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
       />
    )
}

export default SearchField
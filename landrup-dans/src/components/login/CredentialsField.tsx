interface CredentialsFieldProps {
    label: string
    type: 'text' | 'password'
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CredentialsField: React.FC<CredentialsFieldProps> = ({ label, type, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block mb-2 font-bold text-base">{label}</label>
            <input 
                type={type}
                onChange={onChange}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
            />
        </div>
    )
}

export default CredentialsField
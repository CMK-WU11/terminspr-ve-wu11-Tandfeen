interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
       <header className="bg-primary text-white p-4 text-center text-xl font-logo">
        {title}
       </header>
    )
}

export default Header
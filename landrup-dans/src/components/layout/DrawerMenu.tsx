import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { FaHome, FaRunning, FaSearch, FaCalendarAlt } from "react-icons/fa"

const DrawerMenu: React.FC = () => {
    return (
        <nav className="fixed bottom-0 w-full bg-white text-black flex justify-around items-center py-3 font-['Ubuntu] text[18px] z-50">
            <Link href="/">
                <FaHome size={24} />
            </Link>
            <Link href="/pages/search">
                <FaSearch size={24} />
            </Link>

            <Link href="/pages/calender">
                <CiCalendar size={24} />
            </Link>
        </nav>
    )
}

export default DrawerMenu
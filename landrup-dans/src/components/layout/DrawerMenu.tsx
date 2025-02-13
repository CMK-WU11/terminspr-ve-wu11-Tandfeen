import Link from "next/link";

export default function Navigation () {
    return (
        <nav className="fixed bottom-0 w-full bg-primary text-white flex justify-around py-3">
            <Link href="/pages/home">
                <p className="hover:text-secondary">Home</p>
            </Link>
            <Link href="/pages/activities">
                <p className="hover:text-secondary">Activities</p>
            </Link>
            <Link href="/pages/Search">
                <p className="hover:text-secondary">Search</p>
            </Link>
            <Link href="/pages/Calender">
                <p className="hover:text-secondary">Calender</p>
            </Link>
        </nav>
    )
}
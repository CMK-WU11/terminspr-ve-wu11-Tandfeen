import { Activity } from "@/types"
import Link from "next/link"

interface ActivityCardProps {
    activity: Activity
    onSignUp: () => void
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onSignUp }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
            <Link href={`/pages/activities/${activity.id}`}>
                <a className="block">
                    <h2 className="text-xl font-bold text-primary mb-2">{activity.name}</h2>
                    <p className="text-sm text-gray-700">{activity.weekday} - {activity.time}</p>
                    <p className=""></p>
                    <p className=""></p>
                </a>
            </Link>
        </div>
    )
}
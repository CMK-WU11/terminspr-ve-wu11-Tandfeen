import { Activity } from "@/types"

interface CalenderCardProps {
    activity: Activity
}

const CalenderCard: React.FC<CalenderCardProps> = ({ activity }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col sm:flex-row justify-between items-center">
            <div>
                <h2 className="text-xl font-bold text-primary">{activity.name}</h2>
                <p className="text-sm text-gray-700">{activity.weekday} - {activity.time}</p>
            </div>
            <div className="mt-2 sm:mt-0">
                <p className="text-sm text-secondary">Age Limit: {activity.minAge}</p>
            </div>
        </div>
    )
}

export default CalenderCard
import { Activity } from "@/types"
import Link from "next/link"

interface ActivityCardProps {
    activity: Activity
}


const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
   
    const imageUrl = activity.asset?.url || 'https://via.placeholder.com/300'
    
    return (
            <Link href={`/pages/activities/${activity.id}`} className="block">
                    <div className="relative max-w bg-[#EAEAEA] rounded-xl overflow-hidden font-['Ubuntu']">
                        <img 
                        src={imageUrl}
                        alt={activity.name}
                        className="w-full h-48 object-cover"
                        />
                        <div className="bg-[#E1A1E9] px-4 py-3  text-black rounded-b-xl z-30">
                            <h2 className="text-[24px] font-bold leading-tight">{activity.name}</h2>
                            <p className="text-[18px] mt-1">{activity.minAge} - {activity.maxAge} år</p>
                            <p className="text-[18px] mt-1">{activity.weekday} - {activity.time}</p>
                        </div>
                </div>
            </Link>
    ) 
}

export default ActivityCard
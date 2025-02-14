"use client"
import ActivityCard from "@/components/activities/ActivityCard";
import { Activity } from "@/types";
import { fetchActivities } from "@/utils/api";
import { useEffect, useState } from "react";

export default function ActiviesPage() {
    const [activities, setActivities] = useState<Activity[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchActivities()
        .then((data) => {
            setActivities(data)
            setLoading(false)
        }).catch((error) => console.error(error))
    }, [])

    return (
        <div className="min-h-screen bg-[#4E2D57] py-8 px-4">
            <h1 className="text-white text-3xl font-bold mb-6">Aktiviteter</h1>
            {loading ? (
                 <p className="text-white">Indlæser aktiviteter...</p> 
                ) 
                : 
                (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
                )}
        </div>
    )
}
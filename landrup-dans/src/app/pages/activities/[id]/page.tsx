"use client"
import { useAuth } from "@/contexts/AuthContext";
import { Activity } from "@/types";
import { addUserToActivity, fetchActivityById, removeUserFromActivity } from "@/utils/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActivityDetailsPage() {
    const { id } = useParams()
    const [activity, setActivity] = useState<Activity | null>(null)
    const [loading, setLoading] = useState(true)
    const { user, token } = useAuth()

    useEffect(() => {
        if (id) { fetchActivityById(Number(id)) 
            .then((data) => {
                setActivity(data)
                setLoading(false)
            })
            .catch((error) => console.error(error))
        }
    }, [id])

    if (loading) return <p className="p-4">Indlæser aktiviteter...</p>
    if (!activity) return <p className="p-4">aktiviteter ikke fundet</p>

    const isWithinAge = user
        ? user.age >= activity.minAge && user.age <= activity.maxAge : false

    const handleEnrollment = async () => {
        if (!user || !token) {
            alert('Du skal være logget ind for at tilmelde dig et hold')
            return
        }
        if (!isWithinAge) {
            alert('Du opfylder ikke alderskravet for denne aktivitet.');
            return;
        }
        
        try {
            await addUserToActivity(user.id, activity.id, token)
            alert(`Du er nu tilmeldt ${activity.name}`)
        } catch (error) {
            console.error(error)
            alert('Fejl ved tilmelding til hold')
        }
    }

    const handleUnenroll = async () => {
        if (!user || !token) return
        try {
            await removeUserFromActivity(user.id, activity.id, token)
            alert(`Du er nu afmeldt ${activity.name}`)
        } catch (error) {
            console.error(error)
            alert('Fejl ved afmelding af hold')
        }
    }

    return (
        <div className="container mx-auto px-4 pt-4">
            <h1 className="text-2xl font-bold text-primary mb-2">{activity.name}</h1>
            <p className="text-md text-text mb-1"><strong>Dag:</strong> {activity.weekday}</p>
            <p className="text-md text-text mb-1"><strong>Tid:</strong> {activity.time}</p>
            <p className="text-md text-text mb-1"><strong>Beskrivelse:</strong> {activity.description}</p>
            <p className="text-md text-secondary mb-4"><strong>Aldersgrænse:</strong> {activity.minAge}</p>

            {user ? (
                <div className="space-x-4">
                    <button onClick={handleEnrollment} className="px-4 py-2 bg-secondary text-white rounded-md">Tilmeld</button>
                    <button onClick={handleUnenroll} className="px-4 py-2 bg-gray-500 text-white rounded-md">Afmeld</button>
                </div>
            )
            : 
            ( <p>Log venlist ind for at tilmelde/afmelde hold</p> )
        }
        </div>
    )
}
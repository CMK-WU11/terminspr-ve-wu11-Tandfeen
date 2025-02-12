import type { Asset, User, Activity, Enrollment, TokenResponse, CreateUserInput } from "@/types";

const BASE_URL = 'http://localhost:4000'



// ------------------------------------------------------------
//                             Assets
// ------------------------------------------------------------

//hent alle assets - GET /api/v1/assets
export async function fetchAssets(): Promise<Asset[]> {
    const res = await fetch(`${BASE_URL}/api/v1/assets`)
    if (!res.ok) throw new Error('Fejl ved hentning af alle assets')
    return res.json()
}

// Hent en enkel asset vha id - GET /api/v1/assets/:id
export async function fetchAssetById(id: number): Promise<Asset> {
    const res = await fetch(`${BASE_URL}/api/v1/assets/${id}`)
    if (!res.ok) throw new Error('Fejl ved hentning af asset med id')
    return res.json()
}

// ------------------------------------------------------------
//                            Activities
// ------------------------------------------------------------

// Hent alle aktiviteter - GET /api/v1/activities
export async function fetchActivities(): Promise<Activity[]> {
    const res = await fetch(`${BASE_URL}/api/v1/activities`)
    if (!res.ok) throw new Error('Fejl ved henting af alle aktiviteter')
    return res.json()
}

// Hent Specifik aktivitet vha id - GET /api/v1/activities/:id
export async function fetchActivityById(id: number): Promise<Activity> {
    const res = await fetch(`${BASE_URL}/api/v1/activities/${id}`)
    if (!res.ok) throw new Error('Fejl ved henting af aktivitet med id')
    return res.json()
}

// ------------------------------------------------------------
//                               User
// ------------------------------------------------------------

// Opret en ny bruger - POST /api/v1/users
export async function CreateUser(userData: CreateUserInput): Promise<User> {
    const formData = new URLSearchParams()
    Object.entries(userData).forEach(([key, value]) => formData.append(key, String(value)))

    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {'Content-type': 'application/x-www-form-urlencoded'},
        body: formData
    })

    if (!res.ok) throw new Error('Fejl i oprettelse af bruger')
    return res.json()
}

// Hent bruger vha id - GET /api/v1/users/:id
export async function fetchUserById(id: number, token: string): Promise<User> {
    const res = await fetch(`${BASE_URL}/api/v1/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })

    if (!res.ok) throw new Error('Fejl ved henting af bruger vha id')
    return res.json()
}

// Hent roster til hold
export async function fetchRoster(userId: number, activityId: number, token: string): Promise<Enrollment[]> {
    const res = await fetch(`${BASE_URL}/api/v1/users/${userId}/roster/${activityId}`, {
        headers: { Authorization: `Bearer ${token}` }
    })

    if (!res.ok) throw new Error('Fejl ved afhentning af roster')
    return res.json()
}
import type { Asset, User, Activity, Enrollment, TokenResponse } from "@/types";
import { error } from "console";

const BASE_URL = 'http://localhost:4000'

//hent alle assets
export async function fetchAssets(): Promise<Asset[]> {
    const res = await fetch(`${BASE_URL}/api/v1/assets`)
    if (!res.ok) throw new Error('Fejl ved hentning af alle assets')
    return res.json()
}

// Hent en enkel asset vha id
export async function fetchAssetById(): Promise<Asset> {
    const res = await fetch(`${BASE_URL}/api/v1/assets/${id}`)
    if (!res.ok) throw new Error('Fejl ved hentning af asset med id')
    return res.json()
}

// Hent alle aktiviteter
export async function fetchActivities(): Promise<Activity[]> {
    const res = await fetch(`${BASE_URL}/api/v1/activities`)
    if (!res.ok) throw new Error('Fejl ved henting af alle aktiviteter')
    return res.json()
}

// Hent Specifik aktivitet vha id
export async function fetchActivityById(id: number): Promise<Activity> {
    const res = await fetch(`${BASE_URL}/api/v1/activities/${id}`)
    if (!res.ok) throw new Error('Fejl ved henting af aktivitet med id')
    return res.json()
}
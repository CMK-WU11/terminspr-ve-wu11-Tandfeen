export interface Asset {
    id: number;
    name: string;
    url: string;
}

export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    age: number;
    role: 'default' | 'instructor'
    token?: string;
}

export interface Activity {
    id: number;
    name: string;
    weekday: string;
    time: string;
    description: string;
    ageLimit: string;
}

export interface Enrollment {
    id: number;
    firstName: string;
    lastName: string;
}

export interface TokenResponse {
    token: string;
}
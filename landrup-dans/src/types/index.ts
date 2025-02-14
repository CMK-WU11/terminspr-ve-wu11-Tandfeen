export interface Asset {
    id: number;
    url: string;
    createdAt: string;
    updatedAt: string;
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

export interface CreateUserInput extends Omit<User, 'id' | 'token'> {
    password: string;
}

export interface Activity {
    asset: any;
    id: number;
    name: string;
    weekday: string;
    time: string;
    description: string;
    minAge: number;
    maxAge: number;
    imageUrl?: string;
}

export interface Enrollment {
    id: number;
    firstName: string;
    lastName: string;
}

export interface TokenResponse {
    token: string;
}
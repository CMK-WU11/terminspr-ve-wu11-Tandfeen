"use client"
import { CreateUserInput, User } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";
import { jwtDecode } from 'jwt-decode'
import { createToken, CreateUser } from "@/utils/api";

interface DecodedToken {
    data: {
        id: number
        username: string
        firstname: string
        lastname: string
        age: number
        role: 'default' | 'instructor'
    }
}

interface AuthContextType {
    user: User | null
    token: string | null
    login: (username: string, password: string) => Promise<void>
    logout: () => void
    register: (userData: CreateUserInput) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)

    const decodeToken = (token: string): DecodedToken => {
        return jwtDecode<DecodedToken>(token)
    }

    const login = async (username: string, password: string) => {
        try {
            const { token: newToken } = await createToken(username, password)
            setToken(newToken)

            const decoded = decodeToken(newToken)
            setUser({ ...decoded.data })
        } catch (error) {
            console.error('login error:', error)
            throw error
        }
    }

    //Log ud: rydder brugerdata og token
    const logout = () => {
        setUser(null)
        setToken(null)
    }

    //register: Opretter ny bruger vha api
    const register = async (userData: CreateUserInput) => {
        try {
            await CreateUser(userData)
        } catch (error) {
            console.error('fejl ved registrering', error)
            throw error
        }
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth skal bruges indenfor en AuthProvider')
    return context
}
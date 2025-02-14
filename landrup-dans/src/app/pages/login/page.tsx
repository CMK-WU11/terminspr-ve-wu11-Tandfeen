"use client";
import Header from "@/components/layout/Header";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation"; // Ændr her
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Indtast både brugernavn og adgangskode.");
      return;
    }
    try {
      await login(username, password);
      router.push("/pages/calendar");
    } catch (err) {
      setError("Login mislykkedes, prøv igen.");
    }
  };

  return (
    <div className="container mx-auto px-4 pt-4 max-w-md">
      <Header title="Log ind" />
      <form onSubmit={handleLogin} className="bg-white p-4 rounded-lg shadow-md">
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">
            Brugernavn
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Adgangskode
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-secondary text-white rounded-md">
          Log ind
        </button>
      </form>
    </div>
  );
}

'use client';
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    return (
      <div>
      <h1>Welcome to Login Page</h1>
      <button onClick={() => router.push('/')} className="bg-blue-500 text-white px-4 py-2 rounded">Go to Home Page</button>
      </div>

    );
  }
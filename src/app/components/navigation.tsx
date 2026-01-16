'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav>
            <Link href="/" className={pathname === "/" ? "mr-6 font-bold" : "text-blue-500 mr-6"}>Home</Link>
            <Link href="/login" className={pathname === "/login" ? "mr-6 font-bold" : "text-blue-500 mr-6"}>Login</Link>
            <Link href="/register" className={pathname === "/register" ? "mr-6 font-bold" : "text-blue-500 mr-6"}>Register</Link>
            {/* 
                    <Link href="/forgot-password">Forgot Password</Link>
                 */}

        </nav>
    );
}
'use client'
import React from "react";
import {useAuth, useUser} from "@clerk/nextjs";


export default function Counter() {
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    console.log("Counter component rendered");
    const [count, setCount] = React.useState(0);

    if(!isLoaded || !userId){
        // Will hide Counter component till auth is loaded and user is signed in
        return null;
    }

    
    return (
        <div>
            <h1>Welcome to Counter Page: {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+Add</button>
        </div>

    );
}
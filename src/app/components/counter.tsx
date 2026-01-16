'use client'
import React from "react";


export default function Counter() {
    console.log("Counter component rendered");
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Welcome to Counter Page: {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+Add</button>
        </div>

    );
}
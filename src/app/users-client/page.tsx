'use client';
import { useState, useEffect } from 'react'

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UsersClient = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>("");


    useEffect(() => {

        try {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setUsers(data))
                .catch(error => setError(error.message));
        } catch (error) {
            setError("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users List client side</h1>
            {loading && <p>Loading users...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id} className="mb-2">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <>=============================================</>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default UsersClient

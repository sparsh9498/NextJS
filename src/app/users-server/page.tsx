type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

// Difference between server & Client component

// hooks we can use in client component but not in server component (IMP POINT)
// Main difference betweeen server(user-server) and client(user-client) component is here we can use async await directly in server component & in client we use inside useEffect 
// Also in server component we can directly fetch from database or external api securely as server component code do not expose to client side

export default async function UsersServer() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const users: User[] = await res.json();
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users List Server Component</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="mb-2">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <>+++++++++++++++++++++++++++++++++++++++++</>

                    </li>
                ))}
            </ul>
        </div>
    );
}
import { revalidatePath } from "next/cache";

type MockUsers = {
    id: number;
    name: string;
}

export default async function MockUsers() {
    // Simulate delay
    // await new Promise(resolve => setTimeout(resolve, 2000)); 

    const res = await fetch('https://69731abfb5f46f8b58262658.mockapi.io/users', { cache: 'no-store' });
    const users: MockUsers[] = await res.json();

    async function addUser(formData: FormData) {
        'use server';
        const name = formData.get('name')?.toString() || '';
        const response = await fetch('https://69731abfb5f46f8b58262658.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        const newUser = await response.json();
        // This will refresh the page
        revalidatePath('/mock-users');
        console.log('New User Added:', newUser);
    }
    return (
        <div className="py-10">
            <form className="mb-4" action={addUser}>
                <input type="text" name="name" required className="border p-2 mr-2" />
                <button
                    type="submit"
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add User
                </button>
            </form>
            <div>
                <h1 className="text-2xl font-bold mb-4">Mock Users from MockAPI which can be updated as well</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="mb-2">
                            <p><strong>Name:</strong> {user.name}</p>
                            <>+++++++++++++++++++++++++++++++++++++++++</>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}
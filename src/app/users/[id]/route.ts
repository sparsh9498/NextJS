import { users } from "../route";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const user = users.find(u => u.id === parseInt(id));
    return Response.json(user);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index !== -1) {
        users.splice(index, 1);
        // Here this does not  deleted user, its just simluation & give success message
        return new Response("Successfully deleted", { status: 202 });
    }
    return new Response("User not found", { status: 404 });
}
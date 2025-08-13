import { useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([
        { id: 1, name: "Juan", email: "juan@email.com" },
        { id: 2, name: "Ana", email: "ana@email.com" }
    ]);

    function handleDelete(id) {
        setUsers(users.filter(user => user.id !== id)); 
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name}{" "}
                    <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default UserList;
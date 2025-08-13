import { useState } from 'react';

export default function UserList() {
    const [users, setUsers] = useState([
        { id: 1, name: "Juan", email: "juan@email.com" },
        { id: 2, name: "Ana", email: "ana@email.com" }
    ]);
    const [nextId, setNextId] = useState(users.length + 1); // Para asegurar que los IDs son únicos y no se repiten aunque se eliminen usuarios
    
    const [newUser, setNewUser] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const handleAddUser = () => {
        if (newUser.trim() === "" || newEmail.trim() === "") return; // Evitar campos vacíos
        setUsers([...users, { id: nextId, name: newUser, email: newEmail }]); // Creamos un nuevo array con los usuarios existentes (...users) y el nuevo usuario
        setNewUser(""); // Limpiamos el input
        setNewEmail("");
        setNextId(nextId + 1); // Incrementamos el ID para el próximo usuario
    };

    function handleDelete(id) {
        setUsers(users.filter(user => user.id !== id));
    }

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <input
                type="text"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                placeholder="Escribe un nombre"
            />
            <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Escribe un email"
            />
            <button onClick={handleAddUser}>Añadir</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.id} - {user.name} - {user.email}{" "}
                        <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>

    );
}

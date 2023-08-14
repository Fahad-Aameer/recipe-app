import { useState } from "react"

export function Auth() {
    return (
        <div className="text-center">
            <Login />
            <Register />
        </div>
    )
}

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
    )
}

function Login() {
    return (
        <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
    )
}

function Form({ username, setUsername, password, setPassword }) {
    return (
        <div>
            <form action="">
                <h2>Register</h2>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
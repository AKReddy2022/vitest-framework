import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        setMessage("Login Successful");
    };

    const handleCancel = () => {
        setEmail("");
        setPassword("");
        setMessage("");
    };

    return (
        <div>
            <h1>Login</h1>

            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                disabled={!email || !password}
                onClick={handleLogin}
            >
                Login
            </button>

            <button onClick={handleCancel}>
                Cancel
            </button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default LoginForm;
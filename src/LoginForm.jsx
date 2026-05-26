import { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {

        if (
            email === "admin@gmail.com" &&
            password === "123456"
        ) {

            setMessage("Login Successful");
            setError("");

        } else {

            setError("Invalid Username or Password");
            setMessage("");
        }
    };

    const handleCancel = () => {

        setEmail("");
        setPassword("");

        setMessage("");
        setError("");
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

            {message && <p id="success-message">{message}</p>}

            {error && <p id="error-message">{error}</p>}

        </div>
    );
}

export default LoginForm;
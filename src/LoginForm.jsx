import { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = () => {

        // Prevent multiple rapid clicks
        if (isSubmitting) return;

        setIsSubmitting(true);

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

        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);
    };

    const handleCancel = () => {

        setEmail("");
        setPassword("");

        setMessage("");
        setError("");

        setIsSubmitting(false);
    };

    const handleKeyDown = (e) => {

        if (
            e.key === "Enter" &&
            email &&
            password &&
            !isSubmitting
        ) {

            handleLogin();
        }
    };

    return (
        <div>

            <h1>Login</h1>

            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button
                disabled={
                    !email ||
                    !password ||
                    isSubmitting
                }
                onClick={handleLogin}
            >
                {isSubmitting ? "Loading..." : "Login"}
            </button>

            <button onClick={handleCancel}>
                Cancel
            </button>

            {message && (
                <p data-testid="success-message">
                    {message}
                </p>
            )}

            {error && (
                <p data-testid="error-message">
                    {error}
                </p>
            )}

        </div>
    );
}

export default LoginForm;
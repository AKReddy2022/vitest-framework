import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "./LoginForm";

test("renders login form and buttons exist or not", () => {
    render(<LoginForm />);
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();

    const cancelBtn = screen.getByRole("button", { name: "Cancel" });
    expect(cancelBtn).toBeInTheDocument();
});

test("login button should be disabled by default", () => {
    render(<LoginForm />);
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeDisabled();
});

test("Login button should be enabled when email and password are provided", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText("Enter Email");
    const passwordInput = screen.getByPlaceholderText("Enter Password");

    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeDisabled();

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    expect(loginBtn).toBeEnabled();

    await userEvent.click(loginBtn);

    const successMessage = screen.getByText("Login Successful");
    expect(successMessage).toBeInTheDocument();
});

test("Cancel button should reset the form", async () => {

    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText("Enter Email");
    const passwordInput = screen.getByPlaceholderText("Enter Password");

    const cancelBtn = screen.getByRole("button", { name: "Cancel" });
    expect(cancelBtn).toBeEnabled();

    await userEvent.click(cancelBtn);

    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");

    const successMessage = screen.queryByText("Login Successful");
    expect(successMessage).not.toBeInTheDocument();
});


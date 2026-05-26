import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "./LoginForm";


test("should render login form elements", () => {
    render(<LoginForm />)

    const headerText = screen.getByRole("heading", { name: "Login" });
    expect(headerText).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("Enter Email");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue("");

    const passwordInput = screen.getByPlaceholderText("Enter Password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveValue("");



    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();

    const cancelBtn = screen.getByRole("button", { name: "Cancel" });
    expect(cancelBtn).toBeInTheDocument();
    expect(cancelBtn).toBeEnabled();

    const messageText=screen.queryByText("Login Successful");
    expect(messageText).not.toBeInTheDocument();

})
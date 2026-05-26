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

    const successMessage = screen.queryByTestId("success-message");
    expect(successMessage).not.toBeInTheDocument();

    const errorMessage = screen.queryByTestId("error-message");
    expect(errorMessage).not.toBeInTheDocument();

});


test("should handle input interactions correctly", async () => {
    render(<LoginForm />)


    const emailInput = screen.getByPlaceholderText("Enter Email");
    const passwordInput = screen.getByPlaceholderText("Enter Password");


    await userEvent.type(emailInput, "ananth@gmail.com")
    await userEvent.type(passwordInput, "123456")

    expect(emailInput).toHaveValue("ananth@gmail.com")
    expect(passwordInput).toHaveValue("123456")


    await userEvent.clear(emailInput)
    await userEvent.clear(passwordInput)

    expect(emailInput).toHaveValue("")
    expect(passwordInput).toHaveValue("")

})




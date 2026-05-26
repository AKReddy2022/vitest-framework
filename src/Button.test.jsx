import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button text", () => {
    render(<Button />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});
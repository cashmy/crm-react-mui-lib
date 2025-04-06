import { describe, it, expect, vi } from "vitest"; // or from "jest" if using Jest
import "@testing-library/jest-dom"; // Import matchers from jest-dom
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders the label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("handles onClick event", () => {
    const handleClick = vi.fn(); // or jest.fn() if using Jest
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom background style if provided", () => {
    render(
      <Button
        label="Styled Button"
        style={{ backgroundColor: "rgb(255, 0, 0)" }}
      />
    );
    const button = screen.getByText("Styled Button");
    expect(button).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  });
});

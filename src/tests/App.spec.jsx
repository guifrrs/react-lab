import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it } from "vitest";

import App from "../App";
describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("render", () => {
    it("render correctly", () => {
      expect(screen.getByText("Hello Vite + React!")).toBeInTheDocument();
    });
  });

  describe("behavior", () => {
    it("update count when button is clicked", () => {
      expect(screen.getByText(/count is: 0/i)).toBeInTheDocument();

      fireEvent.click(screen.getByRole("button"));

      expect(screen.getByText(/count is: 1/i)).toBeInTheDocument();
    });
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("Render hero image", () => {
    render(<Hero />);

    const heroImg = screen.getByAltText("hero-image");

    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute(
      "src",
      expect.stringContaining("homeHero.png"),
    );
  });
  test("Render signup button", () => {
    render(<Hero />);

    const signupBtn = screen.getByRole("button", {
      name: /Signup Now/i,
    });
    expect(signupBtn).toBeInTheDocument();
    expect(signupBtn).toHaveClass("btn-primary");
  });
});

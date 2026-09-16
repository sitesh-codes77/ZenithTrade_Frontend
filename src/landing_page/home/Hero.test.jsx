import { render, screen } from '@testing-library/react'
import { describe, expect, it, afterEach } from 'vitest'
import Hero from "./Hero";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Hero component", () => {
    it("renders the hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Homesection Hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "/src/assets/images/homeHero.png");
    });
    it("renders the hero heading", () => {
        render(<Hero />);
        const heroHeading = screen.getByText("Invest in Everything");
        expect(heroHeading).toBeInTheDocument();
        expect(heroHeading).toHaveClass("mt-5");
    });
    it("render signup button", () => {
        render(<Hero />); expect(
            screen.getByRole('button', { name: 'Signup Now' }),
        ).toBeInTheDocument()
    })
})
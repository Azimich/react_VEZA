import React from "react";
import { describe, test, expect } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import { HomeContainer } from "features/home/HomeContainer";

describe("Header", () => {
  test("Visible Header Home", async () => {
    render(<HomeContainer />);
    await waitFor(() => screen.getByRole("heading"));
    expect(screen.getByRole("heading"));
  });
});

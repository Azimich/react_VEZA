import React from "react";
import { describe, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { Navigation } from "../components/header/nav";

describe("Header", () => {
  test("Visible Header container", () => {
    render(<Navigation />);
  });
});

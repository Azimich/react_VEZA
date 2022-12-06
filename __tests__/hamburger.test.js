import React from "react";
import { describe, test, expect } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";

import { HamburgerMenu } from "../components/hamburger";
//TODO: нет проверки клика
describe("HamburgerMenu component", () => {
  const HAMBURGER_ID = "hamburger_id";
  test("HamburgerMenu isHide", async () => {
    const { getByTestId } = render(
      <HamburgerMenu
        isShowMenu={false}
        data-testid={HAMBURGER_ID}
        id={HAMBURGER_ID}
      />,
    );
    const hamburger = getByTestId(HAMBURGER_ID);
    expect(hamburger.classList.contains("hamburger_container")).toBe(true);
  });
  test("HamburgerMenu isShow", async () => {
    const { getByTestId } = render(
      <HamburgerMenu
        isShowMenu={true}
        data-testid={HAMBURGER_ID}
        id={HAMBURGER_ID}
      />,
    );
    const hamburger = getByTestId(HAMBURGER_ID);
    expect(hamburger.classList.contains("hamburger_container__active")).toBe(
      true,
    );
  });
});

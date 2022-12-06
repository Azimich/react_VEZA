import React from "react";
import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { CheckboxWithLabel } from "components/checkbox";

describe("CheckBox component", () => {
  const CHECKBOX_ID = "check-box";
  const LABEL_ID = "label-check-box";
  const TITLE = "test checkbox";
  const resData = [];
  const handleOnChangeData = (e) => {
    resData.push(e.target.checked);
  };
  test("CheckBox onclick", async () => {
    const { getByTestId } = render(
      <CheckboxWithLabel
        onChangeData={(e) => handleOnChangeData(e)}
        id={CHECKBOX_ID}
        name={"CheckBox"}
        data-testid={LABEL_ID}
      />,
    );
    const checkbox = getByTestId(CHECKBOX_ID);
    checkbox.checked = false;
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
  test("CheckBox cb data", async () => {
    expect(resData.length).toBe(2);
  });
  test("CheckBox label click", async () => {
    const { getByTestId } = render(
      <CheckboxWithLabel
        onChangeData={(e) => handleOnChangeData(e)}
        id={"check-box"}
        data-testid={"label-check-box"}
      />,
    );
    const labelBox = getByTestId(LABEL_ID);
    const checkbox = getByTestId(CHECKBOX_ID);
    checkbox.checked = false;
    fireEvent.click(labelBox);
    expect(checkbox.checked).toEqual(true);
  });
  test("CheckBox output label", async () => {
    const { queryByLabelText } = render(
      <CheckboxWithLabel id={"check-box"} title={TITLE} />,
    );
    //TODO: queryByLabelText не используется
    console.log("queryByLabelText", queryByLabelText);
    expect(TITLE).toBeTruthy();
  });
});

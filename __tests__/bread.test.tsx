import React from "react";
import { describe, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";

describe("Header", () => {
  test("Visible Header container", () => {
    render(<BreadCrumbs data={dataBreadNews} />);
  });
});

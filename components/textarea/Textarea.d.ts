import React from "react";

interface ITextarea {
  title?: string;
  placeholder?: string;
  name?: string;
  id?: number;
  onChange?: (e) => void;
  children?: string | React.ReactElement | React.ReactNode;
}

export { ITextarea };

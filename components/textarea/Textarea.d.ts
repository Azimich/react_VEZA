import React from "react";

interface ITextarea {
  title?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  id?: number;
  onChange?: () => void;
  children?: string | React.ReactElement | React.ReactNode;
}

export { ITextarea };

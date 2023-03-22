import React from "react";

interface ITextarea {
  title?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
  maxLength?: string | React.HTMLTextAreaElement;
  onChange?: (event: ChangeEventHandler<HTMLTextAreaElement>) => void;
  children?: string | React.ReactElement | React.ReactNode;
}

export { ITextarea };

import { ReactNode } from "react";

export interface IModalProps {
  isShow: boolean;
  hide: () => void;
  modalContent: ReactNode;
  data?: [];
  headerText?: ReactNode | string;
  bgModal?: "black" | "white";
  typeContent?: "content" | "no_padding_content";
  theme?:
    | "modal"
    | "full_modal"
    | "freedom_modal"
    | "empty_modal"
    | "modal_edit_text"
    | "modal_edit_text_1200";
  className?: string;
}

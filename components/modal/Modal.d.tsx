import { ReactNode } from "react";

export interface IModalProps {
  isShow: boolean;
  hide: () => void;
  modalContent: ReactNode;
  headerText?: ReactNode | string;
  bgModal?: "black" | "white";
  theme?: "modal" | "full_modal" | "freedom_modal" | "empty_modal";
}

import { ReactNode } from "react";

export interface IModalProps {
  isShow: boolean;
  hide: () => void;
  modalContent: ReactNode;
  headerText?: string;
  bgModal?: "black" | "white";
  theme?: "modal" | "full_modal" | "freedom_modal";
}

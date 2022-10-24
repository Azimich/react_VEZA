import { ReactNode } from "react";

export interface IModalProps {
  isShow: boolean;
  hide: () => void;
  modalContent: ReactNode;
  headerText?: string;
  theme?: "modal" | "full_modal";
}

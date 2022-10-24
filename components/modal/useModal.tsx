import { useState } from "react";

export const useModal = () => {
  const [isShow, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShow);
  return {
    isShow,
    toggle,
  };
};

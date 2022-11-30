import { useEffect } from "react";

const useScrollStop = (isShow = false, el = "lock") => {
  useEffect(() => {
    if (isShow) {
      document.getElementById(el).style.overflow = "hidden";
    } else {
      document.getElementById(el).style.overflowX = "hidden";
      document.getElementById(el).style.overflowY = "auto";
    }
  }, [isShow]);
};
export { useScrollStop };

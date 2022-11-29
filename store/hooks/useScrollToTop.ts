import { useEffect } from "react";
import { useRouter } from "next/router";

const useScrollToTop = () => {
  const router = useRouter();
  useEffect(() => {
    document.getElementById("_next") &&
      document.getElementById("_next").animate({ scrollTop: 0 });
  }, [router]);
};

export { useScrollToTop };

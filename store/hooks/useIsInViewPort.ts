import { useEffect, useMemo, useState } from "react";

const useIsInViewport = (ref: { current: Element }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      typeof IntersectionObserver !== `undefined` &&
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export { useIsInViewport };

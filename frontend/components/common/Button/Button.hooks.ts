import { useEffect, useState } from "react";

const LOADING_TIMEOUT = 500;

export const useLoading = (isLoading: boolean) => {
  const [dots, setDots] = useState<string>("..");

  useEffect(() => {
    let interval;

    if (isLoading) {
      interval = setInterval(() => {
        setDots((prevDots) => (prevDots === ".." ? "..." : ".."));
      }, LOADING_TIMEOUT);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);

  return dots;
};

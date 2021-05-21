import { useEffect } from "react";

const useView = (path) => {
  useEffect(() => {
    try {
      fetch("/api/view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path }),
      });
    } catch {}
  }, []);
  return;
};

export default useView;

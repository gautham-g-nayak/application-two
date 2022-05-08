import { useState, useEffect, useRef } from "react";

function useSession(
  sessionStorageKey: string,
  initValue: string
): [string, (e: string) => void] {
  const [value, setValue] = useState(
    sessionStorage.getItem(sessionStorageKey) ?? initValue
  );
  const firstRender = useRef(false);

  useEffect(() => {
    if (!firstRender.current) {
      firstRender.current = true;
      return;
    }
    sessionStorage.setItem(sessionStorageKey, value);
  }, [value]);

  return [value, setValue];
}

export default useSession;

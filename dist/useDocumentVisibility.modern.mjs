import { useState, useCallback, useEffect } from 'react';

function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setvisible] = useState(true);
  const checkVisible = useCallback(() => {
    if (document.visibilityState === 'visible') {
      setvisible(true);
    } else {
      setvisible(false);
      setCount(count => count + 1);
    }
  }, []);

  const onVisibilityChange = callback => {
    callback(visible);
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", checkVisible);
    return () => {
      document.removeEventListener('visibilitychange', checkVisible);
    };
  }, [checkVisible]);
  return {
    count,
    visible,
    onVisibilityChange
  };
}

export { useDocumentVisibility as default };
//# sourceMappingURL=useDocumentVisibility.modern.mjs.map

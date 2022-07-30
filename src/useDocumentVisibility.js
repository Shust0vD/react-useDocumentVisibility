import { useCallback, useEffect, useRef, useState } from 'react';

export default function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setvisible] = useState(document.visibilityState === 'visible');

  const events = useRef([]);

  const checkVisible = useCallback(() => {
    if (document.visibilityState === 'visible') {
      setvisible(true);
    } else {
      setvisible(false);
      setCount((count) => count + 1);
    }
    events.current.forEach((callback) => callback(document.visibilityState === 'visible'));
  }, []);

  const onVisibilityChange = useCallback((callback) => {
    events.current.push(callback);
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', checkVisible);
    return () => {
      document.removeEventListener('visibilitychange', checkVisible);
      events.current = [];
    };
  }, [checkVisible]);

  return { count, visible, onVisibilityChange };
}

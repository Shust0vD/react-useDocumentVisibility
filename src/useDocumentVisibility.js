import { useCallback, useEffect, useState } from "react";

export default function useDocumentVisibility() {
    const [count, setCount] = useState(0);
    const [visible, setvisible] = useState(document.visibilityState === 'visible');

    const checkVisible = useCallback(() => {
        if (document.visibilityState === 'visible') {
            setvisible(true);

        }
        else {
            setvisible(false);
            setCount(count => count + 1);
        }
    }, []);

    const onVisibilityChange = (callback) => {
        callback(visible);
    };

    useEffect(() => {
        document.addEventListener("visibilitychange", checkVisible);

        return () => {
            document.removeEventListener('visibilitychange', checkVisible);
        };
    }, [checkVisible]);

    return { count, visible, onVisibilityChange };
};
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

    const onVisibilityChange = useCallback((callback) => {
        const sub = () => {
            callback(document.visibilityState === 'visible');
        };
        document.addEventListener("visibilitychange", sub);
        return () => {
            document.removeEventListener("visibilitychange", sub);
        };
    }, []);


    useEffect(() => {
        document.addEventListener("visibilitychange", checkVisible);

        return () => {
            document.removeEventListener('visibilitychange', checkVisible);
        };
    }, [checkVisible]);

    return { count, visible, onVisibilityChange };
};
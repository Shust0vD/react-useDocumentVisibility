import { useState, useCallback, useEffect } from 'react';

function useDocumentVisibility() {
  var _useState = useState(0),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = useState(true),
      visible = _useState2[0],
      setvisible = _useState2[1];

  var checkVisible = useCallback(function () {
    if (document.visibilityState === 'visible') {
      setvisible(true);
    } else {
      setvisible(false);
      setCount(function (count) {
        return count + 1;
      });
    }
  }, []);

  var onVisibilityChange = function onVisibilityChange(callback) {
    callback(visible);
  };

  useEffect(function () {
    document.addEventListener("visibilitychange", checkVisible);
    return function () {
      document.removeEventListener('visibilitychange', checkVisible);
    };
  }, [checkVisible]);
  return {
    count: count,
    visible: visible,
    onVisibilityChange: onVisibilityChange
  };
}

export { useDocumentVisibility as default };
//# sourceMappingURL=useDocumentVisibility.mjs.map

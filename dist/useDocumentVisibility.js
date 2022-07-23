'use strict';

var react = require('react');

function useDocumentVisibility() {
  var _useState = react.useState(0),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = react.useState(true),
      visible = _useState2[0],
      setvisible = _useState2[1];

  var checkVisible = react.useCallback(function () {
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

  react.useEffect(function () {
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

module.exports = useDocumentVisibility;
//# sourceMappingURL=useDocumentVisibility.js.map

## use-document-visibility

React hook, which
-will tell if the browser tab is active (visible) now
-will tell you how many times since the initialization of the component the tab has become inactive (invisible)
-will provide a function in which you can subscribe to a change in the activity (visibility) of the current tab

## Example

```jsx
import React from "react";
import useDocumentVisibility from "@100rub/use-document-visibility";

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log("first handler", isVisible);
    });
    onVisibilityChange((isVisible) => {
      console.log("second handler", isVisible);
    });
  }, [onVisibilityChange]);

  return (
    <div>
      <span>
        You have left the page: {count} times Is the tab active?{" "}
        {visible ? "yes" : "no"}
      </span>
    </div>
  );
};
```

## Codesandbox

https://codesandbox.io/s/usedocumentvisibility-y7t4o3

## npm library

https://www.npmjs.com/package/@100rub/use-document-visibility

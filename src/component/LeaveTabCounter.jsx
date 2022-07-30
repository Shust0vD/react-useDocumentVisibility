import React, { useEffect } from 'react';
import useDocumentVisibility from '../useDocumentVisibility';

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log('first handler', isVisible);
    });
    onVisibilityChange((isVisible) => {
      console.log('second handler', isVisible);
    });
  }, [onVisibilityChange]);

  return (
    <div>
      <span>
        Вы покинули страницу: {count} раз Вкладка активна? {visible ? 'да' : 'нет'}
      </span>
    </div>
  );
};

export default LeaveTabCounter;

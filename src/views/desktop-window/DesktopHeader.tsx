import React, { FC, useCallback, useEffect } from "react";
import { WINDOW_NAMES } from "../../utils/enum";
// import { useWindow, useDrag } from "overwolf-hooks";

const { DESKTOP } = WINDOW_NAMES;

const DesktopHeader: FC = () => {
  // const [desktopWindow] = useWindow(DESKTOP);

  // const { onDragStart, onMouseMove, setCurrentWindowID } = useDrag(null);

  // const updateDragWindow = useCallback(() => {
  //   if (desktopWindow?.id) setCurrentWindowID(desktopWindow.id);
  // }, [desktopWindow, setCurrentWindowID]);

  // useEffect(() => {
  //   updateDragWindow();
  // }, [updateDragWindow]);

  return (
    <div>header</div>
  );
};

export default DesktopHeader;

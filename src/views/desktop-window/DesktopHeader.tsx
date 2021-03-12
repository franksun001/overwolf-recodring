import React, { FC, useEffect, useRef } from "react";
import { OWWindow } from "@overwolf/overwolf-api-ts";
import { WINDOW_NAMES } from "../../utils/enum";

const DesktopHeader: FC = () => {
  const desktopWindow = new OWWindow(WINDOW_NAMES.DESKTOP);
  const headerRef: any = useRef();

  useEffect(() => {
    if (headerRef?.current) {
      desktopWindow.dragMove(headerRef.current);
    }
  }, []);

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50 h-16 bg-transparent"></div>
  );
};

export default DesktopHeader;

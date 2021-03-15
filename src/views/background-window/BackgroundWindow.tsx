import React, { FC, useCallback, useEffect, useMemo } from "react";
import { OWGames, OWWindow, OWGameListener } from "@overwolf/overwolf-api-ts";
import { WINDOW_NAMES } from "../../utils/enum";

const { DESKTOP, IN_GAME } = WINDOW_NAMES;

const BackgroundWindow: FC = () => {
  const desktopWindow = useMemo(() => new OWWindow(DESKTOP), []);
  const inGameWindow = useMemo(() => new OWWindow(IN_GAME), []);

  const toggleWindows = useCallback(
    (info: { isRunning: boolean }) => {
      if (!info) return;
      if (info.isRunning) {
        inGameWindow.restore();
      } else {
        inGameWindow.close();
      }
    },
    [inGameWindow],
  );

  const gameListener = useMemo(
    () =>
      new OWGameListener({
        onGameStarted: toggleWindows,
        onGameEnded: toggleWindows,
      }),
    [toggleWindows],
  );

  const openStartupWindow = useCallback(async () => {
    gameListener.start();
    const currentWindow = (await isRunning()) ? inGameWindow : desktopWindow;
    currentWindow?.restore();
  }, [desktopWindow, inGameWindow, gameListener]);

  const isRunning = async (): Promise<boolean> => {
    const info = await OWGames.getRunningGameInfo();
    return info?.isRunning;
  };

  useEffect(() => {
    openStartupWindow();
  }, [openStartupWindow]);

  return <></>;
};

export default BackgroundWindow;

import React, { FC, useCallback, useEffect } from "react";
import { OWGames, OWWindow, OWGameListener } from "@overwolf/overwolf-api-ts";
import { WINDOW_NAMES } from "../../utils/enum";

const { DESKTOP, IN_GAME } = WINDOW_NAMES;

const BackgroundWindow: FC = () => {
  const desktopWindow = new OWWindow(DESKTOP);
  const inGameWindow = new OWWindow(IN_GAME);

  const openStartupWindow = useCallback(async () => {
    gameListener.start();
    const currentWindow = (await isRunning()) ? inGameWindow : desktopWindow;
    currentWindow?.restore();
  }, [desktopWindow, inGameWindow]);

  const isRunning = async (): Promise<boolean> => {
    const info = await OWGames.getRunningGameInfo();
    return info?.isRunning;
  };

  const toggleWindows = (info: { isRunning: boolean }) => {
    if (!info) return;

    if (info.isRunning) {
      inGameWindow.restore();
    } else {
      inGameWindow.close();
    }
  };

  const gameListener = new OWGameListener({
    onGameStarted: toggleWindows,
    onGameEnded: toggleWindows,
  });

  useEffect(() => {
    openStartupWindow();
  }, [openStartupWindow]);

  return <></>;
};

export default BackgroundWindow;

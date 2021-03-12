import React, { FC, useCallback, useEffect } from "react";
// import { useDispatch } from "react-redux";

import { WINDOW_NAMES } from "../../utils/enum";
import { OWGames, OWWindow } from "@overwolf/overwolf-api-ts";
const { DESKTOP, INGAME } = WINDOW_NAMES;

const gameFeatures = ["kill", "match"];


const BackgroundWindow: FC = () => {
  // const [currentGame] = useRunningGame();
  const desktopWindow = new OWWindow(DESKTOP);
  const ingameWindow = new OWWindow(INGAME);

  const openStartupWindow = useCallback(async () => {
    // const gameRunning = currentGame?.id && currentGame?.gameRunning;
    const currentWindow = await isRunning() ? ingameWindow : desktopWindow;
    // gameRunning && setGameFeatures(gameFeatures);
    currentWindow?.restore();
  }, [desktopWindow, ingameWindow]);

  const isRunning = async (): Promise<boolean> => {
    const info = await OWGames.getRunningGameInfo();
    console.log(2222, info);
    return info && info.isRunning;
  };

  useEffect(() => {
    openStartupWindow();
  }, [openStartupWindow]);

  return <></>;
};

export default BackgroundWindow;

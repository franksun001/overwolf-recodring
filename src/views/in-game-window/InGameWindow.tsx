import React, { FC, useState, useEffect } from "react";
import moment from "moment";
import { OWHotkeys, OWWindow } from "@overwolf/overwolf-api-ts";

import IconLogo from "../../assets/images/ic_logo.svg";
import IconStop from "../../assets/in-game/ic_stop.svg";
import IconPause from "../../assets/in-game/ic_pause.svg";
import IconStart from "../../assets/in-game/ic_start.svg";
import IconBookmark from "../../assets/in-game/ic_bookmark.svg";
import IconDoc from "../../assets/in-game/ic_doc.svg";
import { WINDOW_NAMES, Hotkeys } from "../../utils/enum";
import "./InGameWindow.less";

const currWindow = new OWWindow(WINDOW_NAMES.IN_GAME);
const InGameWindow: FC = () => {
  const [recording, setRecording] = useState<Boolean>(false);
  const [id, setId] = useState<number>(0);
  const [interId, setInterId] = useState<number>(0);
  const [recorderTimer, setRecorderTimer] = useState<string>("00:00");

  const onStart = () => {
    console.log("start");
    setRecording(true);
    overwolf.streaming.onStopStreaming.addListener(console.log); //register to the onStopStreaming
    overwolf.streaming.onStreamingError.addListener(console.log); //register to the onStreamingError
    overwolf.streaming.onStreamingWarning.addListener(console.log); //register to the onStreamingWarning

    let settings: any = {
      audio: { mic: {}, game: {} },
      video: {
        dication_position: "None",
        indication_type: "NoIndication",
      },
    };
    overwolf.streaming.start(
      {
        provider: "VideoRecorder" as any,
        settings,
      },
      (result: any) => {
        if (result.status === "success") {
          setId(result?.stream_id);
          setRecorder();
        }
      },
    );
  };

  const onStop = () => {
    setRecording(false);
    overwolf.streaming.stop(id, (res) => {
      console.log("Stop:", res);
      window.clearInterval(interId);
    });
  };

  const setRecorder = () => {
    const start = moment();
    const _interId: number = window.setInterval(() => {
      const end = moment();
      const diff = end.diff(start);
      setRecorderTimer(moment(diff).format("mm:ss"));
    }, 1000);
    setInterId(_interId);
  };

  const setToggleHotkeyBehavior = async () => {
    const toggleInGameWindow = async (
      hotkeyResult: overwolf.settings.hotkeys.OnPressedEvent,
    ): Promise<void> => {
      console.log(`pressed hotkey for ${hotkeyResult.name}`);
      const inGameState = await currWindow.getWindowState();

      if (inGameState.window_state === "normal" || inGameState.window_state === "maximized") {
        currWindow.minimize();
      } else if (
        inGameState.window_state === "minimized" ||
        inGameState.window_state === "closed"
      ) {
        currWindow.restore();
      }
    };
    OWHotkeys.onHotkeyDown(Hotkeys.TOGGLE, toggleInGameWindow);
  };


  useEffect(() => {
    setToggleHotkeyBehavior();
  }, []);

  return (
    <div className="in-game-root pt-3 pb-2 pl-2 h-screen rounded-tr-xl flex flex-col justify-between">
      <div className="top-wrap flex items-center justify-between">
        <div className="left-wrap flex items-center h-6">
          <img src={IconLogo} alt="logo" className="icon-logo" />
          {recording && (
            <div className="recording-info ml-3 flex items-center h-6 rounded-xl">
              <div className="w-1.5 h-1.5 rounded bg-r00"></div>
              <div className="text ml-1.5 font-bold">{recorderTimer}</div>
            </div>
          )}
        </div>
        <div className="right-wrap flex items-center">
          {recording ? (
            <>
              <img src={IconStop} alt="stop" className="w-3.5 h-3.5" onClick={onStop} />
              <img src={IconPause} alt="pause" className="icon-pause ml-5 h-2.5" />
            </>
          ) : (
            <img src={IconStart} alt="start" className="w-3.5 h-3.5" onClick={onStart} />
          )}
          <img src={IconDoc} alt="document" className="icon-doc ml-5 h-4" />
          <img src={IconBookmark} alt="bookmark" className="ml-5 w-3 h-3.5" />
        </div>
      </div>
      <div className="bottom-wrap flex items-center">
        <div className="bottom-tips px-2.5 flex items-center h-5 rounded-md border border-solid border-g00 font-bold">
          F11
        </div>
        <div className="ml-2 text-xs font-semibold">Hide / Show</div>
      </div>
    </div>
  );
};

export default InGameWindow;

import React, { FC, useEffect, useState } from "react";
// import { Title } from "components/Title";
// import { RootReducer } from "app/rootReducer";
// import { useSelector } from "react-redux";

import IconLogo from "../../assets/images/ic_logo.svg";
import IconStop from "../../assets/in-game/ic_stop.svg";
import IconPause from "../../assets/in-game/ic_pause.svg";
import IconStart from "../../assets/in-game/ic_start.svg";
import IconBookmark from "../../assets/in-game/ic_bookmark.svg";
import IconDoc from "../../assets/in-game/ic_doc.svg";
import "./InGameWindow.less";

interface StreamResult {
  success: boolean;
  stream_id: number;
  SubErrorMessage: string;
}
const InGameWindow: FC = () => {
  // const { event, info } = useSelector((state: RootReducer) => state.background);

  const [recording, setRecording] = useState<Boolean>(false);
  const [id, setId] = useState<number>(0);

  // useEffect(() => {
  //   console.info("event", event); // or use https://github.com/AlbericoD/overwolf-modern-react-boilerplate#-remote-redux-debug
  // }, [event]);

  // useEffect(() => {
  //   console.info("info", info); // or use https://github.com/AlbericoD/overwolf-modern-react-boilerplate#-remote-redux-debug
  // }, [info]);

  const onStart = () => {
    console.log("start");
    setRecording(true);
    overwolf.streaming.onStopStreaming.addListener(console.log); //register to the onStopStreaming
    overwolf.streaming.onStreamingError.addListener(console.log); //register to the onStreamingError
    overwolf.streaming.onStreamingWarning.addListener(console.log); //register to the onStreamingWarning
    let settings: any = {
      audio: { mic: {}, game: {} },
      video: {},
    };
    console.log(overwolf.streaming.start);
    overwolf.streaming.start(
      {
        provider: "VideoRecorder" as any,
        settings,
      },
      (res: any) => {
        setId(res?.stream_id);
      },
    );
  };

  const onStop = () => {
    setRecording(false);
    overwolf.streaming.stop(id, (res) => {
      console.log(res);
    });
  };

  return (
    <div className="in-game-root pt-3 pb-2 pl-2 h-screen rounded-tr-xl flex flex-col justify-between">
      <div className="top-wrap flex items-center justify-between">
        <div className="left-wrap flex items-center h-6">
          <img src={IconLogo} alt="logo" className="icon-logo" />
          {recording && (
            <div className="recording-info ml-3 flex items-center h-6 rounded-xl">
              <div className="w-1.5 h-1.5 rounded bg-r00"></div>
              <div className="text ml-1.5 font-bold">0:01</div>
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

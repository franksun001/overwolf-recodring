import React, { FC, useState, useMemo } from "react";

import Input from "../../components/component_input";
import Button from "../../components/component_button";
import { ButtonType } from "../../utils/enum";

import IconLogo from "../../assets/images/ic_logo.svg";
import IconGoogle from "../../assets/images/login/ic_google.svg";
import IconTwitch from "../../assets/images/login/ic_twitch.svg";
import IconDiscord from "../../assets/images/login/ic_discord.svg";
import TopPolygon from "../../assets/images/login/ic_polygon_top.svg";
import BottomPolygon from "../../assets/images/login/ic_polygon_bottom.svg";
import LeftLogo from "../../assets/images/login/ic_login_logo.svg";

import "./index.less";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = () => {
    console.log("Login");
  };
  const googleLogin = () => {
    console.log("Google Login");
  };
  const twitchLogin = () => {
    console.log("Twitch Login");
  };
  const discordLogin = () => {
    console.log("Discord Login");
  };

  const loginDisabled = useMemo(() => !username.length || !password.length, [username, password]);
  return (
    <div className="login-root flex flex-col items-center relative z-0 h-screen">
      <img src={IconLogo} alt="logo" className="mt-8 w-9 h-8" />
      <div className="login-container">
        <div className="title font-semibold">Login</div>
        <div className="tips mt-4 text-xs font-bold tracking-0.01 uppercase">
          Glad to se<span>e you back</span>
        </div>
        <Input
          label="Username or email address"
          className="mt-9"
          onChange={(value: string) => setUsername(value)}
        />
        <Input
          type="password"
          label="Password"
          className="mt-5"
          onChange={(value: string) => setPassword(value)}
        />
        <div className="mt-6 flex items-center justify-between">
          <Button type={ButtonType.PRIMARY} disabled={loginDisabled} onClick={login}>
            Login
          </Button>
          <div className="text-sm text-g00">
            No account?
            <a className="ml-1.5 font-semibold text-white" href="/">
              Sign Up
            </a>
          </div>
        </div>
        <div className="flex items-center mt-10">
          <div className="dividing-line flex-1"></div>
          <div className="mx-5 font-medium text-xs text-g00">or login with</div>
          <div className="dividing-line flex-1"></div>
        </div>
        <div className="bottom-btns flex items-center justify-between mt-10">
          <Button onClick={googleLogin}>
            <img src={IconGoogle} alt="logo" className="mr-4" />
            Google
          </Button>
          <Button onClick={twitchLogin}>
            <img src={IconTwitch} alt="logo" className="mr-4" />
            Twitch
          </Button>
          <Button onClick={discordLogin}>
            <img src={IconDiscord} alt="logo" className="mr-3" />
            Discord
          </Button>
        </div>
      </div>

      <img src={LeftLogo} alt="Polygon" className="absolute top-0 left-0 -z-1" />
      <img src={TopPolygon} alt="Polygon" className="absolute top-0 right-5 -z-1" />
      <img src={BottomPolygon} alt="Polygon" className="absolute bottom-0 right-0 -z-1" />
    </div>
  );
};

// Login.propTypes = {};

export default Login;

import Homepage from "../views/homepage";
import Login from "../views/login";
import Settings from "../views/settings";

import { router_homepage, router_sign_in, router_settings } from "./enum";

export const desktopRouters: RouterCfg[] = [
  {
    path: router_homepage,
    component: Homepage,
    exact: true,
  },
  {
    path: router_sign_in,
    component: Login,
    exact: true,
  },
  {
    path: router_settings,
    component: Settings,
    exact: true,
  },
];

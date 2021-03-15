import { createModel } from "@rematch/core";
import { RootModel } from "./models";
import { getUserInfo } from "../mock_data";
interface userInfo {
  username: string;
  avatar: string;
}
export const user = createModel<RootModel>()({
  state: {} as userInfo,
  reducers: {
    updateUserInfo(state, newState: object) {
      return {
        ...state,
        ...newState,
      };
    },
  },
  effects: (dispatch) => ({
    async getUserInfo() {
      const userInfo: any = await getUserInfo();
      dispatch.user.updateUserInfo(userInfo);
    },
  }),
});

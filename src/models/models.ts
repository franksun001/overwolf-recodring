import { Models } from "@rematch/core";
import { user } from "./model_user";

export interface RootModel extends Models<RootModel> {
  user: typeof user;
}

export const models: RootModel = { user };

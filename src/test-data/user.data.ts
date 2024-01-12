import { LoginUserModel } from "@_src/models/user.model";
import { USER_EMAIL, USER_PASSWORD } from "@_config/env.config";

export const testUser1: LoginUserModel = {
  userEmail: USER_EMAIL,
  userPassword: USER_PASSWORD,
};

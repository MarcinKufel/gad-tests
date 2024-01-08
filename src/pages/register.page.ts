import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { RegisterUser } from "../models/user.model";

export class RegisterPage extends BasePage {
  url = "/register.html";
  userFirstNameInput = this.page.getByTestId("firstname-input");
  userLastNameInput = this.page.getByTestId("lastname-input");
  userEmailInput = this.page.getByTestId("email-input");
  userPasswordInput = this.page.getByTestId("password-input");
  registerButton = this.page.getByTestId("register-button");

  alertPopup = this.page.getByTestId("alert-popup");

  // registerError = this.page.getByTestId("login-error");

  constructor(page: Page) {
    super(page);
  }

  async register(registerUserData: RegisterUser): Promise<void> {
    await this.userFirstNameInput.fill(registerUserData.userFirstName);
    await this.userLastNameInput.fill(registerUserData.userLastName);
    await this.userEmailInput.fill(registerUserData.userEmail);
    await this.userPasswordInput.fill(registerUserData.userPassword);
    await this.registerButton.click();
  }
}

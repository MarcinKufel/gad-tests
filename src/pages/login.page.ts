import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  url = "/login/";
  userEmailInput = this.page.getByPlaceholder("Enter User Email");
  userPasswordInput = this.page.getByPlaceholder("Enter Password");
  loginButton = this.page.getByRole("button", { name: "Login" });

  loginError = this.page.getByTestId("login-error");

  constructor(page: Page) {
    super(page);
  }

  async login(email: string, password): Promise<void> {
    await this.userEmailInput.fill(email);
    await this.userPasswordInput.fill(password);
    await this.loginButton.click();
  }
}

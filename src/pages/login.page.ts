import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  url = "/login/";
  constructor(page: Page) {
    super(page);
  }

  async login(email: string, password): Promise<void> {
    await this.page.getByPlaceholder("Enter User Email").fill(email);
    await this.page.getByPlaceholder("Enter Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}

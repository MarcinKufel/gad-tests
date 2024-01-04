import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class WelcomePage extends BasePage {
  url = "/welcome";
  constructor(page: Page) {
    super(page);
  }
}

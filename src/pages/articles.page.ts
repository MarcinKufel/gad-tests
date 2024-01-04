import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ArticlesPage extends BasePage {
  url = "/articles.html";
  constructor(page: Page) {
    super(page);
  }
}

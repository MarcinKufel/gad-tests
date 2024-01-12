import { MainMenuComponent } from "@_src/components/main-menu.component";
import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CommentsPage extends BasePage {
  url = "/comments.html";
  mainMenu = new MainMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }
}

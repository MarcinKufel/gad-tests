import { Page } from "@playwright/test";
import { MainMenuComponent } from "../components/main-menu.component";
import { BasePage } from "./base.page";

export class CommentPage extends BasePage {
  url = "/comment.html";
  mainMenu = new MainMenuComponent(this.page);
  commentBody = this.page.getByTestId("comment-body");

  constructor(page: Page) {
    super(page);
  }
}

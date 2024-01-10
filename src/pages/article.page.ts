import { Page } from "@playwright/test";
import { MainMenuComponent } from "../components/main-menu.component";
import { BasePage } from "./base.page";

export class ArticlePage extends BasePage {
  url = "/articles.html";
  mainMenu = new MainMenuComponent(this.page);
  articleTitle = this.page.getByTestId("article-title");
  articleBody = this.page.getByTestId("article-body");
  deleteIcon = this.page.getByTestId("delete");

  constructor(page: Page) {
    super(page);
  }

  async deleteArticle(): Promise<void> {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
    this.deleteIcon.click();
  }
}

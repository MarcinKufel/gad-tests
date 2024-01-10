import { Page } from "@playwright/test";
import { MainMenuComponent } from "../components/main-menu.component";
import { BasePage } from "./base.page";

export class ArticlesPage extends BasePage {
  url = "/articles.html";
  mainMenu = new MainMenuComponent(this.page);
  addArticleButtonLogged = this.page.locator("#add-new");
  searchInput = this.page.getByTestId("search-input");
  goSearchButton = this.page.getByTestId("search-button");
  noResultText = this.page.getByTestId("no-results");

  constructor(page: Page) {
    super(page);
  }

  async gotoArticle(title: string): Promise<void> {
    await this.page.getByText(title).click();
  }

  async searchArticle(phrase: string): Promise<void> {
    await this.searchInput.fill(phrase);
    await this.goSearchButton.click();
  }
}

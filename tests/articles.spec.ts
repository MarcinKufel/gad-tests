import { expect, test } from "@playwright/test";
import { ArticlesPage } from "../src/pages/articles.page";
import { LoginPage } from "../src/pages/login.page";
import { testUser1 } from "../src/test-data/user.data";
import { AddArticlesView } from "../src/views/add-article.view";
import { ArticlePage } from "../src/pages/article.page";

test.describe("Verify articles", () => {
  test("create new article @GAD-R04-01", async ({ page }) => {
    // Arrange

    const loginPage = new LoginPage(page);
    // Act
    await loginPage.goto();
    await loginPage.login(testUser1);

    const articlesPage = new ArticlesPage(page);
    await articlesPage.goto();

    await articlesPage.addArticleButtonLogged.click();

    const addArticleView = new AddArticlesView(page);
    await expect.soft(addArticleView.header).toBeVisible();

    const newArticleTitle = "test title";
    const newArticleBody = "test body";
    await addArticleView.titleInput.fill(newArticleTitle);
    await addArticleView.bodyInput.fill(newArticleBody);
    await addArticleView.saveButton.click();
    // Assert

    const articlePage = new ArticlePage(page);
    await expect.soft(articlePage.articleTitle).toHaveText(newArticleTitle);
    await expect.soft(articlePage.articleBody).toHaveText(newArticleBody);
  });
});

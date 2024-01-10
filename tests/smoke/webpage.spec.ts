import { expect, test } from "@playwright/test";
import { ArticlesPage } from "../../src/pages/articles.page";
import { CommentsPage } from "../../src/pages/comments.page";
import { HomePage } from "../../src/pages/home.page";

test.describe("Verify service main pages", () => {
  test("has page title @GAD-R01-01", async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);
    // Act
    await homePage.goto();

    // Assert
    const title = await homePage.getTitle();
    expect(title).toContain("GAD");
  });

  test("articles page title @GAD-R01-02", async ({ page }) => {
    // Arrange
    const articlesPage = new ArticlesPage(page);
    // Act
    await articlesPage.goto();

    // Assert
    const title = await articlesPage.getTitle();
    expect(title).toContain("Articles");
  });

  test("comments page title @GAD-R01-02", async ({ page }) => {
    // Arrange
    const commentsPage = new CommentsPage(page);
    // Act
    await commentsPage.goto();

    // Assert
    const title = await commentsPage.getTitle();
    expect(title).toContain("Comments");
  });

  test("home page title simple", async ({ page }) => {
    // Act
    await page.goto("/articles.html");

    // Assert
    await expect(page).toHaveTitle(/Articles/);
  });
});

import { expect, test } from "@_src/fixtures/merge.fixture";

test.describe("Verify service main pages", () => {
  test("has page title @GAD-R01-01", async ({ homePage }) => {
    // Arrange
    const expectedHomePageTitle = "GAD";

    // Assert
    const title = await homePage.getTitle();
    expect(title).toContain(expectedHomePageTitle);
  });

  test("articles page title @GAD-R01-02", async ({ articlesPage }) => {
    // Arrange
    const expectedArticlesTitle = "Articles";

    // Assert
    const title = await articlesPage.getTitle();
    expect(title).toContain(expectedArticlesTitle);
  });

  test("comments page title @GAD-R01-02", async ({ commentsPage }) => {
    // Arrange
    const expectedCommentsTitle = "Comments";

    // Assert
    const title = await commentsPage.getTitle();
    expect(title).toContain(expectedCommentsTitle);
  });

  test("home page title simple", async ({ page }) => {
    // Act
    await page.goto("/articles.html");

    // Assert
    await expect(page).toHaveTitle(/Articles/);
  });
});

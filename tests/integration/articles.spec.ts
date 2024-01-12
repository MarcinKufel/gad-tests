import { prepareRandomArticle } from "@_src/factories/article.factory";
import { ArticlePage } from "@_src/pages/article.page";
import { ArticlesPage } from "@_src/pages/articles.page";
import { AddArticleView } from "@_src/views/add-article.view";
import { expect, test } from "@playwright/test";

test.describe("Verify articles", () => {
  let articlesPage: ArticlesPage;
  let addArticleView: AddArticleView;

  test.beforeEach(async ({ page }) => {
    articlesPage = new ArticlesPage(page);

    await articlesPage.goto();
    addArticleView = await articlesPage.clickAddArticleButtonLogged();

    await expect.soft(addArticleView.addNewHeader).toBeVisible();
  });

  test("user can access single article @GAD-R04-03 @logged", async ({
    page,
  }) => {
    // Arrange
    const articlePage = new ArticlePage(page);

    const articleData = prepareRandomArticle();

    await addArticleView.createArticle(articleData);
    await articlesPage.goto();

    // Act
    await page.getByText(articleData.title).click();
    // Assert
    await expect.soft(articlePage.articleTitle).toHaveText(articleData.title);
    await expect
      .soft(articlePage.articleBody)
      .toHaveText(articleData.body, { useInnerText: true });
  });
  test("create new article @GAD-R04-01 @logged", async ({ page }) => {
    // Arrange
    const articlePage = new ArticlePage(page);

    const articleData = prepareRandomArticle();

    // Act
    await addArticleView.createArticle(articleData);

    // Assert
    await expect.soft(articlePage.articleTitle).toHaveText(articleData.title);
    await expect
      .soft(articlePage.articleBody)
      .toHaveText(articleData.body, { useInnerText: true });
  });

  test("reject creating article without title @GAD-R04-01 @logged", async () => {
    // Arrange
    const expectedErrorMessage = "Article was not created";
    const articleData = prepareRandomArticle();

    articleData.title = "";

    // Act

    await addArticleView.createArticle(articleData);
    // Assert
    await expect(addArticleView.alertPopup).toHaveText(expectedErrorMessage);
  });

  test("reject creating article without body @GAD-R04-01 @logged", async () => {
    // Arrange
    const expectedErrorMessage = "Article was not created";
    const articleData = prepareRandomArticle();

    articleData.body = "";

    // Act

    await addArticleView.createArticle(articleData);
    // Assert
    await expect(addArticleView.alertPopup).toHaveText(expectedErrorMessage);
  });

  test.describe("title length", () => {
    test("reject creating article without title exceeding 129 signs @GAD-R04-02 @logged", async () => {
      // Arrange
      const expectedErrorMessage = "Article was not created";
      const articleData = prepareRandomArticle(129);

      // Act

      await addArticleView.createArticle(articleData);
      // Assert
      await expect(addArticleView.alertPopup).toHaveText(expectedErrorMessage);
    });

    test("create article with title with 128 signs @GAD-R04-02 @logged", async ({
      page,
    }) => {
      // Arrange
      const articlePage = new ArticlePage(page);
      const articleData = prepareRandomArticle(128);

      // Act
      await addArticleView.createArticle(articleData);

      // Assert
      await expect.soft(articlePage.articleTitle).toHaveText(articleData.title);
    });
  });
});

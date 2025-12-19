import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CollectionsPage } from '../pages/CollectionsPage';

test.describe('TravelCurious happy path – base & collections', () => {
    test('Base path (home) → Collections → different collection pages', async ({ page }) => {
        const homePage = new HomePage(page);
        const collectionsPage = new CollectionsPage(page);

        // Open HomePage and verify header and content elements visibility
        await homePage.navigateHomePage();
        await homePage.verifyHomePageHeaderElements();
        await homePage.verifyHomePageContentElements();

        // Go to CollectionsPage via header link
        await homePage.goToCollectionsPageViaHeader();

        // Check /collections loaded and main collections are visible
        await collectionsPage.verifyCollectionsPageContentElements();
        await expect(page).toHaveURL(/\/collections\/?$/);

        // Open Art Tours collection
        await collectionsPage.openArtTours();


        // Go back to collections
        await page.goto('/collections/');

    })
})

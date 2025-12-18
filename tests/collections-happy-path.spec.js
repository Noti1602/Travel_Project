import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { CollectionsPage } from '../pages/CollectionsPage.js';

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


//     test('Base path is reachable and header is correct', async ({ page }) => {
//         const homePage = new homePage(page);
//
//         await homePage.navigateHomePage();
//         await homePage.verifyHomeLoaded();
//     });
//

//     test('Collections page is reachable directly by URL', async ({ page }) => {
//         const collectionsPage = new CollectionsPage(page);
//
//         await collectionsPage.open();
//         await collectionsPage.verifyCollectionsPageLoaded();
//     });
})

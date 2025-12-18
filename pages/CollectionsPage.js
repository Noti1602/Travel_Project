import { expect } from '@playwright/test';
import {BasePage} from "./BasePage";

export class CollectionsPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;

        this.contentHeader = this.page.locator('.content h1');
        this.collection = this.page.locator('div.collection ');
        this.collectionName = this.page.locator('.content h3');
        this.artToursLink = page.locator('.content h3 a[href*="/collections/art-tours"]');
        this.historyToursLink = page.locator('a[href*="/collections/history-tours"]');
        this.jewishHeritageLink = page.locator('a[href*="/collections/jewish-heritage"]');
    }

    async navigateCollectionsPage() {
        await this.page.goto('/collections/');
    }

    async verifyCollectionsPageContentElements() {
        await this.hasText(this.contentHeader, 'Travel Curious Collections');
        await expect(this.collection).toHaveCount(15);
        await this.hasTexts(this.collectionName,[
            'Black Cab Heritage Tours',
            'Food Tours',
            'Art Tours',
            'History Tours',
            'Night Tours',
            'Themed Tours',
            'Wine Tours',
            'Architecture Tours',
            'Jewish Heritage',
            'Tours for Kids',
            'Ghost Tours',
            'Popular Tours',
            'Virtual Tours',
            'Lonely Planet Experiences',
            'Build Your Own Tour'
        ]);
    }

    async openArtTours() {
        await this.artToursLink.click();
        await expect(this.page).toHaveURL(/\/collections\/art-tours/);
        await this.hasText(this.contentHeader, 'Art Tours');
    }

    async openHistoryTours() {
        await this.historyToursLink.click();
        await expect(this.page).toHaveURL(/\/collections\/history-tours/);
    }

    async openJewishHeritage() {
        await this.jewishHeritageLink.click();
        await expect(this.page).toHaveURL(/\/collections\/jewish-heritage/);
    }
}

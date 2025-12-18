import { expect } from "@playwright/test";

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goto(path) {
        await this.page.goto(path);
    }
ß
    /**
     * Asserts that a given locator is visible on the page.
     *
     * @param {import('@playwright/test').Locator} locator - The Playwright locator to check visibility for.
     * @param {string} [message='Element should be visible'] - Optional custom assertion message.
     * @returns {Promise<void>} A promise that resolves when the visibility assertion completes.
     */
    async isVisible(locator, message = 'Element should be visible') {
        await expect(locator, message).toBeVisible();
    }

    /**
     * Asserts that a given locator contains the expected text.
     *
     * @param {import('@playwright/test').Locator} locator - The Playwright locator to check text for.
     * @param {string|RegExp} expectedText - The expected text or RegExp pattern.
     * @param {string} [message='Element text does not match expected value'] - Optional custom assertion message.
     * @returns {Promise<void>} A promise that resolves when the assertion completes.
     */
    async hasText(locator, expectedText, message = 'Element text does not match expected value') {
        await expect(locator, message).toHaveText(expectedText);
    }

    /**
     * Asserts that a given locator is enabled (interactive).
     *
     * This check ensures the element is not disabled and can be clicked or interacted with.
     * Playwright automatically waits until the locator resolves and the element reaches the
     * "enabled" state before performing the assertion.
     *
     * @param {import('@playwright/test').Locator} locator
     *        The Playwright locator representing the element to verify.
     *
     * @param {string} [message='Element is expected to be enabled']
     *        Optional custom message to display if the assertion fails.
     *
     * @returns {Promise<void>}
     *          Resolves when the assertion completes successfully.
     *
     * @example
     * await this.isEnabled(this.submitButton);
     */
    async isEnabled(locator, message = 'Element is expected to be enabled') {
        await expect(locator, message).toBeEnabled();
    }

    /**
     * Verifies that a list of locators contains the exact expected text values.
     *
     * @async
     * @function hasTexts
     * @param {import('@playwright/test').Locator} locator
     *        The Playwright locator that resolves to multiple elements.
     *
     * @param {string[]} expectedList
     *        An array of expected text values in the exact order they should appear.
     *
     * @returns {Promise<void>}
     *          A promise that resolves when the text assertion completes.
     *
     * @example
     * // Example usage:
     * await basePage.hasTexts(page.locator('.card-title'), [
     *   'Themed Tours',
     *   'Art Tours',
     *   'History Tours',
     *   'Jewish Heritage'
     * ]);
     */
    async hasTexts(locator, expectedList) {
        const actual = await locator.allTextContents();
        expect(actual).toEqual(expectedList);
    }



}

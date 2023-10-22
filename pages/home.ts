import { expect, Page } from '@playwright/test'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
    path: path.join(__dirname, '../.env'),
});

class Home {
    readonly page: Page;
    public constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://citilink.ru')
    }

    async clickOnLoginButton() {
        await this.page.locator('//button[@type="submit"]').click()
    }

    async verifyDashboardURL() {
        expect(this.page.url()).toEqual(process.env.WEB_URL)
    }
}

export { Home };
import { Before, AfterAll } from '@cucumber/cucumber'
import { chromium, Page } from '@playwright/test'

let browser: any;
let page: Page;

Before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
});

AfterAll(async () => {
    await browser.close();
});
import { When, Then } from '@cucumber/cucumber'
import { Home } from '../pages/home'

let homePage: Home

When('I Visit the OrangeHRM login page', async () => {
    await homePage.navigate()
})

When('I click on Login button', async () => {
    await homePage.clickOnLoginButton()
})

Then('I verify dashboard URL', async () => {
    await homePage.verifyDashboardURL()
})
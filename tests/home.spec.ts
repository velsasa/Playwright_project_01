import {test, expect} from "@playwright/test"
import HomePage from "../pages/home.page"

test.describe('Home', () => {

    let homePage : HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate()
    })
    

    test('Open home page and verify title', async ({ page }) => {

        //verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
        
    })

    test('Click get started button using CSS selector', async ({ page }) => {
        // click the button
        await homePage.getStartedBtn.click()

        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/)
    })

    test('Verify heading text is visible using text selector', async ({ page }) => {
        homePage = new HomePage(page);

        //open url
        await homePage.navigate()

        // find the text locator
        const headingText = await homePage.headingText

        //verify heading text is visible
        await expect(headingText).toBeVisible()
    })

    test('Verify home link is enabled using text and css selector', async ({ page }) => {
        // find the home text
        //const homeText = page.locator('#zak-primary-menu >> text=home') // '>>' means that go ahead first '#zak-primary-menu' and go inside primary-menu locator and find 'text=home'
        //const homeText = page.locator('#zak-primary-menu:has-text("Home")')
        const homeText = await homePage.homeLink

        //verify heading text is enabled
        await expect(homeText).toBeEnabled()
    })

    test('Verify search icon is visible using xpath selector', async ({ page }) => {
        // find the search icon
        const searchIcon = await homePage.searchIcon

        //verify heading text is enabled
        await expect(searchIcon).toBeVisible()
    })

    test('Verify text of all nav links', async ({ page }) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]

        //open url
        await homePage.navigate()

        //verify nav links text
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks)
    })
})

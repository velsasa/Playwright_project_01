import {Page, Locator} from '@playwright/test';

class HomePage{

    page:Page
    getStartedBtn:Locator
    headingText:Locator
    homeLink:Locator
    searchIcon:Locator
    navLinks:Locator

    constructor(page: Page) {
        this.page = page
        this.getStartedBtn = page.locator('#get-started')
        this.headingText = page.locator('text = Think different. Make different.')
        this.homeLink = page.locator('#zak-primary-menu:has-text("Home")')
        this.searchIcon =  page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]')
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
    }

    async navigate(){ //if you use async you don't return value into method
        await this.page.goto('/')
    }

    getNavLinksText() { // if you don't use async you have return value into mehtod
        return this.navLinks.allTextContents()
    }
}

export default HomePage
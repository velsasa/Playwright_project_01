import { expect, test } from "@playwright/test"
import BlogPage from "../pages/blog.page"

test.describe('Blog', () => {

    let blogPage : BlogPage

    test('Verify recent posts count and verify the lenght of each list item', async ({ page }) => {

        blogPage = new BlogPage(page)

        //open blog page
        await blogPage.navigate()

        //loop through the list and assert the char lenght > 10
        for (const el of await blogPage.recentPostsList.elementHandles()) {
            console.log((await el.textContent())?.length)
            expect(((await el.textContent())?.trim())?.length).toBeGreaterThan(10) 
        }

        //assert the total lenght = 5
        await expect(await blogPage.recentPostsList.count()).toEqual(5)
        
    })
})

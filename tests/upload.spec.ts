import { expect, test } from "@playwright/test"
import CartPage from "../pages/cart.page"
const path = require('path') //this is node.js package using for file path

test.describe('Upload file', () => {

    let cartPage : CartPage;

    const fileName = ['logotitle.png', '3mb-file.pdf']

    for (const name of fileName) {

        test(`should upload a ${name} file`, async ({ page }) => { //use ' ` ' to parametrize and also '${}' to put variable

            cartPage = new CartPage(page)
    
            //open url
            await page.goto('/cart')
    
            //provide test file path
            const filePath = path.join(__dirname, `../data/${name}`) // also the same use ' ` ' to parametrize and also '${}' to put variable
    
            //DOM manipulation - to manipulate on website with selectors (to have 'choose file' button which is hidden)
            await page.evaluate(()=>{
                const selector = document.querySelector('#upfile_1')
                if(selector){
                    selector.className = ''
                }
            })
    
            //upload test file
            cartPage.uploadComponent().uploadFile(filePath)
    
            //hardcoded sleep - WRONG WAY
            //await page.waitForTimeout(5000)
    
            //wait for condition - max wait is 10000, but wait till element is visible (for example if element is visible after 5000 it will finish.)
            // await page.locator('#wfu_messageblock_header_1_1')
            // .waitFor({state:'visible' , timeout: 10000})
    
            //assertion
            await expect(cartPage.uploadComponent().successTxt)
            .toContainText('uploaded successfully', {timeout : 10000})
    
        }) 
        
    }

    
})

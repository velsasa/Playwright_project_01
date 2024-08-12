import { expect, test } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import { faker } from '@faker-js/faker';

test.describe('Contact', () => {

    let contactPage: ContactPage

    test('Fill contact form and verify success message', async ({ page }) => {

        contactPage = new ContactPage(page)

        //open contact page
        await contactPage.navigate()

        //fill out input fields
        await contactPage.submitForm(faker.name.firstName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2))
       
        //soft assertion
        //await expect.soft(page.locator('.contact-message textarea')).toHaveText("Fail test message") // that means if doesn't have this text it will work all next steps and after that fail with this error

        //this is for soft assertion above - error need to be less than 1 that code after this line be executed.
        //expect(test.info().errors.length).toBeLessThan(1)

        //verify success message
        await expect(contactPage.successMsg).toHaveText('Thanks for contacting us! We will be in touch with you shortly')

    })   
})

import {test, expect} from "@playwright/test" 

test("login", async({page}) => {
    await page.goto('https://www.saucedemo.com/'); 
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
    // await page.pause();
    await expect (page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.getByText('Your Cart')).toBeVisible();
    await expect(page.locator('.shopping_cart_badge')).toHaveText("2")
//   await page.locator('[data-test="item-0-title-link"]').click();
//   await page.locator('[data-test="inventory-item-name"]').click();
//   await page.locator('[data-test="item-4-title-link"]').click();
//   await page.goto('https://www.saucedemo.com/cart.html');
//   await page.locator('[data-test="checkout"]').click();


})
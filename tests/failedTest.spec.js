const { test, expect } = require("@playwright/test");

test("2Check whether screenshot, video and traces are attached to the report if test fails", async ({
	page,
}) => {
	await page.goto(
		"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
	);
	expect(page).toHaveURL(
		"https://opensource-demo.orangehrmlive.com/web/index.php/auth/log",
	);
});

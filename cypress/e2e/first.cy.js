 /// <reference types='cypress' />;

describe("my first test automatic", () => {
	it("open  webpage  google,com", () => {
		cy.visit("https://google.com");
	});
});

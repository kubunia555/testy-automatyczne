/// <reference types='cypress' />;

describe("testy zwiazane z wybieranie select", () => {
	it("klikniecie w zakladke woman", () => {
		cy.visit("/");
		cy.get('a[title="Women"]').click();
		cy.url().should("include", "id_category=3&controller=category");
	});

	it("wybieranie instock", () => {
		cy.get("#selectProductSort").select("In stock");
		cy.get("#selectProductSort").should("have.value", "quantity:desc");
	});

	it("wybieranie  product name a do z :", () => {
		cy.get("#selectProductSort").select("name:asc");
		cy.get("#selectProductSort").should("have.value", "name:asc");
	});
});

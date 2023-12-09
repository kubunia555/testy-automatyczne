/// <reference types='cypress' />;

describe("klikniecie w element na stronie ", () => {
	it("klikniecie w zakladce contac us", () => {
		cy.visit("/"); // bierze i otwiera strone z baseurl z cypress.confing
		cy.get('a[title="Contact us"]').click(); // pobieranie elementu z strony + klic
	});
});

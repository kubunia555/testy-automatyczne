/// <reference types='cypress' />;
import base from "../pages/base";
import home from "../pages/home";
import women from "../pages/women";

describe("test zwiazany z zazanczanie checkbox", () => {
	it("klikniecie w zakladke woman", () => {
		base.openHomePage();
		home.clickonWonemTab();
		//cy.visit("/");// oznacza ze korzystam z zasobow url
		//cy.get('a[title="Women"]').click();
		cy.url().should("include", "id_category=3&controller=category");
	});

	it("zaznaczanie checkboxa w zakladce women", () => {
		women.checkTops();
		// //cy.get("#layered_category_4").should("be.checked");
		women.topsCheckBox.should("be.checked");
		women.checkDresses();

		women.checkSize();

		// cy.get("#layered_category_4").check(); //zaznacz check boxa ale pobierzz first

		// cy.get("#layered_category_8").check();
		// cy.get("#ul_layered_id_attribute_group_1 input").check();
	});
});



/// <reference types='cypress' />;

import base from "../pages/base";
import search from "../pages/search";

import ResultPage from "../pages/ResultPage";
import { searchPhrase, notFoundProduct } from "../fixtures/searchData.json";

describe("wpisywanie tekstu w wyszukiwanre ", () => {
	it("wepisywanie tekstu", () => {
		// cy.visit("/"); zamiast tego to
		base.openHomePage();
		search.typeSearchPrharse(searchPhrase);

		// cy.get("#search_query_top").type("przykladowa tresc"); // type to  wpisanie zawartosci do pobranego pliku

		search.searchBox.should("have.value", searchPhrase);

		//cy.get("#search_query_top").should("have.value", "przykladowa tresc");
		cy.wait(3000); //czeka na wykonanie

		search.clearSearchPhrase();
		//cy.get("#search_query_top").clear(); // czysci
		cy.wait(3000);

		search.typeSearchPrharse(`${searchPhrase} {enter}`);

		//cy.get("#search_query_top").type("przykladowa tresc{enter}"); // wykoanie przycisku enter klawisz funkcyjny
		ResultPage.searchAlert
			.should("be.visible")
			.and("include.text", notFoundProduct);

		search.searchBox.should("have.class", "search_query");
		//cy.get("#search_query_top").should("have.class", "search_query");

		search.searchBox.should("have.css", "margin-right", "1px");
	});
});

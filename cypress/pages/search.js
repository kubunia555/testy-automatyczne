import { searchPhrase } from "../fixtures/searchData.json";

class Search {
	get searchBox() {
		return cy.get("#search_query_top");
	}
	typeSearchPrharse(searchValue) {
		this.searchBox.type(searchValue); // wpisywanie  wartosci w przegladarke
	}

	clearSearchPhrase() {
		this.searchBox.clear();
	}
}

export default new Search();

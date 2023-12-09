class ResaultsPagee {
	get searchAlert() {
		return cy.get("p.alert");
	}
}

export default new ResaultsPagee();

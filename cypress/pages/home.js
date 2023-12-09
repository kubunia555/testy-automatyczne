class Home {
	get womenTab() {
		// get- inaczej schowek na dane
		return cy.get(`a[title="Women"]`);
	}

	clickonWonemTab() {
		this.womenTab.click(); //  wykorzystanie schowka
	}
}

export default new Home();

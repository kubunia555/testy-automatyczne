class Women {
	get topsCheckBox() {
		return cy.get("#layered_category_4");
	}

	get dressesCheckBox() {
		return cy.get("#layered_category_8");
	}

	get SizeCheckBox() {
		return cy.get("#ul_layered_id_attribute_group_1 input");
	}

	checkTops() {
		this.topsCheckBox.check(); // sprawdzenie czy jest zaznaczone
	}
	checkDresses() {
		this.dressesCheckBox.check();
	}

	checkSize() {
		this.SizeCheckBox.check();
	}
}
export default new Women();

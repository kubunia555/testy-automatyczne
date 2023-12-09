/// <reference types='cypress' />;
import { login, passwd } from "../fixtures/loginData.json";

describe("Custom Commands", () => {
	it("logowanie do stronyy automation.pl", () => {
		cy.login(login, passwd);
	});
});

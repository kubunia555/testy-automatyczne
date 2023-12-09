const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://www.automationpractice.pl/",
		redirectionLimit: 3, //3 przekierowania innaczej zwraca  blad

		retries: {
			// ile razy bedzie ponawial  test po znalezieniu bledu
			runMode: 1, //  w trybie cichym nie wlacza sie przegladarka, testy ponawiane raz jesli blad
			openMode: 1,
		},
		watchForFileChanges: true, //sprawdzenie ponowne testu
		chromeWebSecurity: false,
		viewportWidth: 1920,
		viewportHeight: 1080,
		waitForAnimations: true,
		testIsolation: false, // powoduje czysty watek,  fresh
		theme: "dark",
	},
});

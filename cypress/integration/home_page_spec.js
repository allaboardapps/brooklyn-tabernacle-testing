import * as settings from "../support/settings";

describe("Visit the home page", () => {
  it("loads the home page", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("© 2019 The Brooklyn Tabernacle. All Rights Reserved.");
  });
});

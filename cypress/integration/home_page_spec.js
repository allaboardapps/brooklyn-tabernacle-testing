import * as settings from "../support/settings";

describe("Visit the home page", function() {
  it("loads the home page", function() {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("© 2019 The Brooklyn Tabernacle. All Rights Reserved.");
  });
});

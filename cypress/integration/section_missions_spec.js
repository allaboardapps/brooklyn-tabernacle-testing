import * as settings from "../support/settings";

describe("Visit to Missions section links", () => {
  beforeEach(() => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Missions").click();
  });

  it("clicks on the Missions link", () => {
    cy.contains("Missions Home").click();
    cy.url().should("include", "/missions");

    cy.contains("The Brooklyn Tabernacle oversees").should("be.visible");
    cy.contains("Latest Blog Posts").should("be.visible");
  });

  it("clicks on the Missionaries link", () => {
    cy.contains("Missionaries").click();
    cy.url().should("include", "/missions/missionaries");

    cy.contains("Belize").should("be.visible");
    cy.contains(
      "Therefore, go and make disciples of all the nations..."
    ).should("be.visible");
  });
});

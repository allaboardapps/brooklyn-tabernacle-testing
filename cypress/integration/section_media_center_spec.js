import * as settings from "../support/settings";

describe("Visit to Media Center section links", () => {
  beforeEach(() => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Media Center").click();
  });

  it("clicks on the Sermons link", () => {
    cy.contains("Sermons").click();
    cy.url().should("include", "/media/sermons");

    cy.contains("Latest Sermons").should("be.visible");
  });

  it("clicks on the Webcast link", () => {
    cy.contains("Webcast").click();
    cy.url().should("include", "/media/webcast");

    cy.contains("Webcast:").should("be.visible");
    cy.contains("BT Webcasts").should("be.visible");
  });

  it("clicks on the Videos link", () => {
    cy.contains("Videos").click();
    cy.url().should("include", "/media/videos");

    cy.contains("Video Category").should("be.visible");
    cy.contains("Video Categories").should("be.visible");
  });

  it("clicks on the Blogs link", () => {
    cy.contains("Blogs").click();
    cy.url().should("include", "/media/blogs");

    cy.contains("Latest Ministry Blogs").should("be.visible");
  });
});

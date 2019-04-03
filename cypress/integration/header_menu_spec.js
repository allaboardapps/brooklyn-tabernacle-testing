import * as settings from "../support/settings";

describe("Visit on Header Menu links", () => {
  it("clicks on the Home link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Home").click();
    cy.url().should("include", "/");
    cy.contains("The Church");
    cy.contains("The Choir");
    cy.contains("Media Center");
    cy.contains("Missions");
    cy.contains("Ministries");
    cy.contains("Events");
    cy.contains("Giving");
    cy.contains("Online Store");
    cy.contains("This Week at The Brooklyn Tabernacle");
    cy.contains("Churchwide Announcements");
    cy.contains("Service Times");
    cy.contains("Connect With Us");
  });

  it("clicks on the Directions link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Directions").click();
    cy.url().should("include", "/the-church/directions");
    cy.contains("Location");
    cy.contains("17 Smith Street");
    cy.contains("By Bus");
    cy.contains("Driving Directions");
    cy.contains("Parking Information");
  });

  it("clicks on the Service Times link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Service Times").click();
    cy.url().should("include", "/the-church/service-times");
    cy.contains("Sunday");
    cy.contains("Tuesday");
  });

  it("clicks on the Daily Devotional link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.get(".header-link-left > a:contains('Daily Devotional')").click();
    cy.url().should("include", "/devotional");
    cy.contains("Daily Devotional by Jim Cymbala");
    cy.contains("Recent Entries");
  });

  it("clicks on the Contact Us link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Contact Us").click();
    cy.url().should("include", "/the-church/contact-us");
    cy.contains("Mailing Address");
    cy.contains("Contact The Brooklyn Tabernacle");
  });
});

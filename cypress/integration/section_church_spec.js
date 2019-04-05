import * as settings from "../support/settings";

describe("Visit to The Church section links", () => {
  beforeEach(() => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("The Church").click();
  });

  it("clicks on the About Us link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.contains("About Us").click();
    cy.url().should("include", "/the-church");

    cy.contains("About The Brooklyn Tabernacle Church").should("be.visible");
    cy.contains("A Church for Worshiping God & Loving Others").should(
      "be.visible"
    );
  });

  it("clicks on the Directions link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.contains("Directions").click();
    cy.url().should("include", "/the-church/directions");

    cy.contains("Location").should("be.visible");
    cy.contains("By Subway").should("be.visible");
    cy.contains("By Bus").should("be.visible");
    cy.contains("Driving Directions").should("be.visible");
    cy.contains("Parking Information").should("be.visible");
  });

  it("clicks on the Pastoral Staff link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.contains("Pastoral Staff").click();
    cy.url().should("include", "/the-church/pastoral-staff");

    cy.contains("Pastor Jim Cymbala").should("be.visible");
    cy.contains("Pastor Lincoln Fritz").should("be.visible");
  });

  it("clicks on the Service Times link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.contains("Service Times").click();
    cy.url().should("include", "/the-church/service-times");

    cy.get("h2:contains('Sunday')").should("be.visible");
    cy.get("h2:contains('Tuesday')").should("be.visible");
  });

  it("clicks on the What We Believe link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.contains("What We Believe").click();
    cy.url().should("include", "/the-church/what-we-believe");

    cy.contains("Statement of Faith").should("be.visible");
    cy.contains("The Bible").should("be.visible");
    cy.contains("Ordinances of the Church").should("be.visible");
  });

  it("clicks on the Tuesday Night Prayer link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.contains("Tuesday Night Prayer").click();
    cy.url().should("include", "/the-church/tuesday-night-prayer");

    cy.contains("The Tuesday Night Prayer Meeting").should("be.visible");
    cy.contains("More about The Tuesday Night Prayer Meeting").should(
      "be.visible"
    );
  });

  it("clicks on the Financial Accountability link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.contains("Financial Accountability").click();
    cy.url().should("include", "/the-church/financial-accountability");

    cy.contains(
      "ECFA is an accreditation agency dedicated to helping Christian ministries earn the public's trust"
    ).should("be.visible");
  });

  it("clicks on the Online Giving link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.contains("Online Giving").click();
    cy.url().should("include", "/giving");

    cy.contains("We have updated our SecureGive site").should("be.visible");
  });

  it("clicks on the Contact Us link", () => {
    cy.get(
      ".mgmenu_tabs > ul > li > a:contains('The Brooklyn Tabernacle')"
    ).click();
    cy.get(
      ".mgmenu_tabs_panels > div > div > ul > li > a:contains('Contact Us')"
    ).click();
    cy.url().should("include", "/the-church/contact-us");

    cy.contains("Mailing Address").should("be.visible");
    cy.contains("Contact The Brooklyn Tabernacle").should("be.visible");
  });
});

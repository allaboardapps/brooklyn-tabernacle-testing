import * as settings from "../support/settings";

describe("Visit on Header Menu links", () => {
  it("clicks on The Church link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("The Church").click();
    cy.contains("The Brooklyn Tabernacle").should("be.visible");
    cy.contains("Visiting With Us").should("be.visible");
    cy.get(".mgmenu_tabs > ul> li > a:contains('Daily Devotional')").should(
      "be.visible"
    );
    cy.get(".mgmenu_tabs > ul> li > a:contains('Pastoral Resources')").should(
      "be.visible"
    );
    cy.contains("BT Music Licensing").should("not.be.visible");
  });

  it("clicks on The Choir link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("The Choir").click();
    cy.contains("About the BT Choir").should("be.visible");
    cy.contains("BT Music Licensing").should("be.visible");
  });

  it("clicks on the Media Center link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Media Center").click();
    cy.contains("Sermons").should("be.visible");
    cy.contains("Webcast").should("be.visible");
    cy.contains("Mobile App").should("be.visible");
    cy.contains("BT Music Licensing").should("not.be.visible");
  });

  it("clicks on the Members Center link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Members Center").click();
    cy.contains("Information").should("be.visible");
    cy.contains("Welcome Members").should("be.visible");
    cy.contains("Finding a Place to Serve").should("be.visible");
    cy.contains("Forms & Signup").should("be.visible");
    cy.contains("Volunteer Interest Form").should("be.visible");
    cy.contains("GriefShare Sessions").should("be.visible");
    cy.contains("BT Music Licensing").should("not.be.visible");
  });

  it("clicks on the Missions link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Missions").click();
    cy.contains("Missions Home").should("be.visible");
    cy.contains("Donate to Missions").should("be.visible");
    cy.contains("BT Music Licensing").should("not.be.visible");
  });

  it("clicks on the Ministries link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Ministries").click();
    cy.contains("Young People").should("be.visible");
    cy.contains("Outreach").should("be.visible");
    cy.contains("Creative").should("be.visible");
    cy.contains("Family Life").should("be.visible");
    cy.contains("Transformation & Teaching").should("be.visible");
    cy.contains("Service").should("be.visible");
    cy.contains("BT Music Licensing").should("not.be.visible");
  });

  it("clicks on the Events link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Events").click();
    cy.contains("Events – Overview").should("be.visible");
    cy.contains("Service Times").should("be.visible");
    cy.contains("BT Music Licensing").should("not.be.visible");
  });

  it("clicks on the Giving link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.get("ul.mgmenu > li > span:contains('Giving')").click();
    cy.contains("Online Giving – Home").should("be.visible");
    cy.contains("SecureGive Portal").should("be.visible");
    cy.contains("BT Music Licensing").should("not.be.visible");
  });

  it("clicks on the Online Store link", () => {
    cy.visit(settings.WEBSITE_URL);
    cy.get("ul.mgmenu > li > span:contains('Online Store')").click();
    cy.contains("Books & Bibles").should("be.visible");
    cy.contains("Visit Online Store").should("be.visible");
    cy.contains("BT Music Licensing").should("not.be.visible");
  });
});

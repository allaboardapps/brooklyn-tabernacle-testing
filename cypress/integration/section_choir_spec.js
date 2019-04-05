import * as settings from "../support/settings";

describe("Visit to The Choir section links", () => {
  beforeEach(() => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("The Choir").click();
  });

  it("clicks on the About the BT Choir link", () => {
    cy.contains("About the BT Choir").click();
    cy.url().should("include", "/the-choir");

    cy.contains("About The Brooklyn Tabernacle Choir").should("be.visible");
    cy.contains(
      "I want the music to be the arrow that points them to him."
    ).should("be.visible");
  });

  it("clicks on the About the BT Singers link", () => {
    cy.contains("About the BT Singers").click();
    cy.url().should("include", "/the-choir/about-the-bt-singers");

    cy.contains("The Brooklyn Tabernacle Singers").should("be.visible");
    cy.contains("Request The Brooklyn Tabernacle Singers").should("be.visible");
  });

  it("clicks on the Group Travel Schedule link", () => {
    cy.contains("Group Travel Schedule").click();
    cy.url().should("include", "/the-choir/schedule");

    cy.contains("Upcoming Events").should("be.visible");
    cy.contains("Latest BT Albums").should("be.visible");
  });

  it("clicks on the Carol Cymbala link", () => {
    cy.contains("Carol Cymbala").click();
    cy.url().should("include", "/the-choir/carol-cymbala");

    cy.contains("About Carol Cymbala").should("be.visible");
  });

  it("clicks on the Discography link", () => {
    cy.contains("Discography").click();
    cy.url().should("include", "/the-choir/discography");

    cy.contains("Discography of The Brooklyn Tabernacle Choir").should(
      "be.visible"
    );
  });

  it("clicks on the Choir FAQs link", () => {
    cy.contains("Choir FAQs").click();
    cy.url().should("include", "/the-choir/faqs");

    cy.contains("Frequently Asked Questions").should("be.visible");
  });

  it("clicks on the Music Ministry link", () => {
    cy.contains("Music Ministry").click();
    cy.url().should("include", "/ministries/music");

    cy.contains("Who Are We?").should("be.visible");
    cy.contains("Length of Commitment").should("be.visible");
  });

  it("clicks on the Press Releases link", () => {
    cy.contains("Press Releases").click();
    cy.url().should("include", "/the-choir/press-releases");

    cy.contains("The Battle Hymn of the Republic").should("be.visible");
  });

  it("clicks on the Press Releases link", () => {
    cy.contains("Press Releases").click();
    cy.url().should("include", "/the-choir/press-releases");

    cy.contains("The Battle Hymn of the Republic").should("be.visible");
  });

  it("finds the BT Music Licensing (with target _blank) link", () => {
    cy.get("a:contains('BT Music Licensing')").should(
      "have.attr",
      "target",
      "_blank"
    );
  });
});

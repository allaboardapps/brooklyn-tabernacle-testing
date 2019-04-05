import * as settings from "../support/settings";

describe("Visit to Members Center section links", () => {
  beforeEach(() => {
    cy.visit(settings.WEBSITE_URL);
    cy.contains("Members Center").click();
  });

  it("clicks on the Welcome Members link", () => {
    cy.contains("Welcome Members").click();
    cy.url().should("include", "/members");

    cy.contains("Dear Brooklyn Tabernacle Members & Attendees,").should(
      "be.visible"
    );
  });

  it("clicks on the I'm New link", () => {
    cy.contains("I'm New").click();
    cy.url().should("include", "/members/im-new");

    cy.contains("A warm welcome to The Brooklyn Tabernacle.").should(
      "be.visible"
    );
  });

  it("clicks on the Getting Help link", () => {
    cy.contains("Getting Help").click();
    cy.url().should("include", "/members/getting-help");

    cy.contains("We are here to help.").should("be.visible");
  });

  it("clicks on the A Ministry to Help link", () => {
    cy.contains("A Ministry to Help").click();
    cy.url().should("include", "/members/a-ministry-to-help-you");

    cy.contains("Don't walk through difficult times alone.").should(
      "be.visible"
    );
  });

  it("clicks on the Member Benefits link", () => {
    cy.contains("Member Benefits").click();
    cy.url().should("include", "/members/benefits");

    cy.contains("Benefits of Becoming a Member").should("be.visible");
  });

  it("clicks on the Tithes & Offerings link", () => {
    cy.contains("Tithes & Offerings").click();
    cy.url().should("include", "/members/giving");

    cy.contains("Give Online Now").should("be.visible");
  });

  it("clicks on the Becoming a Member link", () => {
    cy.contains("Becoming a Member").click();
    cy.url().should("include", "/members/becoming-a-member");

    cy.contains("Requirements for Membership").should("be.visible");
  });

  it("clicks on the Church Member Life link", () => {
    cy.contains("Church Member Life").click();
    cy.url().should("include", "/members/church-member-life");

    cy.get("h3:contains('Water Baptism')").should("be.visible");
    cy.contains("Funerals").should("be.visible");
  });

  it("clicks on the Finding a Place to Serve link", () => {
    cy.contains("Finding a Place to Serve").click();
    cy.url().should("include", "/members/serving");

    cy.contains("Where can I serve?").should("be.visible");
    cy.contains("I'm not sure where I belong. Help!").should("be.visible");
  });
});

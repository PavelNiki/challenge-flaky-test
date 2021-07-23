describe("New user registration", () => {
  it("Visits the registration page", () => {
    cy.visit("/");
  });
  it("Types & checks name", () => {
    cy.get('input[name="name"]')
      .click()
      .type("Some Name")
      .should("have.value", "Some Name");
  });
  it("Types & checks email", () => {
    cy.get('input[name="email"]')
      .click()
      .type("some@email.com")
      .should("have.value", "some@email.com");
  });
  it("Types & checks the department", () => {
    cy.get('select[name="department"]')
      .select("core")
      .should("have.value", "core");
  });
  it("Selects the course", () => {
    cy.get('select[name="course"]')
      .select("git-it")
      .should("have.value", "git-it");
  });
  it("Submit the form", () => {
    cy.get('input[type="submit"]').click();
  });
  it("Checks the list", () => {
    cy.wait(4000);
    cy.get("li").should(
      "contain.text",
      "Some Name",
      "some@email.com",
      "core",
      "git-it"
    );
  });
});

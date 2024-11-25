describe("Проверка успешной отправки формы обратной связи", () => {
  it("Отправлена форма с корректными данными, отображено сообщение об успешной отправке", () => {
    cy.viewport(1583, 739);
    cy.visit("https://kontaktnaya-forma.testograf.ru/");

    cy.fixture('data').then((data) => {
      cy.get("div.question_107 input").click();
      cy.get("div.question_107 input").type(data.question_107);

      cy.get("div.question_108 input").click();
      cy.get("div.question_108 input").type(data.question_108);

      cy.get("div.question_109 input").click();
      cy.get("div.question_109 input").type(data.question_109);

      cy.get("#downshift-0-input").click();
      cy.get("#popper div.content > div:nth-of-type(1)").click(); // Заказ

      cy.get("textarea").click();
      cy.get("textarea").type(data.message);

      cy.get("div.navigation span").click(); // Отправка формы

      cy.get('div > p')
        .should('be.visible')
        .contains(data.successMessage); // Проверка успешности отправки
    });
  });
});

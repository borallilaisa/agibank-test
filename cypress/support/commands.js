// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('realizarBusca', (termoPesquisa) => {
    cy.get('div[data-section="section-header-search"]').click();
    cy.get('input[id="search-field"]').clear().type(termoPesquisa + '{enter}');
});

Cypress.Commands.add('validarResultadosBusca', (termoPesquisa) => {
    cy.get('h1[class="page-title ast-archive-title"]').contains("Resultados encontrados para: ").should('be.visible');
    
    cy.get('span').contains(termoPesquisa).should('be.visible');
    cy.get('h2').first().should('be.visible').invoke('text').should('include', termoPesquisa);
});

Cypress.Commands.add('verificarItemMenu', (nomeMenu, tituloEsperado) => {
    cy.log(`Testing menu item: ${nomeMenu}`);
    
    cy.get("span[class='menu-text']")
        .contains(nomeMenu).should('be.visible').click();

    cy.get(".ast-archive-title").contains(tituloEsperado).should("be.visible");
    cy.get('.ast-post-format-.blog-layout-5').should('have.length.gte', 1).first().should('be.visible');
});

Cypress.Commands.add('pageLoad', () => {
    cy.get('body').should('be.visible');
    cy.get('div[class="slick-list draggable"]').should('be.visible');
});

Cypress.Commands.add('homePage', () => {
    cy.visit('https://blog.agibank.com.br/');
    cy.pageLoad();
});


Cypress.Commands.add('testMobile', () => {
    cy.viewport('iphone-x');
    
    cy.get('div[class="ast-button-wrap"]').should('be.visible');
    
});
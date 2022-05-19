/// <reference types="Cypress" />

var token = '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';
var repo = 'Sven-66/svenTestRepo'; //'Piotrk39/drumKit';

describe('Minimal Github Repo Explorer Test', () => {
    it('Visits the Minimal Github Repo Explorer And tests Issues Counter', () => {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app')

        //Find input elements and insert token and repo
        cy.get('input').eq(0).type(token);
        cy.get('input').eq(1).type(repo);

        //Press the button and show the data
        cy.get('button').should('have.class', 'styles_search__1YRvI').click();

        //Validate that the correct URL and tab are open
        cy.url().should('include','/issues');

        //Find lower Issues Counter that shows open number of issues = 9 (should be default)
        cy.get('.styles_title__uhysM')
        .should('contain', 'Issues')
        .and('contain', '9');

        //Click Load more button
        cy.contains('Load more')
        .click();

        //Confirms that the end of list appeard
        cy.contains('End of list')
        .should('contain', 'End of list');
    })
})


describe('Home Page Sections', () => {

    it('Should have required components', () => {
        cy.visit('/');
        cy.title().should('equal', 'Read Tweet');
    })
})

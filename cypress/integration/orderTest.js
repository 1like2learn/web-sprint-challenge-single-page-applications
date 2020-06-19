
describe('Can a user add a name, size, check toppings, and add special instructions.', () => {
    it('Can we navigate to the page', () => {
        cy.visit('http://localhost:3001/pizza')
        cy.url().should('include', 'http://localhost:3001/pizza')

    })
    it('Can the name field be altered', () => {
        cy.get('input[name=name]')
        .type('Bon Jovi')
        .should('have.value','Bon Jovi')

    })
    it('Can the size field be altered', () => {
        cy.get('select[name=size]')
        .select('large')
        .should('have.value','large')

    })
    it('Can pepperoni be checked', () => {
        cy.get('input[name=pepperoni]')
        .check()
        .should('be.checked')

    })
    it('Can sausage be checked', () => {
        cy.get('input[name=sausage]')
        .check()
        .should('be.checked')

    })
    it('Can greenPeppers be checked', () => {
        cy.get('input[name=greenPeppers]')
        .check()
        .should('be.checked')

    })
    it('Can onions be checked', () => {
        cy.get('input[name=onions]')
        .check()
        .should('be.checked')

    })
    it('Can mushrooms be checked', () => {
        cy.get('input[name=mushrooms]')
        .check()
        .should('be.checked')

    })
    it('Is the submit button available when all fields are filled', () => {
        cy.contains('Submit')
        .should('be.enabled')
    })
    it('Cleanup fields', () => {
        cy.get('input[name=pepperoni]')
        .uncheck()
        cy.get('input[name=sausage]')
        .uncheck()
        cy.get('input[name=greenPeppers]')
        .uncheck()
        cy.get('input[name=onions]')
        .uncheck()
        cy.get('input[name=mushrooms]')
        .uncheck()
        cy.get('select[name=size]')
        .select('')
        cy.get('input[name=name]')
        .clear()
    })
})
describe('Can you submit the form', ()=> {
    it('Can you submit when name and size are selected', () => {
        cy.get('input[name=name]')
        .type('Bon Jovi')
        cy.get('select[name=size]')
        .select('large')
        cy.contains('Submit')
        .click()
    })
})

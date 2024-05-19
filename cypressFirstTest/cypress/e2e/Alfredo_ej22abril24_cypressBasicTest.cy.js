describe('Exercise Cypress test for April 22 ', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/practice-general-components');
    })
    
    it('Check button click me and check that the text appears', () => {
        cy.contains('Button clicked').should('not.exist');
        cy.get('button').contains('Click me').should('exist').and('be.visible').click();
        cy.get('p').contains('Button clicked').should('exist').and('be.visible');
    })

    it('Check button double click me and check that the text appears', () => {
        cy.contains('Button double clicked').should('not.exist');
        cy.get('button').contains('Double click me').should('exist').and('be.visible').dblclick();
        cy.get('p').contains('Button double clicked').should('exist').and('be.visible');
    })

    it('Check button right click me and check that the text appears', () => {
        cy.contains('Right double mouse clicked').should('not.exist');
        cy.get('button').contains('Right click me').should('exist').and('be.visible').rightclick();
        cy.get('p').contains('Button right mouse clicked').should('exist').and('be.visible');
    })

    it('Check radio buttons and check that the text appears', () => {
        cy.contains('option1 clicked').should('not.exist');
        cy.get('input[data-testid="option1"]').should('not.be.checked').check().should('be.checked');
        cy.get('input[data-testid="option2"]').should('not.be.checked');
        cy.contains('option1 clicked').should('exist').and('be.visible');
        cy.contains('option2 clicked').should('not.exist');
        cy.get('input[data-testid="option2"]').should('not.be.checked').check().should('be.checked');
        cy.get('input[data-testid="option1"]').should('not.be.checked');
        cy.contains('option2 clicked').should('exist').and('be.visible');
    })

    it.only('Check select an option and check that the text appears inside selector', () => {
        cy.get('select').contains('Select an option').should('exist').and('be.visible').and('have.attr', 'value', '');
        cy.get('select option[value="option1"]').should('exist').and('be.visible').and('have.attr', 'value', 'option1');
        cy.get('select option[value="option2"]').should('exist').and('be.visible').and('have.attr', 'value', 'option2');
        cy.get('select option[value="option3"]').should('exist').and('be.visible').and('have.attr', 'value', 'option3');
        cy.get('select option:selected').should('have.text', 'Select an option').and('have.attr', 'value', '');
        cy.get('select').select('option1');
        cy.get('select option:selected').should('have.text', 'Option 1').and('have.attr', 'value', 'option1');
        cy.get('select').select('option2');
        cy.get('select option:selected').should('have.text', 'Option 2').and('have.attr', 'value', 'option2');
        cy.get('select').select('option3');
        cy.get('select option:selected').should('have.text', 'Option 3').and('have.attr', 'value', 'option3');
        cy.get('select').select('');
        cy.get('select option:selected').should('have.text', 'Select an option');
    })

    it('Check select multiple checkbox and check that the text appears inside selector', () => {
        cy.get('input[data-testid="checkbox1"]').should('exist').and('be.visible').and('have.attr', 'name', 'checkbox1').and('have.attr', 'type', 'checkbox');
        cy.get('input[data-testid="checkbox2"]').should('exist').and('be.visible').and('have.attr', 'name', 'checkbox2').and('have.attr', 'type', 'checkbox');
        cy.get('input[data-testid="checkbox3"]').should('exist').and('be.visible').and('have.attr', 'name', 'checkbox3').and('have.attr', 'type', 'checkbox');
        cy.contains('Checkbox 1 checked').should('not.exist');
        cy.contains('Checkbox 2 checked').should('not.exist');
        cy.contains('Checkbox 3 checked').should('not.exist');
        cy.get('input[data-testid="checkbox1"]').check();
        cy.get('input[data-testid="checkbox1"]').should('be.checked');
        cy.get('input[data-testid="checkbox2"]').should('not.be.checked');
        cy.get('input[data-testid="checkbox3"]').should('not.be.checked');
        cy.contains('Checkbox 1 checked').should('exist').and('be.visible');
        cy.contains('Checkbox 2 checked').should('not.exist');
        cy.contains('Checkbox 3 checked').should('not.exist');
        cy.get('input[data-testid="checkbox2"]').check();
        cy.get('input[data-testid="checkbox1"]').should('be.checked');
        cy.get('input[data-testid="checkbox2"]').should('be.checked');
        cy.get('input[data-testid="checkbox3"]').should('not.be.checked');
        cy.contains('Checkbox 1 checked').should('exist').and('be.visible');
        cy.contains('Checkbox 2 checked').should('exist').and('be.visible');
        cy.contains('Checkbox 3 checked').should('not.exist');
        cy.get('input[data-testid="checkbox2"]').uncheck();
        cy.get('input[data-testid="checkbox3"]').check();
        cy.get('input[data-testid="checkbox1"]').should('be.checked');
        cy.get('input[data-testid="checkbox2"]').should('not.be.checked');
        cy.get('input[data-testid="checkbox3"]').should('be.checked');
        cy.contains('Checkbox 1 checked').should('exist').and('be.visible');
        cy.contains('Checkbox 2 checked').should('not.exist');
        cy.contains('Checkbox 3 checked').should('exist').and('be.visible');
    })

    it('Check urls', () => {
    })
  })
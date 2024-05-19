// Ejercicios día 24 Miércoles-Abril '24

/* Caso de prueba para automatizar:
       1-Crear un nuevo archivo de prueba en la carpeta e2e llamado "cypressFormTest.cy.js"
       2-Añadir un beforeEach que visite la url "https://commitquality.com/practice-contact-form"*/

describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/practice-contact-form');   
      
    })
    // 3-Crear 1 tests que rellene todos los campos del formulario y que después de hacer click en el botón "submit" compruebe que aparece el texto "Thanks for contacting us, we will never respond!" 
    it.only('introducimos datos en formulario y al hacer cick nos devuelve un texto "Thanks for contacting us, we will never respond!"', () => 
    {
           //cy.get('body').should('not.contains', 'Query Type is required.');
        cy.contains('Name is required.').should('not.exist');  // Comprobamos que los textos no están visibles
        cy.contains('Email is required.').should('not.exist');  // igual
        cy.contains('Query Type is required.').should('not.exist');  // igual
        cy.get('[data-testid="name"]').type('María Mercedes');
        cy.get('[data-testid="email"]').type('merxi_83@hotmail.com');
        //cy.get('[data-testid="query-type"]').contains('Select an option'); //[data-testid="query-type"] Es más correcto usar el Id #query-type
        //cy.get('[data-testid="query-type"]').should('exist', 'General');
        //cy.get('[data-testid="query-type"]').should('exist', 'Technical');
        //cy.get('[data-testid="query-type"]').should('exist', 'Billing');
        
        
       
        cy.get('[data-testid="query-type"]').select('General');
        cy.wait(1000);
        cy.get('#query-type').should('have.value', 'General');
       
        cy.get('[data-testid="query-type"]').select('Technical');
        cy.wait(1000);
        cy.get('[data-testid="query-type"]').should('have.value', 'Technical');
        cy.get('[data-testid="query-type"]').select('Billing');
        cy.wait(1000);
        cy.get('[data-testid="query-type"]').should('have.value', 'Billing');
        //cy.get('[data-testid="query-type"]').select('Select an option');
        cy.get('[data-testid="query-type"]').select('General')

        

        //cy.get('body').click();
        //cy.get('form').should('contain', 'Query Type is required')
        //cy.get('[data-testid="dob"]').type('yyyy-MM-dd');
        cy.get('[data-testid="dob"]').type('2024-04-24').should('have.value', '2024-04-24')
        //cy.get('form').should('contain', 'Date of Birth is required.');
        cy.get('[data-testid="practice-checkbox"]').check()
        //cy.get('[data-testid="practice-checkbox"]').ischeck();
        cy.get('[data-testid="submit-button"]').click();
        cy.get('.success-message').should('be.visible').and('contain', 'Thanks for contacting us, we will never respond!');

    })
})
        
//Corrigiendo los ejerc de Galicia
/*it('fills out the contact form and submits successfully', () => {
            cy.get('@DataTest').then((dataTest) => {});
            let dataTest = '[data-testid=';
            cy.get(dataTest +'name').should('have.value', '');
            cy.get(dataTest +'name').type('John.Doe');
            cy.get(dataTest +'email').should('have.value', '')
            cy.get(dataTest +'email').type('john.doe@example.com');
            cy.get('select').contains('Select an option').should('exist').and('be.visible').and('have.attr', 'value', '');
            cy.get('select').select('General');
            cy.get('select option:selected').should('have.text', 'General').and('have.attr', 'value', '')
            cy.get((dataTest +'=dob=]').type('2024-04-04')).should('have.value', 'date')

        })*/

        /* Test de Javier Flores

    it('Form test data hardcoded', () => {
        cy.get('[data-testid="name"]').should('have.value', '').type("Javie Flores").should('have.value', "Javie Flores");
        cy.get('[data-testid="email"]').type("javier.flores@quark-techie.com").should('have.value', "javier.flores@quark-techie.com");
        cy.get('[data-testid="query-type"]').should('have.value', '').select('General'.should('have.valu', 'General'). and('have.attr', ''));
        cy.get('[data-testid="practice-checkbox"]').should('not.be.checked'),
        cy.get('[data-testid="practice-checkbox"]').check();
        cy.get('[data-testid="practice-checkbox"]').should('be.visible');
        cy.get('body').should('not.contain', 'Thanks for contacting us, we will never respond!);


    })*/
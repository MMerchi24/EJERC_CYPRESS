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
        cy.get('[data-testid="name"]').should('have.value', '').type('María Mercedes').should('have.value', 'María Mercedes');
        cy.get('[data-testid="email"]').should('have.value', '').type('merxi_83@hotmail.com').should('have.value', 'merxi_83@hotmail.com');
        cy.get('[data-testid="query-type"]').should('have.value', '').select('General').should('have.text', 'Select an optionGeneralTechnicalBilling');
        cy.get('[data-testid="dob"]').should('have.value', '').type('2024-04-24').should('have.value', '2024-04-24');
        //cy.get('[data-testid="dob"]').should('have.value', '').type("2024-01-01").should('have.value', "2024-01-01"); //Para la fecha 'have.value (año-mes-dia)
        cy.get('[data-testid="practice-checkbox"]').should('not.be.checked');  // no.be.checkED con ed al final
        cy.get('[data-testid="practice-checkbox"]').check().should('be.checked'); // igual, checkED con ed al final
        cy.get('body').should('not.contain', 'Thanks for contacting us, we will never respond!');
        cy.get('[data-testid="submit-button"]').click()
        cy.get('.success-message').contains('Thanks for contacting us, we will never respond!').should('be.visible');
        //cy.get('.success-message').should('be.visible').and('contain', 'Thanks for contacting us, we will never respond!'); así lo puso Javier F.

        //Falta repasar los fixture que lo voy a dejar para más adelante

    })

  
})  
    
        


    

    





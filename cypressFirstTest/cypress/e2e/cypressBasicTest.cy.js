
///<reference types="Cypress"/>

describe('template spec', () => {
      beforeEach(() => {
        Cypress.Commands.add('Ilike', () => {
        })
          cy.get('#root > div > div > div.links-container.container-outline > div:nth-child(2) > a').clear();
      


        // Añadir un beforeEach que visite la url "https://commitquality.com/practice-general-components"
        cy.visit('https://commitquality.com/practice-general-components');   
      
      }) 
      // "Comprobar funcionalidad del botón "Click me"
      it('elemento es visible y luego si existe o no', () => {

        // Pasos:

        // Comprobar que el texto "button clicked" no es visible
        cy.contains('button clicked').should('not.exist');
        cy.get('.buttons-container').should('not.contain', 'Button clicked');
        //cy.get('[data-testid="basic-click"]').should('not.visible') ---> no funciona porque el botón siempre está visible
        cy.get('p').should('not.exist');
        //cy.get('p').should('not.be.visible') ---> error
       // Hacer click sobre el botón "Click me"
        cy.get('[data-testid="basic-click"]').click();
        cy.get('p').should('exist').and('be.visible').and('contain', 'Button clicked');
        // Comprobar que el texto "button clicked" es visible
        //cy.contains('Button clicked').should('exist');      //Button clicked la B es mayuscula, está incorrecto en el enunciado    
        cy.get('body').should('contain', 'Button clicked');
      })


      //2º Test:
    // "Comprobar funcionalidad del botón "Double click me"
    // Pasos:
    
    it('Comprobar funcionalidad del botón "Double click me', () => {
        // Comprobar que el texto "Button double clicked" no es visible
        cy.get('body').should('not.contain', 'Button double clicked');
   
        // Hacer click sobre el botón "Double click me"
        cy.get('[data-testid="double-click"]').dblclick();

        // Comprobar que el texto "Button double clicked" es visible
        cy.get('body').should('contain', 'Button double clicked');

      })

      //Se podrían hacer muchos casos de prueba sobre las funcionalidades de la página pero espero que hagáis al menos 5 (uno sobre cada tipo)
      
      
        it('Comprobar funcionalidad del botón "Right click me', () => {
        //cy.wait(1000);
      // "Comprobar funcionalidad del botón Right click me"
      cy.get('body').should('not.contain', 'Button right mouse clicked');
      cy.get('[data-testid="right-click"]').rightclick();
      cy.get('body').should('contain', 'Button right mouse clicked');
    })
      //Comprobar la funcionalidad de Radio button: (de los checkbox)
      it('seleccionar cualquiera de los dos radiobox', () => {
        //cy.wait(2000);
        cy.get('body').should('not.contain', 'option1 clicked').and('not.contain', 'option2 clicked'); 
        cy.get('[type="radio"]').check('option1');// Check checkbox element
        cy.get('body').should('contain', 'option1 clicked').and('not.contain', 'option2 clicked');

        //cy.get('body').should('not.contain', 'option2 clicked'); --> no es necesaria porque lo estoy comprobando antes.
        cy.get('[type="radio"]').check('option2', 'option2');
        cy.get('body').should('contain', 'option2 clicked').and('not.contain', 'option1 clicked');
      })
     
      
      //it.only('Comprobar funcionalidad del botón "Right click me', () => {
      //  --->  //Prueba de otra manera -no funciona- ¿Preguntar?
      //cy.get('[type="radio"]').should('contain','option1');
      //cy.get('[type="radio"]').check('contain', 'option2')
      //cy.get('[type="radio"]').first().check() // Check first radio element
      //})
      //cy.get('[type="radio"]').first().check() // Check first radio element
      
        //cy.get('[type="radio"]').check('Radio button 2')
      //cy.get('[type="radio"]').first().check() // Check first radio element
      
      // Elegir la primera opción del botón 

      it('Elegir la primera opción del botón Select an option', () => {
        cy.wait(4000);
     /*    cy.get('.dropdowns').should('not.exist', 'Option 1');
        cy.get('.dropdowns').should('not.exist', 'Option 2');
        cy.get('.dropdowns').should('not.exist', 'Option 3');  */
        

        cy.get('select').should('exist', 'Option 1');
        cy.get('select').should('exist', 'Option 2');
        cy.get('select').should('exist', 'Option 3');
        
        //cy.get('body').contains('exist', 'Select an option');
        //cy.get('#root > div > div > div.dropdown-container.container-outline > h2').click();
        //cy.get('body').should('contain', 'Select an option');
        //cy.get('body').should('contain', 'Select an option').click()



        cy.get('select').select('Option 1');
        cy.get('select').should('have.value', 'option1');
        cy.wait(1000);
        cy.get('select').select('Option 2');
        cy.get('select').should('have.value', 'option2');
        cy.wait(1000);
        cy.get('select').select('Option 3');
        cy.get('select').should('have.value', 'option3');
        // confirm the selected value
        
      });
        //cy.contains('Select an option').click()//.should('contain', 'Option 2');
        //cy.contains('#root > div > div > div.dropdown-container.container-outline > h2', 'Option1');
        //cy.contains('Select an option').contains('Option 2');
        //cy.contains('Select an option').contains('Option 3');

        it.only('Elegir la primera opción del botón Select an option My Youtube', () => {
          //Una forma de hacerlo con contains:
        //cy.contains('My Youtube').should('have.attr', 'href', 'https://www.youtube.com/@commitquality').click();

        //Otra forma de hacerlo con get.
        cy.get('Ilike').should('have.attr', 'href', 'https://www.youtube.com/@commitquality').click();
        })
//ULTIMO EJEC
// Crear un comando customizado:
// Crearlo para simplificar algunas de los test que habeis creado previamente por ejemplo
// Crear un comando que haga click en el boton con data-testid="basic-click"
// Puntos extra para el que use parámetros de tal forma que al cambiar el valor del parámetro podamos hacer click sobre cualquier elemento con data-testid="al parámetro añadido"



      })
    
      
    
   
      
      
    
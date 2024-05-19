const testData = require('../fixtures/form.json');

describe('Test data in a form', () => {
  
    beforeEach(() => {
      cy.visit('https://commitquality.com/practice-contact-form');
      cy.fixture('form').as('formData');
      cy.fixture('fixtureExample').as('fixtureExample');
    
    });

    it('Usando alias para extraer valores de objetos en archivo json usando cy.fixture', () => {
      cy.get('@fixtureExample').then((fixtureExampleData) => {
        cy.get('[data-testid="name"]').type(fixtureExampleData.name)
        cy.get('[data-testid="email"]').type(fixtureExampleData.email)
      })
    });

    it('Extraer valores de objetos en archivo json usando cy.fixture', () => {
      cy.fixture('fixtureExample').then((fixtureExampleData) => {
        cy.get('[data-testid="name"]').type(fixtureExampleData.name)
        cy.get('[data-testid="email"]').type(fixtureExampleData.email)
      })
    });

    it('Form test data hardcoded', () => {
      cy.get('[data-testid="name"]').should('have.value', '').type("Javier Flores").should('have.value', "Javier Flores");
      cy.get('[data-testid="email"]').type("javier.flores@quark-techie.com").should('have.value', "javier.flores@quark-techie.com");
      cy.get('[data-testid="query-type"]').should('have.value', '').select('General').should('have.value', 'General').and('have.text', 'Select an optionGeneralTechnicalBilling');
      cy.get('[data-testid="dob"]').should('have.value', '').type("2024-01-01").should('have.value', "2024-01-01");
      cy.get('[data-testid="practice-checkbox"]').should('not.be.checked');
      cy.get('[data-testid="practice-checkbox"]').check();
      cy.get('[data-testid="practice-checkbox"]').should('be.checked');
      cy.get('body').should('not.contain', 'Thanks for contacting us, we will never respond!');
      cy.get('.success-message').should('not.be.visible');
      cy.get('[data-testid="submit-button"]').click();
      cy.get('.success-message').should('be.visible').and('contain', 'Thanks for contacting us, we will never respond!');
    });

    it('Form test using JSON data from fixtures fixtureExample.json', () => {
      cy.get('@fixtureExample').then((fixtureExampleData) => {
        cy.get('[data-testid="name"]').should('have.value', '').type(fixtureExampleData.name).should('have.value', fixtureExampleData.name);
        cy.get('[data-testid="email"]').type(fixtureExampleData.email).should('have.value', fixtureExampleData.email);
        cy.get('[data-testid="query-type"]').should('have.value', '').select(fixtureExampleData.queryType).should('have.value', fixtureExampleData.queryType);
        cy.get('[data-testid="dob"]').should('have.value', '').type(fixtureExampleData.dob).should('have.value', fixtureExampleData.dob);
        cy.get('[data-testid="practice-checkbox"]').should('not.be.checked').check().should('be.checked');
        cy.get('[data-testid="submit-button"]').click();
        cy.get('.success-message').should('be.visible').and('contain', 'Thanks for contacting us, we will never respond!');
      });
    });
  
    it('Testing Form using object position from array on JSON data from fixtures form.json', () => {
      cy.get('@formData').then((formData) => {
        cy.get('[data-testid="name"]').should('have.value', '').type(formData[0].name).should('have.value', formData[0].name);
        cy.get('[data-testid="email"]').type(formData[0].email).should('have.value', formData[0].email);
        cy.get('[data-testid="query-type"]').should('have.value', '').select(formData[0].queryType).should('have.value', formData[0].queryType);
        cy.get('[data-testid="dob"]').should('have.value', '').type(formData[0].dob).should('have.value', formData[0].dob);
        cy.get('[data-testid="practice-checkbox"]').should('not.be.checked').check().should('be.checked');
        cy.get('[data-testid="submit-button"]').click();
        cy.get('.success-message').should('be.visible').and('contain', 'Thanks for contacting us, we will never respond!');
      });
    });


    it('Testing From using constant for the first object from array on JSON data from fixtures form.json', () => {
      cy.get('@formData').then((formData) => {
        const primerObjetoDelArray = formData[1];
        cy.get('[data-testid="name"]').should('have.value', '').type(primerObjetoDelArray.name).should('have.value', primerObjetoDelArray.name);
        cy.get('[data-testid="email"]').type(primerObjetoDelArray.email).should('have.value', primerObjetoDelArray.email);
        cy.get('[data-testid="query-type"]').should('have.value', '').select(primerObjetoDelArray.queryType).should('have.value', primerObjetoDelArray.queryType);
        cy.get('[data-testid="dob"]').should('have.value', '').type(primerObjetoDelArray.dob).should('have.value', primerObjetoDelArray.dob);
        cy.get('[data-testid="practice-checkbox"]').should('not.be.checked').check().should('be.checked');
        cy.get('[data-testid="submit-button"]').click();
        cy.get('.success-message').should('be.visible').and('contain', 'Thanks for contacting us, we will never respond!');
      });
    });

    it('Form test using all JSON data from fixtures form.json', function () {
      cy.get('@formData').then((formData) => {
        formData.forEach((data) => {
  
          /* 
          Eliminamos los datos dentro de los inputs (name) y (Email) para que no fallen los test por residuos dentro de 
          estos campos, esta es una de las razones por las que se recomienda que los tests sean independientes entre si
          */
          cy.get('[data-testid="name"]').clear();
          cy.get('[data-testid="email"]').clear();

               /* 
          Añadimos 2 condicionales para indicar que cuando el valor de "name" o de "email" este vacío en el json no se 
          ejecute el .type puesto que fallaría el test ya que al usar .type cypress requiere que haya alguna string dentro
          */
          if (data.name !== '') {
            cy.get('[data-testid="name"]').should('have.value','').type(data.name).should('have.value',data.name)
          }
          if (data.email !== '') {
            cy.get('[data-testid="email"]').type(data.email);
          }

          cy.get('[data-testid="query-type"]').select(data.queryType);
          cy.get('[data-testid="dob"]').clear().type(data.dob);
          cy.get('[data-testid="practice-checkbox"]').check();
          cy.get('[data-testid="submit-button"]').click();
  
          /*
          Añadimos un condicional que verifica si se espera un mensaje de error basado en si se dejó en blanco algún input
          o el mensaje ligado a "succes" en caso de que todos los datos se hayan cumplimentado correctamente
          */
          if (data.name === '' || data.email === '') {
            cy.get('.error').should('be.visible');
          } else {
            cy.get('.success-message').should('be.visible').and('contain', 'Thanks for contacting us, we will never respond!');
          }
        });
      });
    });

    /*
    Ahora vamos a hacer lo mismo que el test de arriba pero con la variante de que vamos a iterar a nivel de tests, de esta
    forma se va a ejecutar un test por cada objeto distinto que haya en nuestro json, además en la descripción del test hemos
    añadido un parámetro para saber a que escenario pertenece cada ejecución

    */
  testData.forEach((testData) => {
    context('Form test using one JSON data for each test from fixtures form.json', () => {
      it.only(`test form using data from ${testData.scenarioName}`, () => {
        if (testData.name !== '') {
            cy.get('[data-testid="name"]').clear().type(testData.name);
        }
        if (testData.email !== '') {
            cy.get('[data-testid="email"]').clear().type(testData.email);
        }
        cy.get('[data-testid="query-type"]').select(testData.queryType);
        cy.get('[data-testid="dob"]').clear().type(testData.dob);
        cy.get('[data-testid="practice-checkbox"]').check();

        cy.get('[data-testid="submit-button"]').click();

        if (testData.name === '' || testData.email === '') {
            cy.get('.error').should('be.visible');
        } 
        else {
            cy.get('.success-message').should('be.visible').and('contain', 'Thanks for contacting us, we will never respond!');
        }
      });
    });
  });    
});


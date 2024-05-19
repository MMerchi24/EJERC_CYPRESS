
describe('template spec', () => {
    
    /* Vamos a meter distintos datos y borrándolos para comprobar que el campo admite esos tipos de texto
    - Comprueba un input con el texto que se le pasa a la función que no de un error 
    // Parametros
    var inputSelector : Selector del input
    var dataTexto : Texto que le facilitamos a la funcion
    
    */
    Cypress.Commands.add('fillerDataAndClear', (inputSelector , dataTexto) => {

    
        cy.get(inputSelector).clear();
        cy.get(inputSelector).should('be.visible');
        cy.get(inputSelector).should('have.value', '').type(dataTexto);
       //cy.get('[data-testid="product-textbox"]').clear();
        cy.get('.App').click();
        cy.get(inputSelector).should('have.value', dataTexto);
        cy.get(':nth-child(1) > .error-message').should('not.exist');
       


      })
    /* Comprueba un input con un texto de un solo carácter y que tiene que dar el error 'Name must be at least 2 characters' 
    
    var inputSelector : Selector del input
    var dataTexto : Texto que le facilitamos a la funcion
    
    */
      Cypress.Commands.add('fillerDataAndClearOneChar', (inputSelector , dataTexto) => {

        
        cy.get(inputSelector).clear();
        cy.get(inputSelector).should('be.visible');
        cy.get(inputSelector).should('have.value', '').type(dataTexto);
       //cy.get('[data-testid="product-textbox"]').clear();
        cy.get('.App').click();
        cy.get(inputSelector).should('have.value', dataTexto);
        cy.get(':nth-child(1) > .error-message').should('contain', 'Name must be at least 2 characters').should('be.visible');
       




      })

      /* Comprueba un input con un valor numérico y con no más de 2 decimales */
      Cypress.Commands.add('fillerPriceAndClear', (inputSelector2 , dataTexto2) => {

        cy.get(inputSelector2).clear();
        cy.get(inputSelector2).should('be.visible');
        cy.get(inputSelector2).should('have.value', '').type(dataTexto2);
        cy.get('.App').click();
        cy.get(inputSelector2).should('have.value', dataTexto2);
        cy.get(':nth-child(2) > .error-message').should('not.exist');
      })

      Cypress.Commands.add('fillerPriceAndClear3DecimalsNegativsLeters', (inputSelector2 , dataTexto2) => {

        cy.get(inputSelector2).clear();
        cy.get(inputSelector2).should('be.visible');
        //cy.get(inputSelector2).should('have.value', '')
        cy.get(inputSelector2).should('have.value', '').type('is.invalid', dataTexto2);
        cy.get('.App').click();
        cy.get(inputSelector2).clear()
        cy.get(':nth-child(2) > .error-message').should('contain', 'Price must not be empty and within 10 digits').should('be.visible');
      })


      Cypress.Commands.add('fillerDateAndClearValid', (inputSelector3 , dataTexto3) => {


        cy.get(inputSelector3).clear();
        cy.get(inputSelector3).should('be.visible');
        cy.get(inputSelector3).should('have.value', '').type(dataTexto3);
        cy.get('.App').click();
        cy.get(inputSelector3).should('have.value', dataTexto3);
        cy.get('.error-message' && '[data-testid="all-fields-validation"]').should('not.exist');
        //cy.get('[data-testid="all-fields-validation"]')()
      })



      Cypress.Commands.add('fillerDateAndClearInValid', (inputSelector3 , dataTexto3) => {

        cy.get(inputSelector3).clear();
        cy.get(inputSelector3).should('be.visible');
        cy.get(inputSelector3).should('have.value', '').type(dataTexto3);
        cy.get('.App').click();
        cy.get(inputSelector3).should('have.value', dataTexto3);
        cy.get('.error-message').should('contain', 'Date must not be empty.').should('be.visible');
        cy.get('[data-testid="all-fields-validation"]').should('contain', 'Errors must be resolved before submitting');
      })
    
    beforeEach(() => {

       cy.visit('https://commitquality.com/add-product');



    })

    //Ejercicio para el día 29-04-2024

    //     TEST 1
    /*El primero tiene que:
    -Rellenar todos los campos del formulario "Add Product"
    -Hacer click en el boton "Submit"
    -Comprobar que el producto que acabamos de crear aparece en la tabla (Comprobaremos que la tabla contiene el nombre, el precio y la fecha que le hemos puesto al producto)
       (Puntos extra para el que use el filtro por nombre y compruebe que el producto aparece)*/

    it('TEST1-Fill all camps and be visible in the table with the name, price and date', () => {
        // Insertar producto - 
         cy.get('[data-testid="product-textbox"]').should('have.value', '').type('Tenis').should('have.value', 'Tenis'); 
         cy.get('[data-testid="price-textbox"]').should('have.value', '').type('30').should('have.value', '30');
         cy.get('[data-testid="date-stocked"]').should('have.value', '').type('2024-04-28').should('have.value', '2024-04-28'); // año-mes-dia
         cy.url().should('include', 'add-product');
         cy.get('[data-testid="submit-form"]').click();
         // El producto ha sido insertado
         cy.url().should('not.include', 'add-product');
         // Comprobamos que el producto ha sido insertado
         // Comprobamos que el nombre del producto, el precio y fecha están en la misma fila 
        // * 1-las filas son tr
        cy.get('.container').should('contain', 'Tenis').and('contain', '30').and('contain', '2024-04-28').should('be.visible'); //haciéndolo con la LUPA
        // * 1- cy.get('#root > div > div > div > table > tbody > tr').should('contain', 'Tenis').and('contain', '30').and('contain', '2024-04-28'); //Haciéndolo por cód. HTML, más correcto y exacto.
        //cy.get('table.product-list-table > tbody > tr').should('contain', 'Tenis').and('contain', '30').and('contain', '2024-04-28'); //Más correcto porque es más exacta

        cy.get('.filter-textbox').should('have.value', '').type('Tenis').should('have.value', 'Tenis');
        cy.get('[data-testid="filter-button"]').click();
        cy.get('#root > div > div > div > table > tbody > tr').should('contain', 'Tenis').and('contain', '30').and('contain', '2024-04-28');
    })


    //    TEST 2
/* En el segundo test vamos a comprobar los mensajes de error existentes en el formulario de "Add product"
Comprobar tantos mensajes de error (son los que aparecen en rojo) como seais capaces de encontrar, además después hacer click la pestaña "Products"  y comprobar que el producto que habéis 
intentado añadir no se ha añadido.
Para realizar estos tests mi recomendación es que vayáis de lo más simple a lo más complejo, es decir empezar haciendo que los test os funcionen de la forma más básica posible y después les 
vais implementando si queréis algunas de las buenas prácticas que hemos visto , como por ejemplo: uso de comandos personalizados de cypress, uso de alias, uso de variables/constantes, uso de json en la carpeta 
fixtures.
Por supuesto recordar hacer aserciones negativas además de las positivas  siempre que podais
Muchos puntos extra para el que cree un json con un array de objetos para que el test vaya iterando sobre ellos (con un test nuevo para cada objeto) (editado) */

    it.only('TEST2-Checking for Error messages in the form Add product in Name', () => {
        // Para el campo Name
        cy.fillerDataAndClear('[data-testid="product-textbox"]' , 'BBBaaa');
        cy.fillerDataAndClear('[data-testid="product-textbox"]' , '¿?"~$@(ª/=#*+-|');
        cy.fillerDataAndClear('[data-testid="product-textbox"]' , '11kA');
        cy.fillerDataAndClear('[data-testid="product-textbox"]' , 'avion azul');
        cy.fillerDataAndClear('[data-testid="product-textbox"]' , 'avion azulkajhsdiahsdkahskdjhaskdhaksjdhkajshdkjashdkajhsdkjahsdkjhasdkhasuygwujbasdciouywgdjlonskadbowqaueodfaisjdbouqwfdb aoisdjhoqawyufdbaskdijhbaosiudhaoisdohnaosidjnaoisudhaosikdjnaowiuydblakdnjaliusdgoiadwjnoasidughaoisdujnaoisdhaowiujdabosidjbasdasodhaposdhalksdjhapodjhasodjhaokdsjhaosdjhaoisdjhaosidhja');
        cy.fillerDataAndClearOneChar('[data-testid="product-textbox"]' , 'v'); 
        cy.fillerDataAndClear('[data-testid="product-textbox"]' , 'va');

       // Para el campo price

       cy.fillerPriceAndClear('[data-testid="price-textbox"]' , '0');
       cy.fillerPriceAndClear('[data-testid="price-textbox"]' , '30.5');
       cy.fillerPriceAndClear('[data-testid="price-textbox"]' , '30.55');
       cy.fillerPriceAndClear3DecimalsNegativsLeters('[data-testid="price-textbox"]' , '30,55'); //no admite más de 2 decimales, no lo escribe
       cy.fillerPriceAndClear3DecimalsNegativsLeters('[data-testid="price-textbox"]' , '30.555'); //no admite más de 2 decimales, no lo escribe
       cy.fillerPriceAndClear3DecimalsNegativsLeters('[data-testid="price-textbox"]' , '-1'); //no admite carácteres, no lo escribe
       cy.fillerPriceAndClear3DecimalsNegativsLeters('[data-testid="price-textbox"]' , 'letras'); // no admite letras, no lo escribe
       cy.fillerPriceAndClear('[data-testid="price-textbox"]' , '30');

       // Para el campo fecha


       cy.fillerDateAndClearValid('[data-testid="date-stocked"]', '2024-04-10');
       cy.fillerDateAndClearValid('[data-testid="date-stocked"]', '2024-04-27');
       cy.fillerDateAndClearValid('[data-testid="date-stocked"]', '2023-04-27');
       cy.fillerDateAndClearInValid('[data-testid="date-stocked"]', '2024.04.28');
       cy.fillerDateAndClearInValid('[data-testid="date-stocked"]', '2024.04.29');
       cy.fillerDateAndClearInValid('[data-testid="date-stocked"]', '2024/04/30');
       cy.fillerDateAndClearInValid('[data-testid="date-stocked"]', '2024_04_27');
       cy.fillerDateAndClearInValid('[data-testid="date-stocked"]', '2024-04-30');
       //cy.fillerDateAndClearInValid('[data-testid="date-stocked"]', ''); no se puede dejar en type algo vacío, da error
      
    })

    



        it('EjerProbando-ERRORES en Rojo-Checking for Error messages in the form Add product', () => {
        // Campo texto
        cy.get('[data-testid="product-textbox"]').should('have.value', '');   
        cy.contains('Name must be at least 2 characters.').should('not.exist');  // Comprobamos que el texto en el campo no están visibles
        // Campo precio
        cy.get('[data-testid="price-textbox"]').should('contain', '');
        cy.contains('Price must not be empty and within 10 digits').should('not.exist');  // igual
        // Campo fecha
        cy.get('[data-testid="date-stocked"]').should('contain', '');
        cy.contains('Date must not be empty.').should('not.exist');
        cy.contains('Please fill in all fields');  // igual
        cy.contains('Errors must be resolved before submitting').should('not.exist');

        })
        it('Meter datos y comprobar', () => {


        // Campo texto
        cy.get('[data-testid="product-textbox"]').type('Tenis').should('have.value', 'Tenis').should('be.visible');
        cy.get('[data-testid="product-textbox"]').clear(); 
        cy.get('.App').click();
        cy.get(':nth-child(1) > .error-message').should('contain', 'Name must be at least 2 characters.').should('be.visible'); //Quizás más correcta pero menos específic
        cy.get('[data-testid="all-fields-validation"]').should('contain', 'Errors must be resolved before submitting').should('be.visible');
        cy.get('[data-testid="product-textbox"]').type('Tenis').should('have.value', 'Tenis').should('be.visible');
        cy.get('.App').click();
         
        cy.contains('Errors must be resolved before submitting').should('not.exist');
        // Campo precio
        cy.get('[data-testid="price-textbox"]').type('30').should('have.value', '30').should('be.visible');
        cy.get('[data-testid="price-textbox"]').clear();        
        cy.get('.App').click();
        cy.get(':nth-child(2) > .error-message').should('contain', 'Price must not be empty and within 10 digits').should('be.visible'); //Quizás más correcta pero menos específic
        cy.get('[data-testid="all-fields-validation"]').should('contain', 'Errors must be resolved before submitting').should('be.visible');
        cy.get('[data-testid="price-textbox"]').type('30').should('have.value', '30').should('be.visible');

        // Campo fecha
        cy.get('[data-testid="date-stocked"]').type('2024-04-27').should('have.value', '2024-04-27').should('be.visible');
        cy.get('[data-testid="date-stocked"]').clear();        
        cy.get('.App').click();
        cy.get(':nth-child(3) > .error-message').should('contain', 'Date must not be empty.').should('be.visible'); //Quizás más correcta pero menos específic
        cy.get('[data-testid="all-fields-validation"]').should('contain', 'Errors must be resolved before submitting').should('be.visible');
        cy.get('[data-testid="date-stocked"]').type('2024-04-27').should('have.value', '2024-04-27').should('be.visible');
        cy.get('.App').click();
        cy.get('[data-testid="submit-form"]').click();
        //cy.get('[data-testid="fillin-all-fields-validation"]').contains('Please fill in all fields').should('be.visible');     

        
    //if(data-testid="product-textbox" === '' || data-testid="price-textbox" === || data-testid="date-stocked"
    //||  cy.get('[data-testid="price-textbox"]') || " cy.get('[data-testid="date-stocked"]') === '' )

    
    })

})




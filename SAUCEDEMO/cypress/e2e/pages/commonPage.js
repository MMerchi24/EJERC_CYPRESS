export class CommonPage {

    //En los archivos de "Pages" Creamos nuestas funciones para que sean creadas en los steps-definitions
    //En la Clase commonPage vamos a tener ubicadas todas las funciones que se puedan usar en más de una página de la web a testear
    visitLink(url) {
    cy.visit(url);
    }

    checkBodyTest(text){
        cy.get('body').should('contain', text);
    }
    checkUrlValue(urlValue) {
        cy.url().should('include', urlValue);
    }
}

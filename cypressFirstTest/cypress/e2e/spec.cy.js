
describe('template spec', () => {

  Cypress.Commands.add('ilike', () => {
    cy.get('#search-input > #search').clear();
  })
    //beforeEach(() => {
    
    it('Check Status Estepona', () => {
      cy.request('www.estepona.es').then((response) => {
        expect(response.status).to.eq(200);
      
      });
  
  
    });
    it('Check Search Estepona', () => {
      cy.visit('www.estepona.es');
      cy.get('.dropdown.MenuOpcion1 > .dropdown-toggle'); //Es un botón con despliegue
      cy.get('.MenuOpcion3 > a'); //Es un botón normal
      cy.get('#globalSearch'); //Es un botón de búsqueda
      cy.get('.nav > :nth-child(6) > a > img') //Es un acceso a otro sitio
      cy.get('.extralinks > :nth-child(1) > a') //Es un link del primer botón de despliegue -MenuOpcion1-
    
    });
    it('Contiene', () => {
      cy.visit('www.estepona.es');
      cy.contains('evento');
      //cy.contains('feria');
      cy.contains('Ayuntamiento');
      //cy.contains('inauguración');
      //cy.contains('hora')
      cy.contains('Libre')
      cy.contains('Joven')
    });
    //it('un elemento existe o no', () => {
      //cy.get('.thumbnail > .nPrincipal_Contenido > .h3').should('be.visible')
      //cy.get('.thumbnail > .nPrincipal_Contenido > .h3').click
      //cy.get('.thumbnail > .nPrincipal_Contenido > .h3').should('not.be.visible')
      
      
      
    it('Prueba Check Status Estepona', () => {
      cy.visit('http://example.cypress.io');
      cy.get('.dropdown-toggle');
      cy.get(':nth-child(3) > .container > .row > #utilities').contains('Commands');
      cy.contains('nextAll').should('contain', 'next');
      //cy.contains('nextAll').location('href'), click();
      //cy.get('a').contains('nextAll').click();
      //cy.get('li').contains('persian').click();
    })
    //Dia 17 marzo,
    //Ejerc1) Escogemos una página de cypres o la que queramos y vamos a meter una aserción + acción + aserción,
    //ej: Llegamos a una página y comprobamos si algo está visible, si no lo está metiendo get, contains. Hacemos click sobre 
          //un elemento y comprobamos si ha cambiado

    it('after does click utilities, Querying does not appair', () => {
      cy.visit('https://example.cypress.io');

      //Podemos hacerlo con el contains así: *pero
      cy.contains('Querying').should('exist');
      //..*pero si seguimos un método de trabajo y usamos el get, deberíamos hacerlo 'más limpio' con el get TODO, así:
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').should('exist');
      cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click();
      //*ERROR: cy.contains('Querying').should('not.exist')  <--- El contains siempre va a dar por hecho que existe, por tanto, siempre usarlo así va a dar error.
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').should('not.exist');

      //*NO podríamos usar "visible" y "not.visible", porque el que no esté visible no quiere decir que no exista en el DOM.
    })
  

    //Ejerc2) Nos vamos a un elemento, comprobamos si es o no visible y después comprobemos si ese elemento no existe o no es visible
    it('elemento es visible y luego si existe o no', () => {
      //cy.visit('www.amazon.es');
      //cy.get('.hm-icon-label').should('exist');

      
      cy.visit('www.youtube.es');
      cy.get('button').should('exist');
      cy.get('button').contains('Rechazar todo').click({force:true});
      cy.ilike().should('have.value', '').type('Funambulista{enter}');
      cy.get('.ytd-searchbox > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
      //cy.ilike().should('not.have.value', '');
      
    })
    it.only('comprobar funcionalidad del botón click me', () => {
      cy.visit('http://example.cypress.io');
      //1º Test:
      //"Comprobar funcionalidad del botón "Click me"
      //Pasos:
      // Comprobar que el texto "button clicked" no es visible
      // Hacer click sobre el botón "Click me"
      // Comprobar que el texto "button clicked" es visible
      //cy.

    })
  })
  
    
      //cy.get('#search-input > #search').type('Funambulista');
      
      //cy.get()
      //cy.contais('hola').enter();
    
      //cy.get('.ytd-consent-bump-v2-lightbox').contains('Rechazar todo').click();
      //cy.get('.eom-buttons > :nth-child(1) > :nth-child(1) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
      //#content > div.body.style-scope.ytd-consent-bump-v2-lightbox > div.eom-buttons.style-scope.ytd-consent-bump-v2-lightbox > div:nth-child(1) > ytd-button-renderer:nth-child(1) > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill
    
  
  
  

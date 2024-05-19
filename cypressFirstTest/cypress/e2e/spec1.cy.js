
//Ejercicios de BORRADOR, haciéndolos por mi cuenta.

describe('template spec', () => {
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
      
      
      
    it('Check Status Estepona', () => {
      cy.visit('http://example.cypress.io');
      cy.get('.dropdown-toggle');
      cy.get(':nth-child(3) > .container > .row > #utilities').contains('Commands');
      cy.contains('nextAll').should('contain', 'next');
      //cy.contains('nextAll').location('href'), click();
      //cy.get('a').contains('nextAll').click();
      //cy.get('li').contains('persian').click();


    //it('segundaformadehacerlo'), () => {
        
      //Ejerc inventado: buscamos el hipervínculo nextAll y hacemos click()
      cy.contains('nextAll').should('have.attr', 'href', '/commands/traversal').click();
      //cy.get('a[href*="/commands/traversal"]').contains('nextAll').click();
    })



    //*Este siguiente test no funciona, comprobar por qué.
    it('comprobar url cambia al seleccionar botón desplegable', () => {
    cy.visit('www.estepona.es');
    cy.get('.open > .dropdown-toggle').should('not.contain', 'contain', 'Actualidad');
    cy.url().should('not.include', 'commands/actions');
    cy.contains('Commands').should('be.visible').click();
    cy.contains('Deportes').should('have.attr', 'href', 'https://deportes.estepona.es');
  });
  })
  
  
  /*it('after Select an options on commands title container and url change', () => {
    cy.get('.banner > .container').should('not.contain', 'Actions');
    cy.url().should('not.include', 'commands/actions');
    cy.contains('Commands').should('be.visible').click();
    cy.contains('Actions').should('have.attr', 'href', '/commands/actions').click();
    cy.get('.banner > .container').should('contain', 'Actions');
    cy.url().should('include', 'commands/actions');
  })
  it.only('after Select an options on commands title container and url change', () => {
    let option = 'Storage'
    let optionUrlLowCase = option.toLowerCase()
    cy.get('.banner > .container').should('not.contain', option);
    cy.contains('Commands').should('be.visible').click();
    cy.contains(option).should('have.attr', 'href', '/commands/'+ optionUrlLowCase).click();
    cy.get('.banner > .container').should('contain', option);
    cy.url().should('include', 'commands/'+ optionUrlLowCase);
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //})
  
      //cy.get('#globalSearch').type('Hola{enter}');
      //cy.get('body > article > div > div:nth-child(4) > div.col-lg-12.col-12 > div.page-header > h1').contains('Hemeroteca');
  
  
  //cy.get('#HeaderMenu > ul > li.dropdown.yamm.MenuOpcion1 > a').click
  cy.wait(2000);
  //cy.get('#MenuOpcion1 > :nth-child(1) > .yamm-content > .row > .Opcion > :nth-child(3) > a').click;
  cy.get('.extralinks > :nth-child(1) > a').click 
  })
  it('Check Statuscode Booking', () => {
  cy.request('https://www.booking.com/index.es.html').then((response) => {
    expect(response.status).to.eq(200);
  });
  })
  it('Check Search Booking', () => {
  cy.visit('https://www.booking.com/index.es.html');
  cy.get('data-testid="promotional-banner-content-cta"').click;
  cy.request('https://www.booking.com/flights/index.es.html?label=gen173bo-1FEg1mbGlnaHRzX2luZGV4KIICQgVpbmRleEgKWANoRogBAZgBCrgBF8gBDNgBAegBAfgBAogCAZgCAqgCA7gC_438sAbAAgHSAiQwMGIxYmQyNy1lOTY3LTQ4NDctODFiNS0zYzdjMzg0OWJkZjnYAgXgAgE&sid=7d2aca75c6d3f7a2e5d5aab9809b11bb&aid=304142&b_merch_cta=1&adplat=byeah_index_banner_flights');
    expect(response.status).to.eq(200);
  })
  it('Check Search Booking', () => {
    cy.visit(''https://www.booking.com/flights/index.es.html?label=gen173bo-1FEg1mbGlnaHRzX2luZGV4KIICQgVpbmRleEgKWANoRogBAZgBCrgBF8gBDNgBAegBAfgBAogCAZgCAqgCA7gC_438sAbAAgHSAiQwMGIxYmQyNy1lOTY3LTQ4NDctODFiNS0zYzdjMzg0OWJkZjnYAgXgAgE&sid=7d2aca75c6d3f7a2e5d5aab9809b11bb&aid=304142&b_merch_cta=1&adplat=byeah_index_banner_flights');
  cy.get('[data-ui-name="input_location_from_segment_0"]')).click
  cy.get(<input class="AutoComplete-module__textInput___8E87- " placeholder="Aeropuerto o ciudad" type="text" data-ui-name="input_text_autocomplete" role="combobox" aria-controls="flights-searchbox_suggestions" aria-expanded="false" value=""></input>).type('Malaga').click('span.List-module__content___nmWle')
  cy.get('[data-ui-name="input_location_to_segment_0"] > .ShellButton-module__inner___hxuDP > .ShellButton-module__content___8vTX2 > .ShellButton-module__contentInner___laVK\+ > .Text-module__root--variant-body_2___iDSqY').type('Caribe').click
  cy.get('<div class="Flyout-module__content___qUJEF Flyout-module__content--visible___jblPs Flyout-module__content--position-bottom-start___UVG6+ Flyout-module__content--disable-animation___mSdd4" id=":Rj6qgld5:" style="position: absolute; width: 360px; height: 128px; left: 332px; top: 312px;"><div class="Flyout-module__inner___XXNLJ Popover-module__root___5j8Oh" style="--bui-popover-width: 360px;"><div class="DismissibleContainer-module__root___m+l2R DismissibleContainer-module__root--hide-close___dG2v+"><div class="Stack-module__root___nz5vC Stack-module__root--direction-column___PMiLz Stack-module__root--grow-false___3-R3j" style="--bui_stack_spaced_gap--s: 2;"><div class=""><div class="LocationsDropDown-module__container___kw-Tz"><div class="AutoComplete-module__wrapper___-+b-W"><div class="ShellWrapper-module__root___I94ux ShellWrapper-module__rootBorder___UKuvJ"><div><div class="ShellWrapper-module__wrapper___HEWKp"><div class="ShellWrapper-module__content___Hg+Vg"><div class="AutoComplete-module__inputInner___Xf6AZ"><input class="AutoComplete-module__textInput___8E87- " placeholder="Aeropuerto o ciudad" type="text" data-ui-name="input_text_autocomplete" role="combobox" aria-controls="flights-searchbox_suggestions" aria-expanded="false" value=""></div></div></div></div></div><div class="Text-module__root--variant-body_2___iDSqY Text-module__root--color-neutral_alt___wVaXn">Selecciona varios aeropuertos a la vez y compara vuelos</div></div></div></div></div></div><span class="Flyout-module__arrow___uXBRd Flyout-module__arrow--position-bottom-start___Omtk- Popover-module__arrow___kBKMj" style="--bui-flyout-arrow-offset: var(--bui_spacing_4x); --bui-flyout-arrow-size: 7px; --bui-flyout-arrow-background: var(--bui_color_background_elevation_two); --bui-flyout-arrow-shadow: var(--bui_shadow_100);"><span></span><span></span></span></div></div>').type('Caribe');
  cy.get('Button-module__text___yqYWj').click;
  cy.request()
  })*/
  
  
  
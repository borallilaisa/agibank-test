describe('CheckSearchBlog', () => {
    // Test data
    const menuItems = [
        { nome: 'O Agibank', titulo: 'O Agibank' },
        { nome: 'Produtos', titulo: 'Produtos' },
        { nome: 'Serviços', titulo: 'Serviços' },
        { nome: 'Suas finanças', titulo: 'Suas finanças' },
        { nome: 'Seus benefícios', titulo: 'Seus benefícios' },
        { nome: 'Sua segurança', titulo: 'Sua segurança' },
        { nome: 'Stories', titulo: 'Story' }
    ];

    beforeEach(() => {
        // Visit the blog homepage before each test for better isolation
        cy.homePage();
    });

    it('Checar Funcionamento de Menu', () => {
        // Test each menu item
        menuItems.forEach(({ nome, titulo }) => {
            cy.verificarItemMenu(nome, titulo);
        });
    });

    it('Realizar busca por texto', () => {
        const texto = 'Agibank';
        cy.realizarBusca(texto);
        cy.validarResultadosBusca(texto);

        cy.get('h2').first().click(); // clicar no primeiro artigo

        // validar dados do artigo
        cy.get('h1[class="entry-title"]').should('be.visible').invoke('text').should('include', texto);
    });

    it('Realizar nova busca na tela de resultados', () => {
        const novoTexto = 'CLT';
        
       //realiza o primeiro teste para podermos estar na página de resultados
        cy.realizarBusca('Agibank');
        cy.validarResultadosBusca('Agibank');

        //nova busca com uma nova palavra
        cy.realizarBusca(novoTexto);
        cy.validarResultadosBusca(novoTexto);
    });

    it('Checar Assinar Newsletter', () => {
        //realiza o primeiro teste para podermos estar na página de resultados
        cy.realizarBusca('Agibank');
        cy.validarResultadosBusca('Agibank');

        // Test newsletter subscription
        cy.get('input[id="subscribe-field-blog_subscription-3"]')
            .should('be.visible')
            .type('teste@teste.com');

        cy.get('button[name="jetpack_subscriptions_widget"]')
            .should('be.visible')
            .click();
    });

    it('Verificar responsividade mobile', () => {
        cy.testMobile();
    });

});
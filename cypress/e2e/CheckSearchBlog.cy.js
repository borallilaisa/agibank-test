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
        cy.homePage();
    });

    it('Checar Funcionamento de Menu', () => {
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
        cy.get('input[name="email"]').first().scrollIntoView();
        cy.get('input[name="email"]').first().type('teste@teste.com');

        cy.get('button[name="jetpack_subscriptions_widget"]').should('be.visible').click();
    });

    it('Verificar responsividade mobile', () => {
        cy.testMobile();
    });

});
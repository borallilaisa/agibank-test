# Cypress Test Suite - Blog Agibank

## Observação
Existem tres bugs que eu pude encontrar que acabam que me impediram de fazer uma cobertura mais completa, sendo eles:
-  Ao abrir a página principal, existe um elemento de slide (possui a classe class="slick-list draggable"), esse elemento esporadicamente não carrega corretamente, quando ele não carrega o Cypress entende que a página ainda não terminou de ser carrega, impedindo o acesso aos outros elementos (Como por exemplo, o input de busca)
-  Ao navegar na página de resultados de busca, ela possui um scroll infinito mas internamente um sistema de páginação, a partir da segunda página os artigos carregam "abertos" e não somente o titulo como é na primeira página
-  Ao clicar em um artigo da segunda página e retornar para a página de resultado de busca, apenas os artigos dessa página aparecem, forçando o usuário a realizar a busca novamente para poder ter acesso a todos os artigos

-  
## 🧪 Test Cases
- **Navegacao entre o Menu** - Verifica se todas as paginas do menu estao carregando corretamente
- **Funcionalidade de Busca** - Testa a busca por palavras chaves no blog
- **Newsletter Subscription** - Testa funcionalidade inscricao em Newsletter
- **Responsividade Mobile** - Testa comportamentos para uso em mobile devices

## 🛠️ Comandos Customizaveis
São criados em suma para evitar a repetição de código. 
- cy.realizarBusca(texto);
- cy.validarResultadosBusca(texto);
- cy.verificarItemMenu('nomeMenu', 'titulo');
- cy.pageLoad();
- cy.homePage();
- cy.testMobile();


## 📁 Estrutura

```
cypress/
├── e2e/
│   └── CheckSearchBlog.cy.js    # Testes principais
├── support/
│   ├── commands.js              # comandos customizaveis 
│   └── e2e.js                  # Support file
├── cypress.config.js            # configuraçoes
└── package.json
```

### Pre requisitos
- Node.js (v14 or higher)
- npm or yarn

### Instalação
```bash
npm install
```

### Execução de testes

npm run cypress:run

# Abre executor do Cypress 
npm run cypress:open

# Rodar um teste especifico
```bash
npx cypress run --spec "cypress/e2e/CheckSearchBlog.cy.js"
```

# ⚙️ Configuracao

- **Base URL**: Definida para ser `https://blog.agibank.com.br`
- **Timeouts**: Definida para que o Cypress possa esperar o carregamento da pagina
- **Retries**: Executa automaticamente o teste 3x mediante a falha
- **Viewport**: resolucao padrao desktop


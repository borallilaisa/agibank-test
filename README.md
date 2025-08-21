# Cypress Test Suite - Blog Agibank

## 🧪 Test Cases
- **Navegacao entre o Menu** - Verifica se todas as paginas do menu estao carregando corretamente
- **Funcionalidade de Busca** - Testa a busca por palavras chaves no blog
- **Newsletter Subscription** - Testa funcionalidade inscricao em Newsletter
- **Responsividade Mobile** - Testa comportamentos para uso em mobile devices

## 🛠️ Comandos Customizaveis
Sao criados em suma para evitar a repeticao de codigo. 
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

### Instalacao
```bash
npm install
```

### Execucao de testes

npm run cypress:run

# Abre executor do Cypress 
npm run cypress:open

# Rodar um teste especifico
npx cypress run --spec "cypress/e2e/CheckSearchBlog.cy.js"
```

## ⚙️ Configuracao

- **Base URL**: Definida para ser `https://blog.agibank.com.br`
- **Timeouts**: Definida para que o Cypress possa esperar o carregamento da pagina
- **Retries**: Executa automaticamente o teste 3x mediante a falha
- **Viewport**: resolucao padrao desktop


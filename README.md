# Desafio Técnico Cypress

## 📋 Descrição do Projeto

Este projeto implementa a automação da interface da página **DemoQA WebTables** utilizando Cypress, seguindo as melhores práticas de desenvolvimento e testes automatizados.

### 🎯 Objetivo

Realizar automação da interface da página https://demoqa.com/webtables utilizando Cypress, com boas práticas de desenvolvimento e testes, atendendo aos requisitos da Academia Accenture 2025.

## 🛠️ Tecnologias Utilizadas

- **Cypress** v14.5.4 - Framework de testes E2E
- **@badeball/cypress-cucumber-preprocessor** - Suporte ao BDD/Gherkin
- **@bahmutov/cypress-esbuild-preprocessor** - Preprocessador para melhor performance
- **Node.js** - Ambiente de execução
- **JavaScript** - Linguagem de programação

## 📁 Estrutura do Projeto

```
desafio-tecnico-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── webTables.feature          # Cenários BDD em Gherkin
│   │   └── working-test.cy.js             # Teste funcional principal
│   ├── fixtures/
│   │   └── testData.json                  # Dados de teste
│   ├── support/
│   │   ├── pages/
│   │   │   └── WebTablesPage.js           # Page Object Model
│   │   ├── step_definitions/
│   │   │   └── webTablesSteps.js          # Step Definitions BDD
│   │   ├── commands.js                    # Comandos customizados
│   │   └── e2e.js                         # Configurações de suporte
├── cypress.config.js                      # Configuração do Cypress
├── cypress.env.json                       # Variáveis de ambiente
├── .cypress-cucumber-preprocessorrc.json  # Configuração do Cucumber
├── package.json                           # Dependências e scripts
└── README.md                              # Documentação
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Instale as dependências
```bash
npm install
```

### Execução dos Testes

#### Interface Gráfica (recomendado para desenvolvimento)
```bash
npm run cy:open
```

#### Modo Headless (para CI/CD)
```bash
npm test
```

#### Outros comandos disponíveis
```bash
# Executar com cabeça (headed mode)
npm run test:headed

# Executar apenas features BDD
npm run cy:run

# Executar teste funcional específico
npx cypress run --spec "cypress/e2e/working-test.cy.js"

# Executar no Chrome
npm run test:chrome

# Executar no Firefox
npm run test:firefox
```

## 📝 Cenários de Teste

O projeto inclui os seguintes cenários automatizados:

1. **Cadastrar usuário com dados válidos**
   - Preenche formulário com dados válidos
   - Verifica se o usuário foi adicionado à tabela

2. **Validar campos obrigatórios**
   - Tenta submeter formulário vazio
   - Verifica mensagens de validação

3. **Buscar usuário na tabela**
   - Cadastra usuário
   - Realiza busca e verifica filtro

4. **Cadastrar múltiplos usuários**
   - Adiciona vários usuários
   - Verifica se todos aparecem na tabela

5. **Deletar usuário da tabela**
   - Cadastra usuário
   - Remove usuário usando botão delete
   - Verifica se usuário foi removido

## 🏗️ Arquitetura

### Page Object Model (POM)

O projeto utiliza o padrão **Page Object Model** para organizar os elementos e ações das páginas:

- `WebTablesPage.js`: Encapsula elementos e métodos da página WebTables

### BDD com Gherkin

Os cenários são escritos em **Gherkin** para melhor legibilidade e colaboração:

- `webTables.feature`: Cenários de teste em linguagem natural
- `webTablesSteps.js`: Implementação dos steps definitions

### Tratamento de Dados Sensíveis

- Variáveis de ambiente em `cypress.env.json`
- Dados de teste separados em `fixtures/testData.json`
- Configurações isoladas do código

## 🔒 Segurança e Boas Práticas

- ✅ Dados sensíveis isolados em arquivos de configuração
- ✅ Seletores organizados e reutilizáveis
- ✅ Estrutura modular com Page Objects
- ✅ Validações abrangentes
- ✅ Nomenclatura clara e descritiva
- ✅ Separação de responsabilidades

## 📊 Relatórios

O Cypress gera automaticamente:

- Screenshots de falhas em `cypress/screenshots/`
- Vídeos da execução em `cypress/videos/`
- Relatórios no terminal durante a execução

## ✅ Status dos Testes

**Resultados da última execução:**
- ✅ **Cadastrar usuário com dados válidos** - PASSOU
- ✅ **Validar campos obrigatórios** - PASSOU  
- ✅ **Buscar usuário na tabela** - PASSOU
- ✅ **Cadastrar múltiplos usuários** - PASSOU
- ✅ **Deletar usuário da tabela** - PASSOU

**Taxa de sucesso: 100% (5 de 5 cenários)** 🎉

---

**Desenvolvido para o Desafio Técnico - Academia Accenture 2025** 🚀
Feature: Cadastro de usuários na WebTable
  Como um usuário do sistema DemoQA
  Eu quero cadastrar novos usuários na WebTable
  Para que eu possa gerenciar informações de usuários

  Background:
    Given que eu estou na página de WebTables

  Scenario: Cadastrar usuário com dados válidos
    When eu clico no botão "Add" para adicionar novo usuário
    And eu preencho o formulário com dados válidos:
      | firstName | lastName | email                | age | salary | department |
      | João      | Silva    | joao.silva@test.com  | 30  | 5000   | QA         |
    And eu clico no botão "Submit"
    Then o usuário deve ser adicionado à tabela
    And eu devo ver os dados do usuário na tabela

  Scenario: Validar campos obrigatórios
    When eu clico no botão "Add" para adicionar novo usuário
    And eu clico no botão "Submit" sem preencher os campos
    Then devo ver mensagens de validação para campos obrigatórios

  Scenario: Buscar usuário na tabela
    Given que existe um usuário cadastrado na tabela
    When eu pesquiso pelo nome do usuário
    Then apenas o usuário pesquisado deve aparecer na tabela

  Scenario: Cadastrar múltiplos usuários
    When eu cadastro o primeiro usuário com dados:
      | firstName | lastName | email               | age | salary | department  |
      | Maria     | Santos   | maria@test.com      | 25  | 4500   | Engineering |
    And eu cadastro o segundo usuário com dados:
      | firstName | lastName | email               | age | salary | department |
      | Pedro     | Costa    | pedro@test.com      | 35  | 6000   | Marketing  |
    Then ambos os usuários devem aparecer na tabela

  Scenario: Deletar usuário da tabela
    When eu clico no botão "Add" para adicionar novo usuário
    And eu preencho o formulário com dados válidos:
      | firstName | lastName | email                   | age | salary | department |
      | ParaDeletar | Usuario | deletar@test.com      | 28  | 4000   | Testing    |
    And eu clico no botão "Submit"
    Then o usuário deve ser adicionado à tabela
    When eu clico no botão "Delete" do usuário "ParaDeletar"
    Then o usuário "ParaDeletar" deve ser removido da tabela
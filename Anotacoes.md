Testes com Cypess são executados dentro da pasta do cypress em e2e (end to end) ou components tests.

Cada tipo de teste tem um arquivo spec.cy.ts onde é escrito o teste.

Ele é executado numa porta própria.

Um teste sólido normalmente contém 3 fases:

1. Configurar o estado da aplicação
2. Tomar a ação
3. Fazer uma afirmação sobre o resultado da aplicação

"Given, When, Then" ou "Arrange, Act, Assert".



## Observações de estudo

É importante ajustar duas configs antes de rodar o projeto sem erros, a primeira, é no tsconfig.json e a segunda é incluir dentro da pasta cypress um outro tsconfig.json, a orientação está em tooling na documentação. Necessário para o uso com TypeScript.

## Algumas dicas de situações comuns com testes

docs.cypress.io/guides/end-to-end-testing/testing-your-app

https://learn.cypress.io/testing-your-first-application/app-install-and-overview
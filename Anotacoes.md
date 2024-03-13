Testes com Cypess são executados dentro da pasta do cypress em e2e (end to end) ou components tests.

Cada tipo de teste tem um arquivo spec.cy.ts onde é escrito o teste.

Ele é executado numa porta própria.

Um teste sólido normalmente contém 3 fases:

1. Configurar o estado da aplicação
2. Tomar a ação
3. Fazer uma afirmação sobre o resultado da aplicação

"Given, When, Then" ou "Arrange, Act, Assert".
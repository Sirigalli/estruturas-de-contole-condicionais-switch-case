// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//

let readline = require(`readline-sync`);

// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

let jogador = {
    nome: readline.question("Digite seu nome, jogador: "),
    pontos: 0
};

console.log(`Boas vindas ao Quiz do Flocx jogador ${jogador.nome}.





                             ########              
                          ######  ####            
                          ######  ############    
                          ##################      
                            ########              
                            ######                
                            ######                
                            ######                
                            ########              
                          ############            
                        ##############            
                      ##################          
          ##############################          
        ################################          
        ################################          
          ############################            
                ####################              
                    ####                          
                    ########    

O Quiz funciona assim: O jogador inicia o quiz, responde as perguntas, se estiverem certas,
recebe pontos que se acumulam ate o final, o jogador com maior pontuacao vence!!!

Boa sorte, ${jogador.nome}!!!
`);

console.log(`
========= PERGUNTA NUMERO 1 DO FLOCX =========


let x = 5;
let y = "5";
console.log(x == y);

O que sera exibido no console?

1) true
2) false 
3) undefined
4) error
`);

let resposta1 = readline.questionInt("Digite a resposta da pergunta 1 do flocx: ");

switch (resposta1) {
    case 1:
        console.log("Resposta Correta!");
        jogador.pontos += 1
        break;
    case 2:
    case 3:
    case 4:
        console.log("Errado! A resposta certa era a opção 1.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
};

console.log(`
========= PERGUNTA NUMERO 2 DO FLOCX =========


Qual estrutura é usada para repetir um bloco de código enquanto uma condição for verdadeira?

1) if
2) switch
3) while 
4) break
`);

let resposta2 = readline.questionInt("Digite a resposta da pergunta 2 do flocx: ");

switch (resposta2) {
    case 3:
        console.log("Resposta Correta!");
        jogador.pontos += 1
        break;
    case 2:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    case 1:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
};

console.log(`
========= PERGUNTA NUMERO 3 DO FLOCX =========


function soma(a, b) {
    return a + b;
  }
  console.log(soma(2, 3));


O que esse codigo retorna?

1) 23
2) 5 
3) undefined
4) erro
`);

let resposta3 = readline.questionInt("Digite a resposta da pergunta 3 do flocx: ");

switch (resposta3) {
    case 2:
        console.log("Resposta Correta!");
        jogador.pontos += 1
        break;
    case 1:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
};

console.log (`
========= PERGUNTA NUMERO 4 DO FLOCX =========


let resultado = 10 % 3;

Qual sera o valor da variavel resultado?

1) 3
2) 1 
3) 0
4) 10
`);

let resposta4 = readline.questionInt("Digite a resposta da pergunta 4 do flocx: ");

switch (resposta4) {
    case 2:
        console.log("Resposta Correta!");
        jogador.pontos += 1
        break;
    case 1:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    case 1:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 2.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
};

console.log(`
========= PERGUNTA NUMERO 5 DO FLOCX =========


let a;
console.log(a);

O que retorna no console?

1) erro
2) null
3) undefined 
4) 0
`);

let resposta5 = readline.questionInt("Digite a resposta da pergunta 5 do flocx: ");

switch (resposta2) {
    case 3:
        console.log("Resposta Correta!");
        jogador.pontos += 1
        break;
    case 2:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    case 1:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 3.");
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
};


console.log(`Voce fez ${jogador.pontos} de 5 pontos`);

switch (jogador.pontos) {
    case 0:
        console.log("VIX, tente novamente!");
        break;
    case 1: 
        console.log("Nheee!");
        break;
    case 2:
        console.log("Nheee!");
        break;
    case 3: 
        console.log("Bom trabalho, mas pode melhorar.");
        break;
    case 4:    
        console.log("Muito bem! Quase lá!");
        break;
    case 5:
        console.log("Perfeito! Você é um expert!");
        break;
    default:
        console.log("Error!!!")
};

jogador.aprovado = jogador.pontos >= 3; 

console.table(jogador);


// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let readline = require(`readline-sync`);

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:

// console.log(`--------MENU DE PRATOS--------
// 1 – Frango Grelhado  R$ 32,00
// 2 – Filé ao Molho    R$ 45,00
// 3 – Massa Italiana   R$ 28,00
// 4 – Salada Caesar    R$ 22,00
// 5 – Sopa do Dia      R$ 18,00
//     `);

// console.log(`--------MENU DE BEBIDAS-------
// 1 – Suco Natural     R$ 9,00
// 2 – Refrigerante     R$ 7,00
// 3 – Água             R$ 4,00
// 4 – Sem bebida       R$ 0,00   
//     `);

// let usuario = {
//     nome: readline.question("Digite seu nome: "),
//     pratoDesejado: readline.questionInt("Digite o numero correspondente do prato desejado: "),
//     bebidaDesejada: readline.questionInt("Digite o numero correpondente da bebida desejada: ")
// };

// let pedido = {
//     nome: usuario.nome,
//     nomePrato: "",
//     precoPrato: 0,
//     nomeBebida: "",
//     precoBebida: 0,
//     total: 0
// };

// switch (usuario.pratoDesejado) {
//     case 1:
//         pedido.nomePrato = "Frango grelhado";
//         pedido.precoPrato = 32;
//         pedido.total += pedido.precoPrato;
//         break;
//     case 2:
//         pedido.nomePrato = "Filé ao molho";
//         pedido.precoPrato = 45;
//         pedido.total += pedido.precoPrato;
//         break;
//     case 3:
//         pedido.nomePrato = "Massa Italiana";
//         pedido.precoPrato = 28;
//         pedido.total += pedido.precoPrato;
//         break;
//     case 4:
//         pedido.nomePrato = "Salada Caesar";
//         pedido.precoPrato = 22;
//         pedido.total += pedido.precoPrato;
//         break;
//     case 5:
//         pedido.nomePrato = "Sopa do dia";
//         pedido.precoPrato = 18;
//         pedido.total += pedido.precoPrato;
//         break;
//     default:
//         console.log("Opcao invalida")
// };

// switch (usuario.bebidaDesejada) {
//     case 1:
//         pedido.nomeBebida = "Suco natural";
//         pedido.precoBebida = 9;
//         break;
//     case 2:
//         pedido.nomeBebida = "Refrigerante";
//         pedido.precoBebida = 7;
//         break;
//     case 3:
//         pedido.nomeBebida = "Água";
//         pedido.precoBebida = 4;
//         break;
//     case 4:
//         pedido.nomeBebida = "Sem bebida";
//         pedido.precoBebida = 0;
//         break;
//     default:
//         console.log("Opcao invalida")
// };

// pedido.total += pedido.precoBebida;

// let pagamento = readline.keyInYN("Pagamento via pix?: ");

// let valorFinal;

// switch (pagamento) {
//     case true:
//         valorFinal = pedido.total * 0.9
//         console.log(`Valor final com desconto: R$${valorFinal}`)
//         break;
//     case false:
//         console.log(`Valor final sem desconto: R$${pedido.total}.`)    
// };


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:

// let valor = readline.questionFloat("Qual valor deseja converter?: ");
// console.log(`==== MENU DE CONVERSAO ====
// 1 - Km para Milhas
// 2 - Milhas para Km
// 3 - Celsius para Fahrenheit
// 4 - Fahrenheit para Celsius
// 5 - Kg para Libras
// 6 - Libras para Kg`);
// let tipo = readline.questionInt("Digite qual tipo de conversao deseja: ")

// let object = {
//     tipo: "",
//     valorOriginal: valor,
//     unidadeOriginal: "",
//     resultado: 0,
//     unidadeResultado: ""
// };

// let calculo;
// let und1;
// let und2;

// switch (tipo) {
//     case 1:
//         calculo = valor * 0.621371;
//         und1 = "km";
//         und2 = "mi";
//         object.tipo = "Km para Milhas";
//         break;
//     case 2:
//         calculo = valor * 1.60934;
//         und1 = "mi";
//         und2 = "km";
//         object.tipo = "Milhas para Km";
//         break;
//     case 3:
//         calculo = (valor * 9/5) + 32;
//         und1 = "°C";
//         und2 = "°F";
//         object.tipo = "Celsius para Fahrenheit";
//         break;
//     case 4:
//         calculo = (valor - 32) * 5/9;
//         und1 = "°F";
//         und2 = "°C";
//         object.tipo = "Fahrenheit para Celsius";
//         break;
//     case 5:
//         calculo = valor * 2.20462;
//         und1 = "kg";
//         und2 = "lb";
//         object.tipo = "Kg para Libras";
//         break;
//     case 6:
//         calculo = valor / 2.20462;
//         und1 = "lb";
//         und2 = "kg";
//         object.tipo = "Libras para Kg";
//         break;
//     default:
//         console.log("Tipo de conversão inválido.");
// };

// object.unidadeOriginal = und1;
// object.unidadeResultado = und2;
// object.resultado = calculo;

// console.table(object);

// console.log(`${object.valorOriginal}${object.unidadeOriginal} = ${object.resultado}${object.unidadeResultado}`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:


// while(true){

//     const jogada = ["pedra" , "papel", "tesoura"];
//     const computador = jogada[Math.floor(Math.random() * 3)];

//     console.log(`
//         1 - PEDRA
//         2 - PAPEL
//         3 - TESOURA
//     `);
//     const usuario = readline.questionInt("Digite a sua jogada: ");

//     let resultadoJogo = "";

//     switch (usuario) {
//         case 1:
//         if (computador === "pedra" && usuario === 1) {
//                 resultadoJogo = "Empate"
//         } else if (computador === "papel" && usuario === 1) {
//                 resultadoJogo = "Jogador PC venceu!!!"
//         } else if (computador === "tesoura" && usuario === 1) {
//                 resultadoJogo = "Jogador Usuario venceu!!!"
//         };
//         break;
//         case 2:
//             if (computador === "pedra" && usuario === 2) {
//                 resultadoJogo = "Jogador usuario venceu!!!"
//             } else if (computador === "papel" && usuario === 2) {
//                 resultadoJogo = "Empate"
//             } else if (computador === "tesoura" && usuario === 2) {
//                 resultadoJogo = "Jogador PC venceu!!!"
//             };
//             break;
//         case 3:
//             if (computador === "pedra" && usuario === 3) {
//                 resultadoJogo = "Jogador PC venceu!!!"
//             } else if (computador === "papel" && usuario === 3) {
//                 resultadoJogo = "Jogador Usuario venceu!!!"
//             } else if (computador === "tesoura" && usuario === 3) {
//                 resultadoJogo = "Empate"
//             };
//             break;
//         default:
//             if (usuario === 0) {
//                 console.log("Operação invalida")
//         } else if (usuario > 3) {
//                 console.log("Operação invalida")
//         };
//     };

//     if (resultadoJogo === "") {
//         console.log("Tente outra vez");
//     } else {
//         console.log(`Jogada do computador é: ${computador}
//     Jogada do Usuario: ${usuario}
//     Resultado do jogo: ${resultadoJogo}`);
//     };
// };


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:

// console.log(`
// ========= SUPORTE TECNICO =========
// 1 - Internet
// 2 - TV
// 3 - Telefone
// 4 - Falar com Atendente
// 0 - Encerrar
// `);

// let opcao = readline.questionInt("Digite a opcao desejada: ");
// let subMenu1;
// let subMenu2;

// switch (opcao) {
//     case 1:
//         console.log(`
//         ========= SUPORTE TECNICO =========
//         1 - Sem conexao
//         2 - Conexao lenta
//         3 - Wi-fi nao aparece
//         `);
//         subMenu1 = readline.questionInt("Digite a opcao desejada: ");
//         switch (subMenu1) {
//             case 1:
//                 console.log("Por favor reinicie seu modem");
//                 break;
//             case 2:
//                 console.log("Por favor aguarde o atendente");
//                 break;
//             case 3:
//                 console.log("Por favor reinicie seu modem e seu aparelho");
//                 break;
//             default:
//                 console.log("Opcao invalida");
//             };
//         break;
//     case 2: 
//         console.log(`
//         ========= SUPORTE TECNICO =========
//         1 - Sem sinal
//         2 - Imagem ruim
//         3 - Canais sumidos
//         `);
//         subMenu2 = readline.questionInt("Digite a opcao desejada: ");
//         switch (subMenu2) {
//             case 1:
//                 console.log("Por favor reinicie seu aparelho");
//                 break;
//             case 2:
//                 console.log("Por favor reinicie sua TV");
//                 break;
//             case 3:
//                 console.log("Por favor desliga o aparelho da tomada e aguarde 3 minutos para religar");
//                 break;
//             default:
//                 console.log("Opcao invalida");
//             };
//         break;
//     case 3:
//         console.log("Por favor aguarde na linha");
//         break;
//     case 4:
//         console.log("Por favor aguarde na linha");
//         break;
//     case 0:
//         console.log("Atendimento encerrado.");
//         break;
//     default:
//         console.log("Opcao invalida");
// };
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – TÁXI OU APP?
// ------------------------------------------------------------
// O usuário informa a distância em km e o horário (dia ou noite).
// O programa calcula o preço estimado no táxi e em um app de corridas
// e recomenda a opção mais barata.
//
// Tabela:
//   Táxi: R$5 bandeirada + R$3/km (noite: R$4/km)
//   App:  R$2 taxa fixa  + R$2/km (noite: R$2.50/km)

// → Seu código aqui:

// let distancia = readline.questionFloat("Digite a distancia que sera percorrida: ");
// let horario = readline.questionInt("A corrida sera de dia ou noite (Dia = 1 | noite = 2): ");

// let precoApp;
// let precoTaxi;

// switch (horario) {
//     case 1:
//         precoTaxi = 5 + (3 * distancia);
//         precoApp = 2 + (2 * distancia);
//         break;
//     case 2:
//         precoTaxi = 2 + (4 * distancia);
//         precoApp = 2 + (2.5 * distancia);
//         break;
//     default:
//         console.log("Horario invalido");
// };

// console.log(`
// Preço do Taxi: R$${precoTaxi}.
// Preço do App: R$${precoApp}
// `)

// if (precoApp > precoTaxi) {
//     console.log("Preco do Taxi recomendado ao usuario!")
// } else if (precoApp < precoTaxi) {
//     console.log("Preco do app recomendado ao usuario!")
// } else {
//     console.log("Precos iguais.")
// };




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – CRIE SEU PERSONAGEM DE RPG
// ------------------------------------------------------------
// O usuário responde 3 ou mais perguntas de multipla escolha (crie outras se quiser)
//  ex: prefere magia ou força?
//      prefere ataque ou defesa?
//      prefere floresta ou cidade?
//      prefere dia ou noite?
//      prefere furtividade ou agressividade?
//      prefere ataque a distância ou corpo a corpo?
// Com base nas respostas, o programa revela uma classe de personagem
// (guerreiro, mago, arqueiro, ladino, etc).
//
// Você pode criar um sistema de atribuição de pontos para cada resposta
// e determinar a classe final com base na pontuação total,
// ou simplesmente fazer verificações diretas. Use a criatividade para resolver este desafio.

// → Seu código aqui:


let mago = {
    magia: 0,
    ataque: 0,
    cidade: 0,
    diurno: 0,
    agressividade: 0,
    ataqueDistancia: 0
};

let elfo = {
    magia: 0,
    defesa: 0,
    floresta: 0,
    diurno: 0,
    furtividade: 0,
    ataqueDistancia: 0
};

let guerreiro = {
    forca: 0,
    ataque: 0,
    cidade: 0,
    diurno: 0,
    agressividade: 0,
    corpoACorpo: 0
};

let reptiliano = {
    forca: 0,
    ataque: 0,
    floresta: 0,
    noturno: 0,
    agressividade: 0,
    corpoACorpo: 0
};

    console.log(`
      ------ CRIACAO DE PERSONAGEM ------
CRIE SEU PERSONAGEM BASEADO COM SUAS ESTATISTICAS
`);

console.log(`
--- HABILIDADE ---
    1 - MAGIA
    2 - FORCA
`)
let habilidade = readline.questionInt("Digite a opcao desejada: ");
console.log(`
--- ATRIBUTO ---
    1 - ATAQUE
    2 - DEFESA
`)
let atributo = readline.question("Digite a opcao desejada: ");
console.log(`
--- AMBIENTE ---
    1 - FLORESTA
    2 - CIDADE
`)
let ambiente = readline.question("Digite a opcao desejada: ");
console.log(`
--- HABITOS ---
    1 - DIURNO
    2 - NOTURNO
`)
let diaOuNoite = readline.question("Digite a opcao desejada: ");
console.log(`
--- COMBATE ---
    1 - FURTIVIDADE
    2 - AGRESSIVIDADE
`)
let combate = readline.question("Digite a opcao desejada: ");
console.log(`
--- TIPO DE ATAQUE ---
    1 - ATAQUE A DISTANCIA
    2 - ATAQUE CORPO A CORPO
`)
let especial = readline.question("Digite a opcao desejada: ");


if (habilidade === 1) {
    mago.magia++;
    elfo.magia++;
} else {
    guerreiro.forca++;
    reptiliano.forca++;
};

if (atributo === 1) {
    mago.ataque++;
    guerreiro.ataque++;
    reptiliano.ataque++;
} else {
    elfo.defesa++;
};

if (ambiente === 1) {
    mago.cidade++;
    guerreiro.cidade++;
} else {
    reptiliano.floresta++;
    elfo.floresta++;
};

if (diaOuNoite === 1) {
    elfo.furtividade++;
} else {
    mago.agressividade++;
    guerreiro.agressividade++;
    reptiliano.agressividade++;
};

if (combate === 1) {
    elfo.ataqueDistancia++;
    mago.ataqueDistancia++;
} else {
    guerreiro.corpoACorpo++;
    reptiliano.corpoACorpo++;
};

const magoSoma = Object.values(mago).reduce((acc, curr) => acc + curr, 0);
const elfosoma = Object.values(elfo).reduce((acc, curr) => acc + curr, 0);
const guerreiroSoma = Object.values(guerreiro).reduce((acc, curr) => acc + curr, 0);
const reptilianoSoma = Object.values(reptiliano).reduce((acc, curr) => acc + curr, 0);

console.log(`
total de atributos do mago: ${magoSoma}.
total de atributos elfo: ${elfosoma}.
total de atributos guerreiro: ${guerreiroSoma}.
total de atributos reptiliano: ${reptilianoSoma}.
`)






console.log("_______________________________");
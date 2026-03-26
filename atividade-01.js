// ============================================================
//   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// ============================================================

let readline = require("readline-sync");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Switch simples com número
// ------------------------------------------------------------
// a) Declare "planeta" com valor 3.
// b) Usando switch/case, exiba o nome do planeta do Sistema Solar
//    correspondente ao número (1 = Mercúrio, 2 = Vênus,
//    3 = Terra, 4 = Marte, 5 = Júpiter, 6 = Saturno,
//    7 = Urano, 8 = Netuno).
// c) No default, exiba: "Planeta não encontrado."

// → Seu código aqui:

// let planeta = 3;

// switch (planeta) {
//     case 1:
//         console.log("Mercurio");
//         break;
//     case 2:
//         console.log("Venus");
//         break;
//     case 3:
//         console.log("Terra");
//         break;
//     case 4:
//         console.log("Marte");
//         break;
//     case 5:
//         console.log("Jupiter");
//         break;
//     case 6:
//         console.log("Saturno");
//         break;
//     case 7:
//         console.log("Urano");
//         break;
//     case 8:
//         console.log("Netuno");
//         break;    
//     default:
//         console.log("Planeta nao encontrado")
// };   


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Switch com string
// ------------------------------------------------------------
// a) Declare "direcao" com valor "norte".
// b) Usando switch/case, exiba a mensagem correspondente:
//    - "norte"  → "Seguindo para o Norte ↑"
//    - "sul"    → "Seguindo para o Sul ↓"
//    - "leste"  → "Seguindo para o Leste →"
//    - "oeste"  → "Seguindo para o Oeste ←"
//    - default  → "Direção desconhecida."

// → Seu código aqui:

// let direcao = "norte";

// switch (direcao) {
//     case "norte":
//         console.log("Seguindo para o Norte ↑");
//         break;
//     case "sul":
//         console.log("Seguindo para o Sul ↓");
//         break;   
//     case "leste":
//         console.log("Seguindo para o Leste →");
//         break;
//     case "oeste":
//         console.log("Seguindo para o Oeste ←");
//         break;
//     default:
//         console.log("Direção desconhecida.")
// };


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Fall-through(cascata) intencional
// ------------------------------------------------------------
// a) Declare "tipoVeiculo" com valor "moto".
// b) Usando fall-through (cases sem break), classifique:
//    - "bicicleta" ou "moto" ou "carro"  → "Veículo leve"
//    - "caminhao" ou "onibus"             → "Veículo pesado"
//    - default                            → "Tipo desconhecido."
// c) Exiba a categoria com template literal.

// → Seu código aqui:

// let tipoVeiculo = "moto";

// switch (tipoVeiculo) {
//     case "bicicleta":
//     case "moto":
//     case "carro":
//         console.log("Veiculo leve");
//         break;
//     case "caminhao":
//     case "onibus":
//         console.log("Veiculo pesado");
//         break;
//     default:
//         console.log("Tipo desconhecido");
// };


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Switch com input (número)
// ------------------------------------------------------------
// a) Exiba o menu de turnos para o usuário:
//    1 – Manhã | 2 – Tarde | 3 – Noite
// b) Peça ao usuário que escolha um turno (questionInt()).
// c) Com switch/case, exiba a saudação correspondente:
//    - 1 → "Bom dia! Turno da manhã."
//    - 2 → "Boa tarde! Turno da tarde."
//    - 3 → "Boa noite! Turno da noite."
//    - default → "Opção inválida."

// → Seu código aqui:

// console.log(`MENU DE TURNOS`)
// console.log(`1 - Manha`)
// console.log(`2 - Tarde`)
// console.log(`3 - Noite`)

// let turno = readline.questionInt("Escolha um turno: ");

// switch (turno) {
//     case 1:
//         console.log("Bom dia! Turno da manha.");
//         break;
//     case 2:
//         console.log("Boa tarde! Turno da tarde");
//         break;
//     case 3:
//         console.log("Boa noite! Turno da noite");
//         break;
//     default:
//         console.log("Opcao invalida")   
// };

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Switch com input (string)
// ------------------------------------------------------------
// a) Pergunte ao usuário qual é a estação do ano favorita dele
//    (question()): "verao", "outono", "inverno" ou "primavera".
// b) Com switch/case, exiba uma descrição curta da estação:
//    - "verao"     → "Dias quentes e férias!"
//    - "outono"    → "Folhas caindo e temperaturas amenas."
//    - "inverno"   → "Frio, cobertores e chocolate quente."
//    - "primavera" → "Flores, calor e renovação."
//    - default     → "Estação não reconhecida."

// → Seu código aqui:

// let estacao = readline.question("Qual sua estacao favorita do ano: ");

// switch (estacao) {
//     case "verao":
//         console.log("Dias quentes e férias!");
//         break;
//     case "outono":
//         console.log("Folhas caindo e temperaturas amenas.");
//         break;
//     case "inverno":
//         console.log("Frio, cobertores e chocolate quente.");
//         break;
//     case "primaveira":
//         console.log("Flores, calor e renovação.");
//         break;
//     default:
//         console.log("Estação não reconhecida.")
// };



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Dias da semana com fall-through
// ------------------------------------------------------------
// a) Pergunte ao usuário um número de 1 a 7 (questionInt()).
// b) Usando fall-through intencional:
//    - 1 a 5  → exiba: "Dia útil"
//    - 6 ou 7 → exiba: "Final de semana"
//    - default → "Número inválido"
// c) Exiba também o nome do dia correspondente (Segunda a Domingo).

// → Seu código aqui:

// let numero = readline.questionInt("Digite um numero de 1 a 7: ");

// switch (numero) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Dia útil");
//         break;
//     case 6:
//     case 7:
//         console.log("Final de semana");
//         break;
//     default:
//         console.log("Numero invalido");
// };


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Switch com objeto
// ------------------------------------------------------------
// a) Crie um objeto "produto" com as propriedades, perguntando ao usuário:
//    - nome
//    - categoria: número de 1 a 4 | 1 – Eletrônico | 2 – Vestuário | 3 – Alimento | 4 – Livro
//    - preco
// b) Com switch/case na categoria:
//    - 1 → adicione ao objeto: descricaoCategoria: "Eletrônico" e garantia: "12 meses"
//    - 2 → adicione ao objeto: descricaoCategoria: "Vestuário" e garantia: "Troca em 30 dias"
//    - 3 → adicione ao objeto: descricaoCategoria: "Alimento" e garantia: "Ver validade"
//    - 4 → adicione ao objeto: descricaoCategoria: "Livro" e garantia: "Sem garantia"
//    - default → adicione ao objeto: descricaoCategoria: "Categoria invalida" e garantia: "Sem garantia". Também exiba no console: "Categoria inválida."
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// let produto = {
//     nome: readline.question("Digite o nome do produto: "),
//     categoria: readline.questionInt("numero de 1 a 4 | 1 - Eletronico | 2 - Vestuario | 3 - Alimento | 4 - Livro: "),
//     preco: readline.questionFloat("Digite o preco do produto: "),
// };

// switch (produto.categoria) {
//     case 1:
//         produto.descricaoCaregoria = "Eletrônico";
//         produto.garantia = "12 meses";
//         break;
//     case 2:
//         produto.descricaoCaregoria = "Vestuário";
//         produto.garantia = "Troca em 30 dias";
//         break;
//     case 3:
//         produto.descricaoCaregoria = "Alimento";
//         produto.garantia = "Ver validade";
//         break;
//     case 4:
//         produto.descricaoCaregoria = "Livro";
//         produto.garantia = "Sem garantia";
//         break;
//     default:   
//         produto.descricaoCaregoria = "Categoria invalida";
//         produto.garantia = "Sem garantia";
//         console.log("Categoria invalida");
// };

// console.table(produto);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Conversor de nota para conceito e cor
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome
//    - Nota de 0 a 10 (questionInt()).
// b) Descubra o conceito de acordo com a nota, utilizando switch/case e adicione ao objeto o conceito e a mensagem correspondente.
//    - 10 ou 9  → conceito: "A", mensagem: "Excelente!"
//    - 8 ou 7   → conceito: "B", mensagem: "Muito bom!"
//    - 6 ou 5   → conceito: "C", mensagem: "Suficiente."
//    - 4 ou 3   → conceito: "D", mensagem: "Em recuperação."
//    - 2, 1 ou 0 → conceito: "F", mensagem: "Reprovado."
//    - default  → "Nota inválida."
// c) Exiba: "<nome> – Nota: <nota> | Conceito: <conceito> | <mensagem>"

// → Seu código aqui:

// let usuario = {
//     nome: readline.question("Digite o nome do usuario: "),
//     nota: readline.questionFloat("Digite a nota do usuario: ")
// };

// switch (usuario.nota) {
//     case 0:
//     case 1:
//     case 2:
//         usuario.conceito = "F";
//         usuario.mensagem = "Reprovado.";
//         break;
//     case 3:
//     case 4:
//         usuario.conceito = "D";
//         usuario.mensagem = "Em recuperação.";
//         break;
//     case 5:
//     case 6:
//         usuario.conceito = "C";
//         usuario.mensagem = "Suficiente.";
//         break;
//     case 7:
//     case 8:
//         usuario.conceito = "B";
//         usuario.mensagem = "Muito bom!";
//         break;
//     case 9:
//     case 10:
//         usuario.conceito = "A";
//         usuario.mensagem = "Excelente!";
//         break;
//     default:
//         console.log("Nota inválida.")
// };

// console.log(`${usuario.nome} – Nota: ${usuario.nota} | Conceito: ${usuario.conceito} | ${usuario.mensagem}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Calculadora com switch
// ------------------------------------------------------------
// a) Pergunte ao usuário dois números (questionFloat()).
// b) Exiba o menu de operações:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto
// c) Peça ao usuário que escolha uma operação (questionInt()).
// d) Com switch/case, calcule e exiba o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Se a operação for 4 (divisão) e o divisor for 0, exiba:
//    "Erro: divisão por zero não é permitida."
//    No default, exiba: "Operação inválida."

// → Seu código aqui:

// let usuario = {
//     numero1: readline.questionFloat("Digite o primeiro numero: "),
//     numero2: readline.questionFloat("Digite o segundo numero: "),
//     operacao: readline.questionInt("Digite o numero de acordo com a operacao: 1 - Soma | 2 - Subtracao | 3 - Multiplicacao | 4 - Divisao | 5 - Resto: "),
//     simbolo: ""
// };

// let resultado = "";

// switch (usuario.operacao) {
//     case 1:
//         resultado = usuario.numero1 + usuario.numero2;
//         usuario.simbolo = "+";
//         break;
//     case 2:
//         resultado = usuario.numero1 - usuario.numero2;
//         usuario.simbolo = "-";
//         break;
//     case 3:
//         resultado = usuario.numero1 * usuario.numero2;
//         usuario.simbolo = "*";
//         break;
//     case 4:
//         if (usuario.numero2 === 0) {
//             console.log("Erro: divisão por zero não é permitida.")
//         } else {
//             resultado = usuario.numero1 / usuario.numero2;
//             usuario.simbolo = "/";
//         } 
//         break;
//     case 5:
//         resultado = usuario.numero1 % usuario.numero2;
//         usuario.simbolo = "%";
//         break;
//     default:
//         console.log("Operação inválida.")
// };

// if (resultado !== "") {
//     console.log(`${usuario.numero1}${usuario.simbolo}${usuario.numero2} = ${resultado}`)
// };


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de loja completo
// ------------------------------------------------------------
// a) Crie um objeto "loja" com:
//    - nome: "TechShop"
//    - saldo: 0
// b) Exiba o menu:
//    1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair
// c) Peça ao usuário uma opção (questionInt()).
// d) Com switch/case:
//    - 1 → exiba uma lista fixa de 3 produtos com preços usando console.table()
//          (ex: [{ produto: "Mouse", preco: 89.90 }, ...])
//    - 2 → pergunte qual produto e o preço (question + questionFloat),
//          adicione ao saldo e exiba: "Produto adicionado ao carrinho."
//    - 3 → exiba: "Total no carrinho: R$ <saldo>"
//    - 4 → exiba: "Obrigado por visitar a TechShop!"
//    - default → exiba: "Opção inválida."

// → Seu código aqui:

console.log("MENU");
console.log("1 - Ver produto");
console.log("2 - Comprar");
console.log("3 - Ver carrinho");
console.log("4 - Sair");

let loja = {
    nome: "TechShop",
    saldo: 0,
    opcao: readline.questionInt("Digite uma opcao do MENU")
};

loja.produtos = [
    produto1 = {
        nome: "Mouse Logitech",
        preco: 249.90,
    },
    produto2 = {
        nome: "Teclado Razer",
        preco: 569.90,
    },
    produto3 = {
        nome: "Monitor Mancer 260hz",
        preco: 1299.90,
    },
];

switch (loja.opcao) {
    case 1:
        console.table(loja.produtos)
        break;
    case 2:
        
}



console.log("_______________________________");


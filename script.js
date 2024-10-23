const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Qual o planeta desconsiderado de nosso sistema solar?",
        alternativas: [
            {
                texto:"Plutão.",
                afirmacao:"afirmação"
            },
            {
                texto:"Jupter.",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "Qual a galáxia mais proxima da nossa?",
        alternativas: [
            {
                texto:"Nuvem de Magalhões.",
                afirmacao:"afirmação"
            },
            {
                texto:"Andrõmeda.",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "Quantos planetas existem em nosso sistema solar.",
        alternativas: [
            {
                texto:"15 planetas.",
                afirmacao:"afirmação"
            },
            {
                texto:"8 planetas.",
                afirmacao:"afirmação."
                

            }
        
    
        ]


    },
    {
        enunciado: "Nosso uníverso é considerado infinito?",
        alternativas: [
            {
                texto:"Não.",
                afirmacao:"afirmação"
            },
            {
                texto:"Sim.",
                afirmacao:"afirmação"
                

            }
        
        
        ]

    }

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
           atual++;
           mostraPergunta();
           const afirmacoes = opcaoSelecionada
        }
 function mostraResultado(){
    caixaPerguntas.textContent = "Na astronomia, o Universo corresponde ao conjunto de toda a matéria, energia, espaço e tempo existente. Ele reúne os astros: planetas, cometas, estrelas, galáxias, nebulosas, satélites, dentre outros.O universo é, portanto, mais que um local imenso, ele é tudo, e engloba tudo o que existe. Para muitos, infinito. Note que do latim, a palavra universum significa “todo inteiro” ou “tudo em um só”. O Sistema Solar é composto por oito planetas, conforme se considera hoje em dia, além de planetas anões e corpos celestes, como asteroides, meteoros, cometas e satélites.";
    textoResultados.textContent = historiaFinal += afirmacoes + " ";
    caixaAlternativas.textContent = "";
 }       
mostraPergunta();
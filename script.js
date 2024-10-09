const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAlternativa = document.querySelector(".caixa-Alternativas");
const caixaResultados = document.querySelector(".caixa-Resultados");
const textoResultados = document.querySelector(".texto-Resultados");


const Perguntas = [
    {
        enunciado: "Onde esta a agua de marte?",


        alternativas: [
            "Abaixo do solo.",
            "Na superficie do solo."
        ]




    },

    {
        enunciado: "Como foi o surgimento do universo?",

        alternativas: [
            "Atraves de um atomo muito denso e energizado.",
            "Nao se ssbe de como foi a existencia."

        ]


    },

    {
        enunciado: "Depois que Gabriel escreveu o trabalho, teve uma discussão sobre o impacto da IA no trabalho do futuro o que Gabriel faz:",

        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas",
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
        ]
    },

    {
        enunciado: "Ao final da discussão, Gabriel precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",

        alternativas: [
            "Criar uma imagem utilizando um gerador de imagem de IA.",
            "Criar uma imagem utilizando uma plataforma de design como o Paint."
        ]
    },

    {
        enunciado: "Ao final da discussão, Gabriel precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",

        alternativas: [
            "Criar uma imagem utilizando um gerador de imagem de IA.",
            "Criar uma imagem utilizando uma plataforma de design como o Paint."
        ]
    },

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = Perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
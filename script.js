const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com o avanço da tecnologia no século XXI. A tecnologia está cada dias mais moderna avançada e coisas imagináveis podem ser criadas em um piscar de olhos. Tudo isso está vinculado com áreas da ciência e da computação, como você reaje com isso?",
        alternativas: [
            {
                texto: "Isso é terrível!",
                afirmacao: "Tenho medo do que essa tecnologia é capaz. "
            },
            {
                texto: "Isso é admirável!",
                afirmacao: "Quero estar por dentro das novas criações usando IA (inteligência artificial)."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, um dos alunos dos seus alunos utilizou o chatgpt para fazer uma redação e você descobriu, qual sua opinião?",
        alternativas: [
            {
                texto: "Deixa utilizar a ferramenta, pois ajuda os alunos a fazerem os trabalhos melhores.",
                afirmacao: "Deixa utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Concientiza os alunos de que podem ficar dependentes e que não podem usar em certos casos.",
                afirmacao: "Concientiza em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Você resolveu realizar uma conversa com a sua turma para saber quem utiliza e o porque eles utilizam. Nessa conversa a maioria dos alunos querem começar a utilizar, como você se posiciona?",
        alternativas: [
            {
                texto: "Expõe a ideia de que a IA pode ajudar a melhorar seus conhecimentos.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos com IA."
            },
            {
                texto: "Me preocupo que  vocês perderão oportunidades de aprenderem novas coisas por querer pesquisar e ter tudo nas maõs.",
                afirmacao: "Preocupação com seus alunos."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você deixou que usasse a inteligencia artificial para criarem um site no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criarem tudo com Ia.",
                afirmacao: "Notou também que muito de seus alunos não sabem utilizar."
            },
            {
                texto: "Criarem no chatgpt, mas mudarem conforme seus desejos.",
                afirmacao: "Melhorando a qualidade de seu trabalho"
            }
        ]
    },
    {
        enunciado: "O que se acha de usar ajuda da IA para trabalhos da escola? ",
        alternativas: [
            {
                texto: "Fazer trabalhos com a ajuda da IA contribui com o andamento e a agilidade com que eu faço.",
                afirmacao: " Passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo, não conseguindo fazer nada sem."
            },
            {
                texto: "A IA pode prejudicar, pois hoje em dia existem aplicativos que indentificam se usou o chatgpt ou algo do tipo, prefiro não usar.",
                afirmacao: "Sabe que é prejudicial. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();


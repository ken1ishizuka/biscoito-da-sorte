const closedFortuneCookie = document.querySelector(".closed-cookie");
const openedFortuneCookie = document.querySelector(".opened-cookie");
const message = document.querySelector("main p");
const btnRestart = document.querySelector("button");
const defaultText = message.innerText;

const fortunes = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Dê toda a atenção à formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
    "Siga os bons e aprenda com eles.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "Você infelizmente não ter sorte alguma.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Abandone antes de tentar e evite maiores frustrações.",
    "Os que não param de lutar estão sempre em busca da sua próxima derrota.",
    "As piores coisas da sua vida podem acontecer se você decidir sair de onde está.",
    "O desespero é o que move as pessoas, não a esperança.",
    "A esperança já te fez fazer coisas doidas e que você se arrependeu. Então, não tenha esperança em nada.",
    "O empate é o melhor resultado porque ninguém sai perdendo.",
    "Todos esperam que você falhe. Então, lute até provar que eles estão certos.",
    "O caminho não fica mais difícil, você é que fica mais cansado e não aguenta mais.",
    "A frustração me ensinou que fazer nada não gera sofrimento.",
    "Não é falta de sorte, é incompetência.",
    "A vida é difícil e fica mais difícil se você decide encará-la de frente.",
    "O gosto da vitória é momentâneo, o do fracasso dura para sempre.",
    "Podemos sempre falhar mais do que já falhamos até agora.",
    "Não pense porque já deu tudo errado que as coisas não podem sair ainda mais do controle.",
    "Nunca duvide da sua capacidade de falhar em algo que você irá fazer."
];

closedFortuneCookie.addEventListener('click', openFortuneNote);
btnRestart.addEventListener('click', restartApp);

function openFortuneNote() {
    changeImageCookie();
    showRestartButton();
    changeMessage(); 
}

function changeImageCookie() {
    closedFortuneCookie.classList.toggle("hide");
    openedFortuneCookie.classList.toggle("hide");
}

function showRestartButton() {
    btnRestart.classList.toggle("hide");
}

function changeMessage() {
    let randowFortune = Math.floor(Math.random() * fortunes.length);

    message.classList.toggle("fortune-msg");
    message.innerText = fortunes[randowFortune];
}

function restartApp() {
    changeImageCookie();
    showRestartButton();
    changeMessage();
    message.innerText = defaultText;
}
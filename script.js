// ===================================================================
//  ÁREA DE EDIÇÃO PRINCIPAL
//  Edite a lista abaixo com seus textos e links de músicas.
//  Para um motivo SEM música, apenas deixe o link com aspas vazias ("").
// ===================================================================
const motivos = [
    { 
        texto: "Seu sorriso que é maravilhoso e eu amo te ver sorrindo", 
        link: "https://open.spotify.com/intl-pt/track/7riceftbuaKE6vIRbHGc5R?si=4495f93ccb9a4a24" 
    },
    { 
        texto: "O jeito que seus olhinhos brilham", 
        link: "https://open.spotify.com/intl-pt/track/3yiXy2ydZP9ZpsYxvUI6sO?si=0e49cce2ad024b58" 
    },
    { 
        texto: "O seu humor quebrado que nem o meu", 
        link: "https://open.spotify.com/intl-pt/track/1ngbz6irbfEmpsYcZhzX6L?si=aa4e144df63345a1" 
    },
    {
        texto: "Seu olho corzinha de mel",
        link: "https://open.spotify.com/intl-pt/track/7zIFPo5mHo7wG9eueepiof?si=478c509f2a66490f" 
    },
    {
        texto: "O jeitinho que você me trata",
        link: "https://open.spotify.com/intl-pt/track/0PlE0Lh9wcuh9G9uMmZvZC?si=b6d7a07918744564" 
    },
    {
        texto: "A nossa conexão tão forte",
        link: "https://open.spotify.com/intl-pt/track/3pv7gaBIzHN6ktYoKJcqG7?si=eb683c50903144da" 
    },
    {
        texto: "Seu rostinho lindo",
        link: "https://open.spotify.com/intl-pt/track/3TnVzwHRytGd8Va9jn6Yhs?si=c1d132fee8dc4dab" 
    },
    {
        texto: "Seu corpo maravilhoso",
        link: "https://open.spotify.com/intl-pt/track/6ZS84pKdsm5DXdchUrwQGW?si=e6eaa1fda4d840c1" 
    },
    {
        texto: "Sua personalidade forte e incrível",
        link: "https://open.spotify.com/intl-pt/track/43BCxznTSBLcXzu4lJ8KW5?si=35733a6c6d24421f" 
    },
    {
        texto: "Sua voz calma, linda e tranquila",
        link: "https://open.spotify.com/intl-pt/track/6uFwhB7gVs7ExCAfJD5BWg?si=1ac13674345d4f7d" 
    },
    {
        texto: "O seu gosto musical que bate muito com o meu",
        link: "https://open.spotify.com/intl-pt/track/5nwT95l5rMdQPaydjGh32q?si=b1e11d1a50534028" 
    },
    {
        texto: "A forma com que você deixa as coisas mais leves, calmas a tranquilas",
        link: "https://open.spotify.com/intl-pt/track/3PlKQNlbL4767rND3HnqSI?si=ebfb76a7815d4416" 
    },
    {
        texto: "A paz que você traz pra mim",
        link: "https://open.spotify.com/intl-pt/track/3iof6EclqePezHDibBiykI?si=5407ad3af3544317" 
    },
    {
        texto: "O fato de você me mostrar que o amor existe, que é lindo e muito incrível",
        link: "https://open.spotify.com/intl-pt/track/75Wq1LZlCcpSTB3YCiV4y6?si=093a5b2b4a714523" 
    },
    {
        texto: "Você melhora muito o meu dia desde quando nos conhecemos",
        link: "https://open.spotify.com/intl-pt/track/6owwZC8gUvrBuygvOHaYXb?si=e6d02e5506f24226" 
    },
    {
        texto: "O jeito que a gente consegue falar bobeira e coisa séria/profunda com intensidade",
        link: "https://open.spotify.com/intl-pt/track/6vgKWE1KV4E7p1Dv75z0kL?si=0f527adeae44449e" 
    },
    {
        texto: "A forma como você me faz sentir que eu posso ser eu mesmo, sem medo de nada",
        link: "https://open.spotify.com/intl-pt/track/1yUm0iWD3rDf8dViBRpSkt?si=3c535b682e6845aa" 
    },
    {
        texto: "O jeito que a gente consegue conversar por horas e não ficar sem assunto nunca",
        link: "https://open.spotify.com/intl-pt/track/4kdsUoUrCxB6msYgwVuXys?si=b66bda9101624af4" 
    },
    {
        texto: "A sensação de ter você perto de mim e comigo mesmo estando distante",
        link: "https://open.spotify.com/intl-pt/track/5zfWoufXTAXICVcxgR5fYO?si=72a8742fab7746a9" 
    },
    {
        texto: "A vontade que você me dá de ser melhor a cada dia, por mim, por você e por nós",
        link: "https://open.spotify.com/intl-pt/track/7tkka2fYf1erIg8wy8r9Lt?si=3ad1fa0019f3405d" 
    },
    {
        texto: "As sensações inexplicáveis que eu tenho e sinto quando penso, falo, ouço e vejo você",
        link: "https://open.spotify.com/intl-pt/track/68cPbG7hJnwDW9nPX1uQcX?si=a273cd43d0b54dec" 
    },
    {
        texto: "O friozinho na barriga e a sensação de borboletinha nela que você me traz",
        link: "https://open.spotify.com/intl-pt/track/5JsxOLyWOMbcprA8WsIinN?si=a67bc540540646d1" 
    },
    {
        texto: "O seu amor me encanta muito",
        link: "https://open.spotify.com/intl-pt/track/6gY8k3zvcXkxOlaEqf0MQ0?si=6dd432b03b554518" 
    },
    {
        texto: "Você me conquista mais a cada dia que passa",
        link: "https://open.spotify.com/intl-pt/track/1mSxbLW7fKABfeY4lGpg0E?si=c59139f8772c4241" 
    },
    {
        texto: "Eu amo você por inteira, completamente, totalmente e pra sempre",
        link: "https://open.spotify.com/intl-pt/track/7h9BkPljkGtZ7I0zD5PEcY?si=303ea42261954133" 
    },
    {
        texto: "Pelo coração gigante que você tem, que sempre se preocupa com os outros ao seu redor",
        link: "https://open.spotify.com/intl-pt/track/5lVDYVBrFroQbZnN2zeZX2?si=1de128420b854039" 
    },
    {
        texto: "Eu amo te conhecer e amo saber sobre você",
        link: "https://open.spotify.com/intl-pt/album/1nRfWfuGGTM4V9llyaBPEP?si=931b562050fe400d" 
    },
    {
        texto: "Eu amo o seu jeitinho de me elogiar e me botar pra cima",
        link: "https://open.spotify.com/intl-pt/track/04h9o3gtRD7fvGafF7ukJj?si=bae89baa40164ac6" 
    },
    {
        texto: "Eu Amo que você presta atenção nas coisas que eu falo, me repara e me nota",
        link: "https://open.spotify.com/intl-pt/track/0VrBlwJ9EKUYGO7ZfQdg12?si=df2ea64f7207408e" 
    },
    {
        texto: "Eu amo que eu consigo me abrir tranquilamente pra você e falar sobre todo tipo de coisa",
        link: "https://open.spotify.com/intl-pt/track/209ucYTS6vWEV5iydrHiOt?si=898d741934e24ed1" 
    },
    {
        texto: "Eu amo as músicas que você me dedica",
        link: "https://open.spotify.com/intl-pt/track/5c12DVTlsyFbxmysLw0Vll?si=51cb53a32db44f74" 
    },
    {
        texto: "Eu amo imaginar o futuro com você",
        link: "https://open.spotify.com/intl-pt/track/2Z6R74YWSGzE1a0BMahvHV?si=2bfeae73f256412c" 
    },
    {
        texto: "Eu amo todas as suas fotos e vídeos que você me manda",
        link: "https://open.spotify.com/intl-pt/track/4uEYpkj1LftTpAXpUwqQo0?si=65b315ccc79b4d1c" 
    },
    {
        texto: "Eu amo você contando detalhadamente sobre o seu dia pra mim",
        link: "https://open.spotify.com/intl-pt/track/08WreWV955P6hVOpxo47Uh?si=9c070d8decd34abb" 
    },
    {
        texto: "Sua história me encanta e me faz te admirar muito",
        link: "https://open.spotify.com/intl-pt/track/2nxGSc5GlChwA3DSWNO61P?si=22363675478f4fe2" 
    },
    {
        texto: "Seu jeitinho de me incluir na sua vida",
        link: "https://open.spotify.com/intl-pt/track/3QI5bIozef0HZ1kJnA2RdT?si=0377e2f523b148d2" 
    },
    {
        texto: "Tudo que envolve você me deixa muito bobo, feliz, empolgado, encantado e completamente apaixonado",
        link: "https://open.spotify.com/intl-pt/track/418dvwrXEJiPGPuEUQrKVu?si=222c00c08a7845c9" 
    },
    {
        texto: "Cada dia com você me deixa mais animado e empolgado pro nosso futuro juntos",
        link: "https://open.spotify.com/intl-pt/track/17dS7mrtNwH05RFjgMjLFi?si=7480ffe282d64a8d" 
    },
    {
        texto: "Você me fez e faz acreditar no amor novamente e eu sou muito feliz por isso",
        link: "https://open.spotify.com/intl-pt/track/0AsfpL8bzbmEyJsfbPPYnj?si=54a46bf6fa924a1c" 
    },
    {
        texto: "Eu amo contar e falar sobre você e as coisas boas que temos",
        link: "https://open.spotify.com/intl-pt/track/4d0DpU7Odiv0ztvX2GxJlk?si=a3bb6b06787e46e0" 
    },
    {
        texto: "A forma com que as coisas fluíram entre nós",
        link: "https://open.spotify.com/intl-pt/track/6HaTYIUKd8SzdvGOfutBRD?si=0b2d468934064300" 
    },
    {
        texto: "A sensação de que as nossas almas já se conheciam muito antes de nós",
        link: "https://open.spotify.com/intl-pt/track/2WTUUgW4avcg6yBtt0797B?si=c7ce429e96ae4cbd" 
    },
    {
        texto: "A nossa forma de nos entendermos e termos uma sincronia absurda",
        link: "https://open.spotify.com/intl-pt/track/2TI5GBkbrrFtZRM5v1heeb?si=3916edc5e05745b8" 
    },
    {
        texto: "A sua felicidade e empolgação contando sobre coisas que gosta",
        link: "https://open.spotify.com/intl-pt/track/0YojqXjn4xb5hblpFAhqJr?si=a31865b5a3c44a7c" 
    },
    {
        texto: "O seu gosto pra tudo",
        link: "https://open.spotify.com/intl-pt/track/0DZy6nJdqvHSeobBaOBJI6?si=87c0c6d9d3b74835" 
    },
    {
        texto: "O fato de você ter transformado meu mundo e a forma como eu enxergo ele",
        link: "https://open.spotify.com/intl-pt/track/3baOycIMQ6LRDU9vK5uvSH?si=897c253a82d74682" 
    },
    {
        texto: "Você me faz sentir coisas que eu nem achava que existiam ou eram possíveis de se sentir",
        link: "https://open.spotify.com/intl-pt/track/4uEYpkj1LftTpAXpUwqQo0?si=4775fc30c9d148fd" 
    },
    {
        texto: "Do seu lado eu sinto que sou a melhor versão de mim",
        link: "https://open.spotify.com/intl-pt/track/0zLs0xjw4MYcMiXHsOvSgk?si=3ed08a665e4247b7" 
    },
    {
        texto: "Cada momentinho com você, cada conversa, ligação, áudio, mensagem e tudo que nós fazemos",
        link: "https://open.spotify.com/intl-pt/track/5yFI0Vs3x4EbeIDerT0ck1?si=5d8e35976be14ce0" 
    },
    {
        texto: "Eu amo você, Sophia. Você é o amor da minha vida e eu te desejo completamente",
        link: "https://open.spotify.com/intl-pt/track/1eFlkymohjGtRnnYGabg8s?si=9a56bcf45072436c" 
    },
];

// --- Não precisa editar abaixo desta linha ---

const postItEl = document.querySelector('.post-it');
const motivoTextoEl = document.getElementById('motivo-texto');
const contadorEl = document.getElementById('contador');
const btnAnterior = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');
const spotifyButtonEl = document.getElementById('spotify-button');

let indiceAtual = 0;
let animando = false;

function mostrarMotivo() {
    const motivoAtual = motivos[indiceAtual];
    
    motivoTextoEl.innerHTML = motivoAtual.texto;
    contadorEl.textContent = `${indiceAtual + 1} / ${motivos.length}`;

    if (motivoAtual.link && motivoAtual.link.trim() !== "") {
        spotifyButtonEl.href = motivoAtual.link;
        spotifyButtonEl.style.display = 'block';
    } else {
        spotifyButtonEl.style.display = 'none';
    }
}

function navegar(direcao) {
    if (animando) return;

    let podeNavegar = (direcao === 'proximo' && indiceAtual < motivos.length - 1) ||
                      (direcao === 'anterior' && indiceAtual > 0);

    if (!podeNavegar) return;

    animando = true;
    const classeDeSaida = direcao === 'proximo' ? 'saindo-esquerda' : 'saindo-direita';
    
    postItEl.classList.add(classeDeSaida);

    setTimeout(() => {
        indiceAtual = direcao === 'proximo' ? indiceAtual + 1 : indiceAtual - 1;
        
        postItEl.style.opacity = '0'; 
        postItEl.classList.remove(classeDeSaida);
        
        mostrarMotivo();

        requestAnimationFrame(() => {
            postItEl.style.transition = 'none';
            requestAnimationFrame(() => {
                postItEl.style.transition = 'transform 0.6s ease-in-out, opacity 0.5s ease-in-out';
                postItEl.style.opacity = '1';
                animando = false;
            });
        });
        
    }, 600);
}

btnProximo.addEventListener('click', () => navegar('proximo'));
btnAnterior.addEventListener('click', () => navegar('anterior'));

mostrarMotivo();
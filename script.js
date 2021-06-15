const imagem1 = document.getElementById("figura1");
const nomeDoPersonagem1 = document.getElementById("nome-personagem1");
const imagem2 = document.getElementById("figura2");
const nomeDoPersonagem2 = document.getElementById("nome-personagem2");
const imagem3 = document.getElementById("figura3");
const nomeDoPersonagem3 = document.getElementById("nome-personagem3");
const imagem4 = document.getElementById("figura4");
const nomeDoPersonagem4 = document.getElementById("nome-personagem4");


personagemAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

trazerPersonagem1 = () => {//fetch acessa um end de um site, e pega info//
    let aleatorio = personagemAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method:'GET', 
        headers: {
            Accept:'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
    });
}

trazerPersonagem2 = () => {
    let aleatorio = personagemAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method:'GET', 
        headers: {
            Accept:'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
    });
}

trazerPersonagem3 = () => {
    let aleatorio = personagemAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method:'GET', 
        headers: {
            Accept:'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
    });
}

trazerPersonagem4 = () => {
    let aleatorio = personagemAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method:'GET', 
        headers: {
            Accept:'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = data.name;
        nomeDoPersonagem4.innerHTML = data.name;
    });
}

trazerPersonagem1();
trazerPersonagem2();
trazerPersonagem3();
trazerPersonagem4();





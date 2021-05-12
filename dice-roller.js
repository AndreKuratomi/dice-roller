let count = [0,0,0,0,0,0,0,0,0,0,0];

const rolagemDados = (max, min) => {
    for (let y = 1; y <= 1000; y++) {
        let rolagemDado1 = Math.floor(Math.random() * (max - min + 1)) + min;
        let rolagemDado2 = Math.floor(Math.random() * (max - min + 1)) + min;
        let rodaDaFortuna = rolagemDado1 + rolagemDado2;
        if (rodaDaFortuna === 2) {
            count[0] += 1;
        }
        if (rodaDaFortuna === 3) {
            count[1] += 1;
        } 
        if (rodaDaFortuna === 4) {
            count[2] += 1;
        } 
        if (rodaDaFortuna === 5) {
            count[3] += 1;
        } 
        if (rodaDaFortuna === 6) {
            count[4] += 1;
        } 
        if (rodaDaFortuna === 7) {
            count[5] += 1;
        } 
        if (rodaDaFortuna === 8) {
            count[6] += 1;
        } 
        if (rodaDaFortuna === 9) {
            count[7] += 1;
        }
        if (rodaDaFortuna === 10) {
            count[8] += 1;
        } 
        if (rodaDaFortuna === 11) {
            count[9] += 1;
        } 
        if (rodaDaFortuna === 12) {
            count[10] += 1;
        } 
    }
    console.log(count);
    return count;
};
rolagemDados(6, 1);

const menorValor = () => {
    let menor = count[0];
    for (let z = 0; z < count.length; z++) {
        if (count[z] < menor) {
            menor = count[z];
        }
    }
    return menor;
};

const maiorValor = () => {
    let maior = count[10];
    for (let z = 0; z < count.length; z++) {
        if (count[z] > maior) {
            maior = count[z];
        }
    }
    return maior;
};

const titulos = indice => {
    const resultTitle = window.document.getElementById('sorte');
    
    const description = window.document.createElement('p')
    description.innerHTML = `${indice}:`;
    description.className = "texto";
    resultTitle.appendChild(description);  
};

const showResult = window.document.getElementById('sorte');

for (let z = 0; z < count.length; z++) {
    titulos(z+2);
    const barra = window.document.createElement('div');
    barra.className = "barra";
    barra.innerHTML = `${count[z]}`
    barra.style.width = `${count[z]}px`;
    if (count[z] % 2 === 0) {
        barra.style.backgroundColor = "#99F";
    }
    if (count[z] % 2 !== 0) {
        barra.style.backgroundColor = "#0F0";
    }
    if (count[z] === menorValor()) {
        barra.style.backgroundColor = "#000";
        barra.style.color = "#FFF";
        barra.style.textDecoration = "underline";
    }
    if (count[z] === maiorValor()) {
        barra.style.backgroundColor = "#F00";
        barra.style.color = "#FFF";
        barra.style.textDecoration = "underline";
    }
    showResult.appendChild(barra);
}


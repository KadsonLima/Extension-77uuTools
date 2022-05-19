

if (document.querySelector(".ivu-poptip-rel") !== null) {
    document.querySelector(".ivu-poptip-rel").remove()
}
console.warn("teste")


setInterval(() => {
    const menu = document.querySelector(".topMenu");
    if (menu.querySelector(".button") == null) {
        const button = document.createElement("button");
        button.innerHTML = "Procurar Rodadas";
        button.classList.add("button");
        menu.insertAdjacentElement('afterbegin', button);

        button.addEventListener("click", verificarUltimo)
    }

    if (document.querySelector(".timeBar").innerText == "00:00:00") {


    }
}, 1800)



function verificarUltimo() {
    martGale();
    let cores = document.querySelectorAll(".issueItem > span:nth-last-child(2)") // Adiciona todas sequencias num Array
    let branco = ''; // Criação de variavel branco e vermelho para verificar a ultima vez que bateu
    let vermelho = '';
    let jogo = document.querySelector(".currentGame").innerText
    for (let i = 0; i < cores.length; i++) {
        if (cores[i].querySelectorAll("span .redCircle").length == 4 && vermelho == '') {

            vermelho = [i];

        } if (cores[i].querySelectorAll("span .whiteCircle").length == 4 && branco == '') {

            branco = [i];
        }

    }
    let right = document.querySelector(".topMenu")
    let texto;
    if (document.querySelector(".right").querySelector(".texto") == null) {
        texto = document.createElement("div");
        texto.innerHTML = "Procurar Rodadas";
        texto.classList.add("texto");
        right.insertAdjacentElement('afterend', texto);

    }

    if (branco == '' || vermelho == '') {

        document.querySelector(".texto").innerHTML = "DESÇA O SCROLL PARA CARREGA A LISTA"
    } else {

        document.querySelector(".texto").innerHTML = (`<p class="bolha">Ultima vez que bateu 4 Vermelhos foi a ${vermelho} rodadas!</p>
    <p>Ultima vez que bateu 4 Brancos foi a ${branco} rodadas!</p>`)
    }
}


function martGale() {
    let valor = parseFloat(document.querySelector(".balance").innerText)
    let lista = []
    let gales = document.createElement("div");
    gales.classList.add("gales");
    //gale 1
    lista.push(valor * 0.000555)
    //gale 2
    lista.push(soma(lista, 2));
    //gale 3
    lista.push(soma(lista, 2))
    //gale 4
    lista.push(soma(lista, 1.777))
    //gale 5
    lista.push(soma(lista, 1.601));
    //gale 6
    lista.push(soma(lista, 1.3859))
    //gale 7
    lista.push(soma(lista, 1.226))
    //gale 8
    lista.push(soma(lista, 1.4496));
    //gale 9
    lista.push(soma(lista, 1.13047))
    
    lista.forEach((e)=>{
        let gale = document.createElement("div");
        gale.innerHTML = e.toFixed(2);
        gale.classList.add("gale");
        gales.appendChild(gale);
        
    })
    
    document.querySelector(".betMain").insertAdjacentElement('afterend', gales);
}


function soma(lista, valor) {
    for (var i = 0, total = 0; i < lista.length; total += lista[i++]);
    return ((total * valor))
}
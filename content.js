

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
        button.addEventListener("click", verifyGame)
         martGale();
         verifyGame();
        
    }if(document.querySelector(".button.gale") == null){
        const gale = document.createElement("button")
        gale.innerHTML = "Gales";
        gale.classList.add("button");
        gale.classList.add("gale");
        document.querySelector(".btnGroup").insertAdjacentElement('beforebegin', gale);
        gale.addEventListener("click", ()=>{
            martGale();
        })
    }

    if (document.querySelector(".timeBar").innerText == "00:00:00") {
        setTimeout(()=>{
            verifyGame();
        }, 10000)
        

    }
    
}, 1800)



function verifyGame() {
    let jogo = document.querySelector(".currentGame").innerText
    if(['Speed Blocks','3 Min Blocks','5 Min Blocks'].includes(jogo)){
        blook(jogo)
    }else if (['Speed Red/Green','3 Min Red/Green','5 Min Red/Green'].includes(jogo)){
        redGreen(jogo)
    }else{
        diskBlocks(jogo);
    }
    
}


function martGale() {
    (document.querySelector(".gales"))? document.querySelector(".gales").remove():''
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
        let gale = document.createElement("input");
        gale.value = e.toFixed(2);
        gale.classList.add("gale");
        gale.readOnly = true;
        
        gales.appendChild(gale);
        
    })
    
    
    document.querySelector(".betMain").insertAdjacentElement('afterend', gales);

}


function soma(lista, valor) {
    for (var i = 0, total = 0; i < lista.length; total += lista[i++]);
    return ((total * valor))
}


function diskBlocks(jogo){
    let cores = document.querySelectorAll(".issueItem > span:nth-last-child(2)") // Adiciona todas sequencias num Array
    let branco = ''; // Criação de variavel branco e vermelho para verificar a ultima vez que bateu
    let vermelho = '';
    
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

        document.querySelector(".texto").innerHTML = (`<p>${jogo}</p><p class="vermelho">Ultima vez que bateu 4 Vermelhos foi a ${vermelho} rodadas!</p>
    <p>Ultima vez que bateu 4 Brancos foi a ${branco} rodadas!</p>`)
    }
}

function redGreen(jogo) {
    // body...
    let cores = document.querySelectorAll(".issueItem > span:last-child") // Adiciona todas sequencias num Array
    let green = ''; // Criação de variavel green e vermelho para verificar a ultima vez que bateu
    let vermelho = '';
    let roxo = '';
    
    for (let i = 0; i < cores.length; i++) {
        if (cores[i].querySelector(".redCircle") && vermelho == '') {

            vermelho = [i];

        } if (cores[i].querySelector(".greenCircle") && green == '') {

            green = [i];
        }
        if (cores[i].querySelector(".purpleCircle") && roxo == '') {

            roxo = [i];
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

    if (green == '' || vermelho == '' || roxo == '') {

        document.querySelector(".texto").innerHTML = "DESÇA O SCROLL PARA CARREGA A LISTA"
    } else {

        document.querySelector(".texto").innerHTML = (`<p>${jogo}</p><p class="vermelho">Ultima vez que bateu Vermelho foi a ${vermelho} rodadas!</p>
    <p class="verde">Ultima vez que bateu Verde foi a ${green} rodadas!</p><p class="purple">Ultima vez que bateu Roxo foi a ${roxo} rodadas!</p>`)
    }

}

function blook(jogo){
    let right = document.querySelector(".topMenu")
    right.querySelector("span:nth-last-child(2)").click()
    let lastPlay = document.querySelector(".RecorItem");
    let verifyGain = lastPlay.querySelector(".Recorti1s");
    
    let texto;
    if (document.querySelector(".right").querySelector(".texto") == null) {
        texto = document.createElement("div");
        texto.innerHTML = "Procurar Rodadas";
        texto.classList.add("texto");
        right.insertAdjacentElement('afterend', texto);
    }
    setTimeout(()=>{
        if(verifyGain.classList.contains('winGreen')){
        let ganho = verifyGain.innerText.split(" ")[0];
        let apostado = lastPlay.children[5].children[1].innerText
        if(ganho == '0.00'){
            document.querySelector(".texto").innerHTML = (`<p>${jogo}</p><p>TOMOU NO CU PERDEU KKK</p><p>Ultima Aposta feita foi ${apostado}</p>`)
        }else{
            document.querySelector(".texto").innerHTML = (`<p>${jogo}</p><p>GANHOU ${ganho}</p><p>Ultima Aposta feita foi ${apostado}</p>`)
        }

    
    }else{
        document.querySelector(".texto").innerHTML = (`<p>${jogo}</p><p>EM ESPERAR...</p><p>Ultima Aposta feita foi ${apostado}</p>`)
    }
    right.querySelector("span").click()

    }, 10000)
    

}
const divAlvo=document.getElementById('preview')
const botaoDownload = document.getElementById('botaoDownload')
const btAddMist = document.getElementById('bt-adicao-mistura')
const btAddAcomp = document.getElementById('bt-adicao-acomp')
const parteMist = document.getElementById('misturas')
const parteAcomp = document.getElementById('acomps')
let misturas =[]
let acomps =[]
const secaoMisturas = document.getElementById('sec-mist')
const secaoAcomps = document.getElementById('sec-acomps')

btAddMist.addEventListener("click", ()=>{
    let input = document.createElement("input");
    input.setAttribute("class", "dados-mistura");
    input.setAttribute("placeholder", "Insira a mistura");
    parteMist.appendChild(input);
})
btAddAcomp.addEventListener("click", ()=>{
    let input = document.createElement("input");
    input.setAttribute("class", "dados-acomp");
    input.setAttribute("placeholder", "Insira o acompanhamento");
    parteAcomp.appendChild(input);
})

function converter(){
    misturas =[]
    acomps =[]
    secaoAcomps.innerHTML=''
    secaoMisturas.innerHTML=''

    divAlvo.style.display = 'block';
    misturas = [...document.getElementsByClassName('dados-mistura')]
    
    misturas.map((misturinha, indiceM)=>{
        
        let paragrafo = document.createElement("div")

        let texto = misturinha.value.replace(/(\*[^*]+\*)/g, match => {
            const text = match.slice(1, -1);
            return `<strong>${text}</strong>`;
        });
        paragrafo.innerHTML =  ` <div> ${texto}</div>`
        paragrafo.setAttribute('class', 'itens')
        if(indiceM%2!=0){
            paragrafo.setAttribute('class','fundoB itens')
        }
        secaoMisturas.appendChild(paragrafo)
    })
    acomps = [...document.getElementsByClassName('dados-acomp')]
    acomps.map((acompinho, indiceA)=>{
        console.log(acompinho.value)
        let paragrafo2 = document.createElement("p")
        let texto = acompinho.value.replace(/(\*[^*]+\*)/g, match => {
            const text = match.slice(1, -1);
            return `<strong>${text}</strong>`;
        });
        paragrafo2.innerHTML =  ` <div> ${texto}</div>`
        paragrafo2.setAttribute('class', 'itens')
        if(indiceA%2!=0){
            paragrafo2.setAttribute('class','fundoB itens')
        }
        secaoAcomps.appendChild(paragrafo2)
    })
    
    document.fonts.ready.then(function(){

        html2canvas((divAlvo), {
            scale: 2, // Aumenta a escala para melhorar a qualidade
             useCORS: true // Garante que imagens externas sejam carregadas
         }).then(function(canvas) {
       let link = document.createElement("a");
       link.download = 'cardapio.png';
       link.href = canvas.toDataURL("image/png");
       link.click();
   });
        
    })
  
}
botaoDownload.addEventListener("click", converter)
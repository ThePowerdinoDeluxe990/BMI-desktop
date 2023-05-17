export {};
let button:HTMLElement = document.querySelector("#calcular")!

let peso:HTMLInputElement = document.querySelector("#peso")!
let altura:HTMLInputElement = document.querySelector("#altura")!
let result:HTMLElement = document.querySelector("#result")!
let info:HTMLElement = document.querySelector("#info")!

function color(){
    info.style.color= "red"
}
function orange(){
    info.style.color="coral"
}

button.onclick= function(){
    let pesovalue:number = parseFloat(peso.value)
let alturavalue:number = parseFloat(altura.value)
    let maca = (pesovalue/(alturavalue*alturavalue))*10000
    let macaza = maca.toFixed(1)
    result.textContent= macaza.toString()

    if(maca <18.5){
        console.log("pesas poco")
        color()
        info.textContent="pesas poco"
    }else if(maca>=30){
        color()
        info.textContent="tienes sobrepeso"
        
       
    }else if(maca>=25){
        orange()
        info.textContent="pesas un poco mas de lo normal"
        
    }else if(maca<=25){
        color()
        info.textContent="estas bien"
    }
}
//todo el calculo y sus variables

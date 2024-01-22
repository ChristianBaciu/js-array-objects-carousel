const arrowrightHtml = document.querySelector(".fa-chevron-right") // freccia sinistra 
const arrowleftHtml = document.querySelector(".fa-chevron-left") // freccia destra 

// prende nel figure le immagini
const figureHtml = document.querySelector("figure")

// immagini inserite nella pagina
const images = [
    'img carosello/Fast 1.jpg', // n0 della foto js
    'img carosello/Fast 2.jpg', // n1 della foto js
    'img carosello/Fast 3.jpg', // n2 della foto js
    'img carosello/Fast 4.jpg', // n3 della foto js
    'img carosello/Fast 5.jpg'  // n4 della foto js
]

//Creare i tag img dentro figure
for(let i = 0; i < images.length; i++){
    if(i === 0){
        figureHtml.innerHTML +=`
            <img class="active" src="${images[i]}">
        `
    }else{
        figureHtml.innerHTML +=`
            <img src="${images[i]}">
        `
    }
}

let immagineScorrevole = 0

// al click della freccia sinistra passiamo alla foto di sinistra
arrowleftHtml.addEventListener("click", function(){
    
    let arrayImmagini = document.querySelectorAll("figure img")
        
    // per non generale altre immagini
    arrayImmagini[immagineScorrevole].classList.remove("active")

    if(immagineScorrevole == 0){
        immagineScorrevole = arrayImmagini.length - 1
    }else{
        immagineScorrevole--
    }

    arrayImmagini[immagineScorrevole].classList.add("active")

})

// al click della freccia destra passiamo alla foto di destra
arrowrightHtml.addEventListener("click", function(){

    let arrayImmagini = document.querySelectorAll("figure img")
        
    // per non generale altre immagini
    arrayImmagini[immagineScorrevole].classList.remove("active")

    if(immagineScorrevole == arrayImmagini.length - 1){
        immagineScorrevole = 0
    }else {
        immagineScorrevole++
    }

    arrayImmagini[immagineScorrevole].classList.add("active")

})

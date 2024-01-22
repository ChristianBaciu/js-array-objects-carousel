const arrowRightHtml = document.querySelector(".fa-chevron-right") // freccia sinistra 
const arrowLeftHtml = document.querySelector(".fa-chevron-left") // freccia destra 

// prende nel (carosello figure) le immagini
const figureHtml = document.querySelector("figure")

// immagini inserite nella pagina
const images = [
    'img carosello/Fast 1.jpg', // n0 per array
    'img carosello/Fast 2.jpg', // n1 per array
    'img carosello/Fast 3.jpg', // n2 per array
    'img carosello/Fast 4.jpg'  // n3 per array
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

function slideLeft() {
    
    let arrayImmagini = document.querySelectorAll("figure img")
        
    // per non generale altre immagini
    arrayImmagini[immagineScorrevole].classList.remove("active")

    if(immagineScorrevole == 0){
        immagineScorrevole = arrayImmagini.length - 1
    }else{
        immagineScorrevole--
    }

    arrayImmagini[immagineScorrevole].classList.add("active")
    
    // mette nella console l'immagine
    // console.log(arrayImmagini[immagineScorrevole])
}

// al click della freccia destra passiamo alla foto di destra
function slideRight() {

    // con il querySelectorAll prendiamo tutte le foto dal figure img
    let arrayImmagini = document.querySelectorAll("figure img")
        
    // per non generale altre immagini
    arrayImmagini[immagineScorrevole].classList.remove("active")

    if(immagineScorrevole == arrayImmagini.length - 1){
        // una volta terminato il ciclo torna all'immagine iniziale
        immagineScorrevole = 0
    }else {
        immagineScorrevole++
    }

    arrayImmagini[immagineScorrevole].classList.add("active")
    
    // mette nella console l'immagine
    // console.log(arrayImmagini[immagineScorrevole])
}

// al click della freccia sinistra passiamo alla foto di sinistra
arrowLeftHtml.addEventListener("click", function(){

    autoplay = false
    slideLeft()
    setTimeout(function(){

        autoplay = true // dopo 5 sec dal click le immagini cambieranno dopo ogni 3 sec
    }, 5000);
})

// al click della freccia destra passiamo alla foto di destra
arrowRightHtml.addEventListener("click", function(){

    autoplay = false
    slideRight()
    setTimeout(function(){

        autoplay = true // dopo 5 sec dal click le immagini cambieranno dopo ogni 3 sec
    }, 5000)
})


function animationImg(){
    
    setInterval(function(){
        if (autoplay) {
            slideRight()
        }
    }, 3000) // cambia ogni 3 secondi l'immagine
}

// Avvia la slideshow automatica
animationImg();
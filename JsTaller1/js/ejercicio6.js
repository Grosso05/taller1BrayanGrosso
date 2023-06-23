//Acceder al boton
let btnModal=document.getElementById("btncalACirculo");

//Aceder a la ventana modal
let ventanaModal=document.getElementById("ventanaModal");

//Aceder al boton de cierre de la ventana modal
let cerModal=document.querySelector(".cerrarModal");

let mensaje=document.getElementById("resultACirculo")

//Abrir la ventana Modal
btnModal.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModal.style.display="block";

        let btnACirculo=document.getElementById("btnACirculo")
    btnACirculo.addEventListener("click", (e)=>{
        let radio=parseFloat(document.getElementById("ACirculo").value)

        e.preventDefault();
        let pi=3.14159
        let resultAC=pi*(radio*radio)

        let resultACirculo=document.getElementById("resultACirculo")
        resultACirculo.textContent="El area del circulo es "+resultAC
        mensaje.style.display = "block";
    })

})

//Cerrar la ventana Modal
cerModal.addEventListener("click", ()=>{
    ventanaModal.style.display="none";
    mensaje.style.display = "none";
})


//Acceder al boton
let btnModalCP=document.getElementById("btncalPCirculo");

//Aceder a la ventana modal
let ventanaModalCP=document.getElementById("ventanaModalCP");

//Aceder al boton de cierre de la ventana modal
let cerModalCP=document.querySelector(".cerrarModalCP");


let mensaje2=document.getElementById("resultPCirculo")


btnModalCP.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModalCP.style.display="block";
    let btnPCirculo=document.getElementById("btnPCirculo")

    btnPCirculo.addEventListener("click", (e)=>{
        e.preventDefault();
    let radio=parseFloat(document.getElementById("PCirculo").value)
    let pi=3.14159
    let resultPC=2*pi*radio
    mensaje2.textContent="El perimetro del circulo es "+resultPC
    mensaje2.style.display = "block";
})
})

cerModalCP.addEventListener("click", ()=>{
    ventanaModalCP.style.display="none";
    mensaje2.style.display = "none";
})



//Acceder al boton
let btnModalTA=document.getElementById("btncalATrian");

//Aceder a la ventana modal
let ventanaModalTA=document.getElementById("ventanaModalTA");

//Aceder al boton de cierre de la ventana modal
let cerModalTA=document.querySelector(".cerrarModalTA");


let mensaje3=document.getElementById("resultATriangulo")


btnModalTA.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModalTA.style.display="block";
    let btnATriangulo=document.getElementById("btnATriangulo")

    btnATriangulo.addEventListener("click", (e)=>{
        e.preventDefault();
    let altura=parseFloat(document.getElementById("ATriangulo").value)
    let base=parseFloat(document.getElementById("BTriangulo").value)

    let resultAT=(base*altura)/2
    mensaje3.textContent="El area del traingulo es "+resultAT
    mensaje3.style.display = "block";
})
})

cerModalTA.addEventListener("click", ()=>{
    ventanaModalTA.style.display="none";
    mensaje3.style.display = "none";
})


//Acceder al boton
let btncalPTrian=document.getElementById("btncalPTrian");

//Aceder a la ventana modal
let ventanaModalTP=document.getElementById("ventanaModalTP");

//Aceder al boton de cierre de la ventana modal
let cerrarModalTP=document.querySelector(".cerrarModalTP");


let mensaje4=document.getElementById("resultPTriangulo")


btncalPTrian.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModalTP.style.display="block";
    let btnPTriangulo=document.getElementById("btnPTriangulo")

    btnPTriangulo.addEventListener("click", (e)=>{
        e.preventDefault();
    let lado1=parseFloat(document.getElementById("lado1").value)
    let lado2=parseFloat(document.getElementById("lado2").value)
    let lado3=parseFloat(document.getElementById("lado3").value)

    let resultPT=lado1+lado2+lado3
    mensaje4.textContent="El perimetro del traingulo es "+resultPT
    mensaje4.style.display = "block";
})
})

cerrarModalTP.addEventListener("click", ()=>{
    ventanaModalTP.style.display="none";
    mensaje4.style.display = "none";
})


//Acceder al boton
let btncalARectan=document.getElementById("btncalARectan");

//Aceder a la ventana modal
let ventanaModalRA=document.getElementById("ventanaModalRA");

//Aceder al boton de cierre de la ventana modal
let cerrarModalRA=document.querySelector(".cerrarModalRA");


let mensaje5=document.getElementById("resultARectangulo")


btncalARectan.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModalRA.style.display="block";
    let btnARectangulo=document.getElementById("btnARectangulo")

    btnARectangulo.addEventListener("click", (e)=>{
        e.preventDefault();
    let alturaR=parseFloat(document.getElementById("alturaR").value)
    let baseR=parseFloat(document.getElementById("baseR").value)


    let resultRA=alturaR*baseR
    mensaje5.textContent="El perimetro del traingulo es "+resultRA
    mensaje5.style.display = "block";
})
})

cerrarModalRA.addEventListener("click", ()=>{
    ventanaModalRA.style.display="none";
    mensaje5.style.display = "none";
})


//Acceder al boton
let btncalPRectan=document.getElementById("btncalPRectan");

//Aceder a la ventana modal
let ventanaModalRP=document.getElementById("ventanaModalRP");

//Aceder al boton de cierre de la ventana modal
let cerrarModalRP=document.querySelector(".cerrarModalRP");


let mensaje6=document.getElementById("resultPRectangulo")


btncalPRectan.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModalRP.style.display="block";
    let btnPRectangulo=document.getElementById("btnPRectangulo")

    btnPRectangulo.addEventListener("click", (e)=>{
        e.preventDefault();
    let lado1R=parseFloat(document.getElementById("lado1R").value)
    let lado2R=parseFloat(document.getElementById("lado2R").value)


    let resultRP=2*(lado1R+lado2R)
    mensaje6.textContent="El perimetro del traingulo es "+resultRP
    mensaje6.style.display = "block";
})
})

cerrarModalRP.addEventListener("click", ()=>{
    ventanaModalRP.style.display="none";
    mensaje6.style.display = "none";
})


//Acceder al boton
let btncalACuadrado=document.getElementById("btncalACuadrado");

//Aceder a la ventana modal
let ventanaModalCuA=document.getElementById("ventanaModalCuA");

//Aceder al boton de cierre de la ventana modal
let cerrarModalCuA=document.querySelector(".cerrarModalCuA");


let mensaje7=document.getElementById("resultACuadrado")


btncalACuadrado.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModalCuA.style.display="block";
    let btnACuadrado=document.getElementById("btnACuadrado")

    btnACuadrado.addEventListener("click", (e)=>{
        e.preventDefault();
    let lado=parseFloat(document.getElementById("ladoCu").value)

    let resultCuA=lado*lado
    mensaje7.textContent="El perimetro del traingulo es "+resultCuA
    mensaje7.style.display = "block";
})
})

cerrarModalCuA.addEventListener("click", ()=>{
    ventanaModalCuA.style.display="none";
    mensaje7.style.display = "none";
})



//Acceder al boton
let btncalPCuadrado=document.getElementById("btncalPCuadrado");

//Aceder a la ventana modal
let ventanaModalCuP=document.getElementById("ventanaModalCuP");

//Aceder al boton de cierre de la ventana modal
let cerrarModalCuP=document.querySelector(".cerrarModalCuP");


let mensaje8=document.getElementById("resultPCuadrado")


btncalPCuadrado.addEventListener("click", (e)=>{
    e.preventDefault();
    ventanaModalCuP.style.display="block";
    let btnPCuadrado=document.getElementById("btnPCuadrado")

    btnPCuadrado.addEventListener("click", (e)=>{
        e.preventDefault();
    let lado=parseFloat(document.getElementById("ladoCuP").value)

    let resultCuP=lado*4
    mensaje8.textContent="El perimetro del traingulo es "+resultCuP
    mensaje8.style.display = "block";
})
})

cerrarModalCuP.addEventListener("click", ()=>{
    ventanaModalCuP.style.display="none";
    mensaje8.style.display = "none";
})
function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos"){
        texto.innerHTML = "GEMÊOS";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="escorpiao"){
        texto.innerHTML = "ESCORPIÃO";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "PEIXES";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="aquario"){
        texto.innerHTML = "AQUÁRIO";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="leao"){
        texto.innerHTML = "LEÃO";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="capricornio"){
        texto.innerHTML = "CAPRICÓRNIO";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="libra"){
        texto.innerHTML = "LIBRA";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="touro"){
        texto.innerHTML = "TOURO";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="cancer"){
        texto.innerHTML = "CANCER";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="virgem"){
        texto.innerHTML = "VIRGEM";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="sagitario"){
        texto.innerHTML = "SAGITÁRIO";
        imagem.setAttribute("src","img/sargitario.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="aries"){
        texto.innerHTML = "ÁRIES";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
    }
    
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}
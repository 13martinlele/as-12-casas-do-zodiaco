function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h2");
    const texto3 = document.querySelector("h3");
    const texto4 = document.querySelector("h4");
    const texto5 = document.querySelector("h5");
    const texto6 = document.querySelector("h6");
    const texto7 = document.querySelector("h7");
    const texto8 = document.querySelector("h8");
    const texto9 = document.querySelector("h9");
    const texto10 = document.querySelector("h10");
    const texto11 = document.querySelector("h11");
    const texto12 = document.querySelector("h12");
    const texto13 = document.querySelector("h13");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const div =document.querySelector('.cavaleiro');
    
  if((valor=="Gêmeos") || (valor=="Gemeos") || (valor=="gêmeos") || (valor=="gemeos")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é SAGA, de GÊMEOS";
        texto2.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="Escorpião") || (valor=="Escorpiao") || (valor=="escorpião") || (valor=="escorpiao")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é MILO, de ESCORPIÃO";
        texto3.innerHTML = "Milo de Escorpião era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre, embora houvesse ocasiões em que ele se negaria a realizar missões específicas por questões de orgulho, sentimento este que determinava o rumo de suas conversas inicialmente, tendo se tornado consideravelmente mais humilde depois de sua batalha contra Hyoga de Cisne.";
        imagem.setAttribute("src","img/escorpiao.webp");
        imagem.setAttribute("width","300px");
    }
    
    else if((valor=="Peixes") || (valor=="peixes")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é AFRODITE, de PEIXES";
        texto4.innerHTML = "O protetor da última Casa do Zodíaco sendo o sucessor de Albafica de Peixes. Pode derrotar qualquer inimigo se estiver lutando com toda sua força. É um cavaleiro famoso não apenas por sua beleza, mas também pela sua reputação como um dos mais fortes entre os 88 cavaleiros.";
        imagem.setAttribute("src","img/peixes.webp");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="Aquário") || (valor=="Aquario") || (valor=="aquário") || (valor=="aquario")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é CAMUS, de AQUÁRIO";
        texto5.innerHTML = "Camus é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade. A Execução Aurora é o seu golpe secreto mais poderoso, que emite um frio próximo ao zero absoluto, e foi herdado por Hyoga.";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="Leão") || (valor=="Leao") || (valor=="leão") || (valor=="leao")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é AIOLIA, de LEÃO";
        texto6.innerHTML = "Apesar de sua personalidade explosiva,Aiolia tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze. ";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
    }

    else if((valor=="Capricórnio") || (valor=="Capricornio") || (valor=="capricórnio") || (valor=="capricornio")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é SHURA, de CAPRICÓRNIO";
        texto7.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="Libra") || (valor=="libra")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é DOHKO, de LIBRA";
        texto8.innerHTML = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
        imagem.setAttribute("src","img/libra.webp");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="Touro") || (valor=="touro")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é ALDEBARAN, de TOURO";
        texto9.innerHTML = "Aldebaran é o Cavaleiro de Ouro da Constelação de Touro, durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="Câncer") || (valor=="Cancer") || (valor=="câncer") || (valor=="cancer")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é MÁSCARA DA MORTE, de CANCER";
        texto10.innerHTML = "Máscara da Morte de Câncer é, provavelmente, um dos cavaleiros de ouro mais lembrados da Saga do Santuário de Cavaleiros do Zodíaco. Primeiro porque ele tem uma das lutas mais emblemáticas das 12 Casas, enfrentando Shiryu de Dragão. Segundo, porque ele era um cavaleiro de ouro que realmente agia como um vilão. E terceiro, porque ele sempre gritava “Ondas do Inferno” bem na hora que a sua mãe passava na sala.";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="Virgem") || (valor=="virgem")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é SHAKA, de VIRGEM";
        texto11.innerHTML = "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
        imagem.setAttribute("src","img/virgem.webp");
        imagem.setAttribute("width","300px");
    }
    else if((valor=="Sagitário") || (valor=="Sagitario") || (valor=="sagitário") || (valor=="sagitario")){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é AIOLOS, de SAGITÁRIO";
        texto12.innerHTML = "Invocando o poder da Constelação de Pégaso e concentrando seu cosmo em seu punho, Seiya pode dar mais de cem socos por segundo, até mesmo a longas distâncias, criando uma onda de cosmo que toma a forma de diversos meteoros.";
        imagem.setAttribute("src","img/sargitario.jpg");
        imagem.setAttribute("width","300px");
    }
   else if((valor=="Áries") || (valor=="Aries") || (valor=="aries") || (valor=="áries") ){
        div.innerHTML="";
        texto.innerHTML = "seu cavaleiro é MU, de ÁRIES";
        texto13.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco.";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");
    }
    
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}
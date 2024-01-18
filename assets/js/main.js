function container(){


    const form = document.querySelector('.form');

    function recebeEventoForm(e){
        e.preventDefault();
        let peso;
        let altura;
        let imc;
        imc = calculaImc(peso,altura,imc,e);
        comparaImc(imc.toFixed(1));



    }

    function setResultado(msg,imc){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        const p = criarParagrafo();
        /* p.classList.add('resultado');
        p.innerHTML = msg; */
        mudarClasseParagrafo(imc,p,msg);
        resultado.appendChild(p);
        
    }

    function criarParagrafo(){
        const p = document.createElement('p');
        return p;
    }

    function mudarClasseParagrafo(imc,p,msg){
        if(imc<=25){
            p.classList.add('resultado-bom');
            p.innerHTML = msg;
        }else if(imc>=30){
            p.classList.add('resultado-ruim');
            p.innerHTML = msg;
        }else{
            p.classList.add('resultado-medio');
            p.innerHTML = msg;
        }
    }

    function comparaImc(imc){
        if(imc<18.5){
            setResultado(`Seu imc é de ${imc}, você está abaixo do peso`,imc);
        }else if(imc>=18.5 && imc<=25){
            setResultado(`Seu imc é de ${imc}, você está dentro do peso normal`,imc);
        }else if(imc>25 && imc<=29.9){
            setResultado(`Seu imc é de ${imc}, você está com sobrepeso`,imc);
        }else if(imc>29.9 && imc<=34.9){
            setResultado(`Seu imc é de ${imc}, você está com obesidade grau 1`,imc);
        }else if(imc>34.9 && imc<=39.9){
            setResultado(`Seu imc é de ${imc}, você está com obesidade grau 2`,imc);
        }else{
            setResultado(`Seu imc é de ${imc}, você está com obesidade grau 3`,imc);
        }
    }

    function calculaImc(peso,altura,imc,e){
        form.addEventListener('submit',e.preventDefault);
        peso = Number(e.target.querySelector('#peso').value);
        altura = Number(e.target.querySelector('#altura').value);
        if(!peso){
            setResultado('Peso inválido', 100);
            return;
        }
        if(!altura){
            setResultado('Altura inválida', 100);
            return;
        }
        imc = peso/(altura**2);
        return Number(imc);
    }

    
    form.addEventListener('submit',recebeEventoForm);
}



container();
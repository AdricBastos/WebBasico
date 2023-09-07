function testefor() {
    
  const botao= document.querySelectorAll('button');
    for(var y= 0; y < botao.length ; y++) {
        let info = document.createElement('p');
        info.textContent = 'O Debito Técnico é um conceito relacionado com a falta de padronização em um código';
        document.body.appendChild(info);
    }

    }
    
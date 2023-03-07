const form =document.getElementById ('form-atividade');

let linhas='';

form.addEventListener ('submit', function (e){
    e.preventDefault();
    const inputNomecontato=document.getElementById('nome-do-contato');
    const inputNumerocontato=document.getElementById('numero-do-contato');
    

  
    let linha ='<tr>';
    linha += `<td>${inputNomecontato.value}</td>`;
    linha +=  `<td>${inputNumerocontato.value}</td>`;
   
    linha += '</tr>';
    
     linhas += linha;

    const corpotabela=document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
    
    
    

})


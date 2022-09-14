/*  ///////////////////  FUNÇÕES   ////////////////////  */
const aviso = (msg)=> {
    alert(msg)
}

const mostraIdade = () =>{
    let span = document.getElementById('txt-idade')
    let campoIdade = document.getElementById ('idade')
    span.innerText = campoIdade.value
}

var dataAtual = new Date
const mostraData = () =>{
  let dia = dataAtual.getDay()
  let mes = dataAtual.getMonth()+1
  let ano = dataAtual.getFullYear()
  let hora = dataAtual.getHours()
  let valor = dia + '/' + mes + '/' + ano + '-' + hora 

  document.getElementById('dt-cadastro').value = valor 

}

//preenche o select estado com os estados da api do ibge
const getEstados = ()=>{
  let api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  let select = document.getElementById('estado')

  // Le a api atraves do fetch(), 1then captura os dados, o 2 then trata os dados

    fetch(api).then(resposta => resposta.json()).then(json => {
      let options = '<option>Selecione</option>'
      
      select.innerHTML = options
    })


}



/* ---------------------------------------------------- */





/* //////////// EVENTOS E EXECUÇÕES AUTOMÁTICAS  /////////// */
getEstados()

mostraIdade()
document.getElementById('idade').addEventListener('change', mostraIdade)


mostraData()
// document.getElementById()


// aviso('Tenha um bom dia DAVE')

// document.getElementById('nome').addEventListener('click', function(){
//     aviso('ola mundo!!')
// }) 



//Inicializa animações scroll do AOS
AOS.init();


// Impede o envio do formulário quando os campos estão inválidos
( ()=> {
    'use strict'
  
    // Variavel captira a tags <form> que contem a classa "needs-validation"
    var forms = document.querySelectorAll('.needs-validation')
  
    // Executa para cada formulario da variavel forms
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          //se houver campos invalidos, interrompe o submite 
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
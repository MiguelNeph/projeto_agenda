const form = document.getElementById('form-contatos');
const nomes = [];
const telefones = [];

let linhas='';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const InputNomes = document.getElementById('nome-contato');
    const InputTelefones = document.getElementById('telefono-contato');

    if(nomes.includes(InputNomes.value)){
        alert(`O nome ${InputNomes.value} ja foi adicionado!`);
    } else if(telefones.includes(InputTelefones.value)){
        alert(`O telefone ${InputTelefones.value} ja foi adicionado!`);
    } else{
        nomes.push(InputNomes.value);
        telefones.push(InputTelefones.value);
        let linha= '<tr';
        linha += `<td> </td>`;
        linha += `<td>${InputNomes.value}</td>`;
        linha += `<td>${InputTelefones.value}</td>`;
        linha += '</tr>';
        linhas += linha;

    }
    InputNomes.value='';
    InputTelefones.value='';
}
function atualizaTabela (){
    const corpoTabela= document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
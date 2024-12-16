

const input = document.querySelector(id.CPF)

input.addEventListener('Keypres', () ==> {
    let inputlength = input.value.length 

    if (inputlength ==3 || inputlength === 7){
        input.value += '.'
    }else if (inputlength === 11){

    }
})


document.getElementById('CPF').addEventListener('input', function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                          .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                          .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
  });

  $('#phone_with_ddd').mask('(00) 0000-0000');
  $('.cep').mask('00000-000');
//For it //pegar botao //abre pop up
const openButtons = document.querySelectorAll('.open-modal');
//acionamento do botao
openButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        //endereco do botao
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId)       
        //mostrar Pop Up
        modal.showModal();
    });
});
//fecha pop up
const closeButtons = document.querySelectorAll('.close-modal');
//acionamento do botao
closeButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        //pega o Id do botao 
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        //oculta pop up
        modal.close();
    });
});



document.getElementById('CPF').addEventListener('input', function(e) {
    var value = e.target.value;
    var CPFPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                          .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                          .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = CPFPattern;
  });


  $('#phone_with_ddd').mask('(00) 0000-0000');

  $('.cep').mask('00000-000');
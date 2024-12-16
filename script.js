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


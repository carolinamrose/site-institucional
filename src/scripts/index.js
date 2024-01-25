function handleModalHeader(){
    const link = document.querySelector('.header__link');
    const modalController = document.querySelector('.modal');
    link.addEventListener('click', () =>{
        modalController.showModal();
    })   
}

function handleModal(){
    const buttonLink = document.querySelector('.faq__button');
    const modalController = document.querySelector('.modal');

    buttonLink.addEventListener('click', () =>{
        modalController.showModal();
    })   
}

function closeModal(){
    const closeButton = document.querySelector('.form__close');
    const modalController = document.querySelector('.modal');

    closeButton.addEventListener('click', function(){
        modalController.close();
    })
}

handleModalHeader();
handleModal();
closeModal();
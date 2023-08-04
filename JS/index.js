let string = '';
let buttons = document.querySelectorAll('.btn');
let phoneNumber = document.querySelector('.input');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (x)=>{
        x.stopPropagation();
        console.log(x.target);
        string += button.dataset.value;
        updatePhoneNumber();
    });
});

function updatePhoneNumber(){
    phoneNumber.value = string;
}


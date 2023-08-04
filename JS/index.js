let string = '';
let buttons = document.querySelectorAll('.btn');
let phoneNumber = document.querySelector('.input');
let clear = document.querySelector('.clearBtn')
let callButton = document.querySelector('.callBtn')

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (x)=>{
            x.stopPropagation();
            console.log(x.target);
            string += button.dataset.value;
            updatePhoneNumber();
    });
});

clear.addEventListener('click', function(){
    if(phoneNumber){
        string = string.substring(0, string.length-1);
        updatePhoneNumber();
    }
});
callButton.addEventListener('click', function(){
    if(phoneNumber){
        dialNumber(phoneNumber);
        phoneNumber = ''
        updatePhoneNumber();
    }
});

function dialNumber(phoneNumber) {
    console.log(`Dialing ${phoneNumber}`);
    addToCallHistory(phoneNumber, '0:30');
};

function addToCallHistory(number, duration) {
    const callHistoryList = document.createElement('ul');
    callHistoryList.classList.add('list-group');
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerText = `Number: ${number} - Duration: ${duration}`;
    callHistoryList.appendChild(listItem);
    const callHistoryContainer = document.querySelector('.container-fluid');
    callHistoryContainer.appendChild(callHistoryList);
  };
function updatePhoneNumber(){
    phoneNumber.value = string;
}


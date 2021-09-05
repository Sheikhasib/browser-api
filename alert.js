console.log('I am here');
// alert('He is in great danger!!!');

const ammuComing = () => {
    alert('Ammu is coming,Open the book.');
}

const askPicnic = () => {
    const response = confirm('Wanna go to picnic?');
    console.log(response);
    if(response === true){
        alert('Fee bkash kor.');
    }
    else{
        console.log('Duure giye mor!!');
    }
}

const askName = () => {
    const name = prompt('whats your name?');
    if(name){
        console.log(name);
    }
    
}
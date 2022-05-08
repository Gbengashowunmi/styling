const general = document.querySelector('.general-comment');
const ent = document.querySelector('.username-comment');
const entPass = document.querySelector('.password-comment');
const finalComment = document.querySelector('.final-comment');
const button = document.querySelector('.button');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const final = document.querySelector('.final-comment');


button.addEventListener('click', function(eh){
    eh.preventDefault();

    if (email.value === '' && password.value === '') {
        general.innerHTML = 'Fill required field';
        ent.innerHTML =''
        entPass.innerHTML = '';
        general.style.color = 'black';
    }

    else if (email.value === '' && password.value === password.value){
        ent.innerHTML = 'Username is required';
        entPass.innerHTML = '';
        general.innerHTML = '';
        ent.style.color = 'black';
    }

    else if (email.value === email.value &&password.value ===''){
        ent.innerHTML = '';
        general.innerHTML = '';
        entPass.innerHTML = 'Password is required';
        entPass.style.color = 'black';
        
    }
    else if (password.value.length < 6) {
        ent.innerHTML = '';
        general.innerHTML = '';
        entPass.innerHTML = 'password must be atleast 6 characters';
        entPass.style.color = 'black';
    }
    
    else{
        ent.innerHTML = '';
        general.innerHTML = '';
        entPass.innerHTML = '';
        final.style.color = 'blue';
        final.innerHTML= 'your name has entered the book of life. Fear no more' 
        }


})

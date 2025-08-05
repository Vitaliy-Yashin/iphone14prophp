let checkbox = document.querySelector('input[type=checkbox]');
console.log(checkbox);
let inputPass = document.querySelector('input[type=password]');
let nav = document.querySelector('.nav')

let FlagOfBtn = false
let menuButton = document.querySelector('.menu_btn');
let lines = document.querySelectorAll('.menu_btn-line');

let loginInput = document.getElementById("login");
let passInput = document.getElementById("password");
let phoneInput = document.getElementById("tel");


checkbox.addEventListener('click',()=>{
  if (checkbox.checked){
    inputPass.type = 'text';
  }
  else inputPass.type = 'password'; 
})

menuButton.addEventListener('click',()=>{
  nav.classList.toggle('menu_open')
})

const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
})


function login() {
  let login = loginInput.value;
  let pass = passInput.value;
  let method = 'login';

  if(phoneMask.masked.isComplete){

    

    const xhr = new XMLHttpRequest();
    var body = "login=" + encodeURIComponent(login) +
    "&pass=" + encodeURIComponent(pass) +
    "&phone=" + encodeURIComponent(phoneMask.unmaskedValue) +
    "&method=" + method;
    xhr.open("POST", './php/auth.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
            var data = (xhr.responseText);
            console.log(data);
      }
    }
  }else{

  }

  
}



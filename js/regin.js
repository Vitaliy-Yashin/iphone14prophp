let button = document.querySelector('button[type=submit]')
let inputs = document.querySelectorAll('input')
let inputLogin = inputs[0]
let inputPasword = inputs[1]
let inputTel = inputs[2]
let inputShowPass = document.querySelector('#showpass')
let TextShowPass = document.querySelector('label')
console.log(button)

const phoneMask = new IMask(inputTel, {
  mask: "+{7}(000)000-00-00",
})

inputs.forEach(input=>input.addEventListener('input', ()=>{
  if (inputLogin.value.length >= 4 && inputPasword.value.length >= 4 && phoneMask.unmaskedValue.length === 11){
    button.disabled = false
  }
  if (inputLogin.value.length < 4 || inputPasword.value.length < 4 || phoneMask.unmaskedValue.length !== 11){
    button.disabled = true
  }

}))
inputShowPass.addEventListener('click',()=>{
  if (inputShowPass.checked){
    inputPasword.type = 'text'
    TextShowPass.textContent = 'Скрыть пароль'
    return
  }
  inputPasword.type = 'password'
  TextShowPass.textContent = 'Показать пароль'
})

function reg() {
  let login = inputLogin.value;
  let pass = inputPasword.value;
  let method = 'reg';

  if(phoneMask.masked.isComplete)
  {
    const xhr = new XMLHttpRequest();
    var body = "login=" + encodeURIComponent(login) +
    "&pass=" + encodeURIComponent(pass) +
    "&phone=" + encodeURIComponent(phoneMask.unmaskedValue) +
    "&method=" + method;
    xhr.open("POST", './php/testcon.php', true);
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



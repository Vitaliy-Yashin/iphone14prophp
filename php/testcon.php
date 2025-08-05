<?php
// Настройки подключения к базе данных
$servername = "localhost"; // или IP-адрес вашего сервера
$username = "root"; // замените на ваше имя пользователя
$password = 'Par$HH1?!'; // замените на ваш пароль
$dbname = "iphone14"; // замените на имя вашей базы данных

$login = trim($_POST['login']);
$pass = trim($_POST['pass']);
$phone = trim($_POST['phone']);

// Создание подключения
$link = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($link->connect_error) {
    die("Ошибка подключения: " . $link->connect_error);
}
echo "Успешное подключение к базе данных!";


if($link->connect_error){
    die("Connection failed");
}else{
    mysqli_set_charset($link, "utf8");
    echo "$login $pass $phone";
}

if(trim($_POST['method']) == 'login'){
    Login($login, $pass, $phone, $link);
}

if(trim($_POST['method']) == 'reg'){
    Reg($login, $pass, $phone, $link);
}

function Login($login, $pass, $phone, $link){
    if($login == '' || $pass == '' || $phone == ''){
      $error = array();
      $error[0] = "500";
      die("Connection failed");
      return;
    }else{
      $query = mysqli_query($link,"SELECT id, login, password FROM users WHERE login='".mysqli_real_escape_string($link,$login)."' LIMIT 1");
      $data = mysqli_fetch_assoc($query);

      if($data['password'] == $pass){ 
        $error = array();
        $error[0] = "200";
        echo json_encode($error);
      }
    }
}

function Reg($login, $pass, $phone, $link){
    if($login == '' || $pass == '' || $phone == ''){
      $error = array();
      $error[0] = "500";
      echo "Здесь, где пустые поля <br>";
      echo "Логин: $login <br>";
      die("Connection failed");
      return;
    }else{
        $query = mysqli_query($link, "SELECT id FROM users WHERE login='".mysqli_real_escape_string($link, $login)."'");
        if(mysqli_num_rows($query))
        { 
           $error = array();
           $error[0] = "500";
           die("Connection failed");
           return;
        }

        mysqli_query($link,"INSERT INTO users SET login='".$login."', password='".$pass."', tel='".$phone."'");
        $error = array();
        $error[0] = "200";
        echo json_encode($error);
    }
}



// Закрытие соединения
$link->close();
?>
<?php
// Настройки подключения к базе данных
$servername = "localhost"; // или IP-адрес вашего сервера
$username = "root"; // замените на ваше имя пользователя
$password = 'Par$HH1?!'; // замените на ваш пароль
$dbname = "iphone14"; // замените на имя вашей базы данных

// Создание подключения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}
echo "Успешное подключение к базе данных!";

// Закрытие соединения
$conn->close();
?>
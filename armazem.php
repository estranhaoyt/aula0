<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $trackingNumber = $_POST["trackingNumber"];
  $recipientName = $_POST["recipientName"];
  $address = $_POST["address"];
  $packageState = $_POST["packageState"];
  
  // Perform database operations or other processing here
  
  // Example: Display success message
  echo "Package added successfully! Package state: " . $packageState;
}
?>

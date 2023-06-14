function validateForm() {
  var trackingNumber = document.getElementById("trackingNumber").value;
  var recipientName = document.getElementById("recipientName").value;
  var address = document.getElementById("address").value;
  var packageState = document.getElementById("packageState").value;
  
  if (trackingNumber === "" || recipientName === "" || address === "" || packageState === "") {
    alert("Please fill in all fields.");
    return false;
  }
  
  // Additional validation logic if needed
  
  return true;
}
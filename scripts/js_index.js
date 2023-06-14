function handleKeyDown(event) {
    if (event.keyCode === 13) { 
      event.preventDefault(); 
      var input = document.getElementById("tracktext");
      var text = input.value;
      var lowercaseRegex = /[a-z]/;
      var hasLowercase = lowercaseRegex.test(text);
      if (hasLowercase) {
        alert("O ID de rastreio nao tem letras maisculas, corrija-o");
      } else {
        input.value = "";
        window.location.href = "./TrackingPage.html"; 
    }
    }
  }

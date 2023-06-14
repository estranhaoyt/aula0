function validateEmail(email) {
    const emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailcheck.test(email);
  }

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value;
    const password = passwordInput.value;
 
    if (!validateEmail(email)) {
 
      alert('Formato de Email invalido');
      return;
    }
  
    window.location.href = "./ArmazemPage.html";

    emailInput.value = '';
    passwordInput.value = '';
  });
  document.getElementById('mostrarpassword').addEventListener('change', function() {
    var passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password';
  });

  const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email-su');
  const passwordInput = document.getElementById('password-su');
  const usageSelect = document.querySelector('.escolha');

  const email = emailInput.value;
  const password = passwordInput.value;
  const usage = usageSelect.value;

  if (!validateEmail(email)) {
    alert('Formato de Email invalido');
    return;
  }
  if (usageSelect.value == 'empty') {
    event.preventDefault();
    alert("Selecione um dos usos")
} else {
    window.location.href = './index.html';
    alert('Conta criada com sucesso');
  
    emailInput.value = '';
    passwordInput.value = '';
    usageSelect.value = 'empty';
}
});
document.getElementById('mostrarpassword-su').addEventListener('change', function() {
    var passwordInput = document.getElementById('password-su');
    passwordInput.type = this.checked ? 'text' : 'password';
  });
  
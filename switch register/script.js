// Switch between Login and Register tabs
document.getElementById('loginTab').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
  });
  
  document.getElementById('registerTab').addEventListener('click', function() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
  });
  
  // Switch between Student and Parent registration forms
  const roleRadios = document.querySelectorAll('input[name="role"]');
  roleRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === 'student') {
        document.getElementById('studentFields').style.display = 'block';
        document.getElementById('parentFields').style.display = 'none';
      } else {
        document.getElementById('studentFields').style.display = 'none';
        document.getElementById('parentFields').style.display = 'block';
      }
    });
  });
  
import React from 'react';

const Register = () => {
  return (
    <div class='register'>
      <div class='register-wrapper'>
        <div class='top'>
          <i class='fas fa-user-plus'></i>
          <span>Register</span>
        </div>
        <div class='bottom'>
          <ul>
            <li>Kayıt bilgileriniz için öncelikle ücret onayı alınmalıdır</li>
            <li>
              Ücret onaylandıktan sonra kullanıcı adı ve şifreniz size iletilir
            </li>
            <li>
              Kayıt ve ya giriş hakkında sorularınız varsa, bizle iletişime
              geçiniz
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;

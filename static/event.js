const validator = new JustValidate('#register-form');

validator
  .addField('#register-user-name', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#reigster-email', [
    {
      rule: 'required',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#register-psw', [
    {
      rule: 'required',
    },
    {
      rule: 'password',
    },
  ])

"use strict"

const userFormObject = new UserForm();

userFormObject.loginFormCallback = (data) => { 
  ApiConnector.login(data, response => {


    if(response.success === true) {
      location.reload(); 
    } else {
      setLoginErrorMessage(message); 
    };
  });
};

// Регистрация пользователя


userFormObject.registerFormCallback = (data) => {

  ApiConnector.register(data, response => {

    if (response.success === true) {
      location.reload(); 

    } else {
      userFormObject.setregisterErrorMessage(response.error);  
    };
  });
};
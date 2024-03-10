export const isAuthenticated = () => {
  // It will be changed to
  return sessionStorage.getItem("accessToken");
};

export const ValidateEmail = (e) => {
  let email = e;
  if (email.indexOf("@") > -1) {
    let emailSplit = email.split("@");
    let domainExtension = emailSplit[1];
    let domainExtensionSplit = domainExtension.split(".");
    if (
      e.indexOf(".") > -1 &&
      e.indexOf("@") > -1 &&
      emailSplit[0] != "" &&
      domainExtensionSplit[0] != "" &&
      domainExtensionSplit[1] != ""
    ) {
      return true;
    }
  }
  return false;
};

export const ValidatePassword = (password) => {
  let password_status = false;
  let password_status1 = false;
  let password_status2 = false;
  let password_status3 = false;
  let password_status4 = false;

  function upperCasePassword(password) {
    let symbols = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    for (let i = 0; i < password.length; i++) {
      let current_character = password.charAt(i);
      for (let j = 0; j < symbols.length; j++) {
        if (
          password.indexOf(current_character) === password.indexOf(symbols[j])
        ) {
          password_status1 = true;
        }
      }
    }
  }

  function oneNumberPassword(password) {
    let symbols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < password.length; i++) {
      let current_character = password.charAt(i);
      for (let j = 0; j < symbols.length; j++) {
        if (
          password.indexOf(current_character) === password.indexOf(symbols[j])
        ) {
          password_status3 = true;
        }
      }
    }
  }

  function numberOfCharactersPassword(password) {
    if (password.length >= 8) {
      password_status4 = true;
    }
  }

  function passwordStatusEdit() {
    if (password_status1) {
      if (password_status3) {
        if (password_status4) {
          password_status = true;
        } else {
          password_status = false;
        }
      } else {
        password_status = false;
      }
    } else {
      password_status = false;
    }
  }
  upperCasePassword(password);
  oneNumberPassword(password);
  numberOfCharactersPassword(password);
  passwordStatusEdit();
  return password_status;
};

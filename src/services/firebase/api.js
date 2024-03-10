import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "react-router-dom";

export const RegisterUser = async ({ email, password }) => {
  const auth = getAuth();
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    let userSession = {
      user: response.user.reloadUserInfo,
      accessToken: response.user.accessToken,
    };
    sessionStorage.setItem("userSession", userSession);
    return userSession;
  } catch (error) {
    alert("Failed to register user." + error.message);
    console.error("Failed to register user." + error.message);
    return error;
  }
};

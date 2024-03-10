import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./index";
import { redirect } from "react-router-dom";

export const RegisterUser = async ({ email, password }) => {
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

export const LoginUser = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    let userSession = {
      user: response.user.reloadUserInfo,
      accessToken: response.user.accessToken,
    };
    sessionStorage.setItem("userSession", userSession);
    return userSession;
  } catch (error) {
    alert("Failed to login." + error.message);
    console.error("Failed to login." + error.message);
    return error;
  }
};

export const LogoutUser = async () => {
  try {
    const response = signOut(auth);
    sessionStorage.removeItem("userSession");
    alert('Logged out successfully!');
    redirect('/');
  } catch (error) {
    alert("Failed to log out." + error.message);
    console.error("Failed to log out." + error.message);
    return error;
  }
};

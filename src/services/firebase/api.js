import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, query, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "./index";
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
    sessionStorage.setItem("accessToken", response.user.accessToken);
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
    sessionStorage.setItem("accessToken", response.user.accessToken);
    redirect("/dashboard");
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
    alert("Logged out successfully!");
    redirect("/");
  } catch (error) {
    alert("Failed to log out." + error.message);
    console.error("Failed to log out." + error.message);
    return error;
  }
};

export const addElementToDB = async (collectionName, collectionID, collectionData) => {
  await setDoc(doc(db, collectionName, collectionID), collectionData);
}

export const getCollectionData = async (collectionName, storageList) => {
  const collectionRequest = await getDocs(collection(db, collectionName));
  collectionRequest.forEach(doc => storageList.push(doc.data()))
  return storageList;
}
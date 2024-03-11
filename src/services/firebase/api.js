import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { doc, query, where, setDoc } from "firebase/firestore";
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

export const addElementToDB = async (
  collectionName,
  collectionID,
  collectionData
) => {
  await setDoc(doc(db, collectionName, collectionID), collectionData);
};

export const getSingleClub = async (collectionID) => {
  try {
    const docRef = doc(db, "clubs", collectionID);
    const collectionRequest = await getDoc(docRef);

    if (!collectionRequest.exists()) return null;
    let clubs = collectionRequest.data();
    if (clubs.videojuegos) {
      let _videojuegos = clubs.videojuegos
        .map(async (_videojuego) => getSingleVideogame(_videojuego.id))
        .filter(async (item) => await item !== null);
      clubs['videojuegos'] = await Promise.all(_videojuegos);
    }
    return clubs;
  } catch (e) {
    console.log("Error getting document:", e);
  }
};

export const getSingleVideogame = async (collectionID) => {
  try {
    const docRef = doc(db, "videojuegos", collectionID);
    const collectionRequest = await getDoc(docRef);
    if (collectionRequest) return collectionRequest.data();
  } catch (e) {
    console.log("Error getting document:", e);
  }
};

export const getClubs = async () => {
  try {
    const collectionRequest = await getDocs(collection(db, "clubs"));
    const clubs = collectionRequest.docs.map((item) => {
      return {
        id: item.id,
        ...item.data(),
      };
    });
    return clubs;
  } catch (e) {
    console.log("Error getting document:", e);
  }
};

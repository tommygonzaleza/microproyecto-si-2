import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  collection,
  getDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { auth, db, provider } from "./index";

export const RegisterUser = async (userData) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    let userSession = {
      user: response.user.reloadUserInfo,
      accessToken: response.user.accessToken,
    };
    sessionStorage.setItem("accessToken", response.user.accessToken);
    sessionStorage.setItem("uid", response.user.uid);
    await CreateUserProfile({ ...userData, uid: response.user.uid });
    return userSession;
  } catch (error) {
    alert("Failed to register user." + error.message);
    console.error("Failed to register user." + error.message);
    return error;
  }
};

export const CreateUserProfile = async (userProfile) => {
  try {
    delete userProfile["password"];
    userProfile.membresias = [""];
    const docRef = doc(db, "users", userProfile.uid);
    await setDoc(docRef, userProfile);
  } catch (e) {
    console.error("Failed to create user profile." + e.message);
  }
};

export const UpdateUserProfile = async (userProfile, uid) => {
  try {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, userProfile);
    alert("Información del usuario actualizada!");
  } catch (e) {
    console.error("Failed to update user profile." + e.message);
  }
};

export const JoinClub = async (club, uid) => {
  try {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      membresias: arrayUnion(club.id),
    });
    alert(`Te has unido al club ${club.nombre}`);
  } catch (e) {
    console.error("Failed to join club." + e.message);
  }
};

export const LeaveClub = async (club, uid) => {
  try {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      membresias: arrayRemove(club.id),
    });
    alert(`Has abandonado el club ${club.nombre}`);
  } catch (e) {
    console.error("Failed to leave club." + e.message);
  }
};

export const getUserProfile = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const collectionRequest = await getDoc(docRef);
    return collectionRequest.data();
  } catch (e) {
    console.log("Error getting document:", e);
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
    sessionStorage.setItem("uid", response.user.uid);
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
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("joinedClubs");
    sessionStorage.removeItem("accessToken");
    alert("Logged out successfully!");
  } catch (error) {
    alert("Failed to log out." + error.message);
    console.error("Failed to log out." + error.message);
    return error;
  }
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
        .filter(async (item) => (await item) !== null);
      clubs["videojuegos"] = await Promise.all(_videojuegos);
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

export const getVideogames = async () => {
  try {
    const collectionRequest = await getDocs(collection(db, "videojuegos"));
    const videogames = collectionRequest.docs.map((item) => {
      return {
        id: item.id,
        ...item.data(),
      };
    });
    return videogames;
  } catch (e) {
    console.log("Error getting document:", e);
  }
};

export const SignInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    let userSession = {
      user,
      accessToken: token,
    };
    sessionStorage.setItem("accessToken", token);
    sessionStorage.setItem("uid", user.uid);
    return userSession;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Failed to login with google." + errorMessage);
  }
};

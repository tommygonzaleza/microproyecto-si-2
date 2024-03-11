import React, { useState, useEffect } from "react";
import Header from "../components/navigation/Header";
import ProfileCard from "../components/ProfileCard";
import { getUserProfile } from "../services/firebase/api";

export const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    uid: "",
    name: "",
    lastname: "",
    username: "",
    email: "",
    favoriteVideogame: "",
    membresias: [""],
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let uid = sessionStorage.getItem("uid");
    let userData = await getUserProfile(uid);
    setUserProfile(userData);
  };

  return (
    <section
      style={{
        backgroundColor: "#560000",
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2015/11/01/19/48/minecraft-1017472_1280.jpg)",
      }}
    >
      <Header />
      <section
        style={{
          marginTop: "5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <ProfileCard userProfile={userProfile} setUserProfile={setUserProfile} />
      </section>
    </section>
  );
};

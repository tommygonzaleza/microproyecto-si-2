import React from 'react';
import Header from '../components/navigation/Header';
import ProfileCard from '../components/ProfileCard';

export const Profile = () => {
    const user_profile = {nombre:"Carlos", apellido:"Bastidas",
        username:"CBastidas707", email:"c.bastidas@correo.unimet.edu.ve",
            videojuego_preferido:"3", membresias:['1','4']}
    return <section style={{
        backgroundColor:"#560000",
        backgroundImage:"url(https://cdn.pixabay.com/photo/2015/11/01/19/48/minecraft-1017472_1280.jpg)"
      }}>
    <Header></Header>
      <section style={{
        marginTop:"5rem",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '10px',
      }}>

     <ProfileCard props={user_profile}></ProfileCard>
      </section>
    
    </section>
}
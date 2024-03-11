import React from 'react';
import Header from '../components/navigation/Header';
import CardGame from '../components/CardGame';

export const Videogames = () => {
    const games = [
        {
          "ID": "1",
          "titulo": "The Witcher 3: Wild Hunt",
          "genero": "RPG",
          "descripcion": "Un épico juego de rol de mundo abierto con una trama envolvente y gráficos impresionantes."
        },
        {
          "ID": "3",
          "titulo": "The Legend of Zelda: Breath of the Wild",
          "genero": "Aventura",
          "descripcion": "Una aventura épica con un vasto mundo, rompecabezas desafiantes y una historia cautivadora."
        },
        {
          "ID": "10",
          "titulo": "Call of Duty: Warzone",
          "genero": "Battle Royale",
          "descripcion": "Un juego de disparos en línea con acción frenética y mapas enormes."
        },
        {
          "ID": "11",
          "titulo": "Assassin's Creed Valhalla",
          "genero": "Acción/Aventura",
          "descripcion": "Una aventura vikinga con combates, exploración y una historia intrigante."
        },
        {
          "ID": "12",
          "titulo": "Cyberpunk 2077",
          "genero": "RPG",
          "descripcion": "Un futuro distópico lleno de tecnología, crimen y decisiones morales."
        },
        {
          "ID": "13",
          "titulo": "Among Us",
          "genero": "Multijugador",
          "descripcion": "Un juego de engaño y deducción en el espacio con amigos o desconocidos."
        },
        {
          "ID": "14",
          "titulo": "Animal Crossing: New Horizons",
          "genero": "Simulación",
          "descripcion": "Una vida tranquila en una isla paradisíaca con actividades relajantes."
        },
        {
          "ID": "15",
          "titulo": "League of Legends",
          "genero": "MOBA",
          "descripcion": "Batallas estratégicas en línea con campeones y habilidades únicas."
        },
        {
          "ID": "16",
          "titulo": "Genshin Impact",
          "genero": "Acción/RPG",
          "descripcion": "Un mundo de fantasía con personajes elementales y una jugabilidad cautivadora."
        },
        {
          "ID": "17",
          "titulo": "Apex Legends",
          "genero": "Battle Royale",
          "descripcion": "Combates en equipo en un mundo futurista con héroes y habilidades únicas."
        },
        {
          "ID": "18",
          "titulo": "World of Warcraft",
          "genero": "MMORPG",
          "descripcion": "Un vasto mundo de fantasía con razas, clases y misiones épicas."
        },
        {
          "ID": "19",
          "titulo": "Control",
          "genero": "Acción/Aventura",
          "descripcion": "Explora una agencia secreta y descubre poderes sobrenaturales en este juego intrigante."
        },
        {
          "ID": "20",
          "titulo": "Hades",
          "genero": "Roguelike",
          "descripcion": "Embárcate en un viaje al inframundo y desafía a los dioses en este juego de acción y mitología."
        }
      ]

    return (<section style={{
      backgroundImage: "url(https://cdn.pixabay.com/photo/2019/04/12/08/44/pacman-4121590_1280.png)"
    }}>

    <Header></Header>
      <section style={{
        marginTop:"1rem",
        padding: "3rem",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '10px',
      }}>
      {games.map((game,index)=>(
      <CardGame
       key={game.nombre+index}
       props={game}/>
     ))
     }
      </section>
      </section>)
}
import React from "react";

export default function Card() {
  return (
    <section
      style={{
        backgroundColor: "#541d1d",
        width: "fit-content",
        borderRadius: "10px",
      }}
    >
      <section
        style={{
          display: "flex",
          gap: "1rem",
          padding: "10px",
          width: "fit-content",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.21)",
          borderRadius: "10px",
          boxShadow: "0 4px 30px rgba(122, 122, 122, 0.1)",
          backdropfilter: "blur(10.1px)",
          WebkitBackdropFilter: "blur(10.1px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <div
          style={{
            padding: "20px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h1>Titulo</h1>
          <p>Informacion club/videojuego/lo que sea</p>
        </div>
        <footer
          style={{
            backgroundColor: "grey",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            width: "-webkit-fill-available",
            color: "white",
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            gap: "1rem",
          }}
        >
          <h3>Elemento 1</h3>
          <h3>Elemento 2</h3>
          <h3>Elemento 3</h3>
        </footer>
      </section>
    </section>
  );
}

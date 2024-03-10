export default function CardGame(props) {
    return (
      <section
        style={{
          backgroundColor: "rgb(166 1 101 / 80%)",
          width: "fit-content",
          borderRadius: "10px",
        }}
      >
        <section
          style={{
            maxWidth:"25rem",
            display: "flex",
            gap: "1rem",
            padding: "10px",
            width: "fit-content",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // background: "rgba(255, 255, 255, 0.21)",
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
            <h1>{props.props.titulo}</h1>
            <p style={{
                padding:"5px 1rem" ,
                backgroundColor: "rgb(124, 124, 124)",
                borderRadius: "1rem",
                width: "fit-content",

            }}
            >{props.props.genero}</p>
          </div>
          <footer
            style={{
              backgroundColor: "#4f4f4fa8",
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
              <h3>{props.props.descripcion}</h3>
          </footer>
        </section>
      </section>
    );
  }
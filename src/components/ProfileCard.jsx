export default function ProfileCard(userProfile){
    return (
         <section style={{
                 display: "flex",
                 width:"80rem",
                 gap: "1rem",
                 padding: "10px",
                 flexDirection: "column",
                 alignItems: "center",
                 justifyContent: "center",
                 borderRadius: "10px",
                 boxShadow: "0 4px 30px rgba(122, 122, 122, 0.1)",
                 backdropfilter: "blur(10.1px)",
                 WebkitBackdropFilter: "blur(10.1px)",
                 border: "1px solid rgba(255, 255, 255, 0.3)",
                 color:"whitesmoke"
         }}>
             <img src="https://lh3.googleusercontent.com/a/ACg8ocK_xmUM3IXzPBco7kM1ve1RMtD9qNmGLWiwP7zEIhHmd6s=s360-c-no"
             className="img-fluid"></img>
         <div>
             <h1 >{userProfile.props.nombre}</h1>
             <h1 >{userProfile.props.apellido}</h1>
             </div>
         <footer style={{
                 backgroundColor: "#4f4f4fa8",
                 borderBottomLeftRadius: "10px",
                 borderBottomRightRadius: "10px",
                 width: "-webkit-fill-available",
                 color: "white",
                 display: "flex",
                 flexDirection: "row",
                 paddingTop: "1rem",
                 paddingBottom: "1rem",
                 gap: "1rem",
                 justifyContent:"space-between"
         }}>
         <div style={{
             display: "flex",
             flexDirection: "column",}}>
 
             <div>{userProfile.props.username}</div>
 
             <div>{userProfile.props.email}</div>
             </div>
             <div>
 
         {userProfile.props.membresias.map((membresia, index) => (
               <h3 key={index}>{membresia}</h3>
             ))}
             </div>
             </footer>
         </section>
       );
 }
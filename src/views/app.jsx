import '../styles/app.css';
import Tarjeta from '../components/Card';
import Header from '../components/navigation/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section style={{
        marginTop:"1rem",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      </section>
    </div>
  );
}

export default App;

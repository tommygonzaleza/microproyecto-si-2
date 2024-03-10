import '../styles/app.css';
import Card from '../components/Card';
import Header from '../components/navigation/Header';

export function Dashboard() {
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
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </section>
    </div>
  );
}
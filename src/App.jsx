import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer
        text='Bienvenido a Retro Futbol! Tu mejor pagina para comprar camisetas de tus equipos favoritos'
        backgroundColor='#rgb(7 13 126);'
        color='white'
        height='50px'
        padding='5px'
        margin='5px' />
    </>
  )
}

export default App

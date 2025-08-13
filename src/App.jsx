import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import PageTitle from './components/PageTitle';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <PageTitle />
      <ItemListContainer />
    </>
  )
}

export default App

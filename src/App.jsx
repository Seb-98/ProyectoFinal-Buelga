import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import PageTitle from './components/PageTitle';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-fill">
        <PageTitle />
        <ItemDetailContainer/>
        <ItemListContainer />
      </main>
      <Footer />
    </div>
  )
}

export default App

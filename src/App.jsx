import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import PageTitle from './components/PageTitle';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import NotFoundPage from './components/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <PageTitle />

        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

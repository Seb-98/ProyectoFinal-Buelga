import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import NotFoundPage from './components/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContainerPage from './components/ContainerPage';

function App() {

  return (
    <BrowserRouter>
      <ContainerPage>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ContainerPage>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './components/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContainerPage from './components/ContainerPage';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <ContainerPage>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categories/:category" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ContainerPage>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

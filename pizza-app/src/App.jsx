import './App.css';
import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { ModalChoicePizza } from './modal/ModalChoicePizza';
import { Basket } from './pages/Basket/Basket';
import { PATH } from './constant/constant';
import { Catalog } from './pages/Catalog/Catalog';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pizzaModalData, setPizzaModalData] = useState(null);
  const [basketData, setBasketData] = useState([]);
  
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path={PATH.catalog}
          element={
            <Catalog 
              setModalIsOpen={setModalIsOpen} 
              setPizzaModal={setPizzaModalData} 
            />
          }
        />
        <Route
          path={PATH.basket}
          element={
            <Basket 
              basketData={basketData} 
              setBasketData={setBasketData} 
            />
          }
        />
        <Route path={PATH.profile}/>
        <Route path={PATH.orders}/>
      </Routes>

      {modalIsOpen ? (<ModalChoicePizza
          isOpen={modalIsOpen}
          setOpen={setModalIsOpen}
          pizzaModalData={pizzaModalData}
          basketData={basketData}
          setBasketData={setBasketData}
        /> ) : ""
      }
    </Router>
  );
}

export default App;

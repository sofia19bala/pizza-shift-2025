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
  const [orderData, setOrderData] = useState({receiverAddress: {comment: " "}, person: {}, debitCard:{}, pizzas: []})

  const {catalog, basket, profile, orders} = PATH;
  
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path={catalog}
          element={
            <Catalog 
              setModalIsOpen={setModalIsOpen} 
              setPizzaModal={setPizzaModalData} 
            />
          }
        />
        <Route
          path={basket}
          element={
            <Basket 
              basketData={basketData} 
              setBasketData={setBasketData} 
              orderData={orderData}
              setOrderData={setOrderData}
            />
          }
        />
        <Route path={profile}/>
        <Route path={orders}/>
      </Routes>

      <ModalChoicePizza
        isOpen={modalIsOpen}
        setOpen={setModalIsOpen}
        pizzaModalData={pizzaModalData}
        basketData={basketData}
        setBasketData={setBasketData}
      />
    </Router>
  );
}

export default App;

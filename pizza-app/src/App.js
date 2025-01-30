import './App.css';
import React from 'react';
import { Catalog } from './pages/Catalog/Catalog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ModalChoicePizza } from './modal/ModalChoicePizza';
import { useState } from 'react';
// import { Basket } from './pages/Basket/Basket';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pizzaModal, setPizzaModal] = useState(null);
  // const [basketData, setBasketData] = useState([]);

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Catalog 
            setModalIsOpen={setModalIsOpen} 
            setPizzaModal={setPizzaModal} 
          />}
        ></Route>
        {/* <Route
          path="/basket"
          element={<Basket 
            // basketData={basketData} 
            // setBasketData={setBasketData} 
          />}
        ></Route> */}
      </Routes>

      <ModalChoicePizza
        isOpen={modalIsOpen}
        setOpen={setModalIsOpen}
        data={pizzaModal}
        // basketData={basketData}
        // setBasketData={setBasketData}
      />
    </Router>
  );
}

export default App;

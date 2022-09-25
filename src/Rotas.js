import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import AddCliente from './views/AddCliente';
import Home from './views/Home';

import EditarCliente from './views/EditarCliente';
import ViewCliente from './views/ViewCliente';

export default function Rotas() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/add" element={<AddCliente/>}/>
            <Route path="/edit/:id" element={<EditarCliente/>}/>
            <Route path="/view/:id" element={<ViewCliente/>}/>
            <Route path="*" element={<h1>Página não encontrada.</h1>}/>
        </Routes>
    </Router>
  )
}

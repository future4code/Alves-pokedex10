import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import DetailsPage from '../Pages/DetailsPage';
import Pokedex from '../Pages/Pokedex';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="pokedex" element={<Pokedex />} />
                    <Route path="detalhe" element={<DetailsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
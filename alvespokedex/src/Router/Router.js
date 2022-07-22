import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import DetailsPage from '../Pages/DetailsPage';
import Pokedex from '../Pages/Pokedex';
import Header from "../Components/Header/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index exact path="/" element={<Home />} />
                <Route path="*/detail" element={<DetailsPage />} />
                <Route path="/pokedex" element={<Pokedex />}/>
                <Route path="*"element={"Página não encontrada"}/>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default Router
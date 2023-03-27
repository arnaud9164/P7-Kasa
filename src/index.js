import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css'
import About from "./pages/about";
import Header from "./components/Header";
import Error from "./pages/Error";
import Home from "./pages/home";
import FicheLogement from "./pages/ficheLogement";
import Footer from "./components/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/FicheLogement/:id" element={<FicheLogement />} />
            <Route path="/error" element={<Error />} />
            <Route path="/*" element={<Error />} />
         </Routes>
         <Footer />
   </BrowserRouter>
);
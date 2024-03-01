import React from "react";
import "./App.css";
import Header from "./components/mainMenu/header";
import Login from "./components/mainMenu/login";
import Register from "./components/mainMenu/register";
import PageTitle from "./pageTitle";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./components/mainMenu/landingPage";

function App() {
  return (
    <>
      <Header /> 
      {/* Jika Header harus ada di semua halaman */}
      <Routes>
        <Route index element={
          <>
            <PageTitle title="FullStack React TypeScript - Golang" />
            <LandingPage />
            {/* Konten utama untuk halaman beranda, misalnya komponen beranda */}
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Tambahkan lebih banyak Route sesuai kebutuhan */}
      </Routes>
    </>
  );
}

export default App;

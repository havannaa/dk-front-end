import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderTop from "./components/headerTop/HeaderTop";
import Navbar from "./components/navbar/Navbar";
import NavBottom from "./components/navBottom/NavBottom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
		<HeaderTop />
		<Navbar />
		<NavBottom />
		<BrowserRouter>
			<Routes>
			  <Route path="/" element={<Home />} />
			</Routes>
	    </BrowserRouter>
		<Footer />
    </div>
  )
}

export default App

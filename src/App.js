import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import { ToastContainer } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Product";
// import Products from './pages/products';
// import AboutUs from './pages/AboutUs';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/about" element={<Home />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

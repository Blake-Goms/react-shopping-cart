import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { ProductContext } from './context/ProductContext'
import { CartContext } from './context/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }} >
				<CartContext.Provider value={{ cart, setCart }} >
				<Navigation />

				{/* Routes */}
				<Route
					exact
					path="/"
					component={ Products }
				/>

				<Route
					path="/cart"
					component={ ShoppingCart }
				/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
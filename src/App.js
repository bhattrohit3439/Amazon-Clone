import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Cart, Home, Footer } from './containers';
import { Login } from './components';
import { db, auth } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const App = () => {
	const [cartItems, setCartItems] = useState([]);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

	useEffect(() => {
		getCartItems();
	}, []);

	//get cart-items
	const getCartItems = async () => {
		onSnapshot(collection(db, 'cartitems'), (snapshot) => {
			const tempCartItems = snapshot.docs.map((doc) => ({
				itemId: doc.id,
				...doc.data(),
			}));
			setCartItems(tempCartItems);
		});
	};

	const signOut = async () => {
		try {
			await auth.signOut();
			localStorage.removeItem('user');
			setUser(null);
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	return (
		<Router>
			<div className='bg-[#e3e6e6]'>
				{!user ? (
					<Login setUser={setUser} />
				) : (
					<div>
						<Header user={user} signOut={signOut} cartItems={cartItems} />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cart' element={<Cart cartItems={cartItems} />} />
						</Routes>
						<Footer />
					</div>
				)}
			</div>
		</Router>
	);
};

export default App;

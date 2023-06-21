import React, { useContext, useState, useEffect } from 'react';
import { db, auth, provider } from './firebase';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

	useEffect(() => {
		const getCartItems = async () => {
			const cartQuery = query(collection(db, 'cartitems'), where('userId', '==', user.id));
			onSnapshot(cartQuery, (snapshot) => {
				const tempCartItems = snapshot.docs.map((doc) => ({
					itemId: doc.id,
					...doc.data(),
				}));
				setCartItems(tempCartItems);
			});
		};
		if (user !== null) {
			getCartItems();
		}
	}, [user]);

	//get cart-items

	const signIn = async () => {
		try {
			await signInWithPopup(auth, provider);
			const user = getAuth().currentUser;
			let newUser = {
				id: user.uid,
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			};

			// Access the user details
			localStorage.setItem('user', JSON.stringify(newUser));
			setUser(newUser);
		} catch (error) {
			console.error('Error signing in with Google:', error);
		}
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

	return <AppContext.Provider value={{ cartItems, user, setUser, signIn, signOut }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };

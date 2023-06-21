import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Checkout, Cart, Home, Footer } from './containers';
import { Login } from './components';
import { useGlobalContext } from './Context';

const App = () => {
	const { user, signOut } = useGlobalContext();
	return (
		<Router>
			<div className='bg-[#e3e6e6]'>
				{!user ? (
					<Login />
				) : (
					<div>
						<Header user={user} signOut={signOut} />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/checkout' element={<Checkout />} />
						</Routes>
						<Footer />
					</div>
				)}
			</div>
		</Router>
	);
};

export default App;

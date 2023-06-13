import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Banner, ProductFeed } from '../components';
import { db } from '../firebase';

const Home = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		getProductFromDb();
	}, []);

	const getProductFromDb = async () => {
		const tempProduct = [];
		const querySnapshot = await getDocs(collection(db, 'products'));
		querySnapshot.docs.forEach((doc) => {
			tempProduct.push({
				itemId: doc.id,
				...doc.data(),
			});
		});
		setProductList(tempProduct);
	};

	return (
		<div className='m-auto max-w-[1500px]'>
			<Banner />
			<ProductFeed products={productList} />
		</div>
	);
};

export default Home;

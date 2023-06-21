import { useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { HiOutlineCheck, HiStar } from 'react-icons/hi';
import { BiRupee } from 'react-icons/bi';
import { useGlobalContext } from '../Context';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
	const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
	const [hasPrime] = useState(Math.random() < 0.5);

	const { user } = useGlobalContext();

	const addToCart = async () => {
		const docRef = doc(db, 'cartitems', `${id}`);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			await updateDoc(docRef, {
				quantity: docSnap.data().quantity + 1,
			});
		} else {
			await setDoc(doc(db, 'cartitems', `${id}`), {
				title: title,
				description: description,
				image: image,
				price: price,
				quantity: 1,
				userId: user.id,
			});
		}
	};

	return (
		<div className='relative z-30 flex flex-col p-10 m-5 my-5 bg-white '>
			<p className='absolute italic text-gray-400 top-2 right-2'>{category}</p>

			<img className='object-contain m-auto h-44' alt={`${title}.jpg`} src={image} />

			<h4 className='my-3'>{title}</h4>

			<div className='flex'>
				{Array(rating)
					.fill()
					.map((_, i) => (
						<HiStar key={Math.random() * i} className='h-5 text-yellow-500' />
					))}
			</div>
			<p className='my-2 text-xs line-clamp-2'>{description}</p>

			<div className='flex items-center mb-5'>
				<BiRupee className='mt-0.5' />
				{price}
			</div>

			{hasPrime && (
				<div className='flex items-center space-x-2'>
					<HiOutlineCheck className='w-4 text-yellow-500' />
					<span className='pb-1 text-blue-600'>prime</span>
					<p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
				</div>
			)}

			<button
				type='button'
				className='w-full p-2 m-auto text-xs border border-yellow-300 rounded-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500'
				onClick={addToCart}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;

import { HiOutlineChevronDown } from 'react-icons/hi';
import { BiRupee } from 'react-icons/bi';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const CartItem = ({ cartItem }) => {
	const deleteCartItem = async () => {
		await deleteDoc(doc(db, 'cartitems', `${cartItem.itemId}`));
	};

	return (
		<div className='flex justify-between'>
			<div className='md:flex'>
				<img className='object-contain w-32 m-3 lg:w-44' src={cartItem.image} alt='item.png' />

				<div className='flex-grow my-3'>
					<h4 className='font-bold text-blue-600 lg:text-xl hover:underline'>{cartItem.title}</h4>

					<p className='my-2 text-xs line-clamp-2'>{cartItem.description}</p>

					<img
						src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png'
						alt='amazon-fulfilled.png'
					/>

					<div className='my-3'>
						<button
							type='button'
							className='inline-flex justify-center px-2 pt-1 pb-2 text-sm font-medium bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 ring-1 ring-gray-300 '
						>
							Qty:&nbsp;&nbsp;
							<span>{cartItem.quantity}</span>
							<HiOutlineChevronDown className='w-5 h-5 ml-1' aria-hidden='true' />
						</button>
						<button
							type='button'
							className='px-4 ml-4 border-l-2 border-[#ddd] border-solid text-xs font-semibold text-blue-600 hover:underline'
							onClick={deleteCartItem}
						>
							Delete
						</button>
					</div>
				</div>
			</div>

			<div className='flex my-3 text-xl font-bold'>
				<BiRupee className='mt-0.5' />
				{cartItem.price}
			</div>
		</div>
	);
};

export default CartItem;

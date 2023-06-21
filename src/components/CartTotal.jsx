import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CartTotal = ({ cartItems }) => {
	return (
		<div className='p-8 mt-8 bg-white lg:mt-0 lg:ml-5 min-w-fit h-fit'>
			<p className='text-[#067d62] text-xs '>Your order is eligible for FREE Delivery.</p>
			<p className='text-xs'>Select this option at checkout.</p>
			<h2 className='flex mt-5 text-xl'>
				Subtotal (2 items): <BiRupee className='mt-0.5' />
				<span className='font-semibold'>{cartItems.reduce((amount, item) => item.price + amount, 0)}</span>
			</h2>
			<div className='flex items-center'>
				<input className='mt-0.5 mr-2' type='checkbox' />
				<p>This order contains a gift</p>
			</div>
			<Link to='/checkout'>
				<button
					type='button'
					className='w-full p-2 m-auto mt-5 text-xs border border-yellow-300 rounded-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500'
				>
					Proceed to Checkout
				</button>
			</Link>
		</div>
	);
};

export default CartTotal;

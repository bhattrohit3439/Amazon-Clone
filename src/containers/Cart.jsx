import { CartItem, CartTotal } from '../components';
import { useGlobalContext } from '../Context';

const Cart = () => {
	const { cartItems } = useGlobalContext();

	return (
		<div className='p-5 lg:flex justify-evenly'>
			{/* left hand section */}
			<div>
				<img
					className='object-contain '
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/Header/Electronics_PC.gif'
					alt='electronic ads'
				/>
				{cartItems.length === 0 ? (
					<div className='items-center justify-start p-10 my-8 bg-white md:flex '>
						<img
							className='w-96'
							src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg'
							alt='empty illustration'
						/>
						<h1 className='px-10 text-2xl font-semibold'>Your Amazon Basket is empty </h1>
					</div>
				) : (
					<div className='p-5 my-8 bg-white '>
						<h1 className='relative flex justify-between w-full pb-5 text-3xl font-semibold border-b-2 border-gray-300 border-solid'>
							Shopping Cart
							<p className='absolute bottom-0 right-0 text-base font-normal text-gray-700 '>Price</p>
						</h1>

						{cartItems.map((cartItem) => (
							<CartItem cartItem={cartItem} key={cartItem.itemId} />
						))}
					</div>
				)}

				<p className='text-xs font-semibold '>
					The price and availability of items at Amazon.in are subject to change. The shopping cart is a
					temporary place to store a list of your items and reflects each item's most recent price. Do you
					have a promotional code? We'll ask you to enter your claim code when it's time to pay.
				</p>
			</div>

			{/* right hand section */}
			<CartTotal cartItems={cartItems} />
		</div>
	);
};

export default Cart;

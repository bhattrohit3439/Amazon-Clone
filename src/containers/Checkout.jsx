import { BiPound } from 'react-icons/bi';
import { useGlobalContext } from '../Context';

const FormFields = ({ id, text, type }) => {
	return (
		<div>
			<label htmlFor={id} className='block mb-2 text-gray-700'>
				{text}
			</label>
			<input
				type={type}
				id={id}
				className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none'
			/>
		</div>
	);
};

const Checkout = () => {
	const { cartItems } = useGlobalContext();

	return (
		<div className='max-w-6xl px-4 py-8 mx-auto '>
			<div className='flex flex-col md:flex-row'>
				{/* Left Column */}
				<div className='md:w-3/5 md:pr-8'>
					<div className='p-6 mb-6 bg-white rounded-lg shadow-md'>
						{/* Billing Address */}
						<div className='mb-6'>
							<h2 className='mb-4 text-xl font-semibold'>Billing Address</h2>
							{/* Billing Address Form */}
							<form>
								<div className='grid grid-cols-2 gap-4'>
									{/* Address */}
									<div className='col-span-2'>
										<label htmlFor='address' className='block mb-2 text-gray-700'>
											Address
										</label>
										<input
											type='text'
											id='address'
											className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none'
										/>
									</div>

									<FormFields id='city' text='City' type='text' />
									<FormFields id='state' text='State' type='text' />
									<FormFields id='zip' text='Zip' type='text' />
								</div>
								{/* Submit Button */}
								<button
									type='button'
									className='px-6 py-3 mt-6 text-xs border border-yellow-300 rounded-md md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500'
								>
									Continue
								</button>
							</form>
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className='md:w-2/5'>
					<div className='p-6 mb-6 bg-white rounded-lg shadow-md'>
						{/* Order Summary */}
						<h2 className='mb-4 text-xl font-semibold'>Order Summary</h2>

						{/* Item List */}
						<ul className='divide-y divide-gray-200'>
							<li className='pb-4'>
								<div className='flex justify-between'>
									<p>Items</p>
									<p className='flex'>
										<BiPound className='mt-[5px]' />
										{cartItems.reduce((amount, item) => item.price + amount, 0)}
									</p>
								</div>
								<div className='flex justify-between'>
									<p>Discount</p>
									<p className='flex'>
										<BiPound className='mt-[5px]' />
										<span>0</span>
									</p>
								</div>
								<div className='flex justify-between'>
									<p>Shipping & handling</p>
									<p className='flex'>
										<BiPound className='mt-[5px]' />
										<span>0</span>
									</p>
								</div>
							</li>
							<li>
								<div className='flex items-center justify-between mt-6'>
									<span className='font-semibold text-gray-700'>Total:</span>
									<span className='flex text-xl font-semibold'>
										<BiPound className='mt-[5px]' />
										{cartItems.reduce((amount, item) => item.price + amount, 0)}
									</span>
								</div>
							</li>
							{/* Add more items */}
						</ul>
						{/* Total */}

						{/* Proceed to Payment Button */}
						<button
							type='button'
							className='px-6 py-3 mt-6 text-xs border border-yellow-300 rounded-md md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500'
						>
							Proceed to Payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;

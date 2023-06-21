import { useState } from 'react';
import { useGlobalContext } from '../Context';
import { Link } from 'react-router-dom';
import {
	HiOutlineUser,
	HiOutlineMenu,
	HiOutlineShoppingCart,
	HiOutlineSearch,
	HiOutlineLocationMarker,
} from 'react-icons/hi';

const Header = ({ signOut, user }) => {
	const { cartItems } = useGlobalContext();
	const [popUp, setPopUp] = useState(false);

	return (
		<header>
			{/* Top Nav */}
			<div className='relative flex items-center bg-[#131921] text-white h-[60px] justify-between'>
				{/* Menu */}
				<HiOutlineMenu className='ml-4 sm:hidden w-7' />

				{/* Header Logo */}
				<Link to='/'>
					<div className='flex pr-2 cursor-pointer sm:pl-6 '>
						<img
							className='object-contain w-24 pt-2'
							src='https://www.pikpng.com/pngl/b/327-3272114_amazon-de-marketplace-amazon-logo-on-black-clipart.png'
							alt='amazon-logo'
						/>
						<span className='pt-1'>.in</span>
					</div>
				</Link>

				{/*  Header Address */}
				<div className='hidden px-2 cursor-pointer md:block'>
					<div className='pl-6 text-xs font-semibold text-gray-300'>Hello</div>
					<div className='flex'>
						<HiOutlineLocationMarker size={20} />
						<div className='font-bold'>Select your address</div>
					</div>
				</div>

				{/* Header Search */}
				<div className='cursor-pointer flex-grow mx-2 lg:mx-4 hidden h-10 overflow-hidden focus-within:ring-4 focus-within:ring-[#f08804] rounded-[4px] md:flex'>
					<input type='text' className='flex-grow w-10 px-1 text-black ' />

					<div className='w-12 h-10 flex items-center justify-center bg-[#febd69] hover:bg-[#f3a847]'>
						<HiOutlineSearch className='text-black' size={25} />
					</div>
				</div>

				{/* Header Nav Items */}
				<div className='flex'>
					{/* Account */}
					<div
						className='flex items-center px-2 cursor-pointer sm:block'
						onClick={() => (!popUp ? setPopUp(true) : setPopUp(false))}
					>
						<div className='text-xs font-semibold sm:hidden'>Sign</div>
						<div className='hidden text-xs font-semibold sm:block'>Hello, {user.name}</div>
						<HiOutlineUser className='sm:hidden h-9' />
						<div className='hidden font-bold sm:block'>Account & Lists</div>
					</div>

					{/* sign out pop up */}
					{popUp && (
						<div className='absolute z-30 p-3 mx-auto mt-3 mb-12 text-black bg-gray-100 border border-gray-300 border-solid rounded-md bottom-[-230px] shadow-md'>
							<div className='flex-shrink-0 block mb-5 group'>
								<div className='flex items-center'>
									<img
										className='inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full'
										src={user.photo}
										alt='user_image'
									/>
									<div class='ml-3 '>
										<h3 class='font-semibold text-gray-800 '>{user.name}</h3>
										<p class='text-sm font-medium text-gray-400'>{user.email}</p>
									</div>
								</div>
							</div>
							<h3 className='font-semibold'>Sign-Out here</h3>
							<button
								type='button'
								className='w-full p-2 my-2 text-xs border border-yellow-300 rounded-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500'
								onClick={signOut}
							>
								Log Out
							</button>
						</div>
					)}

					{/* Return & orders */}
					<div className='hidden px-2 cursor-pointer sm:block'>
						<div className='text-xs font-semibold'>Returns</div>
						<div className='font-bold'>& Orders</div>
					</div>

					{/* Cart */}
					<Link to='/cart'>
						<div className='relative pr-4 cursor-pointer sm:px-2'>
							<div className='flex items-end'>
								<HiOutlineShoppingCart size={38} />
								<span className='absolute flex items-center justify-center w-auto h-5 p-1 text-black bg-yellow-400 rounded-full right-3 -top-1 sm:right-8'>
									{cartItems.length}
								</span>
								<span className='hidden font-bold sm:block'>Cart</span>
							</div>
						</div>
					</Link>
				</div>
			</div>

			{/* seactch bar in mobile */}
			<div className='h-16 pt-2 sm:hidden bg-[#131921]'>
				<div className='h-10 cursor-pointer flex-grow mx-4   overflow-hidden rounded-[4px] flex'>
					<input type='text' className='flex-grow px-1 text-black ' />

					<div className='w-12 h-10 flex items-center justify-center bg-[#febd69] hover:bg-[#f3a847]'>
						<HiOutlineSearch className='h-6' />
					</div>
				</div>
			</div>

			{/* Bottom Nav */}
			<div className='flex items-end p-3 pt-0 space-x-3 text-sm font-semibold text-white bg-[#232f3e] sm:pl-6 sm:items-center sm:pt-3'>
				<div className='cursor-pointer sm:hidden'>
					<p className='text-xs'>Shop By</p>
					<p>Category</p>
				</div>
				<p className='items-center hidden cursor-pointer hover:ring-1 hover:ring-white sm:flex'>
					{/* Menu */}
					<HiOutlineMenu className='w-6' />
					All
				</p>
				<p className='cursor-pointer hover:ring-1 hover:ring-white'>Wish List</p>
				<p className='cursor-pointer hover:ring-1 hover:ring-white'>Deals</p>
				<p className='cursor-pointer hover:ring-1 hover:ring-white'>Sell</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white sm:inline-flex '>Amazon Pay</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white sm:inline-flex '>Best Sellers</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white sm:inline-flex '>Mobiles</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white sm:inline-flex '>Fashion</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white md:inline-flex '>Electronics</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white md:inline-flex '>New Releases</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white lg:inline-flex '>Customer Service</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white lg:inline-flex '>Computers</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white xl:inline-flex '>Home & Kitchen</p>
				<p className='hidden cursor-pointer hover:ring-1 hover:ring-white xl:inline-flex '>Toys & Games</p>
			</div>
		</header>
	);
};

export default Header;

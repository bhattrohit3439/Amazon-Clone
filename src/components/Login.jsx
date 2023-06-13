import { auth, provider } from '../firebase';
import { getAuth, signInWithPopup } from 'firebase/auth';

const Login = ({ setUser }) => {
	const signIn = async () => {
		try {
			await signInWithPopup(auth, provider);
			const user = getAuth().currentUser;
			let newUser = {
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
	return (
		<div className='flex flex-col justify-center w-full h-screen -mt-4'>
			<img
				className='object-contain w-32 pt-2 mx-auto my-3'
				src='https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?resize=768%2C219&ssl=1'
				alt='amazon-logo'
			/>

			<div className='p-12 mx-auto mt-3 mb-12 border border-gray-300 border-solid rounded-sm w-96'>
				<h3 className='my-3 text-3xl font-semibold'>Sign-In</h3>

				<button
					className='w-full p-2 my-3 text-xs border border-yellow-300 rounded-sm button md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500'
					onClick={signIn}
				>
					Continue with Google
				</button>

				<p className='my-2 text-xs font-semibold'>
					By continuing, you agree to Amazon's <span className='text-blue-500'>Conditions of Use</span> and{' '}
					<span className='text-blue-500'>Privacy Notice.</span>
				</p>
			</div>
		</div>
	);
};

export default Login;

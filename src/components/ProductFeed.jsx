import Product from './Product';

const ProductFeed = ({ products }) => {
	return (
		<div className='grid grid-flow-row-dense mx-auto -mt-8 md:-mt-40 lg:-mt-64 xl:mt-[-320px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{products.slice(0, 4).map(({ itemId, title, price, description, category, image }) => (
				<Product
					key={itemId}
					id={itemId}
					title={title}
					price={price}
					description={description}
					category={category}
					image={image}
				/>
			))}

			<img
				className='object-cover px-5 md:col-span-full'
				src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Prime_Day2021/Gif/New_1500X465.gif'
				alt=''
			/>

			<div className='md:col-span-2'>
				{products.slice(4, 5).map(({ itemId, title, price, description, category, image }) => (
					<Product
						key={itemId}
						id={itemId}
						title={title}
						price={price}
						description={description}
						category={category}
						image={image}
					/>
				))}
			</div>

			{products.slice(5, products.length).map(({ itemId, title, price, description, category, image }) => (
				<Product
					key={itemId}
					id={itemId}
					title={title}
					price={price}
					description={description}
					category={category}
					image={image}
				/>
			))}
		</div>
	);
};

export default ProductFeed;

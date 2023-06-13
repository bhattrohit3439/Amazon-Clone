import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const images = [
	{
		original:
			'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_Yeh-Meri-Family-S2_V11._CB588519479_.jpg',
	},
	{
		original:
			'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/mfd/unrec/upd/WA_ETH_3000._CB603102090_.jpg',
	},
	{
		original:
			'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg',
	},
	{
		original: 'https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg',
	},
];

const Banner = () => {
	return (
		<div className='relative'>
			<div className='absolute bottom-0 z-20 w-full h-64 bg-gradient-to-t from-[#e3e6e6] to-transparent' />

			<ImageGallery
				autoPlay={true}
				showPlayButton={false}
				showThumbnails={false}
				lazyLoad={true}
				items={images}
				showNav={false}
			/>
		</div>
	);
};

export default Banner;

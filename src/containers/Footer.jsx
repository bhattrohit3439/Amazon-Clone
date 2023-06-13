const FooterLinks = (props) => {
	return <li className='py-2 cursor-pointer hover:underline md:py-1'>{props.title}</li>;
};

const Footer = () => {
	return (
		<div>
			<div className='flex items-start justify-around py-10 font-semibold text-white mt-14 md:font-normal md:text-sm bg-[#131921]'>
				<div className=''>
					<h3 className='hidden text-base font-bold md:block'>Get to Know Us</h3>
					<ul>
						<FooterLinks title='About Us' />
						<FooterLinks title='Careers' />
						<FooterLinks title='Press Releases' />
						<FooterLinks title='Amazon Cares' />
						<FooterLinks title='Gift a Smile' />
					</ul>
				</div>

				<div>
					<h3 className='hidden text-base font-bold md:block'>Connect with Us</h3>
					<ul>
						<FooterLinks title='Facebook' />
						<FooterLinks title='Twitter' />
						<FooterLinks title='Instagram' />
					</ul>
				</div>

				<div className='hidden md:block'>
					<h3 className='hidden text-base font-bold md:block'>Make Money with Us</h3>
					<ul>
						<FooterLinks title='Sell on Amazon' />
						<FooterLinks title='Sell under Amazon Acceleator' />
						<FooterLinks title='Amazon Global Selling' />
						<FooterLinks title='Become an Affiliate' />
						<FooterLinks title='Fullfilment by Amazon' />
						<FooterLinks title='Advertise Your Products' />
					</ul>
				</div>
			</div>

			<div className='flex flex-wrap items-center justify-center p-6 text-sm text-white bg-[#232f3e]'>
				<p className='px-2 py-1'>Conditions of Use & Sale</p>
				<p className='px-2 py-1'>Privacy Notice</p>
				<p className='px-2 py-1'>Interest-Based Ads</p>
				<p className='px-2 py-1'>&#169;1996-2021,Amazon.com,Inc.or its affiliates</p>
			</div>
		</div>
	);
};

export default Footer;

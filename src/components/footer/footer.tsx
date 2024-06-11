import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-white'>
			<div className='container'>
				<div className='grid grid-flow-col auto-cols-fr py-24'>
					<div className=''>
						<Link href='/'>
							<Image
								width={120}
								height={40}
								src='/images/youcode-logo-light.svg'
								alt='Youcode'
							/>
						</Link>
						<ul className='mt-4 space-y-2 font-semibold'>
							<li>
								<Link href='#'>support@youcode.uz</Link>
							</li>
							<li>
								<Link href='#'>+998914245014</Link>
							</li>
						</ul>
					</div>
					<div className=''>
						<div className='flex flex-wrap'>
							<div className='grow'>
								<h4 className='font-semibold mb-2'>Home</h4>
								<ul className='space-y'>
									<li>
										<Link href=''>Our Courses</Link>
									</li>
									<li>
										<Link href=''>Our Testimonials</Link>
									</li>
								</ul>
							</div>
							<div className='grow'>
								<h4 className='font-semibold mb-2'>About Us</h4>
								<ul className='space-y'>
									<li>
										<Link href=''>Company</Link>
									</li>
									<li>
										<Link href=''>Achievements</Link>
									</li>
								</ul>
							</div>
							<div className='grow'>
								<h4 className='font-semibold mb-2'>Social Profiles</h4>
								<ul className='space-y'>
									<li>
										<Link href=''>Company</Link>
									</li>
									<li>
										<Link href=''>Achievements</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='text-center py-8 border-t font-semibold text-sm'>
					All Right Reserved
				</div>
			</div>
		</footer>
	)
}

export default Footer

import { Button } from '@nextui-org/react'

const Hero = () => {
	return (
		<section className='container mx-auto py-28'>
			<div className='flex flex-col gap-5 items-center'>
				<div className='flex items-center gap-4 bg-white w-fit p-4 rounded-md'>
					<Button
						isIconOnly
						color='primary'
						variant='flat'
						size='lg'
						className='animate-pulse'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='size-6'
						>
							<path
								fillRule='evenodd'
								d='M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z'
								clipRule='evenodd'
							/>
						</svg>
					</Button>

					<h1 className='text-5xl font-bold'>
						<span className='text-primary'>Unlock</span> Your Creative Patential
					</h1>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<h2 className='text-4xl font-medium'>
						with Online Design and Development Courses.
					</h2>
					<p className='text-xl'>
						Learn from Industry Experts and Enhance Your Skills.
					</p>
				</div>
				<div className='flex gap-4 mt-11'>
					<Button
						color='primary'
						size='lg'
					>
						Explore Courses
					</Button>
					<Button
						color='default'
						size='lg'
						className='bg-white'
					>
						View Pricing
					</Button>
				</div>
			</div>
		</section>
	)
}
export default Hero

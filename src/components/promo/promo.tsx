import { Button } from '@nextui-org/react'

const Promo = () => {
	return (
		<section
			id='promo'
			className='container py-24 px-10'
		>
			<div className='w-full aspect-video bg-gray-200 rounded-md grid place-items-center'>
				<Button
					isIconOnly
					color={'primary'}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='size-6'
					>
						<path
							fillRule='evenodd'
							d='M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z'
							clipRule='evenodd'
						/>
					</svg>
				</Button>
			</div>
		</section>
	)
}

export default Promo

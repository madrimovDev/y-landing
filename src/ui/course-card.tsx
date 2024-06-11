import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Image as Img
} from '@nextui-org/react'

const CourseCard = () => {
	return (
		<Card
			className='flex-col-reverse hover:shadow p-4'
			fullWidth
			shadow='none'
		>
			<CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
				<div className='flex justify-between w-full items-center gap-2 py-4'>
					<div className='flex gap-2'>
						<Button
							size='sm'
							variant='bordered'
						>
							120 min
						</Button>
						<Button
							size='sm'
							variant='bordered'
						>
							Beginner
						</Button>
					</div>
					<p>By John Smith</p>
				</div>
				<div className='py-4 w-full text-left'>
					<h4 className='font-semibold text-large'>Frontend Radio</h4>
					<p className='text-gray-600'>
						Learn the fundamentals of web design, including HTML, CSS, and
						responsive design principles. Develop the skills to create visually
						appealing and user-friendly websites.
					</p>
				</div>
				<div className='w-full py-4'>
					<Button
						className='w-full'
						size='lg'
						variant='flat'
						color='primary'
					>
						Get it Now
					</Button>
				</div>
			</CardHeader>
			<CardBody className='overflow-visible py-2'>
				<div className='w-full aspect-video'>
					<Img
						width={'100%'}
						alt='Card background'
						className='object-cover aspect-video w-full'
						src='/images/header-3.jpg'
					/>
				</div>
			</CardBody>
		</Card>
	)
}

export default CourseCard

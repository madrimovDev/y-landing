import { Button, Image } from '@nextui-org/react'
import NextImage from 'next/image'
import Link from 'next/link'

const Course = () => {
	return (
		<div className='bg-white p-12'>
			<div className='flex items-center gap-12'>
				<div>
					<h2 className='text-2xl font-semibold'>Web Design Fundamentals</h2>
					<p className='text-[18px] text-gray-600 mt-3'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
						laboriosam laborum nisi ut, velit voluptatibus? Ipsum iusto minus
						placeat similique vero. A, atque dignissimos magni natus quidem
						repellat tenetur unde.
					</p>
				</div>
				<div>
					<Button
						as={Link}
						href='/courses/title'
						className='bg-white'
						variant='bordered'
					>
						View Course
					</Button>
				</div>
			</div>
			<div className='grid grid-cols-3 gap-8 my-8'>
				<div className='w-full relative'>
					<Image
						removeWrapper
						as={NextImage}
						className='w-full object-cover aspect-[10/8]'
						src='/images/header-1.jpg'
						alt='Web Design Fundamentals'
						width={400}
						height={400}
					/>
				</div>
				<div className='w-full relative'>
					<Image
						removeWrapper
						as={NextImage}
						className='w-full object-cover aspect-[10/8]'
						src='/images/header-1.jpg'
						alt='Web Design Fundamentals'
						width={400}
						height={400}
					/>
				</div>
				<div className='w-full relative'>
					<Image
						removeWrapper
						as={NextImage}
						className='w-full object-cover aspect-[10/8]'
						src='/images/header-1.jpg'
						alt='Web Design Fundamentals'
						width={400}
						height={400}
					/>
				</div>
			</div>
			<div className='flex justify-between items-center'>
				<div className='flex gap-4'>
					<Button
						variant='bordered'
						size={'sm'}
					>
						120 min
					</Button>
					<Button
						variant='bordered'
						size={'sm'}
					>
						Beginner
					</Button>
				</div>
				<span>by John Smith</span>
			</div>
		</div>
	)
}

export default Course

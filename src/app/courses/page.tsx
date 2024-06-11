'use client'
import Course from '@/components/course/Course'
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input
} from '@nextui-org/react'

const Page = () => {
	return (
		<div className='container my-24'>
			<div className='grid grid-flow-col auto-cols-fr place-items-center gap-24 my-24'>
				<h1 className='text-5xl font-semibold leading-normal w-full'>
					Our Courses on Design and Development
				</h1>
				<p>
					Welcome to our online course page, where you can enhance your skills
					in design and development. Choose from our carefully curated selection
					of 10 courses designed to provide you with comprehensive knowledge and
					practical experience. Explore the courses below and find the perfect
					fit for your learning journey.
				</p>
			</div>
			<div className='flex gap-2 items-center my-12'>
				<Input
					type='text'
					placeholder='Search'
					variant='bordered'
					size='lg'
					isClearable
					labelPlacement='outside'
					autoComplete='off'
					classNames={{
						input: 'border-none'
					}}
				/>
				<div className='flex gap-2'>
					<Button
						variant='flat'
						color='primary'
						isIconOnly
						size='lg'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
							/>
						</svg>
					</Button>
					<Dropdown>
						<DropdownTrigger>
							<Button
								isIconOnly
								size='lg'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
									/>
								</svg>
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label='Static Actions'>
							<DropdownItem key='new'>New file</DropdownItem>
							<DropdownItem key='copy'>Copy link</DropdownItem>
							<DropdownItem key='edit'>Edit file</DropdownItem>
							<DropdownItem
								key='delete'
								className='text-danger'
								color='danger'
							>
								Delete file
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
			<div className='space-y-12'>
				<Course />
				<Course />
			</div>
		</div>
	)
}

export default Page

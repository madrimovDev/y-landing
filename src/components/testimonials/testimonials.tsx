import { Button } from '@nextui-org/react'
import Testimonial from '@/ui/testimonial'

const Testimonials = () => {
	return (
		<div className='container py-14'>
			<div className='flex items-end justify-between gap-4'>
				<div className='w-4/6'>
					<h3 className='text-5xl font-semibold leading-normal'>
						Our Testimonials
					</h3>
					<p className='text-[18px] text-gray-600'>
						Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
						elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
						eget habitasse in velit fringilla feugiat senectus in.
					</p>
				</div>
				<Button className='bg-white'>See All</Button>
			</div>
			<div className='grid grid-cols-2 gap-8 mt-20'>
				{Array.from({ length: 4 }).map((_, i) => {
					return <Testimonial key={i} />
				})}
			</div>
		</div>
	)
}

export default Testimonials

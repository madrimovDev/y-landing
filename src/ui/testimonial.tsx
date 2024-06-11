import { User } from '@nextui-org/react'

const Testimonial = () => {
	return (
		<div className='bg-white rounded-md h-full'>
			<div className='px-8 py-8'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque
					eligendi est expedita explicabo hic ipsam minima molestias natus, odio
					optio perspiciatis rem repellendus repudiandae ullam ut velit
					voluptate. Officiis.
				</p>
			</div>
			<div className='px-8 py-8 bg-gray-50 border-t'>
				<div>
					<User
						name='John Smith'
						description='Backend'
					/>
				</div>
			</div>
		</div>
	)
}

export default Testimonial

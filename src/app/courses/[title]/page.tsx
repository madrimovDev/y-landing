// interface Props {
// 	params: {
// 		title: string
// 	}
// }

const Page = () => {
	return (
		<div className='container my-24'>
			<div className='grid grid-flow-col auto-cols-fr place-items-center gap-24 my-24'>
				<h1 className='text-5xl font-semibold leading-normal w-full'>
					Frontend Development
				</h1>
				<p>
					Welcome to our UI/UX Design course! This comprehensive program will
					equip you with the knowledge and skills to create exceptional user
					interfaces (UI) and enhance user experiences (UX). Dive into the world
					of design thinking, wireframing, prototyping, and usability testing.
					Below is an overview of the curriculum
				</p>
			</div>
			<div>
				<div className='w-full aspect-video bg-gray-200 rounded-md' />
			</div>
		</div>
	)
}

export default Page

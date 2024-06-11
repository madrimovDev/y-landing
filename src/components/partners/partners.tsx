const Partners = () => {
	return (
		<div className='container mx-auto'>
			<div className='flex flex-wrap divide-x p-4 bg-white  rounded-md'>
				{Array.from({ length: 5 }).map((_, i) => {
					return (
						<div
							key={i}
							className='grow basis-32 grid place-items-center h-28 hover:scale-110 transition-all cursor-pointer'
						>
							{i + 1} Partner
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Partners

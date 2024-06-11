import { useEffect } from 'react'

const useOverflowControl = (isOpen: boolean) => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const originalOverflow = document.documentElement.style.overflow

			if (isOpen) {
				document.documentElement.style.overflow = 'hidden'
			}

			return () => {
				document.documentElement.style.overflow = originalOverflow
			}
		}
	}, [isOpen])
}

export default useOverflowControl

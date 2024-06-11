import { useEffect, useState } from 'react'

// eslint-disable-next-line no-unused-vars
type VisibilityCallback = (isVisible: boolean) => void

const useElementVisibility = (
	targetId: string,
	callback?: VisibilityCallback
) => {
	const [isVisible, setIsVisible] = useState<boolean>(true)

	useEffect(() => {
		const handleScroll = () => {
			const target = document.getElementById(targetId)

			if (target && target.getBoundingClientRect().top < 0) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}

			// Invoke the callback with the visibility status
			if (typeof callback === 'function') {
				callback(isVisible)
			}
		}

		document.addEventListener('scroll', handleScroll)

		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [targetId, callback, isVisible])

	return isVisible
}

export default useElementVisibility
